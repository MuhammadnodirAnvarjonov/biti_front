import{F as N}from"./Form-e6d85036.js";import{E as O,G as V,r as d,u as L,k as $,b as o,o as p,c as m,e,w as a,l as b,a as t,f as h,g as y,F as j,m as q,t as k}from"./index-3c9fbc29.js";import{A}from"./AddCircleSharp-c9968127.js";import{C as E}from"./CreateTwotone-5a97c9d2.js";import{R as S}from"./RestoreFromTrashOutlined-d4f333b7.js";import"./_plugin-vue_export-helper-c27b6911.js";const U={class:"cardheader"},G={class:"btninput"},P={class:"DataTable"},Q=t("thead",null,[t("tr",null,[t("th",{class:"tableThLeftRadius"},"№"),t("th",null,"Ilmiy darajasi"),t("th",{class:"tableThRightRadius"})])],-1),H={class:"tableTdLeftRadius"},J={class:"tableTdRightRadius"},ae={__name:"Index",setup(K){const f=O(),x=V(),c=d(null),r=d(!1);L(),d();const C=s=>{c.value=s,r.value=!0},T=s=>{u(),r.value=!1},u=()=>{b.get("/academic_degree/all").then(s=>{s&&(g.value=s.data)})},w=s=>{x.warning({title:"Ogohlantirish",content:"Ma'lumot o'chirilsinmi",positiveText:"O'chirish",negativeText:"Bekor qilish",onPositiveClick:()=>{b.delete("/academic_degree/delete/"+s).then(n=>{n&&u()}),f.success("O'chirish")},onNegativeClick:()=>{f.error("Bekor qilish")}})},g=d();return $(()=>{u()}),(s,n)=>{const _=o("n-icon"),i=o("n-button"),R=o("n-input"),z=o("n-input-group"),B=o("n-modal"),D=o("n-table"),F=o("n-space"),I=o("n-card");return p(),m("div",null,[e(I,{class:"cardTable"},{default:a(()=>[t("div",U,[t("div",null,[e(i,{type:"error",size:"large",onClick:n[0]||(n[0]=l=>(r.value=!0,c.value=null))},{default:a(()=>[e(_,{size:"30"},{default:a(()=>[e(h(A))]),_:1}),y(" Qo'shish ")]),_:1})]),t("div",G,[e(z,null,{default:a(()=>[e(R,{size:"large"}),e(i,{size:"large",type:"error"},{default:a(()=>[y(" Tozalash ")]),_:1})]),_:1})])]),e(B,{show:r.value,"onUpdate:show":n[1]||(n[1]=l=>r.value=l),class:"custom-card",preset:"card",style:{width:"700px"},bordered:!1,size:"huge"},{default:a(()=>[e(N,{onIlmiydaraja:T,id:c.value},null,8,["id"])]),_:1},8,["show"]),t("div",P,[e(F,{vertical:""},{default:a(()=>[e(D,{striped:""},{default:a(()=>[Q,t("tbody",null,[(p(!0),m(j,null,q(g.value,(l,v)=>(p(),m("tr",{key:v},[t("td",H,k(1+v),1),t("td",null,k(l.name),1),t("td",J,[e(i,{onClick:M=>C(l.id),tertiary:"",circle:"",color:"#0042ff",style:{border:"1px solid #0042ff","margin-right":"10px"}},{default:a(()=>[e(_,{size:"25"},{default:a(()=>[e(h(E))]),_:1})]),_:2},1032,["onClick"]),e(i,{onClick:M=>w(l.id),tertiary:"",circle:"",type:"error",style:{border:"1px solid #f93a3a","margin-right":"10px"}},{default:a(()=>[e(_,{size:"25"},{default:a(()=>[e(h(S))]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})])]),_:1})])}}};export{ae as default};
