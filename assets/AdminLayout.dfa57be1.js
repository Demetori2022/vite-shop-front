import{af as q,ag as Z,Z as j,l as y,r as C,j as U,ah as F,ai as Q,aj as G,ak as J,ad as K,m as ee,p as te,al as ae,k as ne,t as B,am as oe,an as ie,ao as re,ap as le,v as ue,aq as se,x as N,Y as ve,ar as de,q as ce,n as $,b as l,Q as he,as as ge,P as O,a5 as me,at as fe,a6 as we,o as be,a7 as ye,w as S,au as xe,X as I,av as _e}from"./index.3c87a419.js";import{V as D,a as H}from"./VList.65ec07bc.js";import{V as pe}from"./VDivider.cafc6ead.js";const Ee=100,Me=20;function X(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function Y(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let c=e.length-1;c>0;c--){if(e[c].t===e[c-1].t)continue;const t=X(s),g=(e[c].d-e[c-1].d)/(e[c].t-e[c-1].t);s+=(g-t)*Math.abs(g),c===e.length-1&&(s*=.5)}return X(s)*1e3}function Te(){const e={};function s(g){Array.from(g.changedTouches).forEach(a=>{var u;((u=e[a.identifier])!=null?u:e[a.identifier]=new q(Me)).push([g.timeStamp,a])})}function c(g){Array.from(g.changedTouches).forEach(a=>{delete e[a.identifier]})}function t(g){var a;const u=(a=e[g])==null?void 0:a.values().reverse();if(!u)throw new Error(`No samples for touch id ${g}`);const x=u[0],M=[],p=[];for(const v of u){if(x[0]-v[0]>Ee)break;M.push({t:v[0],d:v[1].clientX}),p.push({t:v[0],d:v[1].clientY})}return{x:Y(M),y:Y(p),get direction(){const{x:v,y:m}=this,[i,h]=[Math.abs(v),Math.abs(m)];return i>h&&v>=0?"right":i>h&&v<=0?"left":h>i&&m>=0?"down":h>i&&m<=0?"up":ke()}}}return{addMovement:s,endTouch:c,getVelocity:t}}function ke(){throw new Error}function Ve(e){let{isActive:s,isTemporary:c,width:t,touchless:g,position:a}=e;Z(()=>{window.addEventListener("touchstart",R,{passive:!0}),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",V,{passive:!0})}),j(()=>{window.removeEventListener("touchstart",R),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",V)});const u=y(()=>a.value!=="bottom"),{addMovement:x,endTouch:M,getVelocity:p}=Te();let v=!1;const m=C(!1),i=C(0),h=C(0);let k;function E(n,r){return(a.value==="left"?n:a.value==="right"?document.documentElement.clientWidth-n:a.value==="bottom"?document.documentElement.clientHeight-n:T())-(r?t.value:0)}function w(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const o=a.value==="left"?(n-h.value)/t.value:a.value==="right"?(document.documentElement.clientWidth-n-h.value)/t.value:a.value==="bottom"?(document.documentElement.clientHeight-n-h.value)/t.value:T();return r?Math.max(0,Math.min(1,o)):o}function R(n){if(g.value)return;const r=n.changedTouches[0].clientX,o=n.changedTouches[0].clientY,f=25,b=a.value==="left"?r<f:a.value==="right"?r>document.documentElement.clientWidth-f:a.value==="bottom"?o>document.documentElement.clientHeight-f:T(),d=s.value&&(a.value==="left"?r<t.value:a.value==="right"?r>document.documentElement.clientWidth-t.value:a.value==="bottom"?o>document.documentElement.clientHeight-t.value:T());(b||d||s.value&&c.value)&&(v=!0,k=[r,o],h.value=E(u.value?r:o,s.value),i.value=w(u.value?r:o),M(n),x(n))}function _(n){const r=n.changedTouches[0].clientX,o=n.changedTouches[0].clientY;if(v){if(!n.cancelable){v=!1;return}const b=Math.abs(r-k[0]),d=Math.abs(o-k[1]);(u.value?b>d&&b>3:d>b&&d>3)?(m.value=!0,v=!1):(u.value?d:b)>3&&(v=!1)}if(!m.value)return;n.preventDefault(),x(n);const f=w(u.value?r:o,!1);i.value=Math.max(0,Math.min(1,f)),f>1?h.value=E(u.value?r:o,!0):f<0&&(h.value=E(u.value?r:o,!1))}function V(n){if(v=!1,!m.value)return;x(n),m.value=!1;const r=p(n.changedTouches[0].identifier),o=Math.abs(r.x),f=Math.abs(r.y);(u.value?o>f&&o>400:f>o&&f>3)?s.value=r.direction===({left:"right",right:"left",bottom:"up"}[a.value]||T()):s.value=i.value>.5}const P=y(()=>m.value?{transform:a.value==="left"?`translateX(calc(-100% + ${i.value*t.value}px))`:a.value==="right"?`translateX(calc(100% - ${i.value*t.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${i.value*t.value}px))`:T(),transition:"none"}:void 0);return{isDragging:m,dragProgress:i,dragStyles:P}}function T(){throw new Error}const Be=U({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:72},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"left",validator:e=>["left","right","bottom"].includes(e)},...F(),...Q(),...G(),...J(),...K({tag:"nav"}),...ee()},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:c,slots:t}=s;const{themeClasses:g}=te(e),{borderClasses:a}=ae(e),{backgroundColorClasses:u,backgroundColorStyles:x}=ne(B(e,"color")),{elevationClasses:M}=oe(e),{mobile:p}=ie(),{roundedClasses:v}=re(e),m=le(),i=ue(e,"modelValue",null,d=>!!d),h=C(!1),{ssrBootStyles:k}=se(),E=y(()=>e.rail&&e.expandOnHover&&h.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),w=y(()=>!e.permanent&&(p.value||e.temporary));e.disableResizeWatcher||N(w,d=>!e.permanent&&(i.value=!d)),!e.disableRouteWatcher&&m&&N(m.currentRoute,()=>w.value&&(i.value=!1)),N(()=>e.permanent,d=>{d&&(i.value=!0)}),ve(()=>{e.modelValue!=null||w.value||(i.value=e.permanent||!p.value)});const R=C(),{isDragging:_,dragProgress:V,dragStyles:P}=Ve({isActive:i,isTemporary:w,width:E,touchless:B(e,"touchless"),position:B(e,"location")}),n=y(()=>{const d=w.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):E.value;return _.value?d*V.value:d}),{layoutItemStyles:r,layoutRect:o,layoutItemScrimStyles:f}=de({id:e.name,order:y(()=>parseInt(e.order,10)),position:B(e,"location"),layoutSize:n,elementSize:E,active:y(()=>i.value||_.value),disableTransitions:y(()=>_.value),absolute:B(e,"absolute")}),b=y(()=>({..._.value?{opacity:V.value*.2,transition:"none"}:void 0,...o.value?{left:$(o.value.left),right:$(o.value.right),top:$(o.value.top),bottom:$(o.value.bottom)}:void 0,...f.value}));return ce(()=>{var d,L,W,z;const A=t.image||e.image;return l(O,null,[l(e.tag,he({ref:R,onMouseenter:()=>h.value=!0,onMouseleave:()=>h.value=!1,class:["v-navigation-drawer",{"v-navigation-drawer--bottom":e.location==="bottom","v-navigation-drawer--end":e.location==="right","v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":h.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--start":e.location==="left","v-navigation-drawer--temporary":w.value,"v-navigation-drawer--active":i.value},g.value,u.value,a.value,M.value,v.value],style:[x.value,r.value,P.value,k.value]},c),{default:()=>[A&&l("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?(d=t.image)==null?void 0:d.call(t,{image:e.image}):l("img",{src:e.image,alt:""},null)]),t.prepend&&l("div",{class:"v-navigation-drawer__prepend"},[(L=t.prepend)==null?void 0:L.call(t)]),l("div",{class:"v-navigation-drawer__content"},[(W=t.default)==null?void 0:W.call(t)]),t.append&&l("div",{class:"v-navigation-drawer__append"},[(z=t.append)==null?void 0:z.call(t)])]}),l(ge,{name:"fade-transition"},{default:()=>[w.value&&(_.value||i.value)&&l("div",{class:"v-navigation-drawer__scrim",style:b.value,onClick:()=>i.value=!1},null)]})])}),{}}}),$e={__name:"AdminLayout",setup(e){const s=me(),{avatar:c,account:t}=fe(s);return(g,a)=>{const u=we("router-view");return be(),ye(O,null,[l(Be,{"expand-on-hover":"",rail:"",permanent:""},{default:S(()=>[l(D,null,{default:S(()=>[l(H,{"prepend-avatar":I(c),title:I(t)},null,8,["prepend-avatar","title"])]),_:1}),l(pe),l(D,null,{default:S(()=>[l(H,{to:"/admin/products",title:"\u5546\u54C1\u7BA1\u7406","prepend-icon":"mdi-shopping"}),l(H,{to:"/admin/orders",title:"\u8A02\u55AE\u7BA1\u7406","prepend-icon":"mdi-format-list-checkbox"}),l(H,{to:"/",title:"\u56DE\u524D\u53F0","prepend-icon":"mdi-home"})]),_:1})]),_:1}),l(xe,null,{default:S(()=>[l(_e,null,{default:S(()=>[l(u)]),_:1})]),_:1})],64)}}};export{$e as default};
