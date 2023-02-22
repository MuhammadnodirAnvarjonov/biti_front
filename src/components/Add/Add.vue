<template>
  <div class="ADD box">
    <!-- <Empty /> -->
    <n-form-item label="F.I.SH">
      <n-input v-model:value="sarlavha" :onUpdate:value="dataAllemit"/>
    </n-form-item>
    <!-- <n-form-item label="Summa">
      <n-input placeholder="Sarlvha #" v-model:value="sarlavha" :onUpdate:value="dataAllemit"/>
    </n-form-item> -->
    <!-- <n-form-item label="Mijoz"> -->
      <!-- <div class="box" style="border: 1px solid rgb(224, 224, 230); width: 100%; padding: 20px; border-radius: 3px;"> -->
        <n-form-item label="Yo'nalish">
          <n-select
            filterable
            placeholder="Yo'nalish"
            :options="kompaniyaList"
            v-model:value="kompaniya"
            label-field="name"
            value-field="id"
            clearable
            :onUpdate:value="dataAllemit"
          >
            <template #empty>
              <div>
                <n-empty description="Malumotlar yo'q">
                  
                </n-empty>
                <div style="height: 10px;"></div>
                <n-button dashed type="primary" @click="companyAdd" >Yo'nalish qo'shish</n-button>
              </div>
            </template>
          </n-select>
        </n-form-item>
        <!-- <n-form-item label="Kontakt">
          <n-select
            :options="kontaktList"
            :render-label="renderLabel"
            :render-tag="renderSingleSelectTag"
            filterable
            label-field="phone_number"
            value-field="id"
            placeholder="Kontakt #"
            clearable
            v-model:value="kontakt"
            :onUpdate:value="dataAllemit"
          >
            <template #empty>
              <div>
                <n-empty description="Malumotlar yo'q">
                  
                </n-empty>
                <div style="height: 10px;"></div>
                <n-button dashed type="primary" @click="kontaktAdd()" >Kontakt qo'shish</n-button>
              </div>
            </template>
          </n-select>
        </n-form-item> -->
      <!-- </div> -->
    <!-- </n-form-item> -->
    <div class="select" v-if="holati != 'fast'">
      <n-form-item label="Region">
        <n-select
          filterable
          placeholder="Region #"
          :options="regionList"
          v-model:value="region"
          label-field="name"
          value-field="id"
          clearable
          :onUpdate:value="dataAllemit"
        >
        <template #empty>
          <div>
            <n-empty description="Malumotlar yo'q">
              
            </n-empty>
            <div style="height: 10px;"></div>
            <n-button dashed type="primary" @click="regionAdd" >Region qo'shish</n-button>
          </div>
        </template>
      </n-select>
      </n-form-item>
      <n-form-item label="Faoliyati">
        <n-select
          filterable
          placeholder="Faoliyati #"
          :options="faoliyatiList"
          v-model:value="faoliyati"
          label-field="name"
          value-field="id"
          clearable
          :onUpdate:value="dataAllemit"
        >
        <template #empty>
          <div>
            <n-empty description="Malumotlar yo'q">
              
            </n-empty>
            <div style="height: 10px;"></div>
            <n-button dashed type="primary" @click="activityAdd" >Faoliyat qo'shish</n-button>
          </div>
        </template>
        </n-select>
      </n-form-item>
      <n-form-item label="Qayerdan keldi">
        <n-select
          filterable
          placeholder="Qayerdan keldi #"
          :options="qayerdanList"
          v-model:value="qayerdan"
          label-field="name"
          value-field="id"
          clearable
          :onUpdate:value="dataAllemit"
        >
          <template #empty>
            <div>
              <n-empty description="Malumotlar yo'q">
                
              </n-empty>
              <div style="height: 10px;"></div>
              <n-button dashed type="primary" @click="sourceAdd" >Manba qo'shish</n-button>
            </div>
          </template>
        </n-select>
      </n-form-item>
      <n-form-item label="Dastur">
        <n-select
          filterable
          placeholder="Dastur #"
          :options="dasturList"
          v-model:value="dastur"
          label-field="name"
          value-field="id"
          clearable
          :onUpdate:value="dataAllemit"
        >
        <template #empty>
            <div>
              <n-empty description="Malumotlar yo'q">
                
              </n-empty>
              <div style="height: 10px;"></div>
              <n-button dashed type="primary" @click="programAdd" >Dastur qo'shish</n-button>
            </div>
          </template>
        </n-select>
      </n-form-item>
      <div class="commet">
        <p style="">Izoh</p>
        <n-input placeholder="Izoh #" style="height: 200px;" type="textarea" v-model:value="comment" :onUpdate:value="dataAllemit" />
      </div>
    </div>
    <div v-if="holati == 'fast'" class="close_save" style="position: sticky; bottom: -15px; display: flex;
    justify-content: center; gap: 10px;margin-top: 15px;
     padding: 15px; background: #fff; z-index: 9999999; border-top: 1px solid rgb(224, 224, 230);">
      <n-button type="primary" @click="AddList">
        Saqlash
      </n-button>
      <n-button type="error" @click="$emit('closeAdd')">
        Bekor qilish
      </n-button>
    </div>
  </div>
  <div></div>

  <!-- Company -->
  <n-modal
      v-model:show="updateModal"
      class="custom-card"
      preset="card"
      style="width: 600px"
      title="Kompaniya yaratish"
    >
    <form>
      <div class="form-row">
        <input type="text" required v-model="newCompany">
        <span>Kompaniya nomi</span>
      </div>
      <div class="form-row">
        <input type="text" required v-model="companyNumber">
        <span>Tel raqami</span>
      </div>
      <button type="button" @click="creatCompany">Saqlash va Yopish</button>
    </form>
  </n-modal>
  <!-- Kontakt -->
  <n-modal
      v-model:show="kontaktModal"
      class="custom-card"
      preset="card"
      style="width: 600px"
      title="Kontakt yaratish"
    >
    <form>
      <div class="form-row">
        <input type="text" required v-model="clientName">
        <span>Klient ismi</span>
      </div>
      <div class="form-row">
        <input type="text" required v-model="clientNumber">
        <span>Klient raqami</span>
      </div>
      <button type="button" @click="creatKontakt">Saqlash va Yopish</button>
    </form>
  </n-modal>
  <!-- Region -->
  <n-modal
      v-model:show="regionModal"
      class="custom-card"
      preset="card"
      style="width: 600px"
      title="Region yaratish"
    >
    <form>
      <div class="form-row">
        <input type="text" required v-model="regionName">
        <span>Region nomi</span>
      </div>
  
      <button type="button" @click="creatRegion">Saqlash va Yopish</button>
    </form>
  </n-modal>
  <!-- Activity -->
  <n-modal
      v-model:show="activityModal"
      class="custom-card"
      preset="card"
      style="width: 600px"
      title="Faoliyat yaratish"
    >
    <form>
      <div class="form-row">
        <input type="text" required v-model="activityName">
        <span>Faoliyat nomi</span>
      </div>
  
      <button type="button" @click="creatActivity">Saqlash va Yopish</button>
    </form>
  </n-modal>
  <!-- Source -->
  <n-modal
      v-model:show="sourceModal"
      class="custom-card"
      preset="card"
      style="width: 600px"
      title="Manba yaratish"
    >
    <form>
      <div class="form-row">
        <input type="text" required v-model="sourceName">
        <span>Manba nomi</span>
      </div>
  
      <button type="button" @click="creatSource">Saqlash va Yopish</button>
    </form>
  </n-modal>
  <!-- Program -->
  <n-modal
      v-model:show="programModal"
      class="custom-card"
      preset="card"
      style="width: 600px"
      title="Dastur qo'shish"
    >
    <form>
      <div class="form-row">
        <input type="text" required v-model="programName">
        <span>Dastur nomi</span>
      </div>
  
      <button type="button" @click="creatProgram">Saqlash va Yopish</button>
    </form>
  </n-modal>

</template>


<script>
import { h } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
// import ServicesRegion from '../../services/region.services'
import Empty from '../Empty/Empty.vue'
// import ServicesActivity from '../../services/activity.services'
// import ServicesProgram from '../../services/programm.services'
// import ServicesCompany from '../../services/kompaniya.services'
// import ServicesClient from '../../services/clients.services'
// import ServicesQayerdan from '../../services/source.serviced'
// import Order from '../../services/order.services'
import Socket from '../../socketio/services';
import { useNotification } from 'naive-ui'
// import slc from './selectDouble.vue'
import axios from 'axios';
import { Alert } from '@vicons/ionicons5';
export default {
  emits: ['closeAdd', 'dataFahter'],
  props: ['holati' , 'status',  'AllData', 'id'],
  data() {
    return {
      updateModal: false,
      newCompany: null,
      companyNumber: null,
      kontaktModal: false,
      clientName: null,
      clientNumber: null,
      regionModal: false,
      regionName: null,
      activityModal: false,
      activityName: null,
      sourceModal: false,
      sourceName: null,
      programModal: false,
      programName: null,
      ids: null,
      comment: '',
      sarlavha: null,
      summa: null,
      kompaniya: null,
      region: null,
      kontakt: null,
      faoliyati: null,
      qayerdan: null,
      dastur: null,
      kompaniyaList: [],
      kontaktList: [],
      regionList: [],
      faoliyatiList: [],
      qayerdanList: [],
      dasturList: [],
      Notification: useNotification(),
      status_id: null,
      numberic: null
    }
  },
  methods: {
    AddList(){
      console.log("salom")
      Socket.socket("hello", "salom")
      // Socket.socket.emit('orderCreate', {
      //   phone_number: this.sarlavha,
      //   status_id: this.status,
      //   company_id: this.kompaniya,
      //   client_id: this.kontakt
      // });
    },
    AllInfo(){
      // if(this.id){
      //   Order.getOne(this.id).then(res=>{
      //     if(res.success){
      //       this.ids = res.data.id
      //       this.sarlavha = res.data.phone_number
      //       this.summa = res.data.summa
      //       this.kompaniya = res.data.company_id
      //       this.kontakt = res.data.client_id
      //       this.region = res.data.region_id
      //       this.faoliyati = res.data.activity_id
      //       this.qayerdan = res.data.source_id
      //       this.dastur = res.data.program_id
      //       this.comment = res.data.comment
      //       this.status_id = res.data.status_id
      //       this.dataAllemit()
      //     }
      //   })
      // }
    },
    dataAllemit(){
      this.$emit('dataFahter', {
        id: this.ids,
        phone_number: this.sarlavha,
        summa: this.summa,
        company_id: this.kompaniya,
        client_id: this.kontakt,
        region_id: this.region,
        activity_id :this.faoliyati,
        source_id: this.qayerdan,
        program_id: this.dastur,
        comment: this.comment,
        status_id: this.status_id
      })
    },
    renderSingleSelectTag({ option }){
      return h(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center"
          }
        },
        [
          option.phone_number
        ]
      );
    },
    renderLabel(option) {
      return h(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center"
          }
        },
        [
          h(
            "div",
            {
              style: {
                marginLeft: "12px",
                padding: "4px 0"
              }
            },
            [
              h("div", null, [option.phone_number]),
              h("div", null, [option.fullname]
              )
            ]
          )
        ]
      );
    },

    // Company Added
    companyAdd(){
      this.updateModal = true;
    },
    creatCompany(){
      if(this.newCompany != null && this.companyNumber != null){
        axios.post('/company/create', {
          name: this.newCompany,
          phone_number: this.companyNumber
        }).then(res => {
          if(res.success) {
            this.kompaniya = res.data.id
            this.getCompony()
          }
        })
      }else {
        alert("Ma'lumotlarni to'liq kiriting!")
      }

      this.newCompany = null,
      this.companyNumber = null,
      this.updateModal = false
    },
    getCompony(){
      axios.get('/company/all' ).then(res=>{
        if(res.success){
          this.kompaniyaList = res.data
        }
      })
    },

    //Kontakt Added
    kontaktAdd(){
      this.kontaktModal = true
    },
    creatKontakt(){
      if(this.clientName != null && this.clientNumber != null){
        axios.post('/client/create', {
          fullname: this.clientName,
          phone_number: this.clientNumber
        }).then(res => {
          if(res.success){
            this.kontakt = res.data.id;
            this.grtKontakt()
          }
        })
      }else {
        alert("Ma'lumotlarni to'liq kiriting!")
      }

      this.clientName = null,
      this.clientNumber = null,
      this.kontaktModal = false
    },
    grtKontakt(){
      axios.get('/client/all').then(res=>{
        if(res.success){
          this.kontaktList = res.data
        }
      })
    },

    //Region Added
    regionAdd(){
      this.regionModal = true
    },
    creatRegion(){
      // if(this.regionName != null){
      //   ServicesRegion.create({
      //     name: this.regionName
      //   }).then(res => {
      //     if(res.success){
      //       this.region = res.data.id;
      //       ServicesRegion.getAll().then(res=>{
      //         if(res.success){
      //           this.regionList = res.data
      //         }
      //       })
      //     }
      //   })
      // }else{
      //   alert("Ma'lumotlarni to'liq kiriting!")
      // }

      this.regionName = null,
      this.regionModal = false
    },

    //Activity Added
    activityAdd(){
      this.activityModal = true
    },
    creatActivity(){
      // if(this.activityName != null){
      //   ServicesActivity.create({
      //     name: this.activityName
      //   }).then(res => {
      //     if(res.success){
      //       this.faoliyati = res.data.id;
      //       console.log(this.faoliyati);
      //       ServicesActivity.getAll().then(res=>{
      //         if(res.success){
      //           this.faoliyatiList = res.data
      //         }
      //       })
      //     }
      //   })
      // }else{
      //   alert("Ma'lumotlarni to'liq kiriting!")
      // }

      this.activityName = null,
      this.activityModal = false
    },

    //Source Added
    sourceAdd(){
      this.sourceModal = true
    },
    creatSource(){
      // if(this.sourceName != null){
      //   ServicesQayerdan.create({
      //     name: this.sourceName
      //   }).then(res => {
      //     if(res.success){
      //       this.qayerdan = res.data.id;
      //       ServicesQayerdan.getAll().then(res=>{
      //         if(res.success){
      //           this.qayerdanList = res.data
      //         }
      //       })
      //     }
      //   })
      // }else{
      //   alert("Ma'lumotlarni to'liq kiriting!")
      // }

      this.sourceName = null
      this.sourceModal = false
    },

    //Program Added
    programAdd(){
      this.programModal = true
    },
    creatProgram(){
      // if(this.programName != null){
      //   ServicesProgram.create({
      //     name: this.programName
      //   }).then(res => {
      //     if(res.success){
      //       this.dastur = res.data.id;
      //       ServicesProgram.getAll().then(res=>{
      //         if(res.success){
      //           this.dasturList = res.data
      //         }
      //       })
      //     }
      //   })
      // }else{
      //   alert("Ma'lumotlarni to'liq kiriting!")
      // }

      this.programName = null
      this.programModal = false
    },
  },

  created() {
    // Socket.socket.on('newOrder', (data) => {
    //   this.$emit('closeAdd')
    // })
  },
  mounted() {
    // ServicesRegion.getAll().then(res=>{
    //   if(res.success){
    //     this.regionList = res.data
    //   }
    // })

    // ServicesActivity.getAll().then(res=>{
    //   if(res.success){
    //     this.faoliyatiList = res.data
    //   }
    // })

    // ServicesProgram.getAll().then(res=>{
    //   if(res.success){
    //     this.dasturList = res.data
    //   }
    // })

    this.getCompony()
    this.grtKontakt()
    // ServicesClient.getAll().then(res=>{
    //   if(res.success){
    //     this.kontaktList = res.data
    //   }
    // })

    // ServicesQayerdan.getAll().then(res=>{
    //   if(res.success){
    //     this.qayerdanList = res.data
    //   }
    // });
    this.AllInfo()
  },
  components: {QuillEditor, Empty},
}
</script>

<style lang="scss" scoped>
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