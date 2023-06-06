import{R as Pe,Q as D,e as Me,c as ae,g as Ae,j as Fe,h as me}from"./use-router-link.1aac45d5.js";import{i as te,r as y,c as f,m as we,o as Qe,al as _e,G as Ee,h as b,a3 as je,aj as He,B as Ne,g as ne,w as A,q as ve,H as We,a9 as Ve,aa as ze,E as K,n as Ke,I as Oe,M as De,N as pe,O,P as Z,Q as E,am as Ue,X as Ge,f as ee,$ as Xe,a0 as Je,_ as Ye,F as Ze,an as et,Y as tt}from"./index.631c22df.js";import{Q as at}from"./QResizeObserver.fca08326.js";import{a as nt,u as be,r as ot}from"./rtl.b6e0334c.js";let lt=0;const rt=["click","keydown"],it={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${lt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function st(e,C,v,o){const n=te(_e,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:w}=ne(),T=y(null),B=y(null),j=y(null),L=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),h=f(()=>n.currentModel.value===e.name),S=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(h.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0&&o.linkClass.value!==""?` ${o.linkClass.value}`:"")),$=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),F=f(()=>e.disable===!0||n.hasFocus.value===!0?-1:e.tabindex||0);function I(s,g){if(g!==!0&&T.value!==null&&T.value.focus(),e.disable!==!0){let _;if(o!==void 0)if(o.hasRouterLink.value===!0)_=()=>{s.__qNavigate=!0,n.avoidRouteWatcher=!0;const m=o.navigateToRouterLink(s);m===!1?n.avoidRouteWatcher=!1:m.then(q=>{n.avoidRouteWatcher=!1,q===void 0&&n.updateModel({name:e.name,fromRoute:!0})})};else{v("click",s);return}else _=()=>{n.updateModel({name:e.name,fromRoute:!1})};v("click",s,_),s.defaultPrevented!==!0&&_()}}function Q(s){je(s,[13,32])?I(s,!0):He(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&n.onKbdNavigate(s.keyCode,w.$el)===!0&&Ne(s),v("keydown",s)}function P(){const s=n.tabProps.value.narrowIndicator,g=[],_=b("div",{ref:j,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&g.push(b(D,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&g.push(b("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&g.push(e.alertIcon!==void 0?b(D,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):b("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&g.push(_);const m=[b("div",{class:"q-focus-helper",tabindex:-1,ref:T}),b("div",{class:$.value},Me(C.default,g))];return s===!1&&m.push(_),m}const R={name:f(()=>e.name),rootRef:B,tabIndicatorRef:j,routerProps:o};we(()=>{n.unregisterTab(R),n.recalculateScroll()}),Qe(()=>{n.registerTab(R),n.recalculateScroll()});function M(s,g){const _={ref:B,class:S.value,tabindex:F.value,role:"tab","aria-selected":h.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:I,onKeydown:Q,...g};return Ee(b(s,_,P()),[[Pe,L.value]])}return{renderTab:M,$tabs:n}}var ut=ae({name:"QRouteTab",props:{...Ae,...it},emits:rt,setup(e,{slots:C,emit:v}){const o=Fe(),{renderTab:n,$tabs:w}=st(e,C,v,{exact:f(()=>e.exact),...o});return A(()=>e.name+e.exact+(o.linkRoute.value||{}).href,()=>{w.verifyRouteModel()}),()=>n(o.linkTag.value,o.linkProps.value)}});function ct(e,C,v){const o=v===!0?["left","right"]:["top","bottom"];return`absolute-${C===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const dt=["left","center","right","justify"],he=()=>{};var ft=ae({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>dt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:C,emit:v}){const o=ne(),{proxy:{$q:n}}=o,{registerTick:w}=nt(),{registerTimeout:T,removeTimeout:B}=be(),{registerTimeout:j}=be(),L=y(null),h=y(null),S=y(e.modelValue),$=y(!1),F=y(!0),I=y(!1),Q=y(!1),P=f(()=>n.platform.is.desktop===!0||e.mobileArrows===!0),R=[],M=y(!1);let s=!1,g,_,m,q=P.value===!0?le:ve;const Ce=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:ct(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Te=f(()=>`q-tabs__content--align-${$.value===!0?"left":Q.value===!0?"justify":e.align}`),ye=f(()=>`q-tabs row no-wrap items-center q-tabs--${$.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${P.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Re=f(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+Te.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(n.platform.is.mobile===!0?" scroll":"")),H=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),N=f(()=>e.vertical!==!0&&n.lang.rtl===!0),p=f(()=>ot===!1&&N.value===!0);A(N,q),A(()=>e.modelValue,t=>{U({name:t,setCurrent:!0,skipEmit:!0})}),A(()=>e.outsideArrows,()=>{K(W())}),A(P,t=>{q=t===!0?le:ve,K(W())});function U({name:t,setCurrent:a,skipEmit:l,fromRoute:u}){S.value!==t&&(l!==!0&&v("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(qe(S.value,t),S.value=t)),u!==void 0&&(s=u)}function W(){w(()=>{o.isDeactivated!==!0&&o.isUnmounted!==!0&&oe({width:L.value.offsetWidth,height:L.value.offsetHeight})})}function oe(t){if(H.value===void 0||h.value===null)return;const a=t[H.value.container],l=Math.min(h.value[H.value.scroll],Array.prototype.reduce.call(h.value.children,(r,c)=>r+(c[H.value.content]||0),0)),u=a>0&&l>a;$.value!==u&&($.value=u),u===!0&&K(q);const d=a<parseInt(e.breakpoint,10);Q.value!==d&&(Q.value=d)}function qe(t,a){const l=t!=null&&t!==""?R.find(d=>d.name.value===t):null,u=a!=null&&a!==""?R.find(d=>d.name.value===a):null;if(l&&u){const d=l.tabIndicatorRef.value,r=u.tabIndicatorRef.value;clearTimeout(g),d.style.transition="none",d.style.transform="none",r.style.transition="none",r.style.transform="none";const c=d.getBoundingClientRect(),i=r.getBoundingClientRect();r.style.transform=e.vertical===!0?`translate3d(0,${c.top-i.top}px,0) scale3d(1,${i.height?c.height/i.height:1},1)`:`translate3d(${c.left-i.left}px,0,0) scale3d(${i.width?c.width/i.width:1},1,1)`,K(()=>{g=setTimeout(()=>{r.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",r.style.transform="none"},70)})}u&&$.value===!0&&V(u.rootRef.value)}function V(t){const{left:a,width:l,top:u,height:d}=h.value.getBoundingClientRect(),r=t.getBoundingClientRect();let c=e.vertical===!0?r.top-u:r.left-a;if(c<0){h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(c),q();return}c+=e.vertical===!0?r.height-d:r.width-l,c>0&&(h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(c),q())}function le(){const t=h.value;if(t!==null){const a=t.getBoundingClientRect(),l=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);N.value===!0?(F.value=Math.ceil(l+a.width)<t.scrollWidth-1,I.value=l>0):(F.value=l>0,I.value=e.vertical===!0?Math.ceil(l+a.height)<t.scrollHeight:Math.ceil(l+a.width)<t.scrollWidth)}}function re(t){x(),ue(t),_=setInterval(()=>{ue(t)===!0&&x()},5)}function ie(){re(p.value===!0?Number.MAX_SAFE_INTEGER:0)}function se(){re(p.value===!0?0:Number.MAX_SAFE_INTEGER)}function x(){clearInterval(_)}function ke(t,a){const l=Array.prototype.filter.call(h.value.children,i=>i===a||i.matches&&i.matches(".q-tab.q-focusable")===!0),u=l.length;if(u===0)return;if(t===36)return V(l[0]),!0;if(t===35)return V(l[u-1]),!0;const d=t===(e.vertical===!0?38:37),r=t===(e.vertical===!0?40:39),c=d===!0?-1:r===!0?1:void 0;if(c!==void 0){const i=N.value===!0?-1:1,k=l.indexOf(a)+c*i;return k>=0&&k<u&&(V(l[k]),l[k].focus({preventScroll:!0})),!0}}const xe=f(()=>p.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function ue(t){const a=h.value,{get:l,set:u}=xe.value;let d=!1,r=l(a);const c=t<r?-1:1;return r+=c*5,r<0?(d=!0,r=0):(c===-1&&r<=t||c===1&&r>=t)&&(d=!0,r=t),u(a,r),q(),d}function G(){return R.filter(t=>t.routerProps!==void 0&&t.routerProps.hasRouterLink.value===!0)}function Le(){let t=null,a=s;const l={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:u}=o.proxy.$route,d=S.value;let r=a===!0?he:i=>{d===i.name.value&&(a=!0,r=he)};const c=G();for(const i of c){const k=i.routerProps.exact.value===!0;if(i.routerProps[k===!0?"linkIsExactActive":"linkIsActive"].value!==!0||l.exact===!0&&k!==!0){r(i);continue}const X=i.routerProps.linkRoute.value,J=X.hash;if(k===!0){if(u===J){t=i.name.value;break}else if(u!==""&&J!==""){r(i);continue}}const Y=X.matched.length,fe=X.href.length-J.length;if(Y===l.matchedLen?fe>l.hrefLen:Y>l.matchedLen){t=i.name.value,Object.assign(l,{matchedLen:Y,hrefLen:fe,exact:k});continue}r(i)}(a===!0||t!==null)&&U({name:t,setCurrent:!0,fromRoute:!0})}function Se(t){if(B(),M.value!==!0&&L.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&L.value.contains(a)===!0&&(M.value=!0)}}function $e(){T(()=>{M.value=!1},30)}function z(){ce.avoidRouteWatcher!==!0&&j(Le)}function Be(t){R.push(t),G().length>0&&(m===void 0&&(m=A(()=>o.proxy.$route,z)),z())}function Ie(t){R.splice(R.indexOf(t),1),m!==void 0&&(G().length===0&&(m(),m=void 0),z())}const ce={currentModel:S,tabProps:Ce,hasFocus:M,registerTab:Be,unregisterTab:Ie,verifyRouteModel:z,updateModel:U,recalculateScroll:W,onKbdNavigate:ke,avoidRouteWatcher:!1};We(_e,ce),we(()=>{clearTimeout(g),m!==void 0&&m()});let de=!1;return Ve(()=>{de=!0}),ze(()=>{de===!0&&W()}),()=>{const t=[b(at,{onResize:oe}),b("div",{ref:h,class:Re.value,onScroll:q},me(C.default))];return P.value===!0&&t.push(b(D,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedown:ie,onTouchstartPassive:ie,onMouseup:x,onMouseleave:x,onTouchend:x}),b(D,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedown:se,onTouchstartPassive:se,onMouseup:x,onMouseleave:x,onTouchend:x})),b("div",{ref:L,class:ye.value,role:"tablist",onFocusin:Se,onFocusout:$e},t)}}}),ge=ae({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:C}){const{proxy:{$q:v}}=ne(),o=te(Ke);te(Oe,()=>{console.error("QPage needs to be child of QPageContainer")});const n=f(()=>{const T=(o.header.space===!0?o.header.size:0)+(o.footer.space===!0?o.footer.size:0);if(typeof e.styleFn=="function"){const B=o.isContainer.value===!0?o.containerHeight.value:v.screen.height;return e.styleFn(T,B)}return{minHeight:o.isContainer.value===!0?o.containerHeight.value-T+"px":v.screen.height===0?T!==0?`calc(100vh - ${T}px)`:"100vh":v.screen.height-T+"px"}}),w=f(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>b("main",{class:w.value,style:n.value},me(C.default))}});const vt=tt(" Loading... "),wt=De({__name:"LadderPage",setup(e){const C=pe(()=>Object.values(Ue));return(v,o)=>{const n=Ge("router-view");return O(),Z(ge,{class:"row items-top justify-evenly"},{default:E(()=>[ee(ft,null,{default:E(()=>[(O(!0),Xe(Ze,null,Je(Ye(C),w=>(O(),Z(ut,{key:w,name:w,label:v.$t("view."+w),to:w},null,8,["name","label","to"]))),128))]),_:1}),(O(),Z(et,{timeout:0},{fallback:E(()=>[ee(ge,{class:"row items-top justify-evenly"},{default:E(()=>[vt]),_:1})]),default:E(()=>[ee(n)]),_:1}))]),_:1})}}});export{wt as default};