import{j as k,u as b,r as x,k as w,b as p,o as z,c as C,a,e as l,w as u,g as _,l as d,p as F,h as I}from"./index-3c9fbc29.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const r=s=>(F("data-v-95f90209"),s=s(),I(),s),S=r(()=>a("div",{class:"createheader"},[a("span",null,"Ma'lumati boyicha mutahasiligi")],-1)),V={class:"classinputlar"},B={style:{display:"flex","justify-content":"space-between"}},M={style:{width:"49%"}},j=r(()=>a("label",null,"Ma'lumoti bo'yicha mutahasisligi",-1)),q={class:"saqlashbtn"},D={__name:"Form",props:["id"],emits:["mutahasiligi"],setup(s,{emit:n}){const o=s;k(),b();const t=x({name:""}),m=()=>{o.id?d.patch("special_information/update/"+o.id,t.value).then(e=>{e.data&&n("mutahasiligi",!1)}):d.post("special_information/create",t.value).then(e=>{e.data&&n("mutahasiligi","specialty_id",e.data)})},h=()=>{t.value={name:""}},f=()=>{o.id&&d.get("special_information/one/"+o.id).then(e=>{e&&(t.value=e.data)})},v=()=>{n("mutahasiligi",!1)};return w(()=>{f()}),(e,i)=>{const y=p("n-input"),c=p("n-button");return z(),C("div",null,[S,a("div",V,[a("div",B,[a("div",M,[j,l(y,{type:"text",value:t.value.name,"onUpdate:value":i[0]||(i[0]=g=>t.value.name=g),clearable:"",size:"large",placeholder:"Nomini kiriting"},null,8,["value"])])]),a("div",q,[l(c,{onClick:v,size:"large"},{default:u(()=>[_(" Ortga ")]),_:1}),l(c,{onClick:h,size:"large",type:"error"},{default:u(()=>[_(" Tozalash ")]),_:1}),l(c,{onClick:m,size:"large",type:"success"},{default:u(()=>[_(" Saqlash ")]),_:1})])])])}}},T=N(D,[["__scopeId","data-v-95f90209"]]);export{T as F};