(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[83],{534:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));const c="".concat("http://pagos.sion.com.gt/apipagos/api/","monedas");function n(e,t,s,n,i,a,o){let r=c,l="";var j={id_moneda:e,nombre:t,simbolo:s,activo:n,opcion:i,id_usuario:a};""!==e&&""!==i&&(l+="/"+e+"/"+i),r+=l;const d=JSON.stringify(j);return fetch(r,{method:"POST",body:d,headers:{Authorization:"Bearer "+o,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},909:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(459),i=s(818),a=s(719),o=s(835),r=(s(465),s(16)),l=s(534),j=s(463),d=(s(460),s(462)),b=s(467),h=s(547),m=s(464),O=s(10);t.default=e=>{const t=Object(r.g)(),s=Object(r.h)(),[p,x]=Object(c.useState)(null),{session:u,clear:f}=Object(n.useSession)("PendrogonIT-Session"),[y,S]=Object(c.useState)(!1),[g,v]=Object(c.useState)(!1),[C,A]=Object(c.useState)(""),[N,w]=Object(c.useState)({nombre:s.nombre,simbolo:s.simbolo,estado:s.estado}),k=e=>{w({...N,[e.target.name]:e.target.value})},E=async e=>{if(""!==N.nombre&&""!==N.simbolo){e.preventDefault();"OK"===await Object(l.a)(s.id_moneda,N.nombre,N.simbolo,N.estado,"1",u.id,u.api_token)&&t.push("/monedas")}else S(!0),A("No has llenado todos los campos.")};async function I(e){if(1==e)v(!1);else if(2==e){let e=0;u&&(e=u.id);"OK"===await Object(j.a)(e,null,null,"2",u.api_token)&&(f(),t.push("/"))}}return u?s.id_moneda?Object(O.jsx)("div",{style:{flexDirection:"row"},children:Object(O.jsxs)(d.i,{children:[Object(O.jsxs)(i.a,{responsive:!0,variant:"primary",show:g,onHide:()=>I(2),centered:!0,children:[Object(O.jsx)(i.a.Header,{closeButton:!0,children:Object(O.jsx)(i.a.Title,{children:"Confirmaci\xf3n"})}),Object(O.jsx)(i.a.Body,{children:C}),Object(O.jsxs)(i.a.Footer,{children:[Object(O.jsx)(d.c,{color:"secondary",onClick:()=>I(2),children:"Cancelar"}),Object(O.jsx)(d.c,{color:"primary",onClick:()=>I(1),children:"Aceptar"})]})]}),Object(O.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(O.jsxs)(a.a,{variant:"primary",size:"sm",onClick:()=>t.goBack(),children:[Object(O.jsx)(m.c,{}),"\xa0\xa0Regresar"]})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(o.a,{show:y,variant:"danger",onClose:()=>S(!1),dismissible:!0,children:[Object(O.jsx)(o.a.Heading,{children:"Error!"}),Object(O.jsx)("p",{children:C})]}),Object(O.jsx)(d.d,{style:{display:"flex",alignItems:"center"},children:Object(O.jsx)(d.e,{style:{width:"80%"},children:Object(O.jsxs)(d.p,{style:{width:"100%"},children:[Object(O.jsx)("h1",{children:"Modificaci\xf3n de Moneda"}),Object(O.jsx)("p",{className:"text-medium-emphasis",children:"Modifique la informaci\xf3n de la moneda"}),Object(O.jsxs)(d.y,{className:"mb-3",children:[Object(O.jsx)(d.z,{children:Object(O.jsx)(m.h,{})}),Object(O.jsx)(d.r,{type:"text",placeholder:"Nombre",name:"nombre",defaultValue:s.nombre,onChange:k})]}),Object(O.jsxs)(d.y,{className:"mb-3",children:[Object(O.jsx)(d.z,{children:Object(O.jsx)(h.a,{})}),Object(O.jsx)(d.r,{type:"text",placeholder:"S\xedmbolo",name:"simbolo",defaultValue:s.simbolo,onChange:k})]}),Object(O.jsxs)(d.y,{className:"mb-3",children:[Object(O.jsx)(d.z,{children:Object(O.jsx)(b.w,{})}),Object(O.jsxs)(d.t,{name:"estado",onChange:k,children:[Object(O.jsx)("option",{children:"Seleccione estado. (Opcional)"}),Object(O.jsx)("option",{value:"1",children:"Activo"}),Object(O.jsx)("option",{value:"0",children:"Inactivo"})]})]}),Object(O.jsx)(d.c,{color:"primary",onClick:E,children:"Guardar Cambios"})]})})})]})}):(t.push("/monedas"),Object(O.jsx)("div",{className:"sin-sesion",children:"NO SE CARG\xd3 EL C\xd3DIGO DEL USUARIO. REGRESE A LA PANTALLA DE USUARIOS."})):(t.push("/"),Object(O.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=83.de540eab.chunk.js.map