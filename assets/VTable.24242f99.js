import{j as d,_ as p,ad as i,m as h,p as _,$ as s,q as c,b as a,n as f}from"./index.3c87a419.js";const w=d({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],...p(),...i(),...h()},setup(e,b){let{slots:t}=b;const{themeClasses:o}=_(e),{densityClasses:v}=s(e);return c(()=>{var r,l;return a(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom},o.value,v.value]},{default:()=>[(r=t.top)==null?void 0:r.call(t),t.default&&a("div",{class:"v-table__wrapper",style:{height:f(e.height)}},[a("table",null,[t.default()])]),(l=t.bottom)==null?void 0:l.call(t)]})}),{}}});export{w as V};
