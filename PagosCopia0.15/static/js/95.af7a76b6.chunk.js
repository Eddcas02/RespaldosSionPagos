(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[95],{528:function(e,c,i){"use strict";i.d(c,"a",(function(){return s}));const t="".concat("http://pagos.sion.com.gt/apipagos/api/","grupoautorizacion");function s(e,c,i,s,n,a,r,o){let l=t,d="";var j={id_grupo:e,identificador:c,descripcion:i,numero_niveles:s,activo:n,opcion:a,id_usuario:r};""!==e&&""!==a&&(d+="/"+e+"/"+a),l+=d;const b=JSON.stringify(j);return fetch(l,{method:"POST",body:b,headers:{Authorization:"Bearer "+o,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},886:function(e,c,i){"use strict";i.r(c);var t=i(1),s=i(459),n=i(818),a=i(719),r=i(835),o=(i(465),i(16)),l=i(528),d=i(463),j=i(467),b=i(464),h=(i(460),i(462)),p=i(10);c.default=()=>{const e=Object(o.g)(),c=Object(o.h)(),[i,u]=Object(t.useState)(null),{session:O,clear:x}=Object(s.useSession)("PendrogonIT-Session"),[m,f]=Object(t.useState)(!1),[g,v]=Object(t.useState)(!1),[y,N]=Object(t.useState)(""),[C,S]=Object(t.useState)({numero_niveles:c.numero_niveles,descripcion:c.descripcion,identificador:c.identificador,estado:c.estado}),A=e=>{S({...C,[e.target.name]:e.target.value})},_=async i=>{if(""!==C.descripcion&&""!==C.identificador&&""!==C.estado){i.preventDefault();"OK"===await Object(l.a)(c.id_grupo,C.identificador,C.descripcion,C.numero_niveles,C.estado,"1",O.id,O.api_token)&&e.push("/grupos")}else f(!0),N("No has llenado todos los campos")};async function w(c){if(1==c)v(!1);else if(2==c){let c=0;O&&(c=O.id);"OK"===await Object(d.a)(c,null,null,"2",O.api_token)&&(x(),e.push("/"))}}return O?c.id_grupo?Object(p.jsx)("div",{style:{flexDirection:"row"},children:Object(p.jsxs)(h.i,{children:[Object(p.jsxs)(n.a,{responsive:!0,variant:"primary",show:g,onHide:()=>w(2),centered:!0,children:[Object(p.jsx)(n.a.Header,{closeButton:!0,children:Object(p.jsx)(n.a.Title,{children:"Confirmaci\xf3n"})}),Object(p.jsx)(n.a.Body,{children:y}),Object(p.jsxs)(n.a.Footer,{children:[Object(p.jsx)(h.c,{color:"secondary",onClick:()=>w(2),children:"Cancelar"}),Object(p.jsx)(h.c,{color:"primary",onClick:()=>w(1),children:"Aceptar"})]})]}),Object(p.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(p.jsxs)(a.a,{variant:"primary",size:"sm",onClick:()=>e.goBack(),children:[Object(p.jsx)(b.c,{}),"\xa0\xa0Regresar"]})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)(r.a,{show:m,variant:"danger",onClose:()=>f(!1),dismissible:!0,children:[Object(p.jsx)(r.a.Heading,{children:"Error!"}),Object(p.jsx)("p",{children:y})]}),Object(p.jsx)(h.d,{style:{display:"flex",alignItems:"center"},children:Object(p.jsx)(h.e,{style:{width:"80%"},children:Object(p.jsxs)(h.p,{style:{width:"100%"},children:[Object(p.jsx)("h1",{children:"Modificaci\xf3n de Grupo de Autorizaci\xf3n"}),Object(p.jsx)("p",{className:"text-medium-emphasis",children:"Modifique la informaci\xf3n del grupo de autorizaci\xf3n"}),Object(p.jsxs)(h.y,{className:"mb-3",children:[Object(p.jsx)(h.z,{children:Object(p.jsx)(j.n,{})}),Object(p.jsx)(h.r,{type:"text",placeholder:"Identificador",name:"identificador",onChange:A,defaultValue:c.identificador})]}),Object(p.jsxs)(h.y,{className:"mb-3",children:[Object(p.jsx)(h.z,{children:Object(p.jsx)(j.B,{})}),Object(p.jsx)("textarea",{placeholder:"Descripci\xf3n",name:"descripcion",className:"form-control",rows:"2",onChange:A,defaultValue:c.descripcion})]}),Object(p.jsxs)(h.y,{className:"mb-3",children:[Object(p.jsx)(h.z,{children:Object(p.jsx)(b.l,{})}),Object(p.jsx)(h.r,{type:"text",placeholder:"N\xfamero Niveles",name:"numero_niveles",defaultValue:c.numero_niveles,onChange:A})]}),Object(p.jsxs)(h.y,{className:"mb-3",children:[Object(p.jsx)(h.z,{children:Object(p.jsx)(j.w,{})}),Object(p.jsxs)(h.t,{name:"estado",onChange:A,children:[Object(p.jsx)("option",{children:"Seleccione estado. (Opcional)"}),Object(p.jsx)("option",{value:"1",children:"Activo"}),Object(p.jsx)("option",{value:"0",children:"Inactivo"})]})]}),Object(p.jsx)(h.c,{color:"primary",onClick:_,children:"Guardar Cambios"})]})})})]})}):(e.push("/grupos"),Object(p.jsx)("div",{className:"sin-sesion",children:"NO SE CARG\xd3 EL C\xd3DIGO DEL GRUPO. REGRESE A LA PANTALLA DE GRUPOS."})):(e.push("/"),Object(p.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=95.af7a76b6.chunk.js.map