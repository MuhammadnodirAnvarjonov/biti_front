<template>
      <div>
        <n-card class="cardTable">
          <div class="hompage">
            <div class="boxes" v-for="(item, index) in Data" :key="index">
              <div>
                <div class="content-icon">
                  <img :src="item.img" alt="">
                </div>
                <div class="footer-text">
                  <span>{{ item.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </n-card>
    </div>
</template>

<script setup>
// import { MarkEmailUnreadOutlined } from "@vicons/material"
import message from '../../assets/img/message.png'
import oshxona from '../../assets/img/oshxona.png'
import student from '../../assets/img/talaba.jpg'
import qaydlar from '../../assets/img/qaydlar.jpg'
import kalendar from '../../assets/img/kalendar.jpg'
import fanlar from '../../assets/img/fanlar.png'
import tadbir from '../../assets/img/tadbir.png'
import sozlamalar from '../../assets/img/sozlamalar.png'
import {ref, onMounted} from "vue"
import axios from "axios"

const Datas = ref([]);
const getData = () => {
  axios.get("/kafedra/all").then((res) => {
    if (res) {
      Datas.value = res.data;
    }
  });
 }
onMounted(() => {
  getData();
})

const Data = ref([
  {
    img: message,
    name: "xatlar",
    key: ""
  },
  {
    img: oshxona,
    name: "Oshxona",
    key: ""
  },
  {
    img: student,
    name: "Biti Hemis",
    key: ""
  },
  {
    img: qaydlar,
    name: "Qaydlar",
    key: ""
  },
  {
    img: kalendar,
    name: "Akademik kalendar",
    key: ""
  },
  {
    img: fanlar,
    name: "Mening fanlarim",
    key: ""
  },
  {
    img: tadbir,
    name: "Biti tadbirlar",
    key: ""
  },
  {
    img: sozlamalar,
    name: "Sozlamalar",
    key: ""
  }
]) 
</script>

<style lang="scss" >
.hompage{
  width: 90%;
  margin: 0 auto;
  // padding: 10px;
  // border: 1px solid  #ccc;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
}
.boxes {
  width: 22%;
  height: 248px;
  margin: 0px 10px 20px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  text-align: center;
  transition: all 0.3s;
  &:hover{
    box-shadow: -5px 5px 20px -5px #ccc;
    margin-top: -5px;
  }
  .content-icon{
    position: relative;
    text-align: center;
    // border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    // height: 130px;
    // width: 130px;
    &::before{
      content: '';
      position: absolute;
      bottom: -20px;
      left: 25%;
      width: 50%;
      height: 7px;
      background: rgba(0, 0, 0, 0.445);
      border-radius: 50%;
      z-index: 0;
      filter: blur(5px);
      pointer-events: none;
      transition: .4s ease;
    }
    img {
      // border: 1px solid red;
      // border: 1px solid #ccc;
      height: 130px;
      width: 130px;
      border-radius: 50%;
      transition: .4s ease;
      // border: 2px solid #ccc;
      // box-shadow: 0px 10px 0px red;
    }
    &:hover{
      img {
        transform: translateY(-7px);
        // border: none;
      }
      &::before{
        left: 35.5%;
        height: 5px;
        width: 30%;
      }
    }
    
  }
  .footer-text{
    padding-top: 30px;
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
  }
}

</style>