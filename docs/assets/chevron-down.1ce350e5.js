import{q as s,o as i,c as d,a as p,h as x,n as u,_ as y,u as g,b as n}from"./index.96f5f5db.js";var o={BG:"#F5F5F5",PRIMARY:"#B388FF",WARNING:"#FFB300",ERROR:"#FF3D00",SUCCESS:"#64DD17",INFO:"#00B0FF",DEFAULT:"#9E9E9E"},q="/assets/1.aac046b6.png";const m="_container_1lp98_55",h="_avatar_1lp98_86";var w={container:m,avatar:h};const L={SMALL:"21px",NORMAL:"35px",LARGE:"49px",EXTRALARGE:"70px"},E={SMALL:"11px",NORMAL:"14px",LARGE:"24px",EXTRALARGE:"36px"},R={DEFAULT:"50%",ROUNTED:"4px",RECTANGLE:"0px"},F={DEFAULT:"1",LIGHT:"0.12"},_={DEFAULT:"#fff",LIGHT:!1},e={PRIMARY:"primary",WARNING:"warning",ERROR:"error",SUCCESS:"success",DEFAULT:"default",INFO:"info"},r={SMALL:"small",NORMAL:"normal",LARGE:"large",EXTRALARGE:"extra large"},A={DEFAULT:"default",ROUNTED:"rounted",RECTANGLE:"rectangle"},c={DEFAULT:"default",LIGHT:"light"},z={__name:"Avatar",props:{variant:{type:String,default:e.DEFAULT,validator:a=>Object.values(e).includes(a)},size:{type:String,default:r.NORMAL,validator:a=>Object.values(r).includes(a)},corner:{type:String,default:A.DEFAULT,validator:a=>Object.values(A).includes(a)},transparency:{type:String,default:c.DEFAULT,validator:a=>Object.values(c).includes(a)}},setup(a){const t=a;g(l=>({c16dcaac:n(U),"9ad4204c":n(O),"777d1c49":n(f),"534e22b7":n(C),"6d4c2d92":n(I),"77477c1b":n(D)}));const v={[e.ERROR]:o.ERROR,[e.PRIMARY]:o.PRIMARY,[e.WARNING]:o.WARNING,[e.DEFAULT]:o.DEFAULT,[e.SUCCESS]:o.SUCCESS,[e.INFO]:o.INFO},G={[r.SMALL]:L.SMALL,[r.NORMAL]:L.NORMAL,[r.LARGE]:L.LARGE,[r.EXTRALARGE]:L.EXTRALARGE},S={[r.SMALL]:E.SMALL,[r.NORMAL]:E.NORMAL,[r.LARGE]:E.LARGE,[r.EXTRALARGE]:E.EXTRALARGE},N={[A.DEFAULT]:R.DEFAULT,[A.ROUNTED]:R.ROUNTED,[A.RECTANGLE]:R.RECTANGLE},M={[c.DEFAULT]:F.DEFAULT,[c.LIGHT]:F.LIGHT},T={[c.DEFAULT]:_.DEFAULT,[c.LIGHT]:_.LIGHT},D=s(()=>T[t.transparency]?T[t.transparency]:v[t.variant]),U=s(()=>v[t.variant]),O=s(()=>G[t.size]),f=s(()=>S[t.size]),C=s(()=>N[t.corner]),I=s(()=>M[t.transparency]);return(l,W)=>(i(),d("div",{class:u(l.$style.container)},[p("div",{class:u(l.$style.avatar)},[x(l.$slots,"default")],2)],2))}},b={$style:w};var Z=y(z,[["__cssModules",b]]);const B={"clip-rule":"evenodd","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},V=p("path",{d:"m12 10.93 5.719-5.72a.749.749 0 1 1 1.062 1.062l-5.72 5.719 5.719 5.719a.75.75 0 1 1-1.061 1.062L12 13.053l-5.719 5.719A.75.75 0 0 1 5.22 17.71l5.719-5.719-5.72-5.719A.752.752 0 0 1 6.281 5.21z"},null,-1),$=[V];function H(a,t){return i(),d("svg",B,$)}var J={render:H};const X={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},j=p("path",{d:"M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z"},null,-1),k=[j];function P(a,t){return i(),d("svg",X,k)}var K={render:P};export{A,J as C,o as G,q as _,r as a,Z as b,K as c,e as d,c as e};
