<template>
    <Container 
      group-name="bitriks"
      class="nameBox" 
      @drag-start="handleDragStart(list, $event)" 
      @drop="handleDrop(list, $event, props.data)"
      :get-child-payload="getChildPayload"
      :drop-placeholder="upperDropPlaceholderOptions"
      orientation="vertical"
      >
      <Draggable v-for="(item, index) in list" :key="index">
        <div class="card" ref="cards" @dblclick="$emit('someEvent', item.id)">
          <div class="items">
            <div class="item">
              <div class="info">
                <div class="number">
                  <span>{{ item.phone_number }}</span>
                </div>
                <div class="dates">{{ new Date(item.datetime * 1000).getDate() +" "+ month[new Date(item.datetime * 1000).getMonth()]  }}</div>
                <!-- <div class="status">{{ item.comment }}</div> -->
                <div class="user">
                  <span>
                    <n-icon>
                      <UserAvatarFilled />
                    </n-icon>
                  </span>
                  <span>
                    <router-link to="#">{{ item.operator}}</router-link>
                  </span>
                </div>
                <div class="span" v-if="item.source_name">
                  <span class="head">Manba</span>
                  <span class="body">{{item.source_name}}</span>
                </div>
                <div class="span" v-if="item.region_name">
                  <span class="head">Region</span>
                  <span class="body">{{item.region_name}}</span>
                </div>
                <div class="span" v-if="item.activity_name">
                  <span class="head">Faoliyati</span>
                  <span class="body">{{item.activity_name}}</span>
                </div>
                <div class="client" v-if="item.client_name">
                  <div class="head">
                    <span>
                      <n-icon>
                        <UserAvatarFilled />
                      </n-icon>
                    </span>
                    <span>
                      To'liq ism
                    </span>
                  </div>
                  <div class="body">
                    {{item.client_name}}
                  </div>
                </div>
              </div>
              <div class="icons">
                <span class="count_call">0</span>
                <n-tooltip placement="bottom" trigger="hover">
                  <template #trigger>
                    <span class="email"><Email /></span>
                  </template>
                  <span>Email yoq</span>
                </n-tooltip>
                <n-tooltip placement="bottom" trigger="hover">
                  <template #trigger>
                    <span class="message"><AddComment /></span>
                  </template>
                  <span>Chat mavjud emas</span>
                </n-tooltip>
              </div>
            </div>
            <div class="item_footer">
              <div class="add_delo">
                + Biznes
              </div>
              <div class="date">
                {{ vaqt(item.datetime) }}
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </Container>
  </template>
  <script setup>
    import { Container, Draggable } from "vue3-smooth-dnd"
    import {UserAvatarFilled, ChevronLeft , ChevronRight , Phone , Email , AddComment} from '@vicons/carbon'
    import { onMounted , ref, defineProps, defineEmits } from 'vue';
    // import AllOrder from '../../services/order.services'
    // import Loader from '../../components/Loader/Loader.vue'
    import Socket  from '../../sokcet/main'
    const list = ref([
        {
            id: 1,
            phone_number: '+998916544327',
            datetime: 12365412,
            operator: 'Snakks',
            source_name: 'pposjasb',
            region_name: 'ddasadasdas',
            activity_name: 'sadas'
        }
    ])
    const cards = ref(null)
    const props = defineProps(['id', 'data'])
    const emits = defineEmits(['startinfo', 'endinfo', 'someEvent'])
    const month = ref(['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr', 'Dekabr'])
    const draggingCard = ref({lane: '',index: -1, cardData: {}, cardID: 0,})
    const upperDropPlaceholderOptions = ref({
          className: 'cards-drop-preview',
          animationDuration: '150',
          showOnTop: true
        })
    const handleDragStart = (lane,dragResult)=>{
      console.log(lane,dragResult)
      const { payload, isSource } = dragResult
      if(isSource){
        draggingCard.value = {
          lane,
          index: payload.index,
          cardID: lane[payload.index].id,
          cardData: {
            ...lane[payload.index]
          },
        }
        emits(`startinfo`, draggingCard.value)
      }
    }
    const handleDrop = (lane, dragResult, info)=>{
      const {removedIndex, addedIndex} = dragResult
      if(lane == draggingCard.value.lane && removedIndex == addedIndex){
        return
      }
      if(removedIndex !== null){
        emits('startinfo', draggingCard.value.cardData)
        Socket.socket.emit('orderSplice', draggingCard.value.cardID )
      }
      if(addedIndex !== null){
        info.cardData.status_id = props.id
        info.cardData.branch_id = localStorage.getItem('branch_id')
        Socket.socket.emit('orderUpdate', info.cardData )
      }
    }
    const getChildPayload = (index)=>{
      return {index}
    }
    // onMounted(()=>{
    //   // AllOrder.getAll(props.id,list.value.length).then((res)=>{
    //   //   list.value = res.data
    //   //   console.log(list.value);
    //   // })
    //   AllOrder.getOrderById(props.id,list.value.length).then(res => {
    //       list.value = res.data
    //     // console.log(list.value);
    //   })
    // })
    
    const vaqt = (list)=>{
        if(list){
          let son = new Date().getTime() / 1000 - list
          if(son / 60 < 60){
            return Math.floor(son / 60) + ' minut'
          }
          else if(son / 3600 < 24){
            return Math.floor(son / 3600) + ' soat'
          }
          else if(son / 3600 / 24 < 7){
            return Math.floor(son / 3600 / 24) + ' kun'
          }
          else if(son / 3600 / 24 / 7 <= 4){
            return Math.floor(son / 3600 / 24 / 7) + ' hafta'
          }
          else{
            return new Date(list * 1000).getDate() +" " + month.value[new Date(list * 1000).getMonth() - 1] + ' ' + new Date(list).getHours() + ' : '+ new Date(list).getMinutes()
          }
        }
  
    }
  
    Socket.socket.on('newOrder', (data) => {
      console.log(data)
      if(data.id == localStorage.getItem('id')){
        if(props.id == data.datas.status_id){
          list.value.unshift(data.datas)
        }
      }
    })
    Socket.socket.on('newUpdate', (data) => {
      if(props.id == data.status_id){
        list.value.unshift(data)
      }
    })
    Socket.socket.on('newSplice', (data) => {
      for(let i = 0; i < list.value.length; i++) {
        if(list.value[i].id == data){
          list.value.splice(i, 1)
        }
      }
    })
  </script>
  <style scoped lang="scss">
  .card{
    position: relative;
    width: calc(100% - 5px);
    margin: 5px 2.5px;
    border:1px solid #dadada;
    border-radius: 5px;
    overflow: hidden;
    // animation: animateAdd .25s linear;
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
  @keyframes animateAdd {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  </style>