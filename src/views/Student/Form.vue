<template>
  <div class="talabaparent">
    <div class="createheader">
      <span>Talaba qo'shish</span>
      <!-- <div>
                <n-button size="large" type="error">
                    <n-icon size="25">
                        <CloseCircleSharp/>
                    </n-icon>
                </n-button>
            </div> -->
      <!-- {{ Data }} -->
    </div>
    <div class="classinputlart">
      <!-- <n-form
        class="classinputlar"
        ref="formRef"
        :label-width="80"
        :model="Data"
        :rules="rules"
        size="large"
        :show-feedback="false"
        :show-label="false"
      > -->
      <div style="display: flex; justify-content: space-between">
        <div style="width: 49%">
          <div style="display: flex; justify-content: space-between">
            <div style="width: 49%">
              <label>F.I.SH.</label>
                <n-input
                type="text"
                v-model:value="Data.fullname"
                clearable
                size="large"
                placeholder="F.I.SH ni kiriting"
              />
            </div>
            <div style="width: 49%">
              <label>Jinsi</label> <br />
              <n-radio
                :checked="Data.genred == 'Erkak'"
                value="Erkak"
                name="basic-demo"
                @change="handleChange"
              >
                Erkak
              </n-radio>
              <n-radio
                :checked="Data.genred == 'Ayol'"
                value="Ayol"
                name="basic-demo"
                @change="handleChange"
              >
                Ayol
              </n-radio>
            </div>
          </div>
          
          <div style="display: flex; justify-content: space-between">
            <div style="width: 49%">
              <label>Talaba ID</label>
              <n-input-number
                v-model:value="Data.student_id"
                clearable
                size="large"
                placeholder="ID ni kiriting"
                :show-button="false"  
              >
              </n-input-number>
            </div>
            <div style="width: 49%">
              <label>Viloyati</label>
              <n-select
                v-model:value="Data.region_id"
                :options="region_idData"
                :onUpdate:value="getRegion"
                size="large"
                label-field="name"
                value-field="id"
                filterable
                clearable
              />
            </div>
          </div>
          <div style="display: flex; justify-content: space-between">
            <div style="width: 49%">
              <label>Tug’ilgan sana</label>
              <n-date-picker
                clearable
                size="large"
                v-model:value="Data.birthday"
                type="date"
                placeholder="Yil-oy-kun"
              />
            </div>
            <div style="width: 49%">
              <label>Tumani</label>
              <n-select
                v-model:value="Data.district_id"
                :options="district_idData"
                size="large"
                label-field="name"
                value-field="id"
                filterable
                clearable
              />
            </div>
          </div>
          <div style="display: flex; justify-content: space-between">
            <div class="nuqtabtns" style="width: 49%">
              <label>Fakultet</label>
              <button @click="(showModal = true), (keyword = 'college_id'), college_id(keyword)">
                ...
              </button>
              <n-select
                v-model:value="Data.college_id"
                :options="college_idData"
                size="large"
                label-field="name"
                value-field="id"
                filterable
                clearable
              />
            </div>
            <div class="nuqtabtns" style="width: 49%">
              <label>Yo'nalishi</label>
              <button @click="(showModal = true), (keyword = 'direction_id'), direction_id(keyword)">
                ...
              </button>
              <n-select
                v-model:value="Data.direction_id"
                :options="direction_idData"
                size="large"
                label-field="name"
                value-field="id"
                filterable
                clearable
              />
            </div>
          </div>
          <div
            style="width: 100%; display: flex; justify-content: space-between"
          >
            <div style="width: 49%">
              <div class="nuqtabtns">
                <label>Kurs</label>
                <button @click="(showModal = true), (keyword = 'course_id'), course_id(keyword)">
                  ...
                </button>
                <n-select
                  v-model:value="Data.course_id"
                  size="large"
                  :options="course_idData"
                  label-field="name"
                  value-field="id"
                  filterable
                  clearable
                />
              </div>
            </div>
            <div class="nuqtabtns" style="width: 49%">
              <label>Guruh</label>
              <button @click="(showModal = true), (keyword = 'group_id'), group_id(keyword)">
                ...
              </button>
              <n-select
                v-model:value="Data.group_id"
                size="large"
                :options="group_idData"
                label-field="name"
                value-field="id"
                filterable
                clearable
              />
            </div>
          </div>
          <div style="display: flex; justify-content: space-between">
            <div style="width: 49%">
              <div class="nuqtabtns">
                <label>Guruh rahbari</label>
                <button
                  @click="(showModal = true), (keyword = 'group_leader_id'), group_leader_id(keyword)">
                  ...
                </button>
                <n-select
                  v-model:value="Data.group_leader_id"
                  size="large"
                  :options="group_leader_idData"
                  label-field="fullname"
                  value-field="id"
                  filterable
                  clearable
                />
              </div>
            </div>
            <div class="nuqtabtns" style="width: 49%">
              <label>Ilmiy rahbari</label>
              <button
                @click="(showModal = true), (keyword = 'scientific_leader_id'), scientific_leader_id(keyword)"
              >
                ...
              </button>
              <n-select
                v-model:value="Data.scientific_leader_id"
                size="large"
                :options="scientific_leader_idData"
                label-field="fullname"
                value-field="id"
                filterable
                clearable
              />
            </div>
          </div>
        </div>
        <div style="width: 49%">
          <div class="displayupload">
            <div style="width: calc(100% - 140px)">
              <div class="nuqtabtns">
                <label>Millati</label>
                <button
                  @click="(showModal = true), (keyword = 'nationality_id'), nationality_id(keyword)"
                >
                  ...
                </button>
                <n-select
                  v-model:value="Data.nationality_id"
                  size="large"
                  :options="nationality_idData"
                  label-field="name"
                  value-field="id"
                  filterable
                  clearable
                />
              </div>
              <div class="nuqtabtns">
                <label>Ma’lumoti</label>
                <button
                  @click="(showModal = true), (keyword = 'information_id'), information_id(keyword)"
                >
                  ...
                </button>
                <n-select
                  v-model:value="Data.information_id"
                  size="large"
                  :options="information_idData"
                  label-field="name"
                  value-field="id"
                  filterable
                  clearable
                />
              </div>

              <div class="nuqtabtns">
                <label>Oilaviy ahvoli</label>
                <button
                  @click="(showModal = true), (keyword = 'family_status_id'), family_status_id(keyword)"
                >
                  ...
                </button>
                <n-select
                  v-model:value="Data.family_status_id"
                  size="large"
                  :options="family_status_idData"
                  label-field="name"
                  value-field="id"
                  filterable
                  clearable
                />
              </div>
            </div>
            <div style="width: 122px">
              <label>Rasm</label> <br />
              <!-- <div class="rasmmodal">
                <img src="" alt="">
              </div> -->
              <n-avatar
                :src="Data.img"
                class="avatar-img"
                :fallback-src="imgdefould"
               />
              <n-upload
                class="upload-img"
                v-model:file-list="fileList"
                list-type="image-card"
                :max="1"
              />
              <!-- <n-modal
                v-model:show="showModal"
                preset="card"
                style="width: 600px"
              >
                <img :src="previewImageUrl" style="width: 100%">
              </n-modal> -->
              <!-- <div @click="$refs.files.click()" class="rasmmodal">
                <div style="width: 150px; height: 200px">
                  <AddPhotoAlternateOutlined />
                </div>
              </div>
              <input
                type="file"
                style="display: none"
                id="files"
                ref="files"
                name="href"
                class="my-0"
              /> -->
            </div>
          </div>
          <div style="display: flex; justify-content: space-between">
            <div style="width: 49%" class="nuqtabtn">
              <label>Qaysi dasturlarda ishlay oladi</label>
              <button
                class="nuqtalar"
                @click="(showModal = true), (keyword = 'programm'), programms(keyword)"
              >
                ...
              </button>
              <n-select
                size="large"
                :options="programmData"
                :onUpdate:value="programmChange"
                label-field="name"
                value-field="id"
                filterable
                clearable
              />
              <div class="tabelsmassiv">
                <n-table
                  striped
                >
                  <tbody>
                    <tr v-for="(item, index) in Data.programm" :key="index">
                      <td style="width: 30px">{{ index + 1 }}</td>
                      <td>{{ item.programm.name }}</td>
                      <td style="width: 30px">
                        <n-button
                          @click="deleteprogramms(index)"
                          tertiary
                          circle
                          type="error"
                          style="border: 1px solid #f93a3a"
                        >
                          <n-icon size="15">
                            <RestoreFromTrashOutlined />
                          </n-icon>
                        </n-button>
                      </td>
                    </tr>
                  </tbody>
                </n-table>
              </div>
            </div>
            <div style="width: 49%" class="nuqtabtn">
              <label>Qaysi chet tilini biladi</label>
              <button
                class="nuqtalar"
                @click="(showModal = true), (keyword = 'languages'), languages(keyword)"
              >
                ...
              </button>
              <n-select
                size="large"
                :options="languagesData"
                :onUpdate:value="languagesChange"
                label-field="name"
                value-field="id"
                filterable
                clearable
              />
              <div class="tabelsmassiv">
                <n-table
                  striped
                >
                  <tbody>
                    <tr v-for="(item, index) in Data.languages" :key="index">
                      <td style="width: 30px">{{ index + 1 }}</td>
                      <td>{{ item.language.name }}</td>
                      <td style="width: 30px">
                        <n-button
                          @click="deletelanguages(index)"
                          tertiary
                          circle
                          type="error"
                          style="border: 1px solid #f93a3a"
                        >
                          <n-icon size="15">
                            <RestoreFromTrashOutlined />
                          </n-icon>
                        </n-button>
                      </td>
                    </tr>
                  </tbody>
                </n-table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="jadval-korish"> -->
        <!-- <div class="korish">
          <n-button @click="korsat" type="success">
            <n-icon size="25">
              <AddRound />
            </n-icon>
          </n-button>
          <span v-if="!korsatish">Ko'rsatish</span>
        </div> -->
        <n-collapse style="margin-top: 15px;">
          <n-collapse-item title="Ko'rsatish" name="1">
            <div class="jadval">
              <div style="width: 100%; display: flex; justify-content: space-between">
                <div class="nuqtabtn" style="width: 32%">
                  <label>To’garaklarga a’zoligi</label>
                  <button
                    class="nuqtalar"
                    @click="(showModal = true), (keyword = 'Circle'), Circle(keyword)"
                  >
                    ...
                  </button>
                  <n-select
                    size="large"
                    :options="CircleData"
                    :onUpdate:value="CircleChange"
                    label-field="name"
                    value-field="id"
                    filterable
                    clearable
                  />
                  <div class="tabelsmassiv">
                    <n-table
                      striped
                    >
                      <tbody>
                        <tr v-for="(item, index) in Data.Circle" :key="index">
                          <td style="width: 30px">{{ index + 1 }}</td>
                          <td>{{ item.togaraklar.name }}</td>
                          <td style="width: 30px">
                            <n-button
                              @click="deletedata(index)"
                              tertiary
                              circle
                              type="error"
                              style="border: 1px solid #f93a3a; margin-right: 10px"
                            >
                              <n-icon size="15">
                                <RestoreFromTrashOutlined />
                              </n-icon>
                            </n-button>
                          </td>
                        </tr>
                      </tbody>
                    </n-table>
                  </div>
                </div>
                <div class="nuqtabtn" style="width: 32%">
                  <label>Bo'nuslari</label>
                  <button
                    class="nuqtalar"
                    @click="(showModal = true), (keyword = 'bonus_student'), bonus_students(keyword)"
                  >
                    ...
                  </button>
                  <n-select
                    size="large"
                    :options="bonus_studentData"
                    :onUpdate:value="bonus_studentChange"
                    label-field="name"
                    value-field="id"
                    filterable
                    clearable
                  />
                  <div class="tabelsmassiv">
                    <n-table
                      striped
                    >
                      <tbody>
                        <tr v-for="(item, index) in Data.bonus_student" :key="index">
                          <td style="width: 30px">{{ index + 1 }}</td>
                          <td>{{ item.bonus_student.name }}</td>
                          <td style="width: 30px">
                            <n-button
                              @click="deletebonus_student(index)"
                              tertiary
                              circle
                              type="error"
                              style="border: 1px solid #f93a3a; margin-right: 10px"
                            >
                              <n-icon size="15">
                                <RestoreFromTrashOutlined />
                              </n-icon>
                            </n-button>
                          </td>
                        </tr>
                      </tbody>
                    </n-table>
                  </div>
                </div>
                <!-- </div>
                      <div style="width: 49%; display: flex; justify-content: space-between;"> -->
                <div class="nuqtabtn" style="width: 32%">
                  <label>Jazolari</label>
                  <button
                    class="nuqtalar"
                    @click="(showModal = true), (keyword = 'punishment'), student_punishment(keyword)"
                  >
                    ...
                  </button>
                  <n-select
                    size="large"
                    :options="student_punishmentData"
                    :onUpdate:value="student_punishmentChange"
                    label-field="name"
                    value-field="id"
                    filterable
                    clearable
                  />
                  <div class="tabelsmassiv">
                    <n-table
                      striped
                    >
                      <tbody>
                        <tr v-for="(item, index) in Data.student_punishment" :key="index">
                          <td style="width: 30px">{{ index + 1 }}</td>
                          <td>{{ item.punishment.name }}</td>
                          <td style="width: 30px">
                            <n-button
                              @click="deletestudent_punishment(index)"
                              tertiary
                              circle
                              type="error"
                              style="border: 1px solid #f93a3a; margin-right: 10px"
                            >
                              <n-icon size="15">
                                <RestoreFromTrashOutlined />
                              </n-icon>
                            </n-button>
                          </td>
                        </tr>
                      </tbody>
                    </n-table>
                  </div>
                </div>
                <!-- <div class="nuqtabtn" style="width: 49%;">
                          <label>Chegirmasi</label>
                          <button class="nuqtalar" @click="showModal = true">...</button>
                          <n-select size="large" />
                      </div> -->
              </div>
            </div>
          </n-collapse-item>
        </n-collapse>
        
      <!-- </div> -->
      <n-modal
        v-model:show="showModal" 
        preset="card"
        style="width: 1200px"
        title="Ro'yxat"
        :bordered="true"
      >
        <!-- <n-card
          style="width: 1000px;"
          title="Ro'yxat"
          role="dialog"
          :aria-modal="true"
          closable
          @close="(showModal = false)"
        > -->
          <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <n-button color="#c63131" size="large" ghost @click="keyword == 'group_leader_id' || keyword == 'scientific_leader_id' ? (showModalCreateTeacher = true) : (showModalCreate = true)">
              <n-icon size="30">
                <AddCircleSharp />
              </n-icon>
            </n-button>
            <div class="btninputs">
              <n-input-group>
                <n-input size="large" />
                <n-button size="large" type="error"> Tozalash </n-button>
              </n-input-group>
            </div>
          </div>
          <div class="DataTable">
            <n-space vertical >
              <n-table
                striped
              >
                <thead>
                  <tr>
                    <th class="tableThLeftRadius" style="width: 10px">№</th>
                    <th class="tableThRightRadius">Nomi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="tableTR" v-for="(item, index) in DataTable" :key="index" @click="resData(keyword, item)">
                    <td class="tableTdLeftRadius">{{ 1 + index }}</td>
                    <td class="tableTdRightRadius" v-if="keyword == 'group_leader_id' || keyword == 'scientific_leader_id'">{{ item.fullname }}</td>
                    <td class="tableTdRightRadius" v-else>{{ item.name }}</td>
                  </tr>
                </tbody>
              </n-table>
            </n-space>
          </div>
          
          <!-- <n-data-table
            :columns="createColumns"
            size="large"
            :striped="true"
            :data="DataTable"
            :pagination="pagination"
            :max-height="350"
            :row-props="rowData(e)"
            :bordered="true"
          /> -->
        <!-- </n-card> -->
      </n-modal>
      <n-modal v-model:show="showModalCreateTeacher">
        <n-card
          style="width: 1400px"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
          closable
          @close="showModalCreateTeacher = false"
        > 
            <!-- <div v-if="keyword == 'group_leader_id' "> -->
              <Guruxrahbar @teacher="resData" />
            <!-- </div> -->
            <!-- <div v-else-if="keyword == 'scientific_leader_id'">
              <Ilmiyrahbar @ilmiyrahbar="resData" />
            </div> -->
          
        </n-card>
      </n-modal>
      <n-modal v-model:show="showModalCreate">
          <n-card
            style="width: 600px"
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true"
            closable
            @close="showModalCreate = false"
          >
            <div v-if="keyword == 'group_id'">
              <Guruh @guruh="resData" />
            </div>
            <div v-else-if="keyword == 'college_id'">
              <Fakultet @fakultet="resData" />
            </div>
            <div v-else-if="keyword == 'course_id'">
              <Kurs @kurs="resData" />
            </div>
            
            
            <div v-else-if="keyword == 'information_id'">
              <Malumoti @malumoti="resData" />
            </div>
            <div v-else-if="keyword == 'nationality_id'">
              <Millati @millati="resData" />
            </div>
            <div v-else-if="keyword == 'family_status_id'">
              <Oilaviyahvoli @oilaviyahvoli="resData" />
            </div>
            <div v-else-if="keyword == 'Circle'">
              <Togaraklar @togaraklar="resData" />
            </div>
            <div v-else-if="keyword == 'bonus_student'">
              <Bunustalaba @bonustalaba="resData" />
            </div>
            <div v-else-if="keyword == 'punishment'">
              <Jarimalar @jarimalar="resData" />
            </div>
            <div v-else-if="keyword == 'programm'">
              <Dasturlar @dastur="resData" />
            </div>
            <div v-else-if="keyword == 'languages'">
              <Til @til="resData" />
            </div>
            <div v-else-if="keyword == 'direction_id'">
              <Yonalish @yonalish="resData" />
            </div>
          </n-card>
        </n-modal>
      <div class="saqlashbtn">
        <n-button @click="ortga" size="large"> 
          <!-- <n-icon>
            <PlaylistAddCheckCircleRound />
          </n-icon> -->
          Ortga </n-button>
        <n-button size="large" type="error" @click="clear">
          <!-- <n-icon>
            <PlaylistAddCheckCircleRound />
          </n-icon> -->
          Tozalash </n-button>
        <n-button @click="createData" size="large" type="success">
          <!-- <n-icon size="30">
            <PlaylistAddCheckCircleRound />
          </n-icon> -->
          Saqlash
        </n-button>
      </div>
    <!-- </n-form> -->
    </div>
  </div>
</template>

<script setup>
import Fakultet from "../Fakultet/Form.vue";
import Kurs from "../Kursi/Form.vue";
import Guruh from "../Group/Form.vue";
import Guruxrahbar from "../Teacher/Form.vue";
import Ilmiyrahbar from "../IlmiyRahbar/Form.vue";
import Malumoti from "../Malumot/Form.vue";
import Millati from "../Millati/Form.vue";
import Oilaviyahvoli from "../OilaviyAhvoli/Form.vue";
import Togaraklar from "../Togarak/Form.vue";
import Bunustalaba from "../BonusStudent/Form.vue";
import Dasturlar from "../DasturlardaIshlashi/Form.vue";
import Til from "../Tillar/Form.vue";
import Yonalish from "../Yonalish/Form.vue";
import Jarimalar from "../Jarimalar/Form.vue";
import { h, ref, onMounted, inject } from "vue";
import imgdefould from "../../assets/img/personUSer.jpg"
// import imgperson from "../../assets/img/person";
import { CloseCircleSharp, AddCircleSharp } from "@vicons/ionicons5";
import { useMessage } from "naive-ui";

import {
  AddPhotoAlternateOutlined,
  RestoreFromTrashOutlined,
  CloseTwotone,
  PlaylistAddCheckCircleRound,
  AddRound
} from "@vicons/material";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
const route = useRoute();
const router = useRouter();
const showModal = ref(false);
const showModalCreateTeacher = ref(false);
const showModalCreate = ref(false);
const keyword = ref(null);
const BASE_URL = inject('BASE_URL');
// import {NIicon} from "naive-ui"
const korsatish = ref(false);
const korsat = () => {
  if(korsatish.value == false){
    korsatish.value = true;
  } else {
    korsatish.value = false;
  }
}
// validatsiya start
const formRef = ref(null);
const message = useMessage();
const rules = ref({
  Data: {
    fullname:{
      required: true,
      message: "Please input your name",
      trigger: "blur"
    }
  }
})
// validatsiya end
const Data = ref({
  fullname: "",
  student_id: null,
  region_id: null,
  district_id: null,
  genred: "",
  img: "",
  birthday: null,
  course_id: null,
  group_id: null,
  direction_id: null,
  college_id: null,
  nationality_id: null,
  scientific_leader_id: null,
  group_leader_id: null,
  information_id: null,
  family_status_id: null,
  languages: [],
  programm: [],
  no_incentives: 0,
  student_punishment: [],
  Circle: [],
  bonus_student: [],
});
// const showModalRef = ref(false)
const previewImageUrlRef = ref('') 
const fileList = ref([])

const previewFileList = ref([])
const createData = () => {
  let resdata = {};
  let href = null;
  let formData = new FormData();
  formData.append("img", fileList.value.length == 0 ? "" : fileList.value[0].file );
  formData.append("fullname", Data.value.fullname);
  formData.append("student_id", Data.value.student_id);
  formData.append("region_id", Data.value.region_id);
  formData.append("district_id", Data.value.district_id);
  formData.append("genred", Data.value.genred);
  formData.append("birthday", Data.value.birthday / 1000);
  formData.append("course_id", Data.value.course_id);
  formData.append("group_id", Data.value.group_id);
  formData.append("college_id", Data.value.college_id);
  formData.append("nationality_id", Data.value.nationality_id);
  formData.append("scientific_leader_id", Data.value.scientific_leader_id);
  formData.append("group_leader_id", Data.value.group_leader_id);
  formData.append("information_id", Data.value.information_id);
  formData.append("family_status_id", Data.value.family_status_id);
  formData.append("languages", JSON.stringify(Data.value.languages));
  formData.append("programm", JSON.stringify(Data.value.programm));
  formData.append("no_incentives", Data.value.no_incentives);
  formData.append("direction_id", Data.value.direction_id);
  formData.append("student_punishment", JSON.stringify(Data.value.student_punishment));
  formData.append("Circle", JSON.stringify(Data.value.Circle));
  formData.append("bonus_student", JSON.stringify(Data.value.bonus_student));

  if (route.name == "Talaba qo'shish") {
    href = "/student/create";
    axios.post(href, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res => {
      if(res.data){
        fileList.value = []
        Data.value = {
          fullname: "",
          student_id: null,
          region_id: null,
          genred: "",
          img: "",
          birthday: null,
          course_id: null,
          group_id: null,
          district_id: null,
          direction_id: null,
          college_id: null,
          nationality_id: null,
          scientific_leader_id: null,
          group_leader_id: null,
          information_id: null,
          family_status_id: null,
          languages: [],
          programm: [],
          no_incentives: 0,
          student_punishment: [],
          Circle: [],
          bonus_student: [],
        }
      }
    })
  } else if (route.name == "Talaba qayta nomlash") {
    href = "student/update/" + route.params.id;
    axios.patch(href, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res => {
      if(res.data){
        fileList.value = []
        Data.value = {
          fullname: "",
          student_id: null,
          region_id: null,
          genred: "",
          img: "",
          birthday: null,
          course_id: null,
          group_id: null,
          district_id: null,
          direction_id: null,
          college_id: null,
          nationality_id: null,
          scientific_leader_id: null,
          group_leader_id: null,
          information_id: null,
          family_status_id: null,
          languages: [],
          programm: [],
          no_incentives: 0,
          student_punishment: [],
          Circle: [],
          bonus_student: [],
        }
        router.go(-1)
      }
    })
  }
};
const clear = () => {
  fileList.value = []
        Data.value = {
          fullname: "",
          student_id: null,
          region_id: null,
          genred: "",
          img: "",
          birthday: null,
          course_id: null,
          district_id: null,
          group_id: null,
          direction_id: null,
          college_id: null,
          nationality_id: null,
          scientific_leader_id: null,
          group_leader_id: null,
          information_id: null,
          family_status_id: null,
          languages: [],
          programm: [],
          no_incentives: 0,
          student_punishment: [],
          Circle: [],
          bonus_student: [],
        }
}
const ortga = () => {
    router.go(-1);
};

const DataTable = ref([])
// const createColumns =  [
//     {
//       title: "Nomi",
//       key: "name"
//     }
//   ]
// const pagination = ref( {
//         pageSize: 50
//       })

const getStudent = () => {
  if (route.name !== "Talaba qo'shish") {
    axios.get("/student/one/" + route.params.id).then((res) => {
      // console.log("getOne", res)
      res.data.birthday = Number(res.data.birthday * 1000)
      Data.value = {
        id: res.data.id,
        fullname: res.data.fullname,
        student_id: res.data.student_id,
        region_id: res.data.region_id,
        district_id: res.data.district_id,
        genred: res.data.genred,
        img: BASE_URL + res.data.img,
        birthday: res.data.birthday,
        course_id: res.data.course_id,
        group_id: res.data.group_id,
        direction_id: res.data.direction_id,
        college_id: res.data.college_id,
        nationality_id: res.data.nationality_id,
        scientific_leader_id: res.data.scientific_leader_id,
        group_leader_id: res.data.group_leader_id,
        information_id: res.data.information_id,
        family_status_id: res.data.family_status_id,
        languages: res.data.languages,
        programm: res.data.using_programm,
        no_incentives: res.data.no_incentives,
        student_punishment: res.data.student_punishment,
        Circle: res.data.togarak,
        bonus_student: res.data.student_bonus,
      };
      getRegion();
    });
  }
};

const programmChange = (id) => {
  let index = Data.value.programm.findIndex((e) => e.program_id === id);
  if (index === -1) {
    programmData.value.forEach((el) => {
      if (el.id === id) {
        Data.value.programm.push({
          program_id: el.id,
          programm: el,
        });
      }
    });
  }
};
const deleteprogramms = (id) => {
  Data.value.programm.splice(id, 1);
};

const CircleChange = (id) => {
  let index = Data.value.Circle.findIndex((e) => e.togarak_id === id);
  if (index === -1) {
    CircleData.value.forEach((el) => {
      if (el.id === id) {
        Data.value.Circle.push({
          togarak_id: el.id,
          togaraklar: el,
        });
      }
    });
  }
};
const deletedata = (id) => {
  Data.value.Circle.splice(id, 1);
};

const bonus_studentChange = (id) => {
  let index = Data.value.bonus_student.findIndex((e) => e.student_bonus_id === id);
  if (index === -1) {
    bonus_studentData.value.forEach((el) => {
      if (el.id === id) {
        Data.value.bonus_student.push({
          student_bonus_id: el.id,
          bonus_student: el
        });
      }
    });
  }
};
const deletebonus_student = (id) => {
  Data.value.bonus_student.splice(id, 1);
};

const student_punishmentChange = (id) => {
  let index = Data.value.student_punishment.findIndex((e) => e.punishment_id === id);
  if (index === -1) {
    student_punishmentData.value.forEach((el) => {
      if (el.id === id) {
        Data.value.student_punishment.push({
          punishment_id: el.id,
          punishment: el
        });
      }
    });
  }
};
const deletestudent_punishment = (id) => {
  Data.value.student_punishment.splice(id, 1);
};

const languagesChange = (id) => {
  let index = Data.value.languages.findIndex((e) => e.language_id === id);
  if (index === -1) {
    languagesData.value.forEach((el) => {
      if (el.id === id) {
        Data.value.languages.push({
          language_id: el.id,
          language: el,
        });
      }
    });
  }
};
const deletelanguages = (id) => {
  Data.value.languages.splice(id, 1);
};
const direction_idData = ref([]);
const programmData = ref([]);
const languagesData = ref([]);
const college_idData = ref([]);
const group_idData = ref([]);
const course_idData = ref([]);
const group_leader_idData = ref([]);
const scientific_leader_idData = ref([]);
const information_idData = ref([]);
const nationality_idData = ref([]);
const family_status_idData = ref([]);
const CircleData = ref([]);
const bonus_studentData = ref([]);
const student_punishmentData = ref([]);

const resData = (key, data) => {
  if (!data) {
    showModalCreate.value = false;
    showModalCreateTeacher.value = false;
  } else {
    if (
      key !== "Circle" &&
      key !== "bonus_student" &&
      key !== "punishment" &&
      key !== "language_skills" &&
      key !== "programm" &&
      key !== "languages"
    ) {
      if(key == 'group_leader_id' || key == 'scientific_leader_id'){
        if(keyword.value == 'scientific_leader_id'){
          Data.value.scientific_leader_id = data.id
          scientific_leader_id();
          showModalCreateTeacher.value = false;
          showModal.value = false;
        } else 
        if(keyword.value == 'group_leader_id'){
          Data.value.group_leader_id = data.id
          group_leader_id();
          showModalCreateTeacher.value = false;
          showModal.value = false;
        }
      } else {
        Data.value[`${key}`] = data.id;
        switch (key) {
          case "college_id": {
            college_id();
            showModalCreate.value = false;
            return (showModal.value = false)
          }
          case "group_id": {
            group_id();
            showModal.value = false;
            return (showModalCreate.value = false);
          }
          case "course_id": {
            course_id();
            showModal.value = false;
            return (showModalCreate.value = false);
          }
          // case "group_leader_id": {
          //   group_leader_id();
          //   showModal.value = false;
          //   return (showModalCreateTeacher.value = false);
          // }
          // case "scientific_leader_id": {
          //   scientific_leader_id();
          //   showModal.value = false;
          //   return (showModalCreate.value = false);
          // }
          case "information_id": {
            information_id();
            showModal.value = false;
            return (showModalCreate.value = false);
          }
          case "nationality_id": {
            nationality_id();
            showModal.value = false;
            return (showModalCreate.value = false);
          }
          case "family_status_id": {
            family_status_id();
            showModal.value = false;
            return (showModalCreate.value = false);
          }
          case "direction_id": {
            direction_id();
            showModal.value = false;
            return (showModalCreate.value = false);
          }
        }
      }
      
    } else {
      switch (key) {
        case "Circle": {
          Circle();
          Data.value.Circle.push({
            togarak_id: data.id,
            togaraklar: data,
          });
          showModal.value = false;
          return (showModalCreate.value = false);
        }
        case "bonus_student": {
          bonus_students();
          Data.value.bonus_student.push({
            student_bonus_id: data.id,
            bonus_student: data,
          });
          showModal.value = false;
          return (showModalCreate.value = false);
        }
        case "punishment": {
          student_punishment();
          Data.value.student_punishment.push({
            punishment_id: data.id,
            punishment: data,
          });
          showModal.value = false;
          return (showModalCreate.value = false);
        }
        case "language_skills": {
          languages();
          Data.value.languages.push({
            language_id: data.id,
            language: data,
          });
          showModal.value = false;
          return (showModalCreate.value = false);
        }
        case "languages": {
          languages();
          Data.value.languages.push({
            language_id: data.id,
            language: data,
          });
          showModal.value = false;
          return (showModalCreate.value = false);
        }
        case "programm": {
          programms();
          Data.value.programm.push({
            program_id: data.id,
            programm: data,
          });
          showModal.value = false;
          return (showModalCreate.value = false);
        }
      }
    }
  }
};
// const insertBtn = (keyword) => {
//   switch (keyword) {
//     case 'college_id': {
//       college_id();
//     }
//   }
// }

const direction_id = (keyword) => {
    axios.get("/direction/all").then((res) => {
      if (res) {
        if(keyword== 'direction_id'){
          DataTable.value = res.data;
        } else {
          direction_idData.value = res.data;
        }
      }
    });
  
};

const region_idData = ref([]);
const region_id = () => {
  axios.get("/region/all").then((res) => {
    region_idData.value = res.data;
  });
};

const district_idData = ref([]);
const getRegion = (id) => {
  axios.get("/district/all" ).then((res) => {
    district_idData.value = [];
    // Data.value.district_id = null;
    for (let index = 0; index < res.data.length; index++) {
      const element = res.data[index];
      if(element.region_id == Data.value.region_id) {
        district_idData.value.push(element);
      }
    }
    // district_idData.value = res.data;
    // console.log(res)
  });
  // console.log("id",id)
}

const programms = (keyword) => {
  axios.get("/programm/all").then((res) => {
    if (res) {
      if(keyword == 'programm'){
        DataTable.value = res.data;
      } else {
        programmData.value = res.data;
      }
    }
  });
};

const languages = (keyword) => {
  axios.get("/language/all").then((res) => {
    if (res) {
      if(keyword == 'languages'){
        DataTable.value = res.data;
      } else {
        languagesData.value = res.data;
      }
    }
  });
};

const student_punishment = (keyword) => {
  axios.get("/punishment/all").then((res) => {
    if (res) {
      if(keyword == 'punishment'){
        DataTable.value = res.data;
      } else {
        student_punishmentData.value = res.data;
      }
    }
  });
};
const bonus_students = (keyword) => {
  axios.get("/bonus_student/all").then((res) => {
    if (res) {
      if(keyword == 'bonus_student'){
        DataTable.value = res.data;
      } else {
        bonus_studentData.value = res.data;
      }
    }
  });
};
const Circle = (keyword) => {
  axios.get("/togaraklar/all").then((res) => {
    if (res) {
      if(keyword == 'Circle'){
        DataTable.value = res.data;
      } else {
        CircleData.value = res.data;
      }
    }
  });
};
const family_status_id = (keyword) => {
  axios.get("/family_status/all").then((res) => {
    if (res) {
      if(keyword == 'family_status_id'){
        DataTable.value = res.data;
      } else {
        family_status_idData.value = res.data;
      }
    }
  });
};
const nationality_id = (keyword) => {
  axios.get("/national/all").then((res) => {
    if (res) {
      if(keyword == 'nationality_id'){
        DataTable.value = res.data;
      } else {
        nationality_idData.value = res.data;
      }
    }
  });
};
const information_id = (keyword) => {
  axios.get("/information/all").then((res) => {
    if (res) {
      if(keyword){
        DataTable.value = res.data; 
      }
      information_idData.value = res.data;
    }
  });
};
const scientific_leader_id = (keyword) => {
  axios.get("/teacher/all").then((res) => {
    if (res) {
      if(keyword == 'scientific_leader_id'){
        DataTable.value = res.data;
      } else {
        scientific_leader_idData.value = res.data;
      }
    }
  });
};
const course_id = (keyword) => {
  axios.get("/course/all").then((res) => {
    if (res) {
      if(keyword == 'course_id'){
        DataTable.value = res.data;
      } else{
        course_idData.value = res.data;
      }
    }
  });
};
const group_leader_id = (keyword) => {
  axios.get("/teacher/all").then((res) => {
    if (res) {
      if(keyword == 'group_leader_id'){
        DataTable.value = res.data;
      } else {
        group_leader_idData.value = res.data;
      }
    }
  });
};
const college_id = (keyword) => {
  axios.get("/collage/all").then((res) => {
      if (res) {
        if(keyword == 'college_id'){
          DataTable.value = res.data;
        } else {
          college_idData.value = res.data;
        }
      }
    });
};
const group_id = (keyword) => {
  axios.get("/group/all").then((res) => {
    if (res) {
      if(keyword == 'group_id'){
        DataTable.value = res.data;
      } else {
        group_idData.value = res.data;
      }
    }
  });
};
const handleChange = (e) => {
  Data.value.genred = e.target.value;
};
onMounted(() => {
  college_id();
  group_id();
  course_id();
  group_leader_id();
  scientific_leader_id();
  information_id();
  nationality_id();
  family_status_id();
  Circle();
  bonus_students();
  student_punishment();
  languages();
  programms();
  direction_id();
  region_id();
  getStudent();
});
</script>

<style lang="scss" scoped>
.displayupload .n-upload-trigger.n-upload-trigger--image-card{
  width: 120px;
  height: 130px;
  border: 1px solid red;
}
.upload-img{
  z-index: 5;
  width: 94px;
  height: 94px;
  // border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  // display: none;
}
.avatar-img{
  width: 94px;
  height: 94px !important;
  position: absolute;
  border-radius: 10px !important;
  font-size: 30px;
}
.avatar-img:hover {
    border-color: red;
  }

.createheader {
  margin: 5px auto;
  width: 99%;
  // display: flex;
  // justify-content: space-between;
  span {
    margin-left: 15px;
    margin-top: 15px;
    font-size: 27px;
    font-weight: 700;
  }
  // button {
  //   padding: 10px !important;
  // }
}
.btninputs {
  display: flex;
  width: 50%;
}
.jadval-korish{
  position: relative;
  margin-top: 20px;
  // transition: all 0.8s ease-in-out;
}
.korish{
  position: absolute;
  top: -15px;
  // left: -10px;
  display: flex;
  align-items: center;
  button{
    z-index: 3;
    padding: 2px 5px !important;
  }
  span{
    font-size: 18px;
    font-weight: 700;
    margin-left: 10px;
  }
}
.jadval {
  display: flex;
  justify-content: space-between;
  // margin: 20px 10px 10px 10px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #bababa;
  box-shadow: -5px 5px 20px -5px #ccc;
}
.nuqtabtns {
  position: relative;
  cursor: pointer;
  button {
    position: absolute;
    top: 38px;
    left: calc(100% - 50px);
    z-index: 5;
    color: #8a8a8a;
    cursor: pointer;
    font-weight: 600;
    background: #fff;
    border: none;
  }
}
.nuqtabtn {
  position: relative;
  .nuqtalar {
    position: absolute;
    top: 38px;
    left: calc(100% - 50px);
    z-index: 5;
    color: #8a8a8a;
    font-weight: 600;
    background: #fff;
    border: none;
  }
}
.talabaparent  {
  width: 100%;
  box-shadow: -5px 5px 20px -5px #ccc;
  border: 1px solid #bfbfbf;
  border-radius: 15px;
}
.classinputlart {
  position: relative;
  // height: calc(100vh - 140px);
  margin: 0px auto;
  // border: 1px solid #dcdcdc;
  // border-radius: 15px;
  width: 99%;
  padding: 15px 15px;
  // background: #fff;
  label {
    margin-top: 7px;
    font-size: 18px;
    font-weight: 600;
  }
}
.displayupload {
  display: flex;
  justify-content: space-between;
}
.rasmmodal {
  border: 1px solid #bfbfbf;
  position: absolute;
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  width: 97px;
  height: 100px;
  div svg {
    color: #bfbfbf;
  }
}
.saqlashbtn {
  width: 100%;
  justify-content: right;
  display: flex;
  margin-top: 20px;
  margin-bottom: 5px;
  button {
    margin-left: 10px;
    // font-size: 18px;
  }
}
// .tabelmassiv {
//   border: 1px solid #bababa;
//   overflow: auto;
//   height: 160px;
//   button {
//     width: 20px;
//     height: 20px;
//   }
// }
.tabelsmassiv {
  border: 1px solid #bababa;
  border-radius: 10px;
  margin-top: 10px;
  overflow: auto;
  height: 128px;
  button {
    width: 20px;
    height: 20px;
  }
}
.n-table td{
  border-radius: 0px !important;
  padding: 10px;
  cursor: pointer;

}
.tableTR{
  border: 2px solid red !important;
}

</style>
