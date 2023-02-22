<template>
  <div class="talabaparent">
    <div class="createheader">
      <span>O'qituvchi qo'shish</span>
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
      <div style="display: flex; justify-content: space-between">
        <div style="width: 30%">
          <label>F.I.SH.</label>
          <n-input
            v-model:value="Data.fullname"
            type="text"
            clearable
            size="large"
            placeholder="F.I.SH ni kiriting"
          />
          <div>
            <label>O'qituvchi ID</label>
            <n-input-number
                v-model:value="Data.teacher_id"
                clearable
                size="large"
                placeholder="ID ni kiriting"
                :show-button="false"  
              >
              </n-input-number>
          </div>
            
          <div style="width: 100%; display: flex; justify-content: space-between">
            <div style="width: 53%">
              <label>Tug’ilgan sana</label>
              <n-date-picker
                v-model:value="Data.birthday"
                clearable
                size="large"
                type="date"
                placeholder="Yil-oy-kun"
              />
            </div>
            <div style="width: 46%">
              <label>Jinsi</label> <br />
              <n-radio
                :checked="Data.genred == 'Erkak'"
                :value="'Erkak'"
                @change="handleChange"
              >
                Erkak
              </n-radio>
              <n-radio
                :checked="Data.genred == 'Ayol'"
                :value="'Ayol'"
                @change="handleChange"
              >
                Ayol
              </n-radio>
            </div>
          </div>
          <div class="nuqtabtn">
            <label>Ilmiy darajasi</label>
            <button
              class="nuqtalar"
              @click="(showModal = true), (keyword = 'academic_degree_id'), academic_degree_id(keyword)"
            >
              ...
            </button>
            <n-select
              size="large"
              v-model:value="Data.academic_degree_id"
              :options="academic_degree_idData"
              label-field="name"
              value-field="id"
              filterable
              clearable
            />
          </div>
          <div class="nuqtabtn">
            <label>Ilmiy unvoni</label>
            <button
              class="nuqtalar"
              @click="(showModal = true), (keyword = 'scientific_title_id'), scientific_title_id(keyword)"
            >
              ...
            </button>
            <n-select
              size="large"
              v-model:value="Data.scientific_title_id"
              :options="scientific_title_idData"
              label-field="name"
              value-field="id"
              filterable
              clearable
            />
          </div>
          <div class="nuqtabtn">
            <label>Guruh rahbarligi</label>
            <button
              class="nuqtalar"
              @click="(showModal = true), (keyword = 'group_leadership_id'), group_leadership_id(keyword)"
            >
              ...
            </button>
            <n-select
              size="large"
              v-model:value="Data.group_leadership_id"
              :options="group_leadership_idData"
              label-field="name"
              value-field="id"
              filterable
              clearable
            />
          </div>
        </div>
        <div style="width: 27%">
          <div class="nuqtabtn">
            <label>Ilmiy rahbarligi</label>
            <button
              class="nuqtalar"
              @click="
                (showModal = true), (keyword = 'scientific_leadership_id'), group_leadership_id(keyword)
              "
            >
              ...
            </button>
            <n-select
              size="large"
              v-model:value="Data.scientific_leadership_id"
              :options="group_leadership_idData"
              label-field="name"
              value-field="id"
              filterable
              clearable
            />
          </div>

          <div class="nuqtabtn">
            <label>Muassasa</label>
            <button
              class="nuqtalar"
              @click="(showModal = true), (keyword = 'institution_id'), institution_id(keyword)"
            >
              ...
            </button>
            <n-select
              size="large"
              v-model:value="Data.institution_id"
              :options="institution_idData"
              label-field="name"
              value-field="id"
              filterable
              clearable
            />
          </div>

          <div class="nuqtabtn">
            <label>Fakultet</label>
            <button
              class="nuqtalar"
              @click="(showModal = true), (keyword = 'college_id'), college_id(keyword)"
            >
              ...
            </button>
            <n-select
              size="large"
              v-model:value="Data.college_id"
              :options="college_idData"
              label-field="name"
              value-field="id"
              filterable
              clearable
            />
          </div>

          <div class="nuqtabtn">
            <label>Kafedra</label>
            <button
              class="nuqtalar"
              @click="(showModal = true), (keyword = 'kafedra_id'), kafedra_id(keyword)"
            >
              ...
            </button>
            <n-select
              size="large"
              v-model:value="Data.kafedra_id"
              :options="kafedra_idData"
              label-field="name"
              value-field="id"
              filterable
              clearable
            />
          </div>

          <div class="nuqtabtn">
            <label>Ma’lumoti bo’yicha mutaxassisligi</label>
            <button
              class="nuqtalar"
              @click="(showModal = true), (keyword = 'specialty_id'), specialty_id(keyword)"
            >
              ...
            </button>
            <n-select
              size="large"
              v-model:value="Data.specialty_id"
              :options="specialty_idData"
              label-field="name"
              value-field="id"
              filterable
              clearable
            />
          </div>

          <div class="nuqtabtn">
            <label>Ma’lumoti</label>
            <button
              class="nuqtalar"
              @click="(showModal = true), (keyword = 'information_id'), information_id(keyword)">
              ...
            </button>
            <n-select
              size="large"
              v-model:value="Data.information_id"
              :options="information_idData"
              label-field="name"
              value-field="id"
              filterable
              clearable
            />
          </div>
        </div>
        <div style="width: 41%">
          <div class="displayupload">
            <div style="width: calc(100% - 140px)">
              <div class="nuqtabtn">
                <label>Lavozimi</label>
                <button
                  class="nuqtalar"
                  @click="(showModal = true), (keyword = 'position_id'), position_id(keyword)"
                >
                  ...
                </button>
                <n-select
                  size="large"
                  v-model:value="Data.position_id"
                  :options="position_idData"
                  label-field="name"
                  value-field="id"
                  filterable
                  clearable
                />
              </div>

              <div class="nuqtabtn">
                <label>Millati</label>
                <button
                  class="nuqtalar"
                  @click="(showModal = true), (keyword = 'national_id'), national_id(keyword)"
                >
                  ...
                </button>
                <n-select
                  size="large"
                  v-model:value="Data.national_id"
                  :options="national_idData"
                  label-field="name"
                  value-field="id"
                  filterable
                  clearable
                />
              </div>

              <div class="nuqtabtn">
                <label>Oilaviy ahvoli</label>
                <button
                  class="nuqtalar"
                  @click="(showModal = true), (keyword = 'family_status_id'), family_status_id(keyword)"
                >
                  ...
                </button>
                <n-select
                  size="large"
                  v-model:value="Data.family_status_id"
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
              <n-avatar
                :src="Data.imgs"
                class="avatar-img"
                :fallback-src="imgdefould"
               />
              <n-upload
                class="upload-img"
                v-model:file-list="fileList"
                list-type="image-card"
                :max="1"
              />
              <!-- <div @click="$refs.files.click()" class="rasmmodal">
                <div style="width: 40px; height: 40px">
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
                @click="(showModal = true), (keyword = 'programm'), programm(keyword)"
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
                  type="small"
                  striped
                  :bottom-bordered="true"
                  :bordered="false"
                  :single-line="false"
                >
                  <tbody
                    v-for="(item, index) in Data.programm"
                    :key="index"
                  >
                    <tr>
                      <td style="width: 30px">{{ index + 1 }}</td>
                      <td>{{ item.program.name }}</td>
                      <td style="width: 30px">
                        <n-button
                          @click="deleteprogramm(index)"
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
                @click="(showModal = true), (keyword = 'language_skills'), language_skills(keyword)"
              >
                ...
              </button>
              <n-select
                size="large"
                :options="language_skillsData"
                :onUpdate:value="language_skillsChange"
                label-field="name"
                value-field="id"
                filterable
                clearable
              />
              <div class="tabelsmassiv">
                <n-table
                  type="small"
                  striped
                  :bottom-bordered="true"
                  :bordered="false"
                  :single-line="false"
                >
                  <tbody
                    v-for="(item, index) in Data.language_skills"
                    :key="index"
                  >
                    <tr>
                      <td style="width: 30px">{{ index + 1 }}</td>
                      <td>{{ item.language.name }}</td>
                      <td style="width: 30px">
                        <n-button
                          @click="deletelanguage_skills(index)"
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
          <!-- <label>To’garaklarga a’zoligi</label>
                <n-select size="large" /> -->
        </div>
      </div>
      <n-collapse style="margin-top: 15px;">
        <n-collapse-item title="Ko'rsatish" name="1">
          <div class="jadval">
            <div style="width: 100%; display: flex; justify-content: space-between">
              <!-- <div class="nuqtabtn" style="width: 49%"> -->
                <!-- <label>Dars taqsimoti</label>
                <button
                  class="nuqtalar"
                  @click="(showModal = true), (keyword = 'lesson_presentetion')"
                >
                  ...
                </button>
                <n-select
                  size="large"
                  label-field="name"
                  value-field="id"
                  filterable
                  clearable
                /> -->
                <!-- <div class="tabelsmassiv"> -->
                  <!-- <n-table type="small" striped :bottom-bordered="true" :bordered="false" :single-line="false">
                                    <tbody v-for="(item, index) in Data.Circle" :key="index">
                                    <tr>
                                        <td style="width: 30px;">{{ index + 1 }}</td>
                                        <td>{{ item.name }}</td>
                                        <td style="width: 30px;">
                                            <n-button @click="deletedata(index)" tertiary circle type="error" style="border: 1px solid #f93a3a;">
                                                <n-icon size="15">
                                                    <RestoreFromTrashOutlined />
                                                </n-icon>
                                            </n-button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </n-table> -->
                <!-- </div> -->
              <!-- </div> -->

              <div class="nuqtabtn" style="width: 32%">
                <label>Bonuslari</label>
                <button
                  class="nuqtalar"
                  @click="(showModal = true), (keyword = 'teacher_bonus'), teacher_bonus(keyword)"
                >
                  ...
                </button>
                <n-select
                  size="large"
                  :options="teacher_bonusData"
                  :onUpdate:value="teacher_bonusChange"
                  label-field="name"
                  value-field="id"
                  filterable
                  clearable
                />
                <div class="tabelsmassiv">
                  <n-table
                    type="small"
                    striped
                    :bottom-bordered="true"
                    :bordered="false"
                    :single-line="false"
                  >
                    <tbody v-for="(item, index) in Data.teacher_bonus" :key="index">
                      <tr>
                        <td style="width: 30px">{{ index + 1 }}</td>
                        <td>{{ item.bonus.name }}</td>
                        <td style="width: 30px">
                          <n-button
                            @click="deleteteacher_bonus(index)"
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
            <!-- </div>
            <div style="width: 49%; display: flex; justify-content: space-between"> -->
              <div class="nuqtabtn" style="width: 32%">
                <label>Shtat va Ish tarzi</label>
                <button
                  class="nuqtalar"
                  @click="(showModal = true), (keyword = 'teacher_state'), teacher_state(keyword)"
                >
                  ...
                </button>
                <n-select
                  size="large"
                  :options="teacher_stateData"
                  :onUpdate:value="teacher_stateChange"
                  label-field="name"
                  value-field="id"
                  filterable
                  clearable
                />
                <div class="tabelsmassiv">
                  <n-table
                    type="small"
                    striped
                    :bottom-bordered="true"
                    :bordered="false"
                    :single-line="false"
                  >
                    <tbody v-for="(item, index) in Data.teacher_state" :key="index">
                      <tr>
                        <td style="width: 30px">{{ index + 1 }}</td>
                        <td>{{ item.states.name }}</td>
                        <td style="width: 30px">
                          <n-button
                            @click="deleteteacher_state(index)"
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

              <div class="nuqtabtn" style="width: 32%">
                <label>Jazolari</label>
                <button
                  class="nuqtalar"
                  @click="(showModal = true), (keyword = 'punishments'), punishments(keyword)"
                >
                  ...
                </button>
                <n-select
                  :options="punishmentsData"
                  :onUpdate:value="punishmentsChange"
                  size="large"
                  label-field="name"
                  value-field="id"
                  filterable
                  clearable
                />
                <div class="tabelsmassiv">
                  <n-table
                    type="small"
                    striped
                    :bottom-bordered="true"
                    :bordered="false"
                    :single-line="false"
                  >
                    <tbody v-for="(item, index) in Data.punishments" :key="index">
                      <tr>
                        <td style="width: 30px">{{ index + 1 }}</td>
                        <td>{{ item.punishment.name }}</td>
                        <td style="width: 30px">
                          <n-button
                            @click="deletepunishments(index)"
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
        </n-collapse-item>
      </n-collapse>
      
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
            <n-button color="#c63131" size="large" ghost @click="(showModalCreate = true)">
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
                    <td class="tableTdRightRadius">{{ item.name }}</td>
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
      <n-modal v-model:show="showModalCreate">
        <n-card
          style="width: 600px"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
          closable
          @close="(showModalCreate = false)"
        >
          <div v-if="keyword == 'academic_degree_id'">
            <Ilmiydaraja @ilmiydaraja="resData" />
          </div>
          <div
            v-else-if="
              keyword == 'group_leadership_id' ||
              keyword == 'scientific_leadership_id'
            "
          >
            <Guruh @guruh="resData" />
          </div>
          <div v-else-if="keyword == 'institution_id'">
            <Muassasa @muassasa="resData" />
          </div>
          <div v-else-if="keyword == 'college_id'">
            <Fakultet @fakultet="resData" />
          </div>
          <div v-else-if="keyword == 'kafedra_id'">
            <Kafedra @kafedra="resData" />
          </div>
          <div v-else-if="keyword == 'specialty_id'">
            <Mutahasisligi @mutahasiligi="resData" />
          </div>
          <div v-else-if="keyword == 'position_id'">
            <Lavozimi @lavozimi="resData" />
          </div>
          <div v-else-if="keyword == 'language_skills'">
            <Til @til="resData" />
          </div>
          <!-- <div v-else-if="keyword == 'scientific_leader_id'">
                    <Ilmiyrahbar @ilmiyrahbar="resData"/>
                </div> -->
          <div v-else-if="keyword == 'scientific_title_id'">
            <Ilmiyunvoni @ilmiyunvon="resData" />
          </div>
          <div v-else-if="keyword == 'information_id'">
            <Malumoti @malumoti="resData" />
          </div>
          <div v-else-if="keyword == 'national_id'">
            <Millati @millati="resData" />
          </div>
          <div v-else-if="keyword == 'programm'">
            <Dasturlar @dastur="resData" />
          </div>
          <div v-else-if="keyword == 'teacher_state'">
            <Shtati @ishtarzi="resData" />
          </div>
          <div v-else-if="keyword == 'teacher_bonus'">
            <Bonustalaba @bonustalaba="resData" />
          </div>
          <div v-else-if="keyword == 'family_status_id'">
            <Oilaviyahvoli @oilaviyahvoli="resData" />
          </div>
          <!-- <div v-else-if="keyword == 'Circle'">
                    <Togaraklar @togaraklar="resData"/>
                </div> -->
          <div v-else-if="keyword == 'punishments'">
            <Jarimalar @jarimalar="resData" />
          </div>
        </n-card>
      </n-modal>
      <div class="saqlashbtn">
        <n-button @click="ortga" size="large"> Ortga </n-button>
        <n-button @click="clear" size="large" type="error"> Tozalash </n-button>
        <n-button @click="createData" size="large" type="success"> Saqlash </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Ilmiydaraja from "../IlmiyDaraja/Form.vue";
import Kafedra from "../Kafedra/Form.vue";
import Guruh from "../Group/Form.vue";
import Muassasa from "../Muassasa/Form.vue";
import Fakultet from "../Fakultet/Form.vue";
import Mutahasisligi from "../Mutahasisligi/Form.vue";
import Lavozimi from "../Lavozim/Form.vue";
import Dasturlar from "../DasturlardaIshlashi/Form.vue";
import Til from "../Tillar/Form.vue";
import Ilmiyunvoni from "../IlmiyUnvon/Form.vue";
// import Ilmiyrahbar  from "../IlmiyRahbar/Form.vue"
import Malumoti from "../Malumot/Form.vue";
import Millati from "../Millati/Form.vue";
import Shtati from "../IshTarzi/Form.vue";
import Oilaviyahvoli from "../OilaviyAhvoli/Form.vue";
// import Togaraklar from "../Togarak/Form.vue"
import Bonustalaba from "../BonusStudent/Form.vue";
import Jarimalar from "../Jarimalar/Form.vue";
import imgdefould from "../../assets/img/personUSer.jpg"
// import imgperson from "../../assets/img/person";
import { h, ref, onMounted, inject } from "vue";
import { CloseCircleSharp, AddCircleSharp } from "@vicons/ionicons5";
import axios from "axios";
import {
  AddPhotoAlternateOutlined,
  CloseTwotone,
  RestoreFromTrashOutlined,
} from "@vicons/material";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
// import {NIicon} from "naive-ui"
const keyword = ref(null);
const showModal = ref(false);
const showModalCreate = ref(false);
const emit = defineEmits(["teacher"]);
const BASE_URL = inject('BASE_URL')
const Data = ref({
  fullname: "",
  teacher_id: null,
  genred: "", // jinsi
  birthday: null, // tugilgan kuni
  imgs: "",
  kafedra_id: null,
  position_id: null, // lavozim
  institution_id: null, // malumoti
  department_id: 0, // bo'lim
  college_id: null, // fakultet
  national_id: null, // millati
  information_id: null, // malumot
  family_status_id: null, // oilaviy axvoli
  group_leadership_id: null, // guruh rahbarligi
  scientific_leadership_id: null, // ilmiy rahbarlik
  specialty_id: null, // mutahasisligi
  academic_degree_id: null, // ilmiy daraja
  language_skills: [], // tillarni biladi
  programm: [], // dasturlarda ishlay oladi
  scientific_leader_id: null, // ilmiy rahbarlik
  group_leader_id: null, // guruh rahbarlik
  teacher_state: [], // oqituvchi shtati
  scientific_title_id: null, // ilmiy unvoni
  lesson_presentetion: [], // dars taqsimoti
  teacher_bonus: [], // oqituvchi bonus
  punishments: [], // jazolar
});

const fileList = ref([])

const createData = () => {
  let href = null;
  let formData = new FormData();
  formData.append("imgs", fileList.value.length == 0 ? "" : fileList.value[0].file ); // e
  formData.append("fullname", Data.value.fullname);
  formData.append("teacher_id", Data.value.teacher_id);
  formData.append("genred", Data.value.genred); 
  formData.append("birthday", Data.value.birthday / 1000);
  formData.append("kafedra_id", Data.value.kafedra_id);
  formData.append("position_id", Data.value.position_id);
  formData.append("institution_id", Data.value.institution_id);
  formData.append("department_id", Data.value.department_id);
  formData.append("national_id", Data.value.national_id);
  formData.append("group_leadership_id", Data.value.group_leadership_id);
  formData.append("scientific_leadership_id", Data.value.scientific_leadership_id);
  formData.append("specialty_id", Data.value.specialty_id);
  formData.append("academic_degree_id", Data.value.academic_degree_id);
  formData.append("college_id", Data.value.college_id);
  formData.append("nationality_id", Data.value.nationality_id);
  formData.append("scientific_leader_id", Data.value.scientific_leader_id)
  formData.append("group_leader_id", Data.value.group_leader_id);
  formData.append("information_id", Data.value.information_id); 
  formData.append("family_status_id", Data.value.family_status_id);
  formData.append("language_skills", JSON.stringify(Data.value.language_skills)); 
  formData.append("teacher_state", JSON.stringify(Data.value.teacher_state));
  formData.append("scientific_title_id", Data.value.scientific_title_id);
  formData.append("lesson_presentetion", JSON.stringify(Data.value.lesson_presentetion));
  // formData.append("languages", JSON.stringify(Data.value.languages)); /////////
  formData.append("programm", JSON.stringify(Data.value.programm));
  formData.append("punishments", JSON.stringify(Data.value.punishments)); //c
  formData.append("teacher_bonus", JSON.stringify(Data.value.teacher_bonus)); //d
  if (route.name == "O'qituvchi ma'lumotlari qo'shish") {
    href = "/teacher/create";
    axios.post(href, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      if(res.data){
        fileList.value = []
        Data.value = {
          fullname: "",
          teacher_id: null,
          genred: "", // jinsix
          birthday: null, // tugilgan kuni
          imgs: "",
          kafedra_id: null,
          position_id: null, // lavozim
          institution_id: null, // malumoti
          department_id: 0, // bo'lim
          college_id: null, // fakultet
          national_id: null, // millati
          information_id: null, // malumot
          family_status_id: null, // oilaviy axvoli
          group_leadership_id: null, // guruh rahbarligi
          scientific_leadership_id: null, // ilmiy rahbarlik
          specialty_id: null, // mutahasisligi
          academic_degree_id: null, // ilmiy daraja
          language_skills: [], // tillarni biladi
          programm: [], // dasturlarda ishlay oladi
          scientific_leader_id: null, // ilmiy rahbarlik
          group_leader_id: null, // guruh rahbarlik
          teacher_state: [], // oqituvchi shtati
          scientific_title_id: null, // ilmiy unvoni
          lesson_presentetion: [], // dars taqsimoti
          teacher_bonus: [], // oqituvchi bonus
          punishments: [], // jazolar
        }
      }
    });
  } else if (route.name == "O'qituvchi ma'lumotlari qayta nomlash") {
    href = "/teacher/update/" + route.params.id;
    axios.patch(href, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      if(res.data){
        if(route.name == "O'qituvchi ma'lumotlari qayta nomlash"){
        router.go(-1)
      }
        fileList.value = []
        Data.value = {
          fullname: "",
          teacher_id: null,
          genred: "", // jinsix
          birthday: null, // tugilgan kuni
          imgs: "",
          kafedra_id: null,
          position_id: null, // lavozim
          institution_id: null, // malumoti
          department_id: 0, // bo'lim
          college_id: null, // fakultet
          national_id: null, // millati
          information_id: null, // malumot
          family_status_id: null, // oilaviy axvoli
          group_leadership_id: null, // guruh rahbarligi
          scientific_leadership_id: null, // ilmiy rahbarlik
          specialty_id: null, // mutahasisligi
          academic_degree_id: null, // ilmiy daraja
          language_skills: [], // tillarni biladi
          programm: [], // dasturlarda ishlay oladi
          scientific_leader_id: null, // ilmiy rahbarlik
          group_leader_id: null, // guruh rahbarlik
          teacher_state: [], // oqituvchi shtati
          scientific_title_id: null, // ilmiy unvoni
          lesson_presentetion: [], // dars taqsimoti
          teacher_bonus: [], // oqituvchi bonus
          punishments: [], // jazolar
        }
      }
    });
  } else if(!(route.name == "O'qituvchi ma'lumotlari qo'shish" || route.name == "O'qituvchi ma'lumotlari qayta nomlash")) {
    href = "/teacher/create";
    axios.post(href, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      let key = "group_leader_id";
      emit("teacher", key, res.data);
    })
  }
    
};
const getOne = () => {
  if(route.name == "O'qituvchi ma'lumotlari qayta nomlash"){
    axios.get('/teacher/one/' + route.params.id).then(res => {
    res.data.birthday = Number(res.data.birthday * 1000)
    // Data.value = res.data
    Data.value = {
      id: res.data.id,
      fullname: res.data.fullname,
      teacher_id: res.data.teacher_id,
      genred: res.data.genred, // jinsi
      birthday: res.data.birthday, // tugilgan kuni
      imgs: BASE_URL + res.data.img,
      kafedra_id: res.data.kafedra_id,
      position_id: res.data.position_id, // lavozim
      institution_id: res.data.institution_id, // malumoti
      department_id: res.data.department_id, // bo'lim
      college_id: res.data.college_id, // fakultet
      national_id: res.data.national_id, // millati
      information_id: res.data.information_id, // malumot
      family_status_id: res.data.family_status_id, // oilaviy axvoli
      group_leadership_id: res.data.group_leadership_id, // guruh rahbarligi
      scientific_leadership_id: res.data.scientific_leadership_id, // ilmiy rahbarlik
      specialty_id: res.data.specialty_id, // mutahasisligi
      academic_degree_id: res.data.academic_degree_id, // ilmiy daraja
      language_skills: res.data.teacher_language, // tillarni biladi
      programm: res.data.programm, // dasturlarda ishlay oladi
      scientific_leader_id: res.data.scientific_leader_id, // ilmiy rahbarlik
      group_leader_id: res.data.group_leader_id, // guruh rahbarlik
      teacher_state: res.data.state, // oqituvchi shtati
      scientific_title_id: res.data.scientific_title_id, // ilmiy unvoni
      lesson_presentetion: res.data.lesson_presentetion, // dars taqsimoti
      teacher_bonus: res.data.teacher_bonus, // oqituvchi bonus
      punishments: res.data.teacher_punishment, // jazolar
    };
  })
  }
}

const ortga = () => {
  if(route.name == "O'qituvchi ma'lumotlari qayta nomlash" || route.name == "O'qituvchi ma'lumotlari qo'shish"){
    router.go(-1);
  } else {
    let key = false;
    emit("teacher", key);
  }
};
const clear = () => {
  fileList.value = []
  Data.value = {
        fullname: "",
        teacher_id: null,
        genred: "", // jinsi
        birthday: null, // tugilgan kuni
        imgs: "",
        kafedra_id: null,
        position_id: null, // lavozim
        institution_id: null, // malumoti
        department_id: 0, // bo'lim
        college_id: null, // fakultet
        national_id: null, // millati
        information_id: null, // malumot
        family_status_id: null, // oilaviy axvoli
        group_leadership_id: null, // guruh rahbarligi
        scientific_leadership_id: null, // ilmiy rahbarlik
        specialty_id: null, // mutahasisligi
        academic_degree_id: null, // ilmiy daraja
        language_skills: [], // tillarni biladi
        programm: [], // dasturlarda ishlay oladi
        scientific_leader_id: null, // ilmiy rahbarlik
        group_leader_id: null, // guruh rahbarlik
        teacher_state: [], // oqituvchi shtati
        scientific_title_id: null, // ilmiy unvoni
        lesson_presentetion: [], // dars taqsimoti
        teacher_bonus: [], // oqituvchi bonus
        punishments: [], // jazolar
  }
}
const DataTable = ref([])
// const bonus_studentData = ref([])
const checkedValueRef = ref(null);
const handleChange = (e) => {
  Data.value.genred = e.target.value;
};
// const bonus_studentChange = (id) => {
//     let index = Data.value.bonus_student.findIndex(e => e.id === id)
//         if(index === -1){
//             bonus_studentData.value.forEach(el => {
//            if(el.id === id){
//             Data.value.bonus_student.push(el)
//            }
//         })
//         }
// }

const lesson_presentetionData = ref([]);
const lesson_presentetionChange = (id) => {
  // let index = Data.value.lesson_presentetion.findIndex(e => e.id === id)
  //     if(index === -1){
  //         lesson_presentetionData.value.forEach(el => {
  //        if(el.id === id){
  //         Data.value.lesson_presentetion.push(el)
  //        }
  //     })
  //     }
};
const teacher_stateData = ref([]);
const teacher_stateChange = (id) => {
  let index = Data.value.teacher_state.findIndex((e) => e.teacher_state_id === id);
  if (index === -1) {
    teacher_stateData.value.forEach((el) => {
      if (el.id === id) {
        Data.value.teacher_state.push({
          teacher_state_id: el.id,
          states: el
        });
      }
    });
  }
};
const deleteteacher_state = (id) => {
  Data.value.teacher_state.splice(id, 1);
};

const punishmentsChange = (id) => {
  let index = Data.value.punishments.findIndex((e) => e.punishment_id === id);
  if (index === -1) {
    punishmentsData.value.forEach((el) => {
      if (el.id === id) {
        Data.value.punishments.push({
          punishment_id: el.id,
          punishment: el
        });
      }
    });
  }
}
const deletepunishments = (id) => {
  Data.value.punishments.splice(id, 1);
};

const language_skillsData = ref([]);
const language_skillsChange = (id) => {
  let index = Data.value.language_skills.findIndex((e) => e.id === id);
  if (index === -1) {
    language_skillsData.value.forEach((el) => {
      if (el.id === id) {
        Data.value.language_skills.push({
          language_id: el.id,
          language: el
        });
      }
    });
  }
};
const deletelanguage_skills = (id) => {
  Data.value.language_skills.splice(id, 1);
};

const programmData = ref([]);
const programmChange = (id) => {
  let index = Data.value.programm.findIndex((e) => e.program_id === id);
  if (index === -1) {
    programmData.value.forEach((el) => {
      if (el.id === id) {
        Data.value.programm.push({
          program_id: el.id,
          program: el
        });
      }
    });
  }
};
const deleteprogramm = (id) => {
  Data.value.programm.splice(id, 1);
};

const teacher_bonusChange = (id) => {
  let index = Data.value.teacher_bonus.findIndex((e) => e.id === id);
  if (index === -1) {
    teacher_bonusData.value.forEach((el) => {
      if (el.id === id) {
        Data.value.teacher_bonus.push({
          bonus_id: el.id,
          bonus: el
        });
      }
    });
  }
};
const deleteteacher_bonus = (id) => {
  Data.value.teacher_bonus.splice(id, 1);
};

const resData = (key, data) => {
  if (!data) {
    showModalCreate.value = false;
  } else {
    if (
      key !== "lesson_presentetion" &&
      key !== "language_skills" &&
      key !== "programm" &&
      key !== "teacher_state" &&
      key !== "bonus_student" &&
      key !== "punishment" &&
      key !== "teacher_bonus" &&
      key !== "punishments"
    ) {
      if (key == "group_id") {
        if (keyword.value == "group_leadership_id") {
          Data.value.group_leadership_id = data.id;
          showModalCreate.value = false;
        } else if (keyword.value == "scientific_leadership_id") {
          Data.value.scientific_leadership_id = data.id;
          showModalCreate.value = false;
        }
      } else if (key == "nationality_id") {
        Data.value.national_id = data.id;
        showModalCreate.value = false;
      }
      Data.value[`${key}`] = data.id;
      switch (key) {
        case "academic_degree_id": {
          academic_degree_id();
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "group_id": {
          group_leadership_id();
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "institution_id": {
          institution_id();
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "information_id": {
          information_id();
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "college_id": {
          college_id();
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "kafedra_id": {
          kafedra_id();
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "specialty_id": {
          specialty_id();
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "position_id": {
          position_id();
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "nationality_id": {
          national_id();
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "scientific_title_id": {
          scientific_title_id();
          // Data.value.scientific_title_id = data.id
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "family_status_id": {
          family_status_id();
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "group_leadership_id": {
          Data.value.group_leadership_id = data.id;
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "scientific_leadership_id": {
          Data.value.scientific_leadership_id = data.id;
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "national_id": {
          Data.value.national_id = data.id;
          showModalCreate.value = false;
          return (showModal.value = false);
        }
      }
    } else {
      switch (key) {
        case "lesson_presentetion": {
          lesson_presentetion();
          Data.value.lesson_presentetion.push(data);
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "programm": {
          programm();
          Data.value.programm.push({
            program_id: data.id,
            program: data
          });
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "language_skills": {
          language_skills();
          Data.value.language_skills.push({
            language_id: data.id,
            language: data
          });
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "teacher_state": {
          teacher_state();
          Data.value.teacher_state.push({
            teacher_state_id: data.id,
            states: data
          });
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "bonus_student": {
          teacher_bonus();
          Data.value.teacher_bonus.push({
            bonus_id: data.id,
            bonus: data
          });
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "teacher_bonus": {
          teacher_bonus();
          Data.value.teacher_bonus.push({
            bonus_id: data.id,
            bonus: data
          });
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "punishment": {
          punishments();
          Data.value.punishments.push({
            punishment_id: data.id,
            punishment: data
          });
          showModalCreate.value = false;
          return (showModal.value = false);
        }
        case "punishments": {
          punishments();
          Data.value.punishments.push({
            punishment_id: data.id,
            punishment: data
          });
          showModalCreate.value = false;
          return (showModal.value = false);
        }
      }
    }
  }
};
const family_status_idData = ref([]);
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

const scientific_title_idData = ref([]);
const scientific_title_id = (keyword) => {
  axios.get("/academic_title/all").then((res) => {
    if (res) {
      if(keyword == 'scientific_title_id'){
        DataTable.value = res.data;
      } else {
        scientific_title_idData.value = res.data;
      }
    }
  });
};

const punishmentsData = ref([]);
const punishments = (keyword) => {
  axios.get("/punishment/all").then((res) => {
    if (res) {
      if(keyword == 'punishments'){
        DataTable.value = res.data;
      } else {
        punishmentsData.value = res.data;
      }
    }
  });
};

const teacher_bonusData = ref([]);
const teacher_bonus = (keyword) => {
  axios.get("/bonus_student/all").then((res) => {
    if (res) {
      if(keyword == 'teacher_bonus'){
        DataTable.value = res.data;
      } else {
        teacher_bonusData.value = res.data;
      }
    }
  });
};

const teacher_state = (keyword) => {
  axios.get("/state/all").then((res) => {
    if (res) {
      if(keyword == 'teacher_state'){
        DataTable.value = res.data;
      } else {
        teacher_stateData.value = res.data;
      }
    }
  });
};

const language_skills = (keyword) => {
  axios.get("/language/all").then((res) => {
    if (res) {
      if(keyword == 'language_skills'){
        DataTable.value = res.data;
      } else {
        language_skillsData.value = res.data;
      }
    }
  });
};

const programm = (keyword) => {
  axios.get("/programm/all").then((res) => {
    if (res) {
      if(keyword){
        DataTable.value = res.data
      } else {
        programmData.value = res.data;
      }
    }
  });
};

const lesson_presentetion = (keyword) => {};

const national_idData = ref([]);
const national_id = (keyword) => {
  axios.get("/national/all").then((res) => {
    if (res) {
      if(keyword == 'national_id'){
        DataTable.value = res.data;
      } else {
        national_idData.value = res.data;
      }
    }
  });
};

const position_idData = ref([]);
const position_id = (keyword) => {
  axios.get("/position/all").then((res) => {
    if (res) {
      if(keyword == 'position_id'){
        DataTable.value = res.data;
      } else {
        position_idData.value = res.data;
      }
    }
  });
};

const specialty_idData = ref([]);
const specialty_id = (keyword) => {
  axios.get("/special_information/all").then((res) => {
    if (res) {
      if(keyword == 'specialty_id'){
        DataTable.value = res.data;
      } else {
        specialty_idData.value = res.data;
      }
    }
  });
};

const kafedra_idData = ref([]);
const kafedra_id = (keyword) => {
  axios.get("/kafedra/all").then((res) => {
    if (res) {
      if(keyword == 'kafedra_id'){
        DataTable.value = res.data;
      } else {
        kafedra_idData.value = res.data;
      }
    }
  });
};

const college_idData = ref([]);
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

const information_idData = ref([]);
const information_id = (keyword) => {
  axios.get("/information/all").then((res) => {
    if (res) {
      if(keyword == 'information_id'){
        DataTable.value = res.data;
      } else {
        information_idData.value = res.data;
      }
    }
  });
};

const institution_idData = ref([]);
const institution_id = (keyword) => {
  axios.get("/institution/all").then((res) => {
    if (res) {
      if(keyword == 'institution_id'){
        DataTable.value = res.data;
      } else {
        institution_idData.value = res.data;
      }
    }
  });
};

const group_leadership_idData = ref([]);
const group_leadership_id = (keyword) => {
  axios.get("/group/all").then((res) => {
    if (res) {
      if(keyword == 'group_leadership_id' || keyword == 'scientific_leadership_id'){
        DataTable.value = res.data;
      } else {
        group_leadership_idData.value = res.data;
      }
    }
  });
};

const academic_degree_idData = ref([]);
const academic_degree_id = (keyword) => {
  axios.get("/academic_degree/all").then((res) => {
    if (res) {
      if(keyword == 'academic_degree_id'){
        DataTable.value = res.data;
      } else {
        academic_degree_idData.value = res.data;
      }
    }
  });
};
onMounted(() => {
  getOne();
  academic_degree_id();
  group_leadership_id();
  national_id();
  institution_id();
  information_id();
  college_id();
  kafedra_id();
  specialty_id();
  position_id();
  programm();
  language_skills();
  teacher_state();
  teacher_bonus();
  punishments();
  scientific_title_id();
  family_status_id();
});
</script>

<style lang="scss" scoped>
.createheader {
  margin: 5px auto;
  width: 99%;
  // margin: 0px auto;
  // width: 98%;
  // display: flex;
  // justify-content: space-between;
  span {
    margin-left: 15px;
    margin-top: 15px;
    font-size: 27px;
    font-weight: 700;
  }
}
.talabaparent {
  width: 100%;
  box-shadow: -5px 5px 20px -5px #ccc;
  border: 1px solid #bfbfbf;
  border-radius: 15px;
}
.upload-img{
  z-index: 5;
  // display: none;
}
.avatar-img{
  border: 1px solid #dcdcdc;
  width: 96px;
  position: absolute;
  height: 96px;
}
.avatar-img:hover {
    border-color: red;
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
.displayupload {
  display: flex;
  justify-content: space-between;
}
.rasmmodal {
  border: 1px solid #bfbfbf;
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  width: 120px;
  height: 130px;
  div svg {
    color: #bfbfbf;
  }
}
.tabelmassiv {
  border: 1px solid #bababa;
  overflow: auto;
  height: calc(100vh - 560px);
  button {
    width: 20px;
    height: 20px;
  }
}
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
.n-table td{
  border-radius: 0px !important;
  padding: 10px;
  cursor: pointer;

}
.tableTR{
  border: 2px solid red !important;
}
.btninputs {
  display: flex;
  width: 50%;
}
</style>
