import{F as O}from"./Form-8b088bec.js";import{E as V,G as I,r as d,u as L,k as $,b as o,o as p,c as h,e,w as s,l as b,a as t,f as m,g as k,F as q,m as A,t as x}from"./index-3c9fbc29.js";import{A as E}from"./AddCircleSharp-c9968127.js";import{C as S}from"./CreateTwotone-5a97c9d2.js";import{R as U}from"./RestoreFromTrashOutlined-d4f333b7.js";import"./_plugin-vue_export-helper-c27b6911.js";const G={class:"cardheader"},P={class:"btninput"},Q={class:"DataTable"},j=t("thead",null,[t("tr",null,[t("th",{class:"tableThLeftRadius"},"№"),t("th",null,"To'garak nomi"),t("th",{class:"tableThRightRadius"})])],-1),H={class:"tableTdLeftRadius"},J={class:"tableTdRightRadius"},se={__name:"Index",setup(K){const f=V(),y=I(),c=d(null),r=d(!1);L(),d();const T=a=>{c.value=a,r.value=!0},C=a=>{u(),r.value=!1},u=()=>{b.get("/bonus_student/all").then(a=>{a&&(g.value=a.data)})},w=a=>{y.warning({title:"Ogohlantirish",content:"Ma'lumot o'chirilsinmi",positiveText:"O'chirish",negativeText:"Bekor qilish",onPositiveClick:()=>{b.delete("/bonus_student/delete/"+a).then(n=>{n&&u()}),f.success("O'chirish")},onNegativeClick:()=>{f.error("Bekor qilish")}})},g=d();return $(()=>{u()}),(a,n)=>{const _=o("n-icon"),i=o("n-button"),R=o("n-input"),z=o("n-input-group"),B=o("n-modal"),D=o("n-table"),F=o("n-space"),M=o("n-card");return p(),h("div",null,[e(M,{class:"cardTable"},{default:s(()=>[t("div",G,[t("div",null,[e(i,{type:"error",size:"large",onClick:n[0]||(n[0]=l=>(r.value=!0,c.value=null))},{default:s(()=>[e(_,{size:"30"},{default:s(()=>[e(m(E))]),_:1}),k(" Qo'shish ")]),_:1})]),t("div",P,[e(z,null,{default:s(()=>[e(R,{size:"large"}),e(i,{size:"large",type:"error"},{default:s(()=>[k(" Tozalash ")]),_:1})]),_:1})])]),e(B,{show:r.value,"onUpdate:show":n[1]||(n[1]=l=>r.value=l),class:"custom-card",preset:"card",style:{width:"700px"},bordered:!1,size:"huge"},{default:s(()=>[e(O,{onBonustalaba:C,id:c.value},null,8,["id"])]),_:1},8,["show"]),t("div",Q,[e(F,{vertical:""},{default:s(()=>[e(D,{striped:""},{default:s(()=>[j,t("tbody",null,[(p(!0),h(q,null,A(g.value,(l,v)=>(p(),h("tr",{key:v},[t("td",H,x(1+v),1),t("td",null,x(l.name),1),t("td",J,[e(i,{onClick:N=>T(l.id),tertiary:"",circle:"",color:"#0042ff",style:{border:"1px solid #0042ff","margin-right":"10px"}},{default:s(()=>[e(_,{size:"25"},{default:s(()=>[e(m(S))]),_:1})]),_:2},1032,["onClick"]),e(i,{onClick:N=>w(l.id),tertiary:"",circle:"",type:"error",style:{border:"1px solid #f93a3a","margin-right":"10px"}},{default:s(()=>[e(_,{size:"25"},{default:s(()=>[e(m(U))]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})])]),_:1})])}}};export{se as default};