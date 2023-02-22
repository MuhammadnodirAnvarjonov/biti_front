<template>
  <div>
    <ogohlantirish class="ogoh" />
    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
      <n-button color="#0042ff">
        Buyurtma
      </n-button>
      <div style="width: 40%; display: flex; align-items: center;">
        <label style="width: 250px; font-size: 16px; font-weight: 600;">O'quv yilini tanlang</label>
        <n-select
        size="medium"
        label-field="name"
        value-field="id"
        filterable
        clearable
      />
      </div>
    </div>
    <div>
        <n-space vertical style="border: 1px solid #bdbdbd; border-radius: 6px;">
          <n-table
            type="small"
            striped
            :bottom-bordered="true"
            :bordered="false"
            :single-line="false"
          >
            <thead>
              <tr>
                <th style="width: 30px">№</th>
                <th>O‘quv yili</th>
                <th>Shartnoma turi</th>
                <th>Shartnoma raqami</th>
                <th>To'landi</th>
                <th>Holati</th>
                <th>Qarz</th>
                <th>Schet-faktura</th>
                <th style="width: 50px">Fayl</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <n-button
                    tertiary
                    circle
                    color="#0042ff"
                    style="border: 1px solid #0042ff; margin-right: 10px"
                  >
                    <n-icon size="25">
                      <DownloadFilled />
                    </n-icon>
                  </n-button>
                </td>
              </tr>
            </tbody>
          </n-table>
        </n-space>
      </div>
    <!-- <n-data-table :bordered="true" :columns="columns" :data="data" /> -->
    <!-- <n-data-table
      :bordered="true"
      size="large"
      :single-line="false"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    /> -->
  </div>
</template>
<script setup>
import { h, defineComponent, ref } from "vue";
import { NTag, NButton, useMessage } from "naive-ui";
import {DownloadFilled} from "@vicons/material";
import ogohlantirish from '../../../components/ogohlantirish.vue'
const message = useMessage();

const columns = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "age",
    key: "age",
  },
  {
    title: "address",
    key: "address",
  },

  // {
  //   title: " ",
  //   key: " ",
  //   render(row) {
  //     const tags = row.tags.map((tagKey) => {
  //       return h(
  //         NTag,
  //         {
  //           style: {
  //             marginRight: "6px"
  //           },
  //           type: "info",
  //           bordered: false
  //         },
  //         {
  //           default: () => tagKey
  //         }
  //       );
  //     });
  //     return tags;
  //   }
  // },
  {
    title: "Action",
    key: "actions",
    render(row) {
      return h(
        NButton,
        {
          size: "large",
          onClick: (e) => {},
        },
        { default: () => "Send" }
      );
    },
  },
];
const data = [
  {
    key: 0,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: 0,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
];

const pagination = ref({
  page: 2,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
  onChange: (page) => {
    pagination.value.page = page;
  },
  onUpdatePageSize: (pageSize) => {
    pagination.value.pageSize = pageSize;
    pagination.value.page = 1;
  },
});
</script>
<!-- <script>
import { defineComponent, ref } from "vue";
const createColumns = () => {
  return [
    {
      title: "Name",
      key: "key"
    },
    {
      title: "Age",
      key: "title"
    },
    {
      title: "Address",
      key: "adres"
    },
    {
      title: "Tags",
      key: "tags"
    },
    {
      title: "Action",
      key: "actions"
    }
  ];
};

export default defineComponent({
  setup() {
    return {
      data: ref([{
      title: "Name",
      key: "name",
      adres: "adres",
      tags: "tags"
    },
    {
      title: "Age",
      key: "age",
      adres: "adres",
      tags: "tags"
    }]),
      columns: createColumns()
    };
  }
})
</script> -->
