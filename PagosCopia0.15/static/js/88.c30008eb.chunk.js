(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[88],{522:function(e,c,t){"use strict";t.d(c,"a",(function(){return i}));const s="".concat("http://34.208.193.210/apipagos/api/","permisos");function i(e,c,t,i,r,n){let a=s,o="";var l={id:e,descripcion:c,activo:t,opcion:i,id_usuario:r};""!==e&&""!==i&&(o+="/"+e+"/"+i),a+=o;const j=JSON.stringify(l);return fetch(a,{method:"POST",body:j,headers:{Authorization:"Bearer "+n,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},873:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t(459),r=t(818),n=t(719),a=t(835),o=(t(465),t(16)),l=t(467),j=t(522),d=t(463),h=(t(460),t(462)),p=t(464),b=t(10);c.default=()=>{const e=Object(o.g)(),[c,t]=Object(s.useState)(null),{session:O,clear:u}=Object(i.useSession)("PendrogonIT-Session"),[x,m]=Object(s.useState)(!1),[f,y]=Object(s.useState)(!1),[g,S]=Object(s.useState)(""),[v,C]=Object(s.useState)("danger"),[w,k]=Object(s.useState)("Error!"),[N,A]=Object(s.useState)({descripcion:""}),B=e=>{A({...N,[e.target.name]:e.target.value})},I=async c=>{if(""!==N.descripcion){c.preventDefault();"OK"===await Object(j.a)("",N.descripcion,"","",O.id,O.api_token)&&e.push("/permisos")}else m(!0),k("Error!"),C("danger"),S("No has ingresado ninguna descripci\xf3n.")};async function T(c){if(1==c)y(!1);else if(2==c){let c=0;O&&(c=O.id);"OK"===await Object(d.a)(c,null,null,"2",O.api_token)&&(u(),e.push("/"))}}return O?Object(b.jsx)("div",{style:{flexDirection:"row"},children:Object(b.jsxs)(h.i,{children:[Object(b.jsxs)(r.a,{responsive:!0,variant:"primary",show:f,onHide:()=>T(2),centered:!0,children:[Object(b.jsx)(r.a.Header,{closeButton:!0,children:Object(b.jsx)(r.a.Title,{children:"Confirmaci\xf3n"})}),Object(b.jsx)(r.a.Body,{children:g}),Object(b.jsxs)(r.a.Footer,{children:[Object(b.jsx)(h.c,{color:"secondary",onClick:()=>T(2),children:"Cancelar"}),Object(b.jsx)(h.c,{color:"primary",onClick:()=>T(1),children:"Aceptar"})]})]}),Object(b.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(b.jsxs)(n.a,{variant:"primary",size:"sm",onClick:()=>e.goBack(),children:[Object(b.jsx)(p.c,{}),"\xa0\xa0Regresar"]})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)(a.a,{show:x,variant:v,onClose:()=>m(!1),dismissible:!0,children:[Object(b.jsx)(a.a.Heading,{children:w}),Object(b.jsx)("p",{children:g})]}),Object(b.jsx)(h.d,{style:{display:"flex",alignItems:"center"},children:Object(b.jsx)(h.e,{style:{width:"80%"},children:Object(b.jsxs)(h.p,{style:{width:"100%"},children:[Object(b.jsx)("h1",{children:"Creaci\xf3n de Permiso"}),Object(b.jsx)("p",{className:"text-medium-emphasis",children:"Cree un nuevo permiso"}),Object(b.jsxs)(h.y,{className:"mb-3",children:[Object(b.jsx)(h.z,{children:Object(b.jsx)(l.A,{})}),Object(b.jsx)("textarea",{placeholder:"Descripci\xf3n",className:"form-control",rows:"2",onChange:B,name:"descripcion"})]}),Object(b.jsx)(h.c,{color:"primary",onClick:I,children:"Crear Permiso"})]})})})]})}):(e.push("/"),Object(b.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=88.c30008eb.chunk.js.map