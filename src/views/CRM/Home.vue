<template>
    <div class="ustun" ref="el" style="user-select: none;">
      <span v-if="left" class="up left" @mouseover="scrollLeft('in')" @mouseout="scrollLeft('exit')">
        <span class="box">
          <i>
              <ChevronLeftSharp />
          </i>
        </span>
      </span>
      <span v-if="right" class="up right" @mouseover="scrollRight('in')" @mouseout="scrollRight('exit')">
        <span class="box">
          <i>
            <ChevronRightSharp />
          </i>
        </span>
      </span>
      <div class="content" id="scrollBar" :style="AllStaus.length == 0 ? 'min-width: 100%;':''">
        
        <div class="col" v-for="(item, index) in AllStaus" :key="index" :id="item.id" style="border: 1px solid #dcdcdc;">
          <div class="head">
            <button>{{item.name}}</button>
            <span class="update" @click="updateStatus(item)"><n-icon color="#fff" size="15">
                <PencilSharp />
            </n-icon></span>
            <span class="added" @click="StatusModal"><n-icon color="#fff" size="18">
                <AddCircle />
            </n-icon></span>
          </div>
          <div style="border: 1px solid #dcdcdc; border-radius: 6px; margin: 2px;">
            <div class="summa_all">
            0 so'm
          </div>
          <div @click="OpenFastAdd(item.id)" class="addColumn">
            +
          </div>
          
          </div>
          <div class="cardBox">
            <div class="addfast" :id="'add' + item.id">
              <addNew 
                :holati="'fast'" 
                :status="item.id" 
                @closeAdd="removeNewCallList(item.id)"
                >
              </addNew>
            </div>
            <Card 
              :id="item.id" 
              :data="card_data" 
              @startinfo="alslsdasdasd"
              @someEvent="openModal"
            >
            </Card>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Status Create -->
    <n-modal
        v-model:show="showModal"
        class="custom-card"
        preset="card"
        style="width: 600px"
        title="Status qo'shish"
      >
      <form>
        <div class="form-row">
          <input type="text" required v-model="newStatus">
          <span>Yangi status yaratish</span>
        </div>
        <button type="button" @click="send">Saqlash va Yopish</button>
      </form>
    </n-modal>
    <!-- Status Update -->
    <n-modal
        v-model:show="updateModal"
        class="custom-card"
        preset="card"
        style="width: 600px"
        title="Status o'zgartirish"
      >
      <form>
        <div class="form-row">
          <input type="text" required v-model="newUpdate">
          <span>Yangi status yaratish</span>
        </div>
        <button type="button" @click="updateSts">Saqlash va Yopish</button>
      </form>
    </n-modal>
  </template>
  
  <script setup>
    // import {UserAvatarFilled, ChevronLeft , ChevronRight , Phone , Email , AddComment} from '@vicons/carbon'
    // import { ChevronLeft24Filled, ChevronRight24Filled } from '@vicons/fluent'
    import { PencilSharp, AddCircle } from '@vicons/ionicons5'
    import {ChevronLeftSharp, ChevronRightSharp} from '@vicons/material'
    import { ref, onMounted , defineEmits} from 'vue'
    import { useScroll } from '@vueuse/core'
    import { Container, Draggable } from "vue3-smooth-dnd"
    // import Empty  from "../../components/Empty/Empty.vue"
    // import Loader  from "../../components/Loader/Loader.vue"
    import addNew  from "../../components/Add/Add.vue"
    // import callAll from '../../services/order.services'
    import Card from './Card.vue'
    // import allStatus from '../../services/status.services'
    // import Socket from '../../socket.io/services'
    const emits = defineEmits(['someEvent'])
    const el = ref(null)
    const { x , y } = useScroll(el);
    const stm = ref(null)
    const right = ref(true)
    const left = ref(true)
    const call_list = ref([])
    const AllStaus = ref([
        {
            id: 1,
            name: "All Staus",
        },
        {
            id: 2,
            name: "All Staus",
        }
    ])
    const card_data = ref({})
    const showModal = ref(false)
    const updateModal = ref(false)
    const newStatus = ref(null)
    const newUpdate = ref(null)
    const loader = ref(false)
    const updatedId = ref(null);
    const color = ref(['primary','info','success','warning','error'])
    const loaderUstun = ref(true)
    const colorMania = () =>{
      let index = Math.round(Math.random() * color.value.length - 1)
      return color.value[index]
    }
    const alslsdasdasd = (data)=>{
      card_data.value = data
    }
    const scrollRight = (txt) => {
      if(txt == 'in'){
        stm.value = setInterval(() => {
          x.value += 10
        }, 10);
      } else{
        clearInterval(stm.value)
      }
    }
  
    const scrollLeft = (txt)=>{
      if(txt == 'in'){
        stm.value = setInterval(() => {
          x.value -= 10
        }, 10);
      } else{
        clearInterval(stm.value)
      }
    }
    // add new column call list
    const OpenFastAdd = (id)=>{
      const AddBox = document.getElementById('add'+id).classList.toggle('active')
    }
    const removeNewCallList = (id) =>{
      const AddBox = document.getElementById('add'+id).classList.remove('active')
    }
    // onMounted(()=>{
    //   allStatus.getAll().then(res=>{
    //     if(res.success){
    //       AllStaus.value = res.data
    //       loaderUstun.value = false
    //     }
    //   })
    // })
    const openModal = (id)=>{
      emits('someEvent', id)
    }
    // New Status add
    const StatusModal = () => {
      showModal.value = true
    }
  
  
    const send = () => {
      Socket.socket.emit('createStatus', {name: newStatus.value})
      loader.value = true
      newStatus.value = ''
      showModal.value = false
    }
    // Socket.socket.on('newStatus', (data) => {
    //   if(data.id == localStorage.getItem('id')){
    //     AllStaus.value.push(data.model)
    //     loader.value = false
    //   }
    // })
  
    // Update Status
    const updateStatus = (item) => {
      updatedId.value = item.id;
      newUpdate.value = item.name;
      updateModal.value = true
    }
  
    const updateSts = () => {
      Socket.socket.emit('updateStatus', {id: updatedId.value, name: newUpdate.value})
      loader.value = true
      updateModal.value = false
    }
    // Socket.socket.on('newUpdateStatus', (data) => {
    //   if(data.id == localStorage.getItem('id')){
    //     let index = AllStaus.value.findIndex((val) => val.id == data.model.id)
    //     AllStaus.value[index] = data.model;
    //     loader.value = false
    //   }
    // })
  
  
  </script>
  
  <style scoped lang="scss">
    .ustun{
      width: 100%;
      height: calc(100vh - 100px);
      background-color: var(--background-color);
      padding: 10px;
      border-radius: 3px;
      overflow-x: scroll;
      .up{
        position: absolute;
        top: 0;
        width: 35px;
        height: 100%;
        opacity: 0;
        z-index: 9;
        .box{
          position: relative;
          top: 50%;
          // background: var(--background-color);
          width: 80px;
          height: 100px;
          display: block;
          pointer-events: none;
          i{
            svg{
              // color: #fff;
            }
            animation: animate .5s linear infinite;
          }
        }
      }
      .up.left{
        left: 0;
        border: 1px solid #dcdcdc;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        background: #dcdcdc30;
        .box{
          border-radius: 0% 50% 50% 0%;
          i{
            position: relative;
            top: 10px;
            left: -25px;
          }
        }
      }
      .up.right{
        right: 0;
        border: 1px solid #dcdcdc;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        background: #dcdcdc30;
        .box{
          transform: translateX(-40%);
          border-radius: 50% 0 0 50%;
          i{
            position: relative;
            top: 10px;
            left: 10px;
          }
        }
      }
      .content{
        width: max-content;
        display: flex;
        gap: 10px;
        height: 100%;
        position: relative;
        .col{
          width: 250px;
          height: 100%;
          position: relative;
          background-color: var(--background-color);
          .head{
            position: relative;
            padding: 5px 3px 5px 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #18A058;
            z-index: 10;
            color: #fff;
            cursor: pointer;
            button{
              width: 100%;
              color: #fff;
              border: none;
              outline: none;
              background-color: transparent;
              font-size: 14px;
              text-align: left !important;
            }
            .added{
              position: absolute;
              right: 3px;
              opacity: 0;
              visibility: hidden;
            }
            .update{
              position: absolute;
              right: 25px;
              opacity: 0;
              visibility: hidden;
            }
            &:hover{
              .added, .update{
                transition: all 0.3s;
                opacity: 1;
                visibility: visible;
              }
            }
          }
          .addColumn{
            &:hover{
              opacity: .5;
            }
            &:active{
              opacity: 1;
            }
          }
          
          .cardBox{
            overflow-y: scroll;
            min-height: calc(100% - 120px);
            height: calc(100% - 120px);
            .addfast{
              transform: scale(.9);
              height: 0;
              transition: all .3s;
              transform-origin: top;
              opacity: 0;
              background: #fff;
              padding: 0px;
              border-radius: 10px;
              width: calc(100% - 5px);
              margin: 0px auto;
              overflow: hidden;
            }
            .addfast.active{
              height: 230px;
              border: 1px solid #dcdcdc;
              transform: scale(1);
              opacity: 1;
              padding: 10px;
              margin: 5px auto;
            }
            .nameBox{
              min-height: 100%;
              height: max-content;
            }
            .card{
              position: relative;
              width: calc(100% - 5px);
              margin: 5px 2.5px;
              overflow: hidden;
              &::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 3px;
                height: 100%;
                background-color: var(--clr);
                z-index: 1;
              }
              .items{
                display: flex;
                flex-direction: column;
                position: relative;
                padding: 10px 5px;
                .item{
                  display: grid;
                  grid-template-columns: 90% 10%;
                  .info{
                    display: flex;
                    flex-direction: column;
                    .number{
                      margin: 5px;
                      font-size: 13px;
                      font-weight: 500;
                      // display: flex;
                      // flex-direction: column;
                      span{
                        color: #333;
                        letter-spacing: .3px;
                        transition: all .05s;
                      }
                      cursor: pointer;
                      &:hover{
                        span{
                          letter-spacing: .5px;
                          color: #0d6efd;
                        }
                      }
                    }
                    .dates , .status{
                      font-size: 12px;
                      color: #8e8e8e;
                      margin: 0 5px;
                    }
                    .user{
                      display: flex;
                      gap: 5px;
                      align-items: flex-end;
                      margin: 5px 5px;
                      span{
                        font-size: 12px;
                        a{
                          text-decoration: none;
                        }
                        svg{
                          transform: scale(1.5);
                        }
                      }
                    }
                    .span{
                      display: flex;
                      flex-direction: column;
                      margin: 2.5px 5px;
                      font-size: 12px;
                      .head{
                        color: #8e8e8e;
                      }
                      .body{
                        color: #000;
                        font-weight: 600;
                      }
                    }
                    .client{
                      display: flex;
                      flex-direction: column;
                      font-size: 14px;
                      margin: 5px 0;
                      .head{
                        display: flex;
                        justify-content: start;
                        align-items: center;
                        gap: 10px;
                        color: #8e8e8e;
                        font-size: 12px;
                        font-weight: 600;
                        span{
                          &:last-child{
                            transform: translateY(2px)translateX(2px);
                          }
                        }
                        svg{
                          height: 22px;
                          font-size: 22px;
                        }
                      }
                      .body{
                        margin: 2.5px 5px;
                        font-size: 15px;
                        font-weight: 500;
                        color: #000;
                      }
                    }
                  }
                  .icons{
                    display: flex;
                    flex-direction: column;
                    padding: 5px 0;
                    .count_call {
                      background: #8e8e8e;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      border-radius: 10px;
                      color: #fff;
                      font-size: 13px;
                      margin-bottom: 5px;
                    }
                    .message, .email {
                      color: #8e8e8e;
                      cursor: pointer;
                      margin-bottom: 5px;
                    }
                  }
                }
                .item_footer{
                  display: flex;
                  justify-content: space-between;
                  margin: 10px 5px 0 5px;
                  .add_delo{
                    font-size: 13px;
                    font-weight: 500;
                    cursor: pointer;
                    &:hover{
                      color: #0d6efd;
                    }
                  }
                  .date{
                    font-size: 13px;
                    color: #000;
                    font-weight: 500;
                  }
                }
              }
            }
          }
          .cardBox::-webkit-scrollbar{
            display: none;
          }
        }
      }
      .up:hover{
        opacity: 1;
      }
    }
    .ustun::-webkit-scrollbar{
      height: 10px;
      background: none;
    }
    .ustun::-webkit-scrollbar-thumb{
      background: var(--background-color);
      border-radius: 5px;
    }
    .addColumn{
      display: flex; 
      justify-content: 
      center; align-items: center; 
      cursor: pointer; 
      // color: #fff; 
      font-size: 22px; 
      background: var(--background-color);
    }
    .summa_all{
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 50px; 
      // color: #fff; 
      font-size: 22px;
    }
    @keyframes animate{
      0%{
        opacity: .5;
      }
      50%{
        opacity: 1;
      }
      100%{
        opacity: .5;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin: 10px 0;
      & > .form-row {
          display: flex;
          // margin: 10px;
          position: relative;
          
          & > span { 
              background: #fff;
              color: #adafca;
              display: inline-block;
              font-weight: 400;
              left: 1em;
              padding: 0 .5em;
              position: absolute;
              pointer-events: none;
              transform: translatey(-50%);
              top: 50%;
              transition: all 300ms ease;
              user-select: none;
          }
          
          & > input,
          & > button {
              border-radius: .5em;
              font-family: inherit;
              padding: 10px;
              width: 100%;
          }
          
          & > input {
              font-weight: bold;
              transition: 100ms ease all;
              width: 100%;
          
              &[type=text],
              &[type=password] {
                  border: .075em solid #ddd;
              }
              
              &:valid {
                  & + span {
                      top: 0;
                      font-size: .90rem;
                  }
              }
              
              &:invalid {
                  & + span {
                      top: 50%;
                  }
              }
              
              &:focus {
                  & + span {
                      top: 0;
                  }
              }
              
              &:required {
                  box-shadow: none;
              }
              
              &:focus {
                  border-color: #7b5dfa;
                  outline: none;
                  &:invalid {
                      box-shadow: none;
                      top: 50%;
                  }
                  &:valid {
                      top :0;
                  }
              }
          }
          
          
          
      }
      button {
        background: linear-gradient(135deg, #0c3eb4, #4470d8, #4470d8, #b4707d, #b06774);
        border: .10em solid darken(#7b5dfa, 10);
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        transition: all 300ms ease;
        border-radius: 5px;
        padding: 10px;
    
        &:focus {
          outline: none;
        }
        
        &:hover {
          border: .10em solid darken(#7b5dfa, 10);
          background-color: darken(#7b5dfa, 5);
        }
      }
    }
  
  </style>