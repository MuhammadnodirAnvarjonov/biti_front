import{u as c,r as a,o as u,c as p,a as s,C as n,D as r,K as m,l as h}from"./index-3c9fbc29.js";import{_ as v}from"./biti_uz-e0269c73.js";const g={class:"align"},f={class:"grid"},q=s("div",{style:{display:"flex","justify-content":"center","margin-top":"10px"}},[s("img",{style:{width:"150px",height:"150px","border-radius":"50%"},src:v,alt:""})],-1),w=s("p",null,"BUXORO INNOVATSION TIBBIYOT INSTITUTI",-1),x={class:"form__field"},T=s("label",{for:"login__username"},[s("svg",{class:"icon"},[s("use",{"xlink:href":"#icon-user"})]),s("span",{class:"hidden"},"Login")],-1),y={class:"form__field"},b=s("label",{for:"login__password"},[s("svg",{class:"icon"},[s("use",{"xlink:href":"#icon-lock"})]),s("span",{class:"hidden"},"Parol")],-1),B=s("div",{class:"form__field"},[s("button",{class:"submit"},"Kirish")],-1),V=m('<svg xmlns="http://www.w3.org/2000/svg" class="icons"><symbol id="icon-arrow-right" viewBox="0 0 1792 1792"><path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z"></path></symbol><symbol id="icon-lock" viewBox="0 0 1792 1792"><path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"></path></symbol><symbol id="icon-user" viewBox="0 0 1792 1792"><path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z"></path></symbol></svg>',1),N={__name:"Login",setup(k){const d=c(),t=a(null),e=a(null),_=i=>{i.preventDefault(),h.post("/user/login",{login:t.value,password:e.value}).then(o=>{o&&(localStorage.setItem("token",o.data.token),d.push({path:"/home"}))})};return(i,o)=>(u(),p("div",null,[s("body",g,[s("div",f,[q,w,s("form",{onSubmit:_,class:"form login"},[s("div",x,[T,n(s("input",{autocomplete:"username","onUpdate:modelValue":o[0]||(o[0]=l=>t.value=l),id:"login__username",type:"text",name:"username",class:"form__input",placeholder:"Login",required:""},null,512),[[r,t.value]])]),s("div",y,[b,n(s("input",{id:"login__password","onUpdate:modelValue":o[1]||(o[1]=l=>e.value=l),type:"password",name:"password",class:"form__input",placeholder:"Parol",required:""},null,512),[[r,e.value]])]),B],32)]),V])]))}};export{N as default};
