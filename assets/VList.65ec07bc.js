import{A,r as x,y as V,s as Q,v as K,l as h,Z,aw as Fe,H as Ge,j as P,F as L,I,ad as $,t as b,aq as ze,q as S,b as u,ax as De,W as Ee,ay as Ne,N as X,O as He,az as Re,Q as O,aA as je,aB as F,aC as Ke,K as Ue,aD as qe,ah as Y,_ as ee,aE as te,ai as ie,ak as ne,aF as Je,m as ae,aG as le,aH as We,x as Qe,p as se,al as re,aI as Ze,$ as oe,aJ as de,am as ve,ao as ue,a3 as Xe,aK as Ye,P as U,J as et,aL as w,D as ce,k as tt,aM as it}from"./index.3c87a419.js";import{V as nt}from"./VDivider.cafc6ead.js";const T=Symbol.for("vuetify:list");function me(){const e=A(T,{hasPrepend:x(!1),updateHasPrepend:()=>null}),l={hasPrepend:x(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return V(T,l),e}function pe(){return A(T,null)}const at={open:e=>{let{id:l,value:t,opened:n,parents:a}=e;if(t){const i=new Set;i.add(l);let s=a.get(l);for(;s!=null;)i.add(s),s=a.get(s);return i}else return n.delete(l),n},select:()=>null},ge={open:e=>{let{id:l,value:t,opened:n,parents:a}=e;if(t){let i=a.get(l);for(n.add(l);i!=null&&i!==l;)n.add(i),i=a.get(i);return n}else n.delete(l);return n},select:()=>null},lt={open:ge.open,select:e=>{let{id:l,value:t,opened:n,parents:a}=e;if(!t)return n;const i=[];let s=a.get(l);for(;s!=null;)i.push(s),s=a.get(s);return new Set(i)}},G=e=>{const l={select:t=>{let{id:n,value:a,selected:i}=t;if(e&&!a){const s=Array.from(i.entries()).reduce((v,c)=>{let[m,g]=c;return g==="on"?[...v,m]:v},[]);if(s.length===1&&s[0]===n)return i}return i.set(n,a?"on":"off"),i},in:(t,n,a)=>{let i=new Map;for(const s of t||[])i=l.select({id:s,value:!0,selected:new Map(i),children:n,parents:a});return i},out:t=>{const n=[];for(const[a,i]of t.entries())i==="on"&&n.push(a);return n}};return l},he=e=>{const l=G(e);return{select:n=>{let{selected:a,id:i,...s}=n;const v=a.has(i)?new Map([[i,a.get(i)]]):new Map;return l.select({...s,id:i,selected:v})},in:(n,a,i)=>{let s=new Map;return n!=null&&n.length&&(s=l.in(n.slice(0,1),a,i)),s},out:(n,a,i)=>l.out(n,a,i)}},st=e=>{const l=G(e);return{select:n=>{let{id:a,selected:i,children:s,...v}=n;return s.has(a)?i:l.select({id:a,selected:i,children:s,...v})},in:l.in,out:l.out}},rt=e=>{const l=he(e);return{select:n=>{let{id:a,selected:i,children:s,...v}=n;return s.has(a)?i:l.select({id:a,selected:i,children:s,...v})},in:l.in,out:l.out}},ot=e=>{const l={select:t=>{let{id:n,value:a,selected:i,children:s,parents:v}=t;const c=new Map(i),m=[n];for(;m.length;){const o=m.shift();i.set(o,a?"on":"off"),s.has(o)&&m.push(...s.get(o))}let g=v.get(n);for(;g;){const o=s.get(g),d=o.every(p=>i.get(p)==="on"),r=o.every(p=>!i.has(p)||i.get(p)==="off");i.set(g,d?"on":r?"off":"indeterminate"),g=v.get(g)}return e&&!a&&Array.from(i.entries()).reduce((d,r)=>{let[p,y]=r;return y==="on"?[...d,p]:d},[]).length===0?c:i},in:(t,n,a)=>{let i=new Map;for(const s of t||[])i=l.select({id:s,value:!0,selected:new Map(i),children:n,parents:a});return i},out:(t,n)=>{const a=[];for(const[i,s]of t.entries())s==="on"&&!n.has(i)&&a.push(i);return a}};return l},k=Symbol.for("vuetify:nested"),fe={id:x(),root:{register:()=>null,unregister:()=>null,parents:x(new Map),children:x(new Map),open:()=>null,select:()=>null,opened:x(new Set),selected:x(new Map),selectedValues:x([])}},dt=Q({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),vt=e=>{let l=!1;const t=x(new Map),n=x(new Map),a=K(e,"opened",e.opened,o=>new Set(o),o=>[...o.values()]),i=h(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return rt(e.mandatory);case"leaf":return st(e.mandatory);case"independent":return G(e.mandatory);case"single-independent":return he(e.mandatory);case"classic":default:return ot(e.mandatory)}}),s=h(()=>{if(typeof e.openStrategy=="function")return e.openStrategy;switch(e.openStrategy){case"list":return lt;case"single":return at;case"multiple":default:return ge}}),v=K(e,"selected",e.selected,o=>i.value.in(o,t.value,n.value),o=>i.value.out(o,t.value,n.value));Z(()=>{l=!0});function c(o){const d=[];let r=o;for(;r!=null;)d.unshift(r),r=n.value.get(r);return d}const m=Fe("nested"),g={id:x(),root:{opened:a,selected:v,selectedValues:h(()=>{const o=[];for(const[d,r]of v.value.entries())r==="on"&&o.push(d);return o}),register:(o,d,r)=>{d&&o!==d&&n.value.set(o,d),r&&t.value.set(o,[]),d!=null&&t.value.set(d,[...t.value.get(d)||[],o])},unregister:o=>{if(l)return;t.value.delete(o);const d=n.value.get(o);if(d){var r;const p=(r=t.value.get(d))!=null?r:[];t.value.set(d,p.filter(y=>y!==o))}n.value.delete(o),a.value.delete(o)},open:(o,d,r)=>{m.emit("click:open",{id:o,value:d,path:c(o),event:r});const p=s.value.open({id:o,value:d,opened:new Set(a.value),children:t.value,parents:n.value,event:r});p&&(a.value=p)},select:(o,d,r)=>{m.emit("click:select",{id:o,value:d,path:c(o),event:r});const p=i.value.select({id:o,value:d,selected:new Map(v.value),children:t.value,parents:n.value,event:r});p&&(v.value=p);const y=s.value.select({id:o,value:d,selected:new Map(v.value),opened:new Set(a.value),children:t.value,parents:n.value,event:r});y&&(a.value=y)},children:t,parents:n}};return V(k,g),g.root},ye=(e,l)=>{const t=A(k,fe),n=h(()=>{var i;return(i=e.value)!=null?i:Ge().toString()}),a={...t,id:n,open:(i,s)=>t.root.open(n.value,i,s),isOpen:h(()=>t.root.opened.value.has(n.value)),parent:h(()=>t.root.parents.value.get(n.value)),select:(i,s)=>t.root.select(n.value,i,s),isSelected:h(()=>t.root.selected.value.get(n.value)==="on"),isIndeterminate:h(()=>t.root.selected.value.get(n.value)==="indeterminate"),isLeaf:h(()=>!t.root.children.value.get(n.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(n.value,t.id.value,l),Z(()=>{!t.isGroupActivator&&t.root.unregister(n.value)}),l&&V(k,a),a},ut=()=>{const e=A(k,fe);V(k,{...e,isGroupActivator:!0})},ct=P({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return ut(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),mt=L()({name:"VListGroup",props:{activeColor:String,color:String,collapseIcon:{type:I,default:"$collapse"},expandIcon:{type:I,default:"$expand"},value:null,...$()},setup(e,l){let{slots:t}=l;const{isOpen:n,open:a}=ye(b(e,"value"),!0),i=pe(),{isBooted:s}=ze(),v=m=>{a(!n.value,m)},c=h(()=>{var m;return{onClick:v,active:n.value,appendIcon:n.value?e.collapseIcon:e.expandIcon,class:"v-list-group__header",color:n.value?(m=e.activeColor)!=null?m:e.color:void 0}});return S(()=>{var m;return u(e.tag,{class:["v-list-group",{"v-list-group--prepend":i==null?void 0:i.hasPrepend.value}]},{default:()=>[t.activator&&u(De,{defaults:{VListItemIcon:{color:c.value.color}}},{default:()=>[u(ct,null,{default:()=>[t.activator({props:c.value,isOpen:n})]})]}),u(Ee,{transition:s.value&&{component:Ne}},{default:()=>[X(u("div",{class:"v-list-group__items"},[(m=t.default)==null?void 0:m.call(t)]),[[He,n.value]])]})]})}),{}}});const q=P({name:"VListItemAvatar",props:Re(),setup(e,l){let{slots:t}=l;return S(()=>u(je,O({class:["v-list-item-avatar",{"v-list-item-avatar--start":e.start,"v-list-item-avatar--end":e.end}]},e),t)),{}}}),pt=F("v-list-item-header"),J=P({name:"VListItemIcon",props:Ke(),setup(e,l){let{slots:t}=l;return S(()=>u(Ue,O({class:["v-list-item-icon",{"v-list-item-icon--start":e.start,"v-list-item-icon--end":e.end}]},e),t)),{}}}),gt=F("v-list-item-subtitle"),ht=F("v-list-item-title"),W=L()({name:"VListItem",directives:{Ripple:qe},props:{active:Boolean,activeColor:String,activeClass:String,appendAvatar:String,appendIcon:I,disabled:Boolean,lines:String,nav:Boolean,prependAvatar:String,prependIcon:I,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,link:Boolean,...Y(),...ee(),...te(),...ie(),...ne(),...Je(),...$(),...ae(),...le({variant:"text"})},setup(e,l){var t;let{attrs:n,slots:a}=l;const i=We(e,n),s=h(()=>{var f;return(f=e.value)!=null?f:i.href.value}),{select:v,isSelected:c,isIndeterminate:m,isGroupActivator:g,root:o,parent:d}=ye(s,!1),r=pe(),p=h(()=>{var f;return e.active||((f=i.isExactActive)==null?void 0:f.value)||c.value}),y=h(()=>e.rounded||e.nav),C=h(()=>{var f;return{color:p.value&&(f=e.activeColor)!=null?f:e.color,variant:e.variant}});(t=i.isExactActive)!=null&&t.value&&d.value!=null&&o.open(d.value,!0),Qe(()=>{var f;return(f=i.isExactActive)==null?void 0:f.value},f=>{f&&d.value!=null&&o.open(d.value,!0)});const{themeClasses:_e}=se(e),{borderClasses:ke}=re(e),{colorClasses:Ce,colorStyles:Ie,variantClasses:Ae}=Ze(C),{densityClasses:Ve}=oe(e),{dimensionStyles:Pe}=de(e),{elevationClasses:Le}=ve(e),{roundedClasses:$e}=ue(y),Be=h(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),B=h(()=>({isActive:p.value,select:v,isSelected:c.value,isIndeterminate:m.value}));return S(()=>{var f,z,D;const Me=i.isLink.value?"a":e.tag,E=!r||c.value||p.value,N=a.title||e.title,H=a.subtitle||e.subtitle,Te=!!(N||H),Oe=!!(a.append||e.appendAvatar||e.appendIcon),M=!!(a.prepend||e.prependAvatar||e.prependIcon),_=!e.disabled&&(e.link||i.isClickable.value||e.value!=null&&!!r);return r==null||r.updateHasPrepend(M),X(u(Me,{class:["v-list-item",{"v-list-item--active":p.value,"v-list-item--disabled":e.disabled,"v-list-item--link":_,"v-list-item--nav":e.nav,"v-list-item--prepend":!M&&(r==null?void 0:r.hasPrepend.value),[`${e.activeClass}`]:p.value},_e.value,ke.value,E?Ce.value:void 0,Ve.value,Le.value,Be.value,$e.value,Ae.value],style:[E?Ie.value:void 0,Pe.value],href:i.href.value,tabindex:_?0:void 0,onClick:_&&(R=>{var j;g||((j=i.navigate)==null||j.call(i,R),e.value!=null&&v(!c.value,R))})},{default:()=>[Ye(_||p.value,"v-list-item"),M&&u(U,null,[e.prependAvatar&&u(q,{image:e.prependAvatar,start:!0},null),e.prependIcon&&u(J,{icon:e.prependIcon,start:!0},null),(f=a.prepend)==null?void 0:f.call(a,B.value)]),Te&&u(pt,{key:"header"},{default:()=>[N&&u(ht,{key:"title"},{default:()=>[a.title?a.title({title:e.title}):e.title]}),H&&u(gt,null,{default:()=>[a.subtitle?a.subtitle({subtitle:e.subtitle}):e.subtitle]})]}),(z=a.default)==null?void 0:z.call(a,B.value),Oe&&u(U,null,[(D=a.append)==null?void 0:D.call(a,B.value),e.appendAvatar&&u(q,{image:e.appendAvatar,end:!0},null),e.appendIcon&&u(J,{icon:e.appendIcon,end:!0},null)])]}),[[Xe("ripple"),_]])}),{}}}),ft=P({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...$()},setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:a}=et(b(e,"color"));return S(()=>{var i,s;const v=!!(t.default||e.title);return u(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value],style:{textColorStyles:a}},{default:()=>[v&&u("div",{class:"v-list-subheader__text"},[(i=(s=t.default)==null?void 0:s.call(t))!=null?i:e.title])]})}),{}}}),be=L()({name:"VListChildren",props:{items:Array},setup(e,l){let{slots:t}=l;return me(),()=>{var n,a,i;return(n=(a=t.default)==null?void 0:a.call(t))!=null?n:(i=e.items)==null?void 0:i.map(s=>{let{children:v,props:c,type:m,raw:g}=s;if(m==="divider")return u(nt,c,null);if(m==="subheader")return u(ft,c,t);const o={subtitle:t.subtitle?d=>{var r;return(r=t.subtitle)==null?void 0:r.call(t,{...d,item:g})}:void 0,prepend:t.prepend?d=>{var r;return(r=t.prepend)==null?void 0:r.call(t,{...d,item:g})}:void 0,append:t.append?d=>{var r;return(r=t.append)==null?void 0:r.call(t,{...d,item:g})}:void 0,default:t.default?d=>{var r;return(r=t.default)==null?void 0:r.call(t,{...d,item:g})}:void 0,title:t.title?d=>{var r;return(r=t.title)==null?void 0:r.call(t,{...d,item:g})}:void 0};return v?u(mt,{value:c==null?void 0:c.value},{activator:d=>{let{props:r}=d;return t.header?t.header({...c,...r}):u(W,O(c,r),o)},default:()=>u(be,{items:v},t)}):t.item?t.item(c):u(W,c,o)})}}}),yt=Q({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function xe(e,l){const t=w(l,e.itemTitle,l),n=w(l,e.itemValue,t),a=w(l,e.itemChildren),i=e.itemProps===!0?ce(l,["children"])[1]:w(l,e.itemProps),s={title:t,value:n,...i};return{title:s.title,value:s.value,props:s,children:Array.isArray(a)?we(e,a):void 0,raw:l}}function we(e,l){const t=[];for(const n of l)t.push(xe(e,n));return t}function _t(e){const l=h(()=>we(e,e.items));function t(a){return a.map(i=>xe(e,i))}function n(a){return e.returnObject?a.map(i=>{let{raw:s}=i;return s}):a.map(i=>{let{props:s}=i;return s.value})}return{items:l,transformIn:t,transformOut:n}}function bt(e,l){const t=w(l,e.itemType,"item"),n=typeof l=="string"?l:w(l,e.itemTitle),a=w(l,e.itemValue,void 0),i=w(l,e.itemChildren),s=e.itemProps===!0?ce(l,["children"])[1]:w(l,e.itemProps),v={title:n,value:a,...s};return{type:t,title:v.title,value:v.value,props:v,children:t==="item"&&i?Se(e,i):void 0,raw:l}}function Se(e,l){const t=[];for(const n of l)t.push(bt(e,n));return t}function xt(e){return{items:h(()=>Se(e,e.items))}}const kt=L()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...dt({selectStrategy:"single-leaf",openStrategy:"list"}),...Y(),...ee(),...te(),...ie(),itemType:{type:String,default:"type"},...yt(),...ne(),...$(),...ae(),...le({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=xt(e),{themeClasses:a}=se(e),{backgroundColorClasses:i,backgroundColorStyles:s}=tt(b(e,"bgColor")),{borderClasses:v}=re(e),{densityClasses:c}=oe(e),{dimensionStyles:m}=de(e),{elevationClasses:g}=ve(e),{roundedClasses:o}=ue(e),{open:d,select:r}=vt(e),p=h(()=>e.lines?`v-list--${e.lines}-line`:void 0),y=b(e,"activeColor"),C=b(e,"color");return me(),it({VListGroup:{activeColor:y,color:C},VListItem:{activeClass:b(e,"activeClass"),activeColor:y,color:C,density:b(e,"density"),disabled:b(e,"disabled"),lines:b(e,"lines"),nav:b(e,"nav"),variant:b(e,"variant")}}),S(()=>u(e.tag,{class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},a.value,i.value,v.value,c.value,g.value,p.value,o.value],style:[s.value,m.value]},{default:()=>[u(be,{items:n.value},t)]})),{open:d,select:r}}});export{kt as V,W as a,yt as m,_t as u};
