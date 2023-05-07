import{R as ye,Q as z,e as Se,c as Le,h as ke}from"./use-router-link.03541150.js";import{i as xe,r as w,c as v,m as ue,o as Ie,an as ce,G as Be,h as g,a3 as Ae,aj as Me,B as $e,g as fe,q as re,w as P,H as Pe,a9 as Ee,aa as Fe,E as V}from"./index.a598baa7.js";import{Q as Qe}from"./QResizeObserver.8c2c30c8.js";import{a as We,u as ie,r as je}from"./rtl.62a208ea.js";let He=0;const Ue=["click","keydown"],Ge={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${He++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Xe(e,B,q,f){const l=xe(ce,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:K}=fe(),A=w(null),E=w(null),F=w(null),y=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),d=v(()=>l.currentModel.value===e.name),S=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(d.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(f!==void 0&&f.linkClass.value!==""?` ${f.linkClass.value}`:"")),L=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),M=v(()=>e.disable===!0||l.hasFocus.value===!0?-1:e.tabindex||0);function k(i,b){if(b!==!0&&A.value!==null&&A.value.focus(),e.disable!==!0){let m;if(f!==void 0)if(f.hasRouterLink.value===!0)m=()=>{i.__qNavigate=!0,l.avoidRouteWatcher=!0;const h=f.navigateToRouterLink(i);h===!1?l.avoidRouteWatcher=!1:h.then(T=>{l.avoidRouteWatcher=!1,T===void 0&&l.updateModel({name:e.name,fromRoute:!0})})};else{q("click",i);return}else m=()=>{l.updateModel({name:e.name,fromRoute:!1})};q("click",i,m),i.defaultPrevented!==!0&&m()}}function $(i){Ae(i,[13,32])?k(i,!0):Me(i)!==!0&&i.keyCode>=35&&i.keyCode<=40&&l.onKbdNavigate(i.keyCode,K.$el)===!0&&$e(i),q("keydown",i)}function x(){const i=l.tabProps.value.narrowIndicator,b=[],m=g("div",{ref:F,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&b.push(g(z,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&b.push(g("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&b.push(e.alertIcon!==void 0?g(z,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):g("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),i===!0&&b.push(m);const h=[g("div",{class:"q-focus-helper",tabindex:-1,ref:A}),g("div",{class:L.value},Se(B.default,b))];return i===!1&&h.push(m),h}const C={name:v(()=>e.name),rootRef:E,tabIndicatorRef:F,routerProps:f};ue(()=>{l.unregisterTab(C),l.recalculateScroll()}),Ie(()=>{l.registerTab(C),l.recalculateScroll()});function I(i,b){const m={ref:E,class:S.value,tabindex:M.value,role:"tab","aria-selected":d.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:k,onKeydown:$,...b};return Be(g(i,m,x()),[[ye,y.value]])}return{renderTab:I,$tabs:l}}function Ne(e,B,q){const f=q===!0?["left","right"]:["top","bottom"];return`absolute-${B===!0?f[0]:f[1]}${e?` text-${e}`:""}`}const Ve=["left","center","right","justify"],se=()=>{};var Je=Le({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ve.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:B,emit:q}){const f=fe(),{proxy:{$q:l}}=f,{registerTick:K}=We(),{registerTimeout:A,removeTimeout:E}=ie(),{registerTimeout:F}=ie(),y=w(null),d=w(null),S=w(e.modelValue),L=w(!1),M=w(!0),k=w(!1),$=w(!1),x=v(()=>l.platform.is.desktop===!0||e.mobileArrows===!0),C=[],I=w(!1);let i=!1,b,m,h,T=x.value===!0?Z:re;const ve=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ne(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),de=v(()=>`q-tabs__content--align-${L.value===!0?"left":$.value===!0?"justify":e.align}`),be=v(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${x.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),he=v(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+de.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(l.platform.is.mobile===!0?" scroll":"")),Q=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),W=v(()=>e.vertical!==!0&&l.lang.rtl===!0),O=v(()=>je===!1&&W.value===!0);P(W,T),P(()=>e.modelValue,t=>{D({name:t,setCurrent:!0,skipEmit:!0})}),P(()=>e.outsideArrows,()=>{V(j())}),P(x,t=>{T=t===!0?Z:re,V(j())});function D({name:t,setCurrent:a,skipEmit:n,fromRoute:s}){S.value!==t&&(n!==!0&&q("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(ge(S.value,t),S.value=t)),s!==void 0&&(i=s)}function j(){K(()=>{f.isDeactivated!==!0&&f.isUnmounted!==!0&&Y({width:y.value.offsetWidth,height:y.value.offsetHeight})})}function Y(t){if(Q.value===void 0||d.value===null)return;const a=t[Q.value.container],n=Math.min(d.value[Q.value.scroll],Array.prototype.reduce.call(d.value.children,(o,u)=>o+(u[Q.value.content]||0),0)),s=a>0&&n>a;L.value!==s&&(L.value=s),s===!0&&V(T);const c=a<parseInt(e.breakpoint,10);$.value!==c&&($.value=c)}function ge(t,a){const n=t!=null&&t!==""?C.find(c=>c.name.value===t):null,s=a!=null&&a!==""?C.find(c=>c.name.value===a):null;if(n&&s){const c=n.tabIndicatorRef.value,o=s.tabIndicatorRef.value;clearTimeout(b),c.style.transition="none",c.style.transform="none",o.style.transition="none",o.style.transform="none";const u=c.getBoundingClientRect(),r=o.getBoundingClientRect();o.style.transform=e.vertical===!0?`translate3d(0,${u.top-r.top}px,0) scale3d(1,${r.height?u.height/r.height:1},1)`:`translate3d(${u.left-r.left}px,0,0) scale3d(${r.width?u.width/r.width:1},1,1)`,V(()=>{b=setTimeout(()=>{o.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",o.style.transform="none"},70)})}s&&L.value===!0&&H(s.rootRef.value)}function H(t){const{left:a,width:n,top:s,height:c}=d.value.getBoundingClientRect(),o=t.getBoundingClientRect();let u=e.vertical===!0?o.top-s:o.left-a;if(u<0){d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(u),T();return}u+=e.vertical===!0?o.height-c:o.width-n,u>0&&(d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(u),T())}function Z(){const t=d.value;if(t!==null){const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);W.value===!0?(M.value=Math.ceil(n+a.width)<t.scrollWidth-1,k.value=n>0):(M.value=n>0,k.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}}function p(t){R(),ae(t),m=setInterval(()=>{ae(t)===!0&&R()},5)}function ee(){p(O.value===!0?Number.MAX_SAFE_INTEGER:0)}function te(){p(O.value===!0?0:Number.MAX_SAFE_INTEGER)}function R(){clearInterval(m)}function me(t,a){const n=Array.prototype.filter.call(d.value.children,r=>r===a||r.matches&&r.matches(".q-tab.q-focusable")===!0),s=n.length;if(s===0)return;if(t===36)return H(n[0]),!0;if(t===35)return H(n[s-1]),!0;const c=t===(e.vertical===!0?38:37),o=t===(e.vertical===!0?40:39),u=c===!0?-1:o===!0?1:void 0;if(u!==void 0){const r=W.value===!0?-1:1,_=n.indexOf(a)+u*r;return _>=0&&_<s&&(H(n[_]),n[_].focus({preventScroll:!0})),!0}}const we=v(()=>O.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function ae(t){const a=d.value,{get:n,set:s}=we.value;let c=!1,o=n(a);const u=t<o?-1:1;return o+=u*5,o<0?(c=!0,o=0):(u===-1&&o<=t||u===1&&o>=t)&&(c=!0,o=t),s(a,o),T(),c}function U(){return C.filter(t=>t.routerProps!==void 0&&t.routerProps.hasRouterLink.value===!0)}function Ce(){let t=null,a=i;const n={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:s}=f.proxy.$route,c=S.value;let o=a===!0?se:r=>{c===r.name.value&&(a=!0,o=se)};const u=U();for(const r of u){const _=r.routerProps.exact.value===!0;if(r.routerProps[_===!0?"linkIsExactActive":"linkIsActive"].value!==!0||n.exact===!0&&_!==!0){o(r);continue}const G=r.routerProps.linkRoute.value,X=G.hash;if(_===!0){if(s===X){t=r.name.value;break}else if(s!==""&&X!==""){o(r);continue}}const J=G.matched.length,oe=G.href.length-X.length;if(J===n.matchedLen?oe>n.hrefLen:J>n.matchedLen){t=r.name.value,Object.assign(n,{matchedLen:J,hrefLen:oe,exact:_});continue}o(r)}(a===!0||t!==null)&&D({name:t,setCurrent:!0,fromRoute:!0})}function Te(t){if(E(),I.value!==!0&&y.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&y.value.contains(a)===!0&&(I.value=!0)}}function _e(){A(()=>{I.value=!1},30)}function N(){le.avoidRouteWatcher!==!0&&F(Ce)}function Re(t){C.push(t),U().length>0&&(h===void 0&&(h=P(()=>f.proxy.$route,N)),N())}function qe(t){C.splice(C.indexOf(t),1),h!==void 0&&(U().length===0&&(h(),h=void 0),N())}const le={currentModel:S,tabProps:ve,hasFocus:I,registerTab:Re,unregisterTab:qe,verifyRouteModel:N,updateModel:D,recalculateScroll:j,onKbdNavigate:me,avoidRouteWatcher:!1};Pe(ce,le),ue(()=>{clearTimeout(b),h!==void 0&&h()});let ne=!1;return Ee(()=>{ne=!0}),Fe(()=>{ne===!0&&j()}),()=>{const t=[g(Qe,{onResize:Y}),g("div",{ref:d,class:he.value,onScroll:T},ke(B.default))];return x.value===!0&&t.push(g(z,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedown:ee,onTouchstartPassive:ee,onMouseup:R,onMouseleave:R,onTouchend:R}),g(z,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(k.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedown:te,onTouchstartPassive:te,onMouseup:R,onMouseleave:R,onTouchend:R})),g("div",{ref:y,class:be.value,role:"tablist",onFocusin:Te,onFocusout:_e},t)}}});export{Je as Q,Ue as a,Xe as b,Ge as u};