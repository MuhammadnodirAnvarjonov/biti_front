import{F as M}from"./Form-6dea16ac.js";import{E as O,G as V,u as G,r as _,k as L,b as r,o as p,c as h,e,w as a,l as b,a as t,f as s,J as d,N as m,g as k,F as $,m as q,t as x}from"./index-3c9fbc29.js";import{A}from"./AddCircleSharp-c9968127.js";import{C as E}from"./CreateTwotone-5a97c9d2.js";import{R as S}from"./RestoreFromTrashOutlined-d4f333b7.js";import"./Form-3c1e4b7f.js";import"./Form-56e3c339.js";import"./_plugin-vue_export-helper-c27b6911.js";const U={class:"cardheader"},J={class:"btninput"},P={class:"DataTable"},Q=t("thead",null,[t("tr",null,[t("th",{class:"tableThLeftRadius"},"№"),t("th",null,"Guruh nomi"),t("th",{class:"tableThRightRadius"})])],-1),j={class:"tableTdLeftRadius"},H={class:"tableTdRightRadius"},oe={__name:"Index",setup(K){const f=O(),y=V();G();const u=_(null),i=_(!1),C=o=>{u.value=o,i.value=!0},T=o=>{c(),i.value=!1},g=_(),c=()=>{b.get("/group/all").then(o=>{o&&(g.value=o.data)})},w=o=>{y.warning({title:"Ogohlantirish",content:"Ma'lumot o'chirilsinmi",positiveText:"O'chirish",negativeText:"Bekor qilish",onPositiveClick:()=>{b.delete("/group/delete/"+o).then(l=>{l&&c()}),f.success("O'chirish")},onNegativeClick:()=>{f.error("Bekor qilish")}})};return L(()=>{c()}),(o,l)=>{const R=r("n-input"),z=r("n-input-group"),N=r("n-modal"),B=r("n-table"),D=r("n-space"),F=r("n-card");return p(),h("div",null,[e(F,{class:"cardTable"},{default:a(()=>[t("div",U,[t("div",null,[e(s(d),{type:"error",size:"large",onClick:l[0]||(l[0]=n=>(i.value=!0,u.value=null))},{default:a(()=>[e(s(m),{size:"30"},{default:a(()=>[e(s(A))]),_:1}),k(" Qo'shish ")]),_:1})]),t("div",J,[e(z,null,{default:a(()=>[e(R,{size:"large"}),e(s(d),{size:"large",type:"error"},{default:a(()=>[k(" Tozalash ")]),_:1})]),_:1})])]),e(N,{show:i.value,"onUpdate:show":l[1]||(l[1]=n=>i.value=n),class:"custom-card",preset:"card",style:{width:"700px"},bordered:!1,size:"huge"},{default:a(()=>[e(M,{onGuruh:T,id:u.value},null,8,["id"])]),_:1},8,["show"]),t("div",P,[e(D,{vertical:""},{default:a(()=>[e(B,{striped:""},{default:a(()=>[Q,t("tbody",null,[(p(!0),h($,null,q(g.value,(n,v)=>(p(),h("tr",{key:v},[t("td",j,x(1+v),1),t("td",null,x(n.name),1),t("td",H,[e(s(d),{onClick:I=>C(n.id),tertiary:"",circle:"",color:"#0042ff",style:{border:"1px solid #0042ff","margin-right":"10px"}},{default:a(()=>[e(s(m),{size:"25"},{default:a(()=>[e(s(E))]),_:1})]),_:2},1032,["onClick"]),e(s(d),{onClick:I=>w(n.id),tertiary:"",circle:"",type:"error",style:{border:"1px solid #f93a3a","margin-right":"10px"}},{default:a(()=>[e(s(m),{size:"25"},{default:a(()=>[e(s(S))]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})])]),_:1})])}}};export{oe as default};
