import{F as O}from"./Form-e19a142a.js";import{E as V,G as I,r as c,u as L,j as $,k as q,b as o,o as p,c as h,e,w as a,l as b,a as t,f as m,g as k,F as A,m as E,t as x}from"./index-3c9fbc29.js";import{A as S}from"./AddCircleSharp-c9968127.js";import{C as U}from"./CreateTwotone-5a97c9d2.js";import{R as j}from"./RestoreFromTrashOutlined-d4f333b7.js";import"./_plugin-vue_export-helper-c27b6911.js";const G={class:"cardheader"},P={class:"btninput"},Q={class:"DataTable"},H=t("thead",null,[t("tr",null,[t("th",{class:"tableThLeftRadius"},"№"),t("th",null,"Fakultet nomi"),t("th",{class:"tableThRightRadius"})])],-1),J={class:"tableTdLeftRadius"},K={class:"tableTdRightRadius"},se={__name:"Index",setup(W){const f=V(),y=I(),d=c(null),r=c(!1);L(),$(),c();const C=s=>{d.value=s,r.value=!0},T=s=>{u(),r.value=!1},u=()=>{b.get("/collage/all").then(s=>{s&&(g.value=s.data)})},R=s=>{y.warning({title:"Ogohlantirish",content:"Ma'lumot o'chirilsinmi",positiveText:"O'chirish",negativeText:"Bekor qilish",onPositiveClick:()=>{b.delete("/collage/delete/"+s).then(n=>{n&&u()}),f.success("O'chirish")},onNegativeClick:()=>{f.error("Bekor qilish")}})},g=c();return q(()=>{u()}),(s,n)=>{const _=o("n-icon"),i=o("n-button"),w=o("n-input"),z=o("n-input-group"),F=o("n-modal"),B=o("n-table"),D=o("n-space"),M=o("n-card");return p(),h("div",null,[e(M,{class:"cardTable"},{default:a(()=>[t("div",G,[t("div",null,[e(i,{type:"error",size:"large",onClick:n[0]||(n[0]=l=>(r.value=!0,d.value=null))},{default:a(()=>[e(_,{size:"30"},{default:a(()=>[e(m(S))]),_:1}),k(" Qo'shish ")]),_:1})]),t("div",P,[e(z,null,{default:a(()=>[e(w,{size:"large"}),e(i,{size:"large",type:"error"},{default:a(()=>[k(" Tozalash ")]),_:1})]),_:1})])]),e(F,{show:r.value,"onUpdate:show":n[1]||(n[1]=l=>r.value=l),class:"custom-card",preset:"card",style:{width:"700px"},bordered:!1,size:"huge"},{default:a(()=>[e(O,{onFakultet:T,id:d.value},null,8,["id"])]),_:1},8,["show"]),t("div",Q,[e(D,{vertical:""},{default:a(()=>[e(B,{striped:""},{default:a(()=>[H,t("tbody",null,[(p(!0),h(A,null,E(g.value,(l,v)=>(p(),h("tr",{key:v},[t("td",J,x(1+v),1),t("td",null,x(l.name),1),t("td",K,[e(i,{onClick:N=>C(l.id),tertiary:"",circle:"",color:"#0042ff",style:{border:"1px solid #0042ff","margin-right":"10px"}},{default:a(()=>[e(_,{size:"25"},{default:a(()=>[e(m(U))]),_:1})]),_:2},1032,["onClick"]),e(i,{onClick:N=>R(l.id),tertiary:"",circle:"",type:"error",style:{border:"1px solid #f93a3a","margin-right":"10px"}},{default:a(()=>[e(_,{size:"25"},{default:a(()=>[e(m(j))]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})])]),_:1})])}}};export{se as default};