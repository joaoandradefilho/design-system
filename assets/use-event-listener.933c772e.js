var c=Object.defineProperty;var t=(e,r)=>c(e,"name",{value:r,configurable:!0});import{r as u}from"./index.92244029.js";import{a}from"./render.b81dc2cd.js";import{e as d}from"./keyboard.5353efcb.js";function w(e,r,n){let o=a(r);u.exports.useEffect(()=>{function s(i){o.current(i)}return t(s,"t"),window.addEventListener(e,s,n),()=>window.removeEventListener(e,s,n)},[e,n])}t(w,"s$1");var m=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(m||{});function x(){let e=u.exports.useRef(0);return w("keydown",r=>{r.key==="Tab"&&(e.current=r.shiftKey?1:0)},!0),e}t(x,"n$1");function k(...e){return u.exports.useMemo(()=>d(...e),[...e])}t(k,"n");function L(e,r,n,o){let s=a(n);u.exports.useEffect(()=>{e=e!=null?e:window;function i(f){s.current(f)}return t(i,"r"),e.addEventListener(r,i,o),()=>e.removeEventListener(r,i,o)},[e,r,o])}t(L,"E");export{L as E,x as a,k as n,m as s};
//# sourceMappingURL=use-event-listener.933c772e.js.map
