<template>
  <div>
    <ogohlantirish class="ogoh" />
    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
      <n-button color="#00A65A" type="large">
        <n-icon size="20px">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M9 12h6"></path><path d="M12 9v6"></path></g></svg>
        </n-icon>
        Ma'lumotnoma olish
      </n-button>
      <div style="width: 33%; display: flex; align-items: center;">
        <label style="width: 250px; font-size: 16px; font-weight: 600; font-family: sans-serif">O'quv yilini tanlang</label>
        <n-select
        label-field="name"
        value-field="id"
        filterable
        clearable
      />
      </div>
    </div>
    <div class="jadval">
        <n-space vertical style="border-radius: 2px;">
          <n-data-table
        :columns="columns"
        :data="data"
        class="table"
        @update:sorter="handleSorterChange"
    />
        </n-space>
      </div>
  </div>
</template>
<script setup>

import { h, defineComponent, ref, reactive, onUpdated } from "vue";
import { NTag, NButton, useMessage } from "naive-ui";
import {FileDownloadRound} from "@vicons/material";
import ogohlantirish from '../../../components/ogohlantirish.vue'
const message = useMessage();
const hujjatRaqami = {
  title: 'Hujjat raqami',
  key: 'hujjat_raqami',
  sortOrder: true,
  sorter: 'default'
}
const oquvYili = {
  title: `O'quv yili`,
  key: 'oquv_yili',
  sortOrder: true,
  sorter: 'default'
}
const kurs = {
  title: 'Kurs',
  key: 'kurs',
  sortOrder: true,
  sorter: 'default'
}

// const action = {
//   title: 'Fayl nomi',
//   key: 'fayl_nomi',
//   sortOrder: true,
//   sorter: 'default'
// }
const hujjatSanasi = {
  title: 'Hujjat sanasi',
  key: 'hujjat_sanasi',
  sortOrder: false,
  sorter (rowA, rowB) {
    return rowA.age - rowB.age
  }
}

const columns = [
  hujjatRaqami,
  hujjatSanasi,
  oquvYili,
  kurs,
  {
    title: 'Semestr',
    key: 'semestr',
    defaultFilter: ['1-semestr', '2-semestr', '3-semestr', '4-semestr', '5-semestr'],
    filterOptions: [
      {
        label: '1-semestr',
        value: '1-semestr'
      },
      {
        label: '2-semestr',
        value: '2'
      },
      {
        label: '3-semestr',
        value: '3'
      },
      {
        label: '4-semestr',
        value: '4'
      },
      {
        label: '5-semestr',
        value: '5'
      }
    ],
    filter (value, row) {
      return row.semestr.indexOf(value) >= 0
    }
  },
  {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => play(row)
          },
          { default: () => ('file') }
        );
      }
    }
]
const nameColumnReactive = reactive(hujjatRaqami)
    const ageColumnReactive = reactive(hujjatSanasi)
    const oquvYiliReactive = reactive(oquvYili)
    const kursReactive = reactive(kurs)
    // const actionReactive = reactive(action)
    const columnsRef = ref(columns)
    const data = reactive([
      {
        key: '1',
        hujjat_raqami: 'hujjat-1',
        hujjat_sanasi: '07.10.2023',
        oquv_yili: '2022-2023',
        kurs: '1-kurs',
        semestr: "1-semestr"
      }
    ]);

onUpdated(() => {
  handleSorterChange = (sorter) => {
        columnsRef.value.forEach((column) => {
          /** column.sortOrder !== undefined means it is uncontrolled */
          if (column.sortOrder === undefined) return
          if (!sorter) {
            column.sortOrder = false
            return
          }
          if (column.key === sorter.columnKey) column.sortOrder = sorter.order
          else column.sortOrder = false
        })
      }
})

</script>
<style lang="scss" scoped>
.table:hover{
  background-color: aliceblue;
}
.jadval{
  width: 100%;
  min-height: 470px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
}
.ogoh{
        position: absolute;
        left: 250px;
        top: 100px;
        z-index: 100;
    }
</style>