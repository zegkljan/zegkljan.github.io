import{c,ak as P,M as T,h as p,G as K,g as z,e as F,a3 as D,t as H,A as Q,y as U,z as G,x as X}from"./index.54dddbab.js";const Y={xs:18,sm:24,md:32,lg:38,xl:46},J={size:String};function W(e,t=Y){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const Z=e=>P(T(e)),ee=e=>P(e);function te(e,t){return e!==void 0&&e()||t}function ge(e,t){if(e!==void 0){const r=e();if(r!=null)return r.slice()}return t}function b(e,t){return e!==void 0?t.concat(e()):t}function ye(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function he(e,t,r,a,o,s){t.key=a+o;const i=p(e,t,r);return o===!0?K(i,s()):i}const q="0 0 24 24",w=e=>e,_=e=>`ionicons ${e}`,L={"mdi-":e=>`mdi ${e}`,"icon-":w,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":_,"ion-ios":_,"ion-logo":_,"iconfont ":w,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},I={o_:"-outlined",r_:"-round",s_:"-sharp"},N={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},re=new RegExp("^("+Object.keys(L).join("|")+")"),ne=new RegExp("^("+Object.keys(I).join("|")+")"),A=new RegExp("^("+Object.keys(N).join("|")+")"),ae=/^[Mm]\s?[-+]?\.?\d/,ie=/^img:/,se=/^svguse:/,oe=/^ion-/,ue=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ke=Z({name:"QIcon",props:{...J,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=z(),a=W(e),o=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),s=c(()=>{let i,n=e.name;if(n==="none"||!n)return{none:!0};if(r.iconMapFn!==null){const u=r.iconMapFn(n);if(u!==void 0)if(u.icon!==void 0){if(n=u.icon,n==="none"||!n)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(ae.test(n)===!0){const[u,v=q]=n.split("|");return{svg:!0,viewBox:v,nodes:u.split("&&").map(g=>{const[d,k,x]=g.split("@@");return p("path",{style:k,d,transform:x})})}}if(ie.test(n)===!0)return{img:!0,src:n.substring(4)};if(se.test(n)===!0){const[u,v=q]=n.split("|");return{svguse:!0,src:u.substring(7),viewBox:v}}let f=" ";const h=n.match(re);if(h!==null)i=L[h[1]](n);else if(ue.test(n)===!0)i=n;else if(oe.test(n)===!0)i=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${n.substring(3)}`;else if(A.test(n)===!0){i="notranslate material-symbols";const u=n.match(A);u!==null&&(n=n.substring(6),i+=N[u[1]]),f=n}else{i="notranslate material-icons";const u=n.match(ne);u!==null&&(n=n.substring(2),i+=I[u[1]]),f=n}return{cls:i,content:f}});return()=>{const i={class:o.value,style:a.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?p(e.tag,i,te(t.default)):s.value.img===!0?p("span",i,b(t.default,[p("img",{src:s.value.src})])):s.value.svg===!0?p("span",i,b(t.default,[p("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?p("span",i,b(t.default,[p("svg",{viewBox:s.value.viewBox},[p("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(i.class+=" "+s.value.cls),p(e.tag,i,b(t.default,[s.value.content])))}}});function le(e,t){const r=e.style;for(const a in t)r[a]=t[a]}function xe(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=F(e)===!0?e.value:e;if(t)return t.$el||t}function $e(e,t){if(e==null||e.contains(t)===!0)return!0;for(let r=e.nextElementSibling;r!==null;r=r.nextElementSibling)if(r.contains(t))return!0;return!1}function ce(e,t=250){let r=!1,a;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),a=e.apply(this,arguments)),a}}function C(e,t,r,a){r.modifiers.stop===!0&&U(e);const o=r.modifiers.color;let s=r.modifiers.center;s=s===!0||a===!0;const i=document.createElement("span"),n=document.createElement("span"),f=G(e),{left:h,top:u,width:v,height:g}=t.getBoundingClientRect(),d=Math.sqrt(v*v+g*g),k=d/2,x=`${(v-d)/2}px`,R=s?x:`${f.left-h-k}px`,l=`${(g-d)/2}px`,y=s?l:`${f.top-u-k}px`;n.className="q-ripple__inner",le(n,{height:`${d}px`,width:`${d}px`,transform:`translate3d(${R},${y},0) scale3d(.2,.2,1)`,opacity:0}),i.className=`q-ripple${o?" text-"+o:""}`,i.setAttribute("dir","ltr"),i.appendChild(n),t.appendChild(i);const $=()=>{i.remove(),clearTimeout(m)};r.abort.push($);let m=setTimeout(()=>{n.classList.add("q-ripple__inner--enter"),n.style.transform=`translate3d(${x},${l},0) scale3d(1,1,1)`,n.style.opacity=.2,m=setTimeout(()=>{n.classList.remove("q-ripple__inner--enter"),n.classList.add("q-ripple__inner--leave"),n.style.opacity=0,m=setTimeout(()=>{i.remove(),r.abort.splice(r.abort.indexOf($),1)},275)},250)},50)}function O(e,{modifiers:t,value:r,arg:a}){const o=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||a,keyCodes:[].concat(o.keyCodes||13)}}var be=ee({name:"ripple",beforeMount(e,t){const r={cfg:t.instance.$.appContext.config.globalProperties.$q.config,enabled:t.value!==!1,modifiers:{},abort:[],start(a){r.enabled===!0&&a.qSkipRipple!==!0&&a.type===(r.modifiers.early===!0?"pointerdown":"click")&&C(a,e,r,a.qKeyEvent===!0)},keystart:ce(a=>{r.enabled===!0&&a.qSkipRipple!==!0&&D(a,r.modifiers.keyCodes)===!0&&a.type===`key${r.modifiers.early===!0?"down":"up"}`&&C(a,e,r,!0)},300)};O(r,t),e.__qripple=r,H(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&O(r,t)}},beforeUnmount(e){const t=e.__qripple;t.abort.forEach(r=>{r()}),Q(t,"main"),delete e._qripple}});function Re(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function V(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(r=>{V(e,r)}):e.add(t)}function Se(e){const t=new Set;return e.forEach(r=>{V(t,r)}),Array.from(t)}function fe(e){return e.appContext.config.globalProperties.$router!==void 0}function j(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function M(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function de(e,t){for(const r in t){const a=t[r],o=e[r];if(typeof a=="string"){if(a!==o)return!1}else if(Array.isArray(o)===!1||o.length!==a.length||a.some((s,i)=>s!==o[i]))return!1}return!0}function B(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,a)=>r===t[a]):e.length===1&&e[0]===t}function pe(e,t){return Array.isArray(e)===!0?B(e,t):Array.isArray(t)===!0?B(t,e):e===t}function ve(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(pe(e[r],t[r])===!1)return!1;return!0}const _e={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ee(e){const t=z(),{props:r,proxy:a}=t,o=fe(t),s=c(()=>r.disable!==!0&&r.href!==void 0),i=c(()=>o===!0&&r.disable!==!0&&s.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),n=c(()=>{if(i.value===!0)try{return a.$router.resolve(r.to)}catch{}return null}),f=c(()=>n.value!==null),h=c(()=>s.value===!0||f.value===!0),u=c(()=>r.type==="a"||h.value===!0?"a":r.tag||e||"div"),v=c(()=>s.value===!0?{href:r.href,target:r.target}:f.value===!0?{href:n.value.href,target:r.target}:{}),g=c(()=>{if(f.value===!1)return null;const{matched:l}=n.value,{length:y}=l,$=l[y-1];if($===void 0)return-1;const m=a.$route.matched;if(m.length===0)return-1;const S=m.findIndex(M.bind(null,$));if(S>-1)return S;const E=j(l[y-2]);return y>1&&j($)===E&&m[m.length-1].path!==E?m.findIndex(M.bind(null,l[y-2])):S}),d=c(()=>f.value===!0&&g.value>-1&&de(a.$route.params,n.value.params)),k=c(()=>d.value===!0&&g.value===a.$route.matched.length-1&&ve(a.$route.params,n.value.params)),x=c(()=>f.value===!0?k.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":d.value===!0?` ${r.activeClass}`:"":"");function R(l){return r.disable===!0||l.metaKey||l.altKey||l.ctrlKey||l.shiftKey||l.__qNavigate!==!0&&l.defaultPrevented===!0||l.button!==void 0&&l.button!==0||r.target==="_blank"?!1:(X(l),a.$router[r.replace===!0?"replace":"push"](r.to).catch(y=>y))}return{hasRouterLink:f,hasHrefLink:s,hasLink:h,linkTag:u,linkRoute:n,linkIsActive:d,linkIsExactActive:k,linkClass:x,linkProps:v,navigateToRouterLink:R}}export{ke as Q,be as R,ge as a,ee as b,Z as c,he as d,b as e,J as f,_e as g,te as h,W as i,Ee as j,ye as k,xe as l,le as m,Re as n,$e as o,Se as p,Y as u,fe as v};