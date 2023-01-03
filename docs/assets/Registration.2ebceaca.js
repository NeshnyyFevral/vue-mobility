import{_ as k,u as N,a as O,b as Y,r as o,o as q,c as d,R as m,d as P,e as f,f as D,g as t,n as e,w as G,h as u,i as a,j as $,k as I,l as U,m as X,t as E}from"./index.9432028a.js";import{_ as j}from"./bg-authorisation.7d6a21fe.js";import{I as v,B as F,a as g,E as H,b as K,c as J,d as Q}from"./Input.33442dd6.js";import"./cross.b8f365db.js";const W="_root_ob9tg_50",Z="_container_ob9tg_55",x="_authBox_ob9tg_63",ss="_main_ob9tg_97",es="_form_ob9tg_106",ts="_image_ob9tg_110",as="_appendInputIcon_ob9tg_115",os="_title_ob9tg_121",ns="_desc_ob9tg_126",ls="_input_ob9tg_130",rs="_actions_ob9tg_134",is="_button_ob9tg_139",us="_registration_ob9tg_148";var cs={root:W,container:Z,authBox:x,main:ss,form:es,image:ts,appendInputIcon:as,title:os,desc:ns,input:ls,actions:rs,button:is,registration:us};const ps=t("img",{src:j,alt:"auth-image"},null,-1),ds=[ps],ms=["onSubmit"],vs={__name:"Registration",setup(_s){N(s=>({"31e036c8":a(T)}));const w=O(),c=Y(),n=o(""),l=o(""),r=o(""),i=o(!1),_=o(!1),h=o(!1),y=o(!1),b={required:s=>!!s||"Required.",email:s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)||"Invalid e-mail."},B=[s=>s.length>=8||"min 8 characters"],S=s=>{n.value=s},R=s=>{l.value=s},M=s=>{r.value=s},z=s=>{_.value=s},L=s=>{h.value=s},V=s=>{y.value=s},A=()=>{if(!l.value||!r.value||!n.value){alert("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F!");return}_.value||h.value||y.value||(d.set("user",{login:n.value,email:l.value,password:r.value}),d.set("authUser",{key:Math.random().toString(16).substring(2,8)}),c.push(m.CRM))},C=()=>{c.push(m.LOGIN)};q(()=>{d.get("authUser")&&c.push(m.CRM)});const T=P(()=>w.theme?E.DARK_TEXT:E.LIGHT_TEXT);return(s,p)=>(f(),D("div",{class:e(s.$style.root)},[t("div",{class:e(s.$style.container)},[t("div",{class:e(s.$style.authBox)},[t("div",{class:e(s.$style.image)},ds,2)],2),t("div",{class:e(s.$style.authBox)},[t("div",{class:e(s.$style.main)},[t("h3",{class:e(s.$style.title)}," Registration ",2),t("form",{class:e(s.$style.form),onSubmit:G(A,["prevent"])},[u(v,{placeholder:"Login",size:a(g).SMALL,class:e([s.$style.input,s.$style.login]),label:"login",value:n.value,hint:"Your login",onInput:S,onError:z},null,8,["size","class","value"]),u(v,{placeholder:"Email address",size:a(g).SMALL,class:e([s.$style.input,s.$style.email]),label:"email",value:l.value,hint:"Your email",rules:[b.required,b.email],"validate-on-blur":"",onInput:R,onError:L},null,8,["size","class","value","rules"]),u(v,{size:a(g).SMALL,class:e([s.$style.input,s.$style.password]),label:"password",value:r.value,placeholder:"Your password",hint:"At least 8 characters",type:i.value?"text":"password",rules:B,counter:8,onInput:M,onError:V},{appendInner:$(()=>[(f(),U(X(i.value?a(H):a(K)),{class:e(s.$style.appendInputIcon),onFocus:p[0]||(p[0]=hs=>i.value=!i.value)},null,40,["class"]))]),_:1},8,["size","class","value","type"]),t("div",{class:e(s.$style.actions)},[u(F,{variant:a(J).PRIMARY,size:a(Q).NORMAL,class:e(s.$style.button),type:"submit"},{default:$(()=>[I(" Sigh up ")]),_:1},8,["variant","size","class"])],2),t("div",{class:e(s.$style.registration)},[I(" Already have an account? "),t("button",{type:"button",onClick:C}," Sign in instead ")],2)],42,ms),t("div",{class:e(s.$style.copyright)}," \xA92023 materio ",2)],2)],2)],2)],2))}},gs={$style:cs};var Is=k(vs,[["__cssModules",gs]]);export{Is as default};
