var le=Object.defineProperty;var T=(e,t)=>le(e,"name",{value:t,configurable:!0});import{r as l,R as k}from"./index.92244029.js";import{j as f,a as D}from"./jsx-runtime.4268c200.js";import{C as O,S as Y,y as F,a as _,s as B,$ as M,o as G,u as ee}from"./render.b81dc2cd.js";import{I as te,e as oe,o as x}from"./keyboard.5353efcb.js";import{h as re,s as ue,M as q,O as w,T as g,S as Z}from"./hidden.0b7088f1.js";import{s as ie}from"./use-resolve-button-type.1338d66b.js";import{t as ce}from"./micro-task.d8fd1c47.js";import"./iframe.9e5b487d.js";function de({onFocus:e}){let[t,r]=l.exports.useState(!0);return t?k.createElement(re,{as:"button",type:"button",features:ue.Focusable,onFocus:a=>{a.preventDefault();let n,i=50;function o(){if(i--<=0){n&&cancelAnimationFrame(n);return}if(e()){r(!1),cancelAnimationFrame(n);return}n=requestAnimationFrame(o)}T(o,"t"),n=requestAnimationFrame(o)}}):null}T(de,"p");var pe=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(pe||{});let me={[0](e,t){let r=e.tabs.filter(i=>{var o;return!((o=i.current)!=null&&o.hasAttribute("disabled"))});if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(r[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(r[r.length-1])};let a=e.tabs.slice(0,t.index),n=[...e.tabs.slice(t.index),...a].find(i=>r.includes(i));return n?{...e,selectedIndex:e.tabs.indexOf(n)}:e},[1](e,t){var r;if(e.tabs.includes(t.tab))return e;let a=e.tabs[e.selectedIndex],n=Z([...e.tabs,t.tab],o=>o.current),i=(r=n.indexOf(a))!=null?r:e.selectedIndex;return i===-1&&(i=e.selectedIndex),{...e,tabs:n,selectedIndex:i}},[2](e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:Z([...e.panels,t.panel],r=>r.current)}},[4](e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}}},V=l.exports.createContext(null);V.displayName="TabsSSRContext";function H(e){let t=l.exports.useContext(V);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,H),r}return t}T(H,"V");let J=l.exports.createContext(null);J.displayName="TabsDataContext";function A(e){let t=l.exports.useContext(J);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,A),r}return t}T(A,"D");let K=l.exports.createContext(null);K.displayName="TabsActionsContext";function Q(e){let t=l.exports.useContext(K);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Q),r}return t}T(Q,"Q");function fe(e,t){return ee(t.type,me,e,t)}T(fe,"fe");let be=l.exports.Fragment,xe=O(function(e,t){let{defaultIndex:r=0,vertical:a=!1,manual:n=!1,onChange:i,selectedIndex:o=null,...R}=e;const y=a?"vertical":"horizontal",P=n?"manual":"auto";let m=o!==null,I=F(t),[c,u]=l.exports.useReducer(fe,{selectedIndex:o!=null?o:r,tabs:[],panels:[]}),C=l.exports.useMemo(()=>({selectedIndex:c.selectedIndex}),[c.selectedIndex]),b=_(i||(()=>{})),d=_(c.tabs),h=l.exports.useMemo(()=>({orientation:y,activation:P,...c}),[y,P,c]),S=_(m?e.selectedIndex:c.selectedIndex),E=l.exports.useMemo(()=>({registerTab(p){return u({type:1,tab:p}),()=>u({type:2,tab:p})},registerPanel(p){return u({type:3,panel:p}),()=>u({type:4,panel:p})},change(p){S.current!==p&&b.current(p),m||u({type:0,index:p})}}),[u,m]);B(()=>{u({type:0,index:o!=null?o:r})},[o]);let $=l.exports.useRef({tabs:[],panels:[]}),W={ref:I};return k.createElement(V.Provider,{value:$},k.createElement(K.Provider,{value:E},k.createElement(J.Provider,{value:h},h.tabs.length<=0&&k.createElement(de,{onFocus:()=>{var p,L;for(let j of d.current)if(((p=j.current)==null?void 0:p.tabIndex)===0)return(L=j.current)==null||L.focus(),!0;return!1}}),M({ourProps:W,theirProps:R,slot:C,defaultTag:be,name:"Tabs"}))))}),ge="div",he=O(function(e,t){let{orientation:r,selectedIndex:a}=A("Tab.List"),n=F(t);return M({ourProps:{ref:n,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:a},defaultTag:ge,name:"Tabs.List"})}),ve="button",Te=O(function(e,t){var r,a;let n=`headlessui-tabs-tab-${te()}`,{orientation:i,activation:o,selectedIndex:R,tabs:y,panels:P}=A("Tab"),m=Q("Tab"),I=A("Tab"),c=H("Tab"),u=l.exports.useRef(null),C=F(u,t);B(()=>m.registerTab(u),[m,u]);let b=c.current.tabs.indexOf(n);b===-1&&(b=c.current.tabs.push(n)-1);let d=y.indexOf(u);d===-1&&(d=b);let h=d===R,S=G(s=>{var v;let U=s();if(U===q.Success&&o==="auto"){let ae=(v=oe(u))==null?void 0:v.activeElement,X=I.tabs.findIndex(se=>se.current===ae);X!==-1&&m.change(X)}return U}),E=G(s=>{let v=y.map(U=>U.current).filter(Boolean);if(s.key===x.Space||s.key===x.Enter){s.preventDefault(),s.stopPropagation(),m.change(d);return}switch(s.key){case x.Home:case x.PageUp:return s.preventDefault(),s.stopPropagation(),S(()=>w(v,g.First));case x.End:case x.PageDown:return s.preventDefault(),s.stopPropagation(),S(()=>w(v,g.Last))}if(S(()=>ee(i,{vertical(){return s.key===x.ArrowUp?w(v,g.Previous|g.WrapAround):s.key===x.ArrowDown?w(v,g.Next|g.WrapAround):q.Error},horizontal(){return s.key===x.ArrowLeft?w(v,g.Previous|g.WrapAround):s.key===x.ArrowRight?w(v,g.Next|g.WrapAround):q.Error}}))===q.Success)return s.preventDefault()}),$=l.exports.useRef(!1),W=G(()=>{var s;$.current||($.current=!0,(s=u.current)==null||s.focus(),m.change(d),ce(()=>{$.current=!1}))}),p=G(s=>{s.preventDefault()}),L=l.exports.useMemo(()=>({selected:h}),[h]),j=e,ne={ref:C,onKeyDown:E,onMouseDown:p,onClick:W,id:n,role:"tab",type:ie(e,u),"aria-controls":(a=(r=P[d])==null?void 0:r.current)==null?void 0:a.id,"aria-selected":h,tabIndex:h?0:-1};return M({ourProps:ne,theirProps:j,slot:L,defaultTag:ve,name:"Tabs.Tab"})}),ye="div",Pe=O(function(e,t){let{selectedIndex:r}=A("Tab.Panels"),a=F(t),n=l.exports.useMemo(()=>({selectedIndex:r}),[r]);return M({ourProps:{ref:a},theirProps:e,slot:n,defaultTag:ye,name:"Tabs.Panels"})}),Ie="div",Ce=Y.RenderStrategy|Y.Static,Se=O(function(e,t){var r,a,n,i;let{selectedIndex:o,tabs:R,panels:y}=A("Tab.Panel"),P=Q("Tab.Panel"),m=H("Tab.Panel"),I=`headlessui-tabs-panel-${te()}`,c=l.exports.useRef(null),u=F(c,t);B(()=>P.registerPanel(c),[P,c]);let C=m.current.panels.indexOf(I);C===-1&&(C=m.current.panels.push(I)-1);let b=y.indexOf(c);b===-1&&(b=C);let d=b===o,h=l.exports.useMemo(()=>({selected:d}),[d]),S=e,E={ref:u,id:I,role:"tabpanel","aria-labelledby":(a=(r=R[b])==null?void 0:r.current)==null?void 0:a.id,tabIndex:d?0:-1};return!d&&((n=e.unmount)!=null?n:!0)&&!((i=e.static)!=null&&i)?k.createElement(re,{as:"span",...E}):M({ourProps:E,theirProps:S,slot:h,defaultTag:Ie,features:Ce,visible:d,name:"Tabs.Panel"})}),N=Object.assign(Te,{Group:xe,List:he,Panels:Pe,Panel:Se});function z(...e){return e.filter(Boolean).join(" ")}T(z,"classNames");function Ee(){const[e]=l.exports.useState({Lorem:[{id:1,title:"Vulputate donec leo",date:"4h ago",commentCount:5,shareCount:8},{id:2,title:"Conubia per magna",date:"5h ago",commentCount:9,shareCount:6}],Ipsum:[{id:1,title:"Tempor ut malesuada",date:"4h ago",commentCount:13,shareCount:8},{id:2,title:"Faucibus mattis vivamus",date:"5h ago",commentCount:5,shareCount:2}],Dolor:[{id:1,title:"Donec pulvinar mattis",date:"15h ago",commentCount:15,shareCount:7},{id:2,title:"Augue accumsan quisque",date:"21h ago",commentCount:21,shareCount:12}]});return f("div",{className:"w-full max-w-md mob:px-0",children:D(N.Group,{children:[f(N.List,{className:"flex space-x-1 rounded bg-gray-800 p-1",children:Object.keys(e).map(t=>f(N,{className:({selected:r})=>z("w-full rounded py-2.5 text-sm font-medium leading-5 text-black","ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",r?"bg-cyan-500 shadow":"text-blue-100 hover:bg-white/[0.12] hover:text-white"),children:f("span",{className:"",children:t})},t))}),f(N.Panels,{className:"mt-2",children:Object.values(e).map((t,r)=>f(N.Panel,{className:z("rounded bg-gray-800 p-3","ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"),children:f("ul",{children:t.map(a=>D("li",{className:"relative rounded p-3 hover:bg-cyan-300 hover:text-black",children:[f("h3",{className:"text-sm font-medium leading-5",children:a.title}),D("ul",{className:"mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500",children:[f("li",{children:a.date}),f("li",{children:"\xB7"}),D("li",{children:[a.commentCount," comments"]}),f("li",{children:"\xB7"}),D("li",{children:[a.shareCount," shares"]})]}),f("a",{href:"#",className:z("absolute inset-0 rounded","ring-blue-400 focus:z-10 focus:outline-none focus:ring-2")})]},a.id))})},r))})]})})}T(Ee,"MyTabs");const Me={title:"Components/Tabs",component:Ee,args:{},argTypes:{}},Le={},je=["Default"];export{Le as Default,je as __namedExportsOrder,Me as default};
//# sourceMappingURL=Tabs.stories.4d6508a4.js.map
