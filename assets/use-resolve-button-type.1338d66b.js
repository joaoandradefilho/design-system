var a=Object.defineProperty;var n=(t,r)=>a(t,"name",{value:r,configurable:!0});import{r as i}from"./index.92244029.js";import{s as u}from"./render.b81dc2cd.js";function s(t){var r;if(t.type)return t.type;let e=(r=t.as)!=null?r:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}n(s,"i");function b(t,r){let[e,o]=i.exports.useState(()=>s(t));return u(()=>{o(s(t))},[t.type,t.as]),u(()=>{e||!r.current||r.current instanceof HTMLButtonElement&&!r.current.hasAttribute("type")&&o("button")},[e,r]),e}n(b,"s");export{b as s};
//# sourceMappingURL=use-resolve-button-type.1338d66b.js.map
