import{F as O}from"./Form-f4621747.js";import{E as V,G as I,r as d,u as L,k as $,b as s,o as p,c as h,e,w as o,l as k,a as t,f as m,g as x,F as q,m as A,t as f}from"./index-3c9fbc29.js";import{A as E}from"./AddCircleSharp-c9968127.js";import{C as S}from"./CreateTwotone-5a97c9d2.js";import{R as U}from"./RestoreFromTrashOutlined-d4f333b7.js";import"./Form-d27b1a57.js";import"./_plugin-vue_export-helper-c27b6911.js";const X={class:"cardheader"},G={class:"btninput"},P={class:"DataTable"},Q=t("thead",null,[t("tr",null,[t("th",{class:"tableThLeftRadius"},"№"),t("th",null,"Xona"),t("th",null,"Bino"),t("th",{class:"tableThRightRadius"})])],-1),j={class:"tableTdLeftRadius"},H={class:"tableTdRightRadius"},ae={__name:"Index",setup(J){const g=V(),y=I(),c=d(null),r=d(!1);L(),d();const C=a=>{c.value=a,r.value=!0},T=a=>{u(),r.value=!1},u=()=>{k.get("/room/all").then(a=>{a&&(v.value=a.data)})},w=a=>{y.warning({title:"Ogohlantirish",content:"Ma'lumot o'chirilsinmi",positiveText:"O'chirish",negativeText:"Bekor qilish",onPositiveClick:()=>{k.delete("/room/delete/"+a).then(l=>{l&&u()}),g.success("O'chirish")},onNegativeClick:()=>{g.error("Bekor qilish")}})},v=d();return $(()=>{u()}),(a,l)=>{const _=s("n-icon"),i=s("n-button"),R=s("n-input"),z=s("n-input-group"),B=s("n-modal"),D=s("n-table"),F=s("n-space"),M=s("n-card");return p(),h("div",null,[e(M,{class:"cardTable"},{default:o(()=>[t("div",X,[t("div",null,[e(i,{type:"error",size:"large",onClick:l[0]||(l[0]=n=>(r.value=!0,c.value=null))},{default:o(()=>[e(_,{size:"30"},{default:o(()=>[e(m(E))]),_:1}),x(" Qo'shish ")]),_:1})]),t("div",G,[e(z,null,{default:o(()=>[e(R,{size:"large"}),e(i,{size:"large",type:"error"},{default:o(()=>[x(" Tozalash ")]),_:1})]),_:1})])]),e(B,{show:r.value,"onUpdate:show":l[1]||(l[1]=n=>r.value=n),class:"custom-card",preset:"card",style:{width:"700px"},bordered:!1,size:"huge"},{default:o(()=>[e(O,{onXona:T,id:c.value},null,8,["id"])]),_:1},8,["show"]),t("div",P,[e(F,{vertical:""},{default:o(()=>[e(D,{striped:""},{default:o(()=>[Q,t("tbody",null,[(p(!0),h(q,null,A(v.value,(n,b)=>(p(),h("tr",{key:b},[t("td",j,f(1+b),1),t("td",null,f(n.name),1),t("td",null,f(n.bino.name),1),t("td",H,[e(i,{onClick:N=>C(n.id),tertiary:"",circle:"",color:"#0042ff",style:{border:"1px solid #0042ff","margin-right":"10px"}},{default:o(()=>[e(_,{size:"25"},{default:o(()=>[e(m(S))]),_:1})]),_:2},1032,["onClick"]),e(i,{onClick:N=>w(n.id),tertiary:"",circle:"",type:"error",style:{border:"1px solid #f93a3a","margin-right":"10px"}},{default:o(()=>[e(_,{size:"25"},{default:o(()=>[e(m(U))]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})])]),_:1})])}}};export{ae as default};
