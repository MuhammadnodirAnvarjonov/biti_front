import{F as U}from"./Form-3c1e4b7f.js";import{j,u as B,r as p,k as D,b as u,o as b,c as y,a as t,e as s,w as l,f as L,g as v,F as M,m as A,t as T,l as f,p as O,h as E}from"./index-3c9fbc29.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{A as J}from"./AddCircleSharp-c9968127.js";const h=r=>(O("data-v-791b0829"),r=r(),E(),r),P=h(()=>t("div",{class:"createheader"},[t("span",null,"Guruh qo'shish")],-1)),Q={class:"classinputlar"},W={style:{display:"flex","justify-content":"space-between"}},X={style:{width:"49%"}},Y=h(()=>t("label",null,"Guruh nomi",-1)),Z={class:"nuqtabtn"},ee=h(()=>t("label",null,"Kursi",-1)),te={style:{display:"flex","justify-content":"space-between","margin-bottom":"10px"}},se={class:"btninputs"},oe={class:"DataTable"},ae=h(()=>t("thead",null,[t("tr",null,[t("th",{class:"tableThLeftRadius",style:{width:"10px"}},"№"),t("th",{class:"tableThRightRadius"},"Nomi")])],-1)),le=["onClick"],ne={class:"tableTdLeftRadius"},ue={class:"tableTdRightRadius"},ie={class:"saqlashbtn"},de={__name:"Form",props:["id"],emits:["guruh"],setup(r,{emit:m}){const _=r;j(),B();const g=p([]),i=p(!1),d=p(!1),n=p({name:"",course_id:null,direction_id:0}),k=(o,e)=>{e?(w(),n.value.course_id=e.id,i.value=!1,d.value=!1):(i.value=!1,d.value=!1)},F=()=>{_.id?f.patch("group/update/"+_.id,n.value).then(o=>{o.data&&m("guruh",!1)}):f.post("group/create",n.value).then(o=>{o.data&&(n.value={name:"",course_id:null},m("guruh","group_id",o.data))})},w=()=>{f.get("/course/all").then(o=>{o&&(g.value=o.data)})},S=()=>{n.value={name:"",course_id:null}},$=()=>{_.id&&f.get("group/one/"+_.id).then(o=>{o&&(n.value=o.data)})},G=()=>{m("guruh",!1)};return D(()=>{$(),w()}),(o,e)=>{const x=u("n-input"),V=u("n-icon"),c=u("n-button"),q=u("n-input-group"),I=u("n-table"),K=u("n-space"),z=u("n-card"),C=u("n-modal"),N=u("n-select");return b(),y("div",null,[P,t("div",Q,[t("div",W,[t("div",X,[Y,s(x,{type:"text",value:n.value.name,"onUpdate:value":e[0]||(e[0]=a=>n.value.name=a),clearable:"",size:"large",placeholder:"Guruhni kiriting"},null,8,["value"])]),t("div",Z,[ee,t("button",{onClick:e[1]||(e[1]=a=>d.value=!0)},"..."),s(C,{show:d.value,"onUpdate:show":e[4]||(e[4]=a=>d.value=a)},{default:l(()=>[s(z,{style:{width:"900px",padding:"0px !important"},bordered:!1,title:"Ro'yxat",size:"huge",role:"dialog","aria-modal":"true",closable:"",onClose:e[3]||(e[3]=a=>d.value=!1)},{default:l(()=>[t("div",te,[s(c,{color:"#c63131",size:"large",ghost:"",onClick:e[2]||(e[2]=a=>i.value=!0)},{default:l(()=>[s(V,{size:"30"},{default:l(()=>[s(L(J))]),_:1})]),_:1}),t("div",se,[s(q,null,{default:l(()=>[s(x,{size:"large"}),s(c,{size:"large",type:"error"},{default:l(()=>[v(" Tozalash ")]),_:1})]),_:1})])]),t("div",oe,[s(K,{vertical:""},{default:l(()=>[s(I,{striped:""},{default:l(()=>[ae,t("tbody",null,[(b(!0),y(M,null,A(g.value,(a,R)=>(b(),y("tr",{class:"tableTR",onClick:re=>k(o.keyword,a),key:R},[t("td",ne,T(1+R),1),t("td",ue,T(a.name),1)],8,le))),128))])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]),s(C,{show:i.value,"onUpdate:show":e[6]||(e[6]=a=>i.value=a)},{default:l(()=>[s(z,{style:{width:"600px"},bordered:!1,size:"huge",role:"dialog","aria-modal":"true",closable:"",onClose:e[5]||(e[5]=a=>i.value=!1)},{default:l(()=>[s(U,{onKurs:k})]),_:1})]),_:1},8,["show"]),s(N,{options:g.value,value:n.value.course_id,"onUpdate:value":e[7]||(e[7]=a=>n.value.course_id=a),size:"large","label-field":"name","value-field":"id",filterable:"",clearable:""},null,8,["options","value"])])]),t("div",ie,[s(c,{onClick:G,size:"large"},{default:l(()=>[v(" Ortga ")]),_:1}),s(c,{onClick:S,size:"large",type:"error"},{default:l(()=>[v(" Tozalash ")]),_:1}),s(c,{onClick:F,size:"large",type:"success"},{default:l(()=>[v(" Saqlash ")]),_:1})])])])}}},fe=H(de,[["__scopeId","data-v-791b0829"]]);export{fe as F};
