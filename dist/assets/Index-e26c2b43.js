import{E as w,G as F,u as I,r as k,k as N,b as i,o as a,c as o,e,w as s,l as v,a as t,f as d,g as y,F as q,m as L,t as r}from"./index-3c9fbc29.js";import{A as S}from"./AddCircleSharp-c9968127.js";import{C as V}from"./CreateTwotone-5a97c9d2.js";import{R as A}from"./RestoreFromTrashOutlined-d4f333b7.js";const E={class:"cardheader"},G={class:"btninput"},P={class:"DataTable"},$=t("thead",null,[t("tr",null,[t("th",{class:"tableThLeftRadius"},"№"),t("th",null,"F.I.SH"),t("th",null,"O'qituvchi ID"),t("th",null,"Ma'lumoti"),t("th",null,"Guruh rahbarligi"),t("th",null,"Muassasa"),t("th",{class:"tableThRightRadius"})])],-1),H={class:"tableTdLeftRadius"},Q={key:0},U={key:1},j={key:0},J={key:1},K={key:0},W={key:1},X={class:"tableTdRightRadius"},nt={__name:"Index",setup(Y){const _=w(),b=F(),h=I();k();const x=()=>{h.push({path:"/teacher/create"})},C=l=>{h.push({path:"/teacher/update/"+l})},p=()=>{v.get("/teacher/all").then(l=>{l&&(f.value=l.data)})},T=l=>{b.warning({title:"Ogohlantirish",content:"Ma'lumot o'chirilsinmi",positiveText:"O'chirish",negativeText:"Bekor qilish",onPositiveClick:()=>{v.delete("/teacher/delete/"+l).then(g=>{g&&p()}),_.success("O'chirish")},onNegativeClick:()=>{_.error("Bekor qilish")}})},f=k();return N(()=>{p()}),(l,g)=>{const u=i("n-icon"),c=i("n-button"),R=i("n-input"),z=i("n-input-group"),B=i("n-table"),D=i("n-space"),M=i("n-card");return a(),o("div",null,[e(M,{class:"cardTable"},{default:s(()=>[t("div",E,[t("div",null,[e(c,{type:"error",size:"large",onClick:x},{default:s(()=>[e(u,{size:"30"},{default:s(()=>[e(d(S))]),_:1}),y(" Qo'shish ")]),_:1})]),t("div",G,[e(z,null,{default:s(()=>[e(R,{size:"large"}),e(c,{size:"large",type:"error"},{default:s(()=>[y(" Tozalash ")]),_:1})]),_:1})])]),t("div",P,[e(D,{vertical:""},{default:s(()=>[e(B,{striped:""},{default:s(()=>[$,t("tbody",null,[(a(!0),o(q,null,L(f.value,(n,m)=>(a(),o("tr",{key:m},[t("td",H,r(1+m),1),t("td",null,r(n.fullname),1),t("td",null,r(n.teacher_id),1),t("td",null,[n.institution?(a(),o("span",Q,r(n.institution.name),1)):(a(),o("span",U))]),t("td",null,[n.group_leadership?(a(),o("span",j,r(n.group_leadership.name),1)):(a(),o("span",J))]),t("td",null,[n.institution?(a(),o("span",K,r(n.institution.name),1)):(a(),o("span",W))]),t("td",X,[e(c,{onClick:O=>C(n.id),tertiary:"",circle:"",color:"#0042ff",style:{border:"1px solid #0042ff","margin-right":"10px"}},{default:s(()=>[e(u,{size:"25"},{default:s(()=>[e(d(V))]),_:1})]),_:2},1032,["onClick"]),e(c,{onClick:O=>T(n.id),tertiary:"",circle:"",type:"error",style:{border:"1px solid #f93a3a","margin-right":"10px"}},{default:s(()=>[e(u,{size:"25"},{default:s(()=>[e(d(A))]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})])]),_:1})])}}};export{nt as default};