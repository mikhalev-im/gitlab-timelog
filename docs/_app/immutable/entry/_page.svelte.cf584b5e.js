import{S as T,i as j,s as A,k as d,y as D,l as h,m as _,z as N,h as u,n as l,b as y,A as O,g as U,d as V,B as Y,q as L,a as S,r as w,c as G,G as c,J as z,K as B,L as C}from"../chunks/index.e6ee7f0b.js";import{P as F}from"../chunks/panel.9fef8ac1.js";function H(f){let t,s,r,e,a,i,$,v,o,x,p,k,E,I;return{c(){t=d("h1"),s=L("GitLab timelog analyzer"),r=S(),e=d("form"),a=d("div"),i=d("label"),$=L("Your GitLab token"),v=S(),o=d("input"),x=S(),p=d("button"),k=L("Sign in"),this.h()},l(n){t=h(n,"H1",{class:!0});var m=_(t);s=w(m,"GitLab timelog analyzer"),m.forEach(u),r=G(n),e=h(n,"FORM",{action:!0});var b=_(e);a=h(b,"DIV",{class:!0});var g=_(a);i=h(g,"LABEL",{for:!0,class:!0});var P=_(i);$=w(P,"Your GitLab token"),P.forEach(u),v=G(g),o=h(g,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),g.forEach(u),x=G(b),p=h(b,"BUTTON",{type:!0,class:!0});var q=_(p);k=w(q,"Sign in"),q.forEach(u),b.forEach(u),this.h()},h(){l(t,"class","text-xl font-bold text-gray-900 mb-6"),l(i,"for","token"),l(i,"class","block mb-2 text-sm font-medium text-gray-900"),l(o,"id","token"),l(o,"type","password"),o.required=!0,l(o,"placeholder","••••••••"),l(o,"class","bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none"),l(a,"class","mb-6"),l(p,"type","submit"),l(p,"class","w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"),l(e,"action","/projects")},m(n,m){y(n,t,m),c(t,s),y(n,r,m),y(n,e,m),c(e,a),c(a,i),c(i,$),c(a,v),c(a,o),z(o,f[0]),c(e,x),c(e,p),c(p,k),E||(I=[B(o,"input",f[2]),B(e,"submit",f[1])],E=!0)},p(n,m){m&1&&o.value!==n[0]&&z(o,n[0])},d(n){n&&u(t),n&&u(r),n&&u(e),E=!1,C(I)}}}function J(f){let t,s,r;return s=new F({props:{$$slots:{default:[H]},$$scope:{ctx:f}}}),{c(){t=d("div"),D(s.$$.fragment),this.h()},l(e){t=h(e,"DIV",{class:!0});var a=_(t);N(s.$$.fragment,a),a.forEach(u),this.h()},h(){l(t,"class","flex items-center justify-center h-screen")},m(e,a){y(e,t,a),O(s,t,null),r=!0},p(e,[a]){const i={};a&9&&(i.$$scope={dirty:a,ctx:e}),s.$set(i)},i(e){r||(U(s.$$.fragment,e),r=!0)},o(e){V(s.$$.fragment,e),r=!1},d(e){e&&u(t),Y(s)}}}function K(f,t,s){let r=localStorage.getItem("accesstoken")||"";const e=()=>{localStorage.setItem("accesstoken",r)};function a(){r=this.value,s(0,r)}return[r,e,a]}class Q extends T{constructor(t){super(),j(this,t,K,J,A,{})}}export{Q as default};