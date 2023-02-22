<script setup>
import { computed } from "vue";
import App from "../App.vue";
import { darkTheme, lightTheme } from "naive-ui";

const themeOverrides = {
  common: {
    borderColor: "#dcdcdc",
    // scrollbarWidth: "3px",
    scrollbarHeight: "3px",
    scrollbarBorderRadius: "3px",
    // tableColor: "rgba(230, 140, 142, 1)",
    // modalColor: "rgba(155, 155, 228, 1)",
    // cardColor: "rgba(34, 34, 41, 1)",
    hoverColor: "rgba(254, 62, 62, 0.22)",
    // tdPadding: "1px",
    // tableHeaderColor: "#ff8383",
    // tableColorHover: "rgba(254, 62, 62, 0.22)",
    // primaryColor: "#ff8383",
    // infoColor: "#0042ff",
    // primaryColorHover: "#EC8A8AFF",
    // primaryColorPressed: "#CE5A5AFF",
    // primaryColorSuppl: "rgba(148, 42, 42, 1)",
    // infoColor: "#E87070FF",
    // infoColorHover: "#EC8A8AFF",
    // textColor2: "#000",
    borderRadius: "10px",
    // modalColor: "#fff",
    fontWeight: "700",
    fontSize: "16px",
    // lineHeight: "20px",
    // textColorDisabled: "#000",
  },
  Input: {
    borderRadius: "10px",
    heightLarge: "40px"
    // borderHover: "#EC8A8AFF",
    // borderWarning: "red",
    // borderHoverWarning: "red",
    // borderFocusWarning: "red",
    // borderFocus: "#EC8A8AFF",
    // boxShadowFocus: "#EC8A8AFF",
    // loadingColor: "red",
  },
  Select: {

    // borderRadius: "10px",
  },
  LoadingBar: {
    colorLoading: "red"
  },
  Menu: {
    // testColor: "#fff",
    // // itemTextColor: "#fff",
    // // groupTextColor: "#fff",
    // itemColorActive: "rgba(252, 43, 47, 0.15)",
    // itemTextColorHover: "#000",
    // itemTextColorActive: "rgb(250 78 78)",
    // itemTextColorActiveHover: "rgba(251, 171, 171, 1)",
    // itemIconColorHover: "rgba(251, 171, 171, 1)",
    // itemIconColorActive: "#ff4343",
    // // itemHeight: "30px",
    // // itemIconColor: "#fff",
    // // arrowColor: "#fff",
    // arrowColorHover: "#DC6062FF",
    // arrowColorActive: "FEBCBCFF",
  },
  Card: {
    paddingSmall: "15px 15px",
    color: "#fff",
    // colorModal: "grey",
    borderColorModal: "#fff",
    // borderColor: "red",
    titleFontWeight: "600",
    borderRadius: "20px",
  },
  Modal: {
    boxShadow: '-5px 5px 20px -5px #ccc;'
  },
  Dropdown: {
    // optionColorHover: "rgba(254, 62, 62, 0.22)"
  },
  DataTable: {
    thPaddingSmall: "5px",
    tdColorPopover: "rgb(72, 72, 78)",
    tdColorStriped: "#41414108",
    // tdColorStripedPopover: "rgba(81, 81, 87, 1)",
    // borderColorPopover: "#000",
    // borderColor: "#fff"
  },
  // Modal: {
  //   color: "rgba(41, 41, 198, 1)"
  // },
  Table: {
    // borderColor: "none",
    thColor: "#F01D50",
    thTextColor: "#fff",
    thColorModal: "#ff7979",
    borderRadius: "10px",
    // thColorPopover: "red",
    thFontWeight: "700",
    // tdColorStripedPopover: "#000",
    tdColorHover: "rgba(70, 70, 88, 1)",
    // thPaddingLarge: "7px",
    tdPaddingMedium: "7px 7px",
    // tdPaddingLarge: "5px",
    // tdColorModal: "rgba(60, 60, 75, 1)",
    // tdColorPopover: "rgba(94, 94, 142, 1)",
    // tdColorStriped: "#ff000014",
    tdColorStriped: "#41414108",
    // tdColor: "#dcdcdc08",
    tdColorStripedModal: "rgba(100, 100, 130, 1)",
    // tdTextColor: "rgba(0, 0, 0)",
    borderColorPopover: "rgb(157 157 157)",
    borderColorModal: "rgb(157 157 157)",
    lineHeight: "1",
    // fontSizeLarge: "18px",
    fontSizeMedium: "18px",
    // fontSizeSmall: "18px",
    thPaddingMedium: "14px 5px",
    // thPaddingSmall: "0px",
  },
  Button: {
    // textColor: '#0922e3',
    fontSizeLarge: "18px",
    heightLarge: "45px",
    paddingLarge: "10px 20px",
    paddingRoundLarge: "20px",
    borderRadiusLarge: "10px",
  },
  Collapse: {},
  Select: {
    peers: {
      InternalSelection: {
        // textColor1: '#e57272',
        //   textColor: '#0922e3'
      },
    },
  },

  Tab: {
    background: "blue",
  },
  // ...
};
const uzUz = {
  name: "uz-UZ",
  global: {
    undo: "Bekor qilish",
    redo: "Qayta qiling",
    confirm: "Tasdiqlash",
  },
  Popconfirm: {
    positiveText: "Tasdiqlash",
    negativeText: "Bekor qilish",
  },
  Cascader: {
    placeholder: "Iltimos tanlang",
    loading: "Yuklanmoqda",
    loadingRequiredMessage: (label) =>
      `Belgilashdan oldin ${label} ning barcha ichki elementlarini tanlang.`,
  },
  Time: {
    dateFormat: "dd.MM.yyyy",
    dateTimeFormat: "dd.MM.yyyy HH:mm:ss",
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "dd.MM.yyyy HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Tozalash",
    now: "Hozir",
    confirm: "Tasdiqlash",
    selectTime: "Vaqtni tanlang",
    selectDate: "Sanani tanlang",
    datePlaceholder: "Sanani tanlang",
    datetimePlaceholder: "Sana va vaqtni tanlang",
    monthPlaceholder: "Oyni tanlang",
    yearPlaceholder: "Yilni tanlang",
    quarterPlaceholder: "Chorakni tanlang",
    startDatePlaceholder: "Boshlanish sanasi",
    endDatePlaceholder: "Tugash sanasi",
    startDatetimePlaceholder: "Boshlanish sanasi va vaqti",
    endDatetimePlaceholder: "Tugash sanasi va vaqti",
    monthBeforeYear: true,
    firstDayOfWeek: 6,
    today: "Bugun",
  },
  DataTable: {
    checkTableAll: "Jadvaldagi barchasini tanlash",
    uncheckTableAll: "Jadvaldagi barcha tanlovni olib tashlash",
    confirm: "Tasdiqlash",
    clear: "Tozalash",
  },
  Transfer: {
    sourceTitle: "Manba",
    targetTitle: "Maqsad",
  },
  Empty: {
    description: "Maʼlumot yoʻq",
  },
  Select: {
    placeholder: "Iltimos tanlang",
  },
  TimePicker: {
    placeholder: "Vaqtni tanlang",
    positiveText: "OK",
    negativeText: "Bekor qilish",
    now: "Hozir",
  },
  Pagination: {
    goto: "O'tish",
    selectionSuffix: "sahifa",
  },
  DynamicTags: {
    add: "Qo'shish",
  },
  Log: {
    loading: "Yuklanmoqda",
  },
  Input: {
    placeholder: "Iltimos, kiriting",
  },
  InputNumber: {
    placeholder: "Iltimos, kiriting",
  },
  DynamicInput: {
    create: "Yaratmoq",
  },
  ThemeEditor: {
    title: "Mavzu muharriri",
    clearAllVars: "Barcha o'zgaruvchilarni tozalash",
    clearSearch: "Qidiruvni tozalash",
    filterCompName: "Filtr komponenti nomi",
    filterVarName: "Filter Variable Name",
    import: "Import",
    export: "Export",
    restore: "Reset to Default",
  },
  // TODO: translation
  Image: {
    tipPrevious: "Oldingi rasm (←)",
    tipNext: "Keyingi rasm (→)",
    tipCounterclockwise: "Soat miliga teskari",
    tipClockwise: "Soat yo'nalishi bo'yicha",
    tipZoomOut: "Kichraytirish",
    tipZoomIn: "Kattalashtirish",
    tipClose: "Yopish (Esc)",
  },
};
</script>
<template>
  <n-config-provider
    :theme="lightTheme"
    :locale="uzUz"
    :theme-overrides="themeOverrides"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-message-provider>
          <n-notification-provider>
            <n-loading-bar-provider>
              <App />
            </n-loading-bar-provider>
          </n-notification-provider>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
