(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[87],{522:function(e,c,s){"use strict";s.d(c,"a",(function(){return i}));const t="".concat("http://pagos.sion.com.gt/apipagos/api/","permisos");function i(e,c,s,i,n,a){let o=t,r="";var l={id:e,descripcion:c,activo:s,opcion:i,id_usuario:n};""!==e&&""!==i&&(r+="/"+e+"/"+i),o+=r;const j=JSON.stringify(l);return fetch(o,{method:"POST",body:j,headers:{Authorization:"Bearer "+a,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},875:function(e,c,s){"use strict";s.r(c);var t=s(1),i=s(459),n=s(818),a=s(719),o=s(835),r=(s(465),s(16)),l=s(522),j=s(463),d=s(467),p=(s(460),s(462)),h=s(464),b=s(10);c.default=()=>{const e=Object(r.g)(),c=Object(r.h)(),[s,O]=Object(t.useState)(null),{session:m,clear:u}=Object(i.useSession)("PendrogonIT-Session"),[x,f]=Object(t.useState)(!1),[y,S]=Object(t.useState)(!1),[v,g]=Object(t.useState)(""),[C,A]=Object(t.useState)({descripcion:c.descripcion,estado:c.estado}),N=e=>{A({...C,[e.target.name]:e.target.value})},w=async s=>{if(""!==C.descripcion&&""!==C.estado){s.preventDefault();"OK"===await Object(l.a)(c.id_permiso,C.descripcion,C.estado,"1",m.id,m.api_token)&&e.push("/permisos")}else f(!0),g("No has llenado todos los campos")};async function E(c){if(1==c)S(!1);else if(2==c){let c=0;m&&(c=m.id);"OK"===await Object(j.a)(c,null,null,"2",m.api_token)&&(u(),e.push("/"))}}return m?c.id_permiso?Object(b.jsx)("div",{style:{flexDirection:"row"},children:Object(b.jsxs)(p.i,{children:[Object(b.jsxs)(n.a,{responsive:!0,variant:"primary",show:y,onHide:()=>E(2),centered:!0,children:[Object(b.jsx)(n.a.Header,{closeButton:!0,children:Object(b.jsx)(n.a.Title,{children:"Confirmaci\xf3n"})}),Object(b.jsx)(n.a.Body,{children:v}),Object(b.jsxs)(n.a.Footer,{children:[Object(b.jsx)(p.c,{color:"secondary",onClick:()=>E(2),children:"Cancelar"}),Object(b.jsx)(p.c,{color:"primary",onClick:()=>E(1),children:"Aceptar"})]})]}),Object(b.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(b.jsxs)(a.a,{variant:"primary",size:"sm",onClick:()=>e.goBack(),children:[Object(b.jsx)(h.c,{}),"\xa0\xa0Regresar"]})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)(o.a,{show:x,variant:"danger",onClose:()=>f(!1),dismissible:!0,children:[Object(b.jsx)(o.a.Heading,{children:"Error!"}),Object(b.jsx)("p",{children:v})]}),Object(b.jsx)(p.d,{style:{display:"flex",alignItems:"center"},children:Object(b.jsx)(p.e,{style:{width:"80%"},children:Object(b.jsxs)(p.p,{style:{width:"100%"},children:[Object(b.jsx)("h1",{children:"Modificaci\xf3n de Permiso"}),Object(b.jsx)("p",{className:"text-medium-emphasis",children:"Modifique la informaci\xf3n del permiso"}),Object(b.jsxs)(p.y,{className:"mb-3",children:[Object(b.jsx)(p.z,{children:Object(b.jsx)(d.A,{})}),Object(b.jsx)("textarea",{placeholder:"Descripci\xf3n",name:"descripcion",className:"form-control",rows:"2",onChange:N,defaultValue:c.descripcion})]}),Object(b.jsxs)(p.y,{className:"mb-3",children:[Object(b.jsx)(p.z,{children:Object(b.jsx)(d.w,{})}),Object(b.jsxs)(p.t,{name:"estado",onChange:N,children:[Object(b.jsx)("option",{children:"Seleccione estado. (Opcional)"}),Object(b.jsx)("option",{value:"1",children:"Activo"}),Object(b.jsx)("option",{value:"0",children:"Inactivo"})]})]}),Object(b.jsx)(p.c,{color:"primary",onClick:w,children:"Guardar Cambios"})]})})})]})}):(e.push("/permisos"),Object(b.jsx)("div",{className:"sin-sesion",children:"NO SE CARG\xd3 EL C\xd3DIGO DEL PERMISO. REGRESE A LA PANTALLA DE PERMISOS."})):(e.push("/"),Object(b.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=87.df677ee7.chunk.js.map