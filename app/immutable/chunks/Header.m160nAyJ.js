import{s as H,n as I,d as A}from"./scheduler.BDURF5cI.js";import{S,i as V,e as d,s as $,c as h,d as f,r as q,h as C,g as i,q as o,j as k,k as b,u as D}from"./index.jDbZH82R.js";import{g as L}from"./app.state.5iMGEx15.js";function M(l){let e;return{c(){e=d("i"),this.h()},l(t){e=h(t,"I",{class:!0}),f(e).forEach(i),this.h()},h(){o(e,"class","bi bi-moon")},m(t,s){k(t,e,s)},d(t){t&&i(e)}}}function N(l){let e;return{c(){e=d("i"),this.h()},l(t){e=h(t,"I",{class:!0}),f(e).forEach(i),this.h()},h(){o(e,"class","bi bi-sun")},m(t,s){k(t,e,s)},d(t){t&&i(e)}}}function j(l){let e,t,s,m='<img src="/assets/logo.png" alt="logo" class="logo svelte-193wsx5"/> <div class="navbar-brand mb-0 h1">Eternal Insights</div>',p,c,n,g,y;function E(a,u){return a[0]?N:M}let v=E(l),r=v(l);return{c(){e=d("nav"),t=d("div"),s=d("a"),s.innerHTML=m,p=$(),c=d("div"),n=d("button"),r.c(),this.h()},l(a){e=h(a,"NAV",{class:!0});var u=f(e);t=h(u,"DIV",{class:!0});var _=f(t);s=h(_,"A",{href:!0,class:!0,"data-svelte-h":!0}),q(s)!=="svelte-1e80ev5"&&(s.innerHTML=m),p=C(_),c=h(_,"DIV",{});var T=f(c);n=h(T,"BUTTON",{class:!0,type:!0});var x=f(n);r.l(x),x.forEach(i),T.forEach(i),_.forEach(i),u.forEach(i),this.h()},h(){o(s,"href","/home"),o(s,"class","d-flex align-items-center gap-2 text-decoration-none"),o(n,"class","btn btn-link"),o(n,"type","button"),o(t,"class","container"),o(e,"class","navbar bg-body-tertiary d-print-none")},m(a,u){k(a,e,u),b(e,t),b(t,s),b(t,p),b(t,c),b(c,n),r.m(n,null),g||(y=D(n,"click",l[2]),g=!0)},p(a,[u]){v!==(v=E(a))&&(r.d(1),r=v(a),r&&(r.c(),r.m(n,null)))},i:I,o:I,d(a){a&&i(e),r.d(),g=!1,y()}}}function w(l,e,t){let s;const{stores:{darkTheme:m},actions:{toggleTheme:p}}=L();return A(l,m,c=>t(0,s=c)),[s,m,p]}class z extends S{constructor(e){super(),V(this,e,w,j,H,{})}}export{z as H};
