import{t as ct}from"./scheduler.C_GhXtWQ.js";import{w as pe}from"./index.DkWSMPc2.js";new URL("sveltekit-internal://");function lt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ft(e){return e.split("%25").map(decodeURI).join("%25")}function ut(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ce({href:e}){return e.split("#")[0]}const dt=["href","pathname","search","toString","toJSON"];function ht(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of dt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const pt="/__data.json",gt=".html__data.json";function mt(e){return e.endsWith(".html")?e.replace(/\.html$/,gt):e.replace(/\/$/,"")+pt}function yt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function _t(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const $e=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&B.delete(ge(e)),$e(e,n));const B=new Map;function wt(e,n){const t=ge(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&B.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=_t(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function vt(e,n,t){if(B.size>0){const r=ge(e,t),a=B.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);B.delete(r)}}return window.fetch(n,t)}function ge(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${yt(...a)}"]`}return r}const bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Et(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=bt.exec(c),[,h,g,u,m]=d;return n.push({name:u,matcher:m,optional:!!h,rest:!!g,chained:g?f===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:n}}function kt(e){return!/^\([^)]+\)$/.test(e)}function Et(e){return e.slice(1).split("/").filter(kt)}function St(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=a[s-i];if(c.chained&&c.rest&&i&&(f=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){r[c.name]=f;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Rt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,f,d]])=>{const{pattern:h,params:g}=At(s),u={id:s,exec:m=>{const l=h.exec(m);if(l)return St(l,g,r)},errors:[1,...d||[]].map(m=>e[m]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Fe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ie(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}var je;const L=((je=globalThis.__sveltekit_288i2e)==null?void 0:je.base)??"";var De;const It=((De=globalThis.__sveltekit_288i2e)==null?void 0:De.assets)??L,Tt="1728258612252",Ve="sveltekit:snapshot",Be="sveltekit:scroll",Ge="sveltekit:states",Lt="sveltekit:pageurl",j="sveltekit:history",q="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},K=location.origin;function qe(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function me(){return{x:pageXOffset,y:pageYOffset}}function N(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Te={...J,"":J.hover};function Me(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function He(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Me(e)}}function ue(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||ne(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===K&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function W(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=N(s,"preload-code")),a===null&&(a=N(s,"preload-data")),n===null&&(n=N(s,"keepfocus")),t===null&&(t=N(s,"noscroll")),o===null&&(o=N(s,"reload")),i===null&&(i=N(s,"replacestate")),s=Me(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Te[r??"off"],preload_data:Te[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Le(e){const n=pe(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ut(){const{set:e,subscribe:n}=pe(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${It}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Tt;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function ne(e,n){return e.origin!==K||!e.pathname.startsWith(n)}function Ue(e){const n=xt(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const Pt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function xt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=Pt.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Ct=-1,Nt=-2,Ot=-3,jt=-4,Dt=-5,$t=-6;function Ft(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===Ct)return;if(o===Ot)return NaN;if(o===jt)return 1/0;if(o===Dt)return-1/0;if(o===$t)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let u=1;u<s.length;u+=2)g[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],m=s[1],l=Ue(m),y=new u(l);r[o]=y;break}case"ArrayBuffer":{const u=s[1],m=Ue(u);r[o]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==Nt&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in s){const d=s[f];c[f]=a(d)}}return r[o]}return a(0)}const Ke=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ke];const Vt=new Set([...Ke]);[...Vt];function Bt(e){return e.filter(n=>n!=null)}class re{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(n,t){this.status=n,this.location=t}}class ye extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Gt="x-sveltekit-invalidated",qt="x-sveltekit-trailing-slash";function z(e){return e instanceof re||e instanceof ye?e.status:500}function Mt(e){return e instanceof ye?e.text:"Internal Error"}const C=Fe(Be)??{},M=Fe(Ve)??{},P={url:Le({}),page:Le({}),navigating:pe(null),updated:Ut()};function _e(e){C[e]=me()}function Ht(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;M[t];)delete M[t],t+=1}function $(e){return location.href=e.href,new Promise(()=>{})}function Pe(){}let ae,de,X,U,he,F;const Je=[],Z=[];let R=null;const We=[],Kt=[];let O=[],_={branch:[],error:null,url:null},we=!1,Q=!1,xe=!0,H=!1,V=!1,ze=!1,ve=!1,be,E,T,I,ee;const G=new Set;async function an(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),F=e,ae=Rt(e),U=document.documentElement,he=n,de=e.nodes[0],X=e.nodes[1],de(),X(),E=(a=history.state)==null?void 0:a[j],T=(o=history.state)==null?void 0:o[q],E||(E=T=Date.now(),history.replaceState({...history.state,[j]:E,[q]:T},""));const r=C[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await en(he,t):Zt(location.href,{replaceState:!0}),Qt()}function Yt(){Je.length=0,ve=!1}function Xe(e){Z.some(n=>n==null?void 0:n.snapshot)&&(M[e]=Z.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function Ze(e){var n;(n=M[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=Z[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Ce(){_e(E),Ie(Be,C),Xe(T),Ie(Ve,M)}async function Qe(e,n,t,r){return Y({type:"goto",url:qe(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(ve=!0)}})}async function Jt(e){if(e.id!==(R==null?void 0:R.id)){const n={};G.add(n),R={id:e.id,token:n,promise:tt({...e,preload:n}).then(t=>(G.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function fe(e){const n=ae.find(t=>t.exec(nt(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function et(e,n,t){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,be=new F.root({target:n,props:{...e.props,stores:P,components:Z},hydrate:t,sync:!1}),Ze(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};O.forEach(i=>i(a)),Q=!0}function te({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(L&&(e.pathname===L||e.pathname===L+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=lt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Bt(t).map(u=>u.node.component),page:I}};i!==void 0&&(c.props.form=i);let f={},d=!I,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const m=t[u],l=_.branch[u];(m==null?void 0:m.data)!==(l==null?void 0:l.data)&&(d=!0),m&&(f={...f,...m.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?f:I.data}),c}async function Ae({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const y of l){const{href:b}=new URL(y,t);c.dependencies.add(b)}};const m={route:new Proxy(a,{get:(l,y)=>(s&&(c.route=!0),l[y])}),params:new Proxy(r,{get:(l,y)=>(s&&c.params.add(y),l[y])}),data:(o==null?void 0:o.data)??null,url:ht(t,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)}),async fetch(l,y){let b;l instanceof Request?(b=l.url,y={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...y}):b=l;const S=new URL(b,t);return s&&u(S.href),S.origin===t.origin&&(b=S.href.slice(t.origin.length)),Q?vt(b,S.href,y):wt(b,y)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=f.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ne(e,n,t,r,a,o){if(ve)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(Je.some(s=>s(new URL(i))))return!0;return!1}function ke(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Wt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function Oe({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function tt({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return G.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=a,f=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,g=_.route?a.id!==_.route.id:!1,u=Wt(_.url,t);let m=!1;const l=f.map((p,v)=>{var x;const A=_.branch[v],k=!!(p!=null&&p[0])&&((A==null?void 0:A.loader)!==p[1]||Ne(m,g,h,u,(x=A.server)==null?void 0:x.uses,r));return k&&(m=!0),k});if(l.some(Boolean)){try{d=await ot(t,l)}catch(p){const v=await D(p,{url:t,params:r,route:{id:e}});return G.has(o)?Oe({error:v,url:t,params:r,route:a}):oe({status:z(p),error:v,url:t,route:a})}if(d.type==="redirect")return d}const y=d==null?void 0:d.nodes;let b=!1;const S=f.map(async(p,v)=>{var se;if(!p)return;const A=_.branch[v],k=y==null?void 0:y[v];if((!k||k.type==="skip")&&p[1]===(A==null?void 0:A.loader)&&!Ne(b,g,h,u,(se=A.universal)==null?void 0:se.uses,r))return A;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Ae({loader:p[1],url:t,params:r,route:a,parent:async()=>{var Re;const Se={};for(let ie=0;ie<v;ie+=1)Object.assign(Se,(Re=await S[ie])==null?void 0:Re.data);return Se},server_data_node:ke(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?A==null?void 0:A.server:void 0)})});for(const p of S)p.catch(()=>{});const w=[];for(let p=0;p<f.length;p+=1)if(f[p])try{w.push(await S[p])}catch(v){if(v instanceof Ye)return{type:"redirect",location:v.location};if(G.has(o))return Oe({error:await D(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let A=z(v),k;if(y!=null&&y.includes(v))A=v.status??A,k=v.error;else if(v instanceof re)k=v.body;else{if(await P.updated.check())return await $(t);k=await D(v,{params:r,url:t,route:{id:a.id}})}const x=await zt(p,w,i);return x?te({url:t,params:r,branch:w.slice(0,x.idx).concat(x.node),status:A,error:k,route:a}):await at(t,{id:a.id},k,A)}else w.push(void 0);return te({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function zt(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:e,error:n,url:t,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const f=await ot(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==K||t.pathname!==location.pathname||we)&&await $(t)}const s=await Ae({loader:de,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:ke(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return te({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function Ee(e,n){if(!e||ne(e,L))return;let t;try{t=F.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=nt(t);for(const a of ae){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:ut(o),url:e}}}function nt(e){return ft(e.slice(L.length)||"/")}function rt({url:e,type:n,intent:t,delta:r}){let a=!1;const o=it(_,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return H||We.forEach(s=>s(i)),a?null:o}async function Y({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=Pe,block:d=Pe}){const h=Ee(n,!1),g=rt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){d();return}const u=E,m=T;f(),H=!0,Q&&P.navigating.set(g.navigation),ee=c;let l=h&&await tt(h);if(!l){if(ne(n,L))return await $(n);l=await at(n,{id:null},await D(new ye(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ee!==c)return g.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await oe({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Qe(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await P.updated.check()&&await $(n);if(Yt(),_e(u),Xe(m),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,p={[j]:E+=w,[q]:T+=w,[Ge]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Ht(E,T)}if(R=null,l.props.page.state=i,Q){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(Kt.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){O=O.filter(v=>!w.includes(v))};w.push(p),O.push(...w)}be.$set(l.props),ze=!0}else et(l,he,!1);const{activeElement:y}=document;await ct();const b=t?t.scroll:a?me():null;if(xe){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==y&&document.activeElement!==document.body;!r&&!S&&tn(),xe=!0,l.props.page&&(I=l.props.page),H=!1,e==="popstate"&&Ze(T),g.fulfil(void 0),O.forEach(w=>w(g.navigation)),P.navigating.set(null)}async function at(e,n,t,r){return e.origin===K&&e.pathname===location.pathname&&!we?await oe({status:r,error:t,url:e,route:n}):await $(e)}function Xt(){let e;U.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}U.addEventListener("mousedown",n),U.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(fe(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=He(o,U);if(!s)return;const{url:c,external:f,download:d}=ue(s,L);if(f||d)return;const h=W(s);if(!h.reload)if(i<=h.preload_data){const g=Ee(c,!1);g&&Jt(g)}else i<=h.preload_code&&fe(c.pathname)}function a(){t.disconnect();for(const o of U.querySelectorAll("a")){const{url:i,external:s,download:c}=ue(o,L);if(s||c)continue;const f=W(o);f.reload||(f.preload_code===J.viewport&&t.observe(o),f.preload_code===J.eager&&fe(i.pathname))}}O.push(a),a()}function D(e,n){if(e instanceof re)return e.body;const t=z(e),r=Mt(e);return F.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function Zt(e,n={}){return e=qe(e),e.origin!==K?Promise.reject(new Error("goto: invalid URL")):Qe(e,n,0)}function Qt(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Ce(),!H){const a=it(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};We.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ce()}),(n=navigator.connection)!=null&&n.saveData||Xt(),U.addEventListener("click",async t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=He(t.composedPath()[0],U);if(!r)return;const{url:a,external:o,target:i,download:s}=ue(r,L);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=W(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){rt({url:a,type:"link"})?H=!0:t.preventDefault();return}const[d,h]=a.href.split("#");if(h!==void 0&&d===ce(location)){const[,u]=_.url.href.split("#");if(u===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(V=!0,_e(E),e(a),!c.replace_state)return;V=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),Y({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),U.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ne(s,L))return;const c=t.target,f=W(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),Y({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[j]){const a=t.state[j];if(ee={},a===E)return;const o=C[a],i=t.state[Ge]??{},s=new URL(t.state[Lt]??location.href),c=t.state[q],f=ce(location)===ce(_.url);if(c===T&&(ze||f)){e(s),C[E]=me(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},be.$set({page:I})),E=a;return}const h=a-E;await Y({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{E=a,T=c},block:()=>{history.go(-h)},nav_token:ee})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[j]:++E,[q]:T},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&P.navigating.set(null)});function e(t){_.url=t,P.page.set({...I,url:t}),P.page.notify()}}async function en(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){we=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Ee(c,!1)||{});let f;try{const d=r.map(async(u,m)=>{const l=i[m];return l!=null&&l.uses&&(l.uses=st(l.uses)),Ae({loader:F.nodes[u],url:c,params:a,route:o,parent:async()=>{const y={};for(let b=0;b<m;b+=1)Object.assign(y,(await d[b]).data);return y},server_data_node:ke(l)})}),h=await Promise.all(d),g=ae.find(({id:u})=>u===o.id);if(g){const u=g.layouts;for(let m=0;m<u.length;m++)u[m]||h.splice(m,0,void 0)}f=te({url:c,params:a,branch:h,status:n,error:t,form:s,route:g??null})}catch(d){if(d instanceof Ye){await $(new URL(d.location,location.href));return}f=await oe({status:z(d),error:await D(d,{url:c,params:a,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),et(f,e,!0)}async function ot(e,n){var a;const t=new URL(e);t.pathname=mt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(qt,"1"),t.searchParams.append(Gt,n.map(o=>o?"1":"0").join(""));const r=await $e(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new re(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function f(g){return Ft(g,{Promise:u=>new Promise((m,l)=>{i.set(u,{fulfil:m,reject:l})})})}let d="";for(;;){const{done:g,value:u}=await s.read();if(g&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const m=d.indexOf(`
`);if(m===-1)break;const l=JSON.parse(d.slice(0,m));if(d=d.slice(m+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=st(y.uses),y.data=f(y.data))}),o(l);else if(l.type==="chunk"){const{id:y,data:b,error:S}=l,w=i.get(y);i.delete(y),S?w.reject(f(S)):w.fulfil(f(b))}}}})}function st(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function tn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function it(e,n,t,r){var c,f;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{an as a,Zt as g,P as s};
