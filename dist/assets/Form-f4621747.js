import{j as q,u as I,r as v,k as L,b as i,o as g,c as k,a as t,e as a,w as s,f as M,g as f,F as A,m as O,t as F,l as m,p as X,h as E}from"./index-3c9fbc29.js";import{F as Q}from"./Form-d27b1a57.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{A as H}from"./AddCircleSharp-c9968127.js";const c=u=>(X("data-v-1740c64b"),u=u(),E(),u),J=c(()=>t("div",{class:"createheader"},[t("span",null,"Xona qo'shish")],-1)),K={class:"classinputlar"},P={style:{display:"flex","justify-content":"space-between"}},W={style:{width:"49%"}},Y=c(()=>t("label",null,"Xona",-1)),Z=c(()=>t("label",null,"Qavat",-1)),ee={class:"nuqtabtns",style:{width:"49%"}},te=c(()=>t("label",null,"Bino",-1)),ae={style:{display:"flex","justify-content":"space-between","margin-bottom":"10px"}},oe={class:"btninputs"},le={class:"DataTable"},se=c(()=>t("thead",null,[t("tr",null,[t("th",{class:"tableThLeftRadius",style:{width:"10px"}},"№"),t("th",{class:"tableThRightRadius"},"Nomi")])],-1)),ne=["onClick"],ie={class:"tableTdLeftRadius"},de={class:"tableTdRightRadius"},ue={class:"saqlashbtn"},re={__name:"Form",props:["id"],emits:["xona"],setup(u,{emit:h}){const p=u;q(),I();const d=v(!1),r=v(!1),b=v([]),n=v({name:"",etaj:"",bino_id:null}),w=(o,e)=>{e?(x(),n.value.bino_id=e.id,d.value=!1,r.value=!1):(d.value=!1,r.value=!1)},T=()=>{p.id?m.patch("room/update/"+p.id,n.value).then(o=>{o.data&&h("xona",!1)}):m.post("room/create",n.value).then(o=>{o.data&&h("xona","room_id",o.data)})},x=()=>{m.get("/bino/all").then(o=>{o&&(b.value=o.data)})},j=()=>{n.value={name:"",etaj:"",bino_id:null}},D=()=>{p.id&&m.get("room/one/"+p.id).then(o=>{o&&(n.value=o.data)})},N=()=>{h("xona",!1)};return L(()=>{D(),x()}),(o,e)=>{const y=i("n-input"),S=i("n-icon"),_=i("n-button"),B=i("n-input-group"),U=i("n-table"),V=i("n-space"),z=i("n-card"),C=i("n-modal"),$=i("n-select");return g(),k("div",null,[J,t("div",K,[t("div",P,[t("div",W,[Y,a(y,{type:"text",value:n.value.name,"onUpdate:value":e[0]||(e[0]=l=>n.value.name=l),clearable:"",size:"large",placeholder:"Nomini kiriting"},null,8,["value"]),Z,a(y,{type:"text",value:n.value.etaj,"onUpdate:value":e[1]||(e[1]=l=>n.value.etaj=l),clearable:"",size:"large",placeholder:"Nomini kiriting"},null,8,["value"])]),t("div",ee,[te,t("button",{onClick:e[2]||(e[2]=l=>(d.value=!0,o.keyword="family_status_id"))}," ... "),a(C,{show:d.value,"onUpdate:show":e[5]||(e[5]=l=>d.value=l)},{default:s(()=>[a(z,{style:{width:"1000px"},title:"Ro'yxat",bordered:!0,role:"dialog","aria-modal":"true",closable:"",onClose:e[4]||(e[4]=l=>d.value=!1)},{default:s(()=>[t("div",ae,[a(_,{color:"#c63131",size:"large",ghost:"",onClick:e[3]||(e[3]=l=>r.value=!0)},{default:s(()=>[a(S,{size:"30"},{default:s(()=>[a(M(H))]),_:1})]),_:1}),t("div",oe,[a(B,null,{default:s(()=>[a(y,{size:"large"}),a(_,{size:"large",type:"error"},{default:s(()=>[f(" Tozalash ")]),_:1})]),_:1})])]),t("div",le,[a(V,{vertical:""},{default:s(()=>[a(U,{striped:""},{default:s(()=>[se,t("tbody",null,[(g(!0),k(A,null,O(b.value,(l,R)=>(g(),k("tr",{key:R,onClick:_e=>w(o.keyword,l)},[t("td",ie,F(1+R),1),t("td",de,F(l.name),1)],8,ne))),128))])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]),a(C,{show:r.value,"onUpdate:show":e[6]||(e[6]=l=>r.value=l)},{default:s(()=>[a(z,{style:{width:"600px"},bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:s(()=>[a(Q,{onBino:w})]),_:1})]),_:1},8,["show"]),a($,{value:n.value.bino_id,"onUpdate:value":e[7]||(e[7]=l=>n.value.bino_id=l),size:"large",options:b.value,"label-field":"name","value-field":"id",filterable:"",clearable:""},null,8,["value","options"])])]),t("div",ue,[a(_,{onClick:N,size:"large"},{default:s(()=>[f(" Ortga ")]),_:1}),a(_,{onClick:j,size:"large",type:"error"},{default:s(()=>[f(" Tozalash ")]),_:1}),a(_,{onClick:T,size:"large",type:"success"},{default:s(()=>[f(" Saqlash ")]),_:1})])])])}}},me=G(re,[["__scopeId","data-v-1740c64b"]]);export{me as F};
