(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[26],{531:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));const n="".concat("http://pagos.sion.com.gt/apipagos/api/","bancos");function a(e,t,c){let a=n,i="";return null!==e&&(i+="/"+e),null!==t&&(i+="/"+t),a+=i,fetch(a,{method:"GET",headers:{Authorization:"Bearer "+c,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}},533:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));const n="".concat("http://pagos.sion.com.gt/apipagos/api/","monedas");function a(e,t,c){let a=n,i="";return null!==e&&(i+="/"+e),null!==t&&(i+="/"+t),a+=i,fetch(a,{method:"GET",headers:{Authorization:"Bearer "+c,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}},535:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));const n="".concat("http://pagos.sion.com.gt/apipagos/api/","cuentas");function a(e,t,c,a,i,s,o,r,l,d){let j=n,u="";var b={id_cuenta:e,numero_cuenta:t,nombre:c,id_empresa:a,id_banco:i,id_moneda:s,codigo_ach:o,opcion:r,id_usuario:l};""!==e&&""!==r&&(u+="/"+e+"/"+r),j+=u;const h=JSON.stringify(b);return fetch(j,{method:"POST",body:h,headers:{Authorization:"Bearer "+d,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},911:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(459),i=c(818),s=c(719),o=c(835),r=(c(465),c(16)),l=c(535),d=c(463),j=c(531),u=c(533),b=c(467),h=c(511),m=c(464),p=c(547),O=(c(460),c(462)),x=c(10);t.default=e=>{const t=Object(r.g)(),c=Object(r.h)(),[_,f]=Object(n.useState)(null),{session:g,clear:y}=Object(a.useSession)("PendrogonIT-Session"),[C,S]=Object(n.useState)(!1),[A,N]=Object(n.useState)(!1),[v,E]=Object(n.useState)(""),[k,z]=Object(n.useState)([]),[w,I]=Object(n.useState)([]);Object(n.useEffect)((()=>{let e=!0;return Object(j.a)(null,null,g.api_token).then((t=>{e&&z(t.bancos)})),Object(u.a)(null,null,g.api_token).then((t=>{e&&I(t.monedas)})),()=>e=!1}),[]);const[T,B]=Object(n.useState)({numero_cuenta:c.numero_cuenta,nombre:c.nombre,id_empresa:c.id_empresa,id_banco:c.id_banco,id_moneda:c.id_moneda,codigo_ach:c.codigo_ach}),G=e=>{B({...T,[e.target.name]:e.target.value})},R=async e=>{if(""!==T.numero_cuenta&&""!==T.nombre&&""!==T.id_empresa&&""!==T.id_banco&&""!==T.id_moneda&&""!==T.codigo_ach){e.preventDefault();"OK"===await Object(l.a)(c.id_cuenta,T.numero_cuenta,T.nombre,T.id_empresa,T.id_banco,T.id_moneda,T.codigo_ach,"1",g.id,g.api_token)&&t.push("/cuentas")}else S(!0),E("No has llenado todos los campos.")};async function D(e){if(1==e)N(!1);else if(2==e){let e=0;g&&(e=g.id);"OK"===await Object(d.a)(e,null,null,"2",g.api_token)&&(y(),t.push("/"))}}return g?c.id_cuenta?Object(x.jsx)("div",{style:{flexDirection:"row"},children:Object(x.jsxs)(O.i,{children:[Object(x.jsxs)(i.a,{responsive:!0,variant:"primary",show:A,onHide:()=>D(2),centered:!0,children:[Object(x.jsx)(i.a.Header,{closeButton:!0,children:Object(x.jsx)(i.a.Title,{children:"Confirmaci\xf3n"})}),Object(x.jsx)(i.a.Body,{children:v}),Object(x.jsxs)(i.a.Footer,{children:[Object(x.jsx)(O.c,{color:"secondary",onClick:()=>D(2),children:"Cancelar"}),Object(x.jsx)(O.c,{color:"primary",onClick:()=>D(1),children:"Aceptar"})]})]}),Object(x.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(x.jsxs)(s.a,{variant:"primary",size:"sm",onClick:()=>t.goBack(),children:[Object(x.jsx)(m.c,{}),"\xa0\xa0Regresar"]})}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(o.a,{show:C,variant:"danger",onClose:()=>S(!1),dismissible:!0,children:[Object(x.jsx)(o.a.Heading,{children:"Error!"}),Object(x.jsx)("p",{children:v})]}),Object(x.jsx)(O.d,{style:{display:"flex",alignItems:"center"},children:Object(x.jsx)(O.e,{style:{width:"80%"},children:Object(x.jsxs)(O.p,{style:{width:"100%"},children:[Object(x.jsx)("h1",{children:"Modificaci\xf3n de Cuenta"}),Object(x.jsx)("p",{className:"text-medium-emphasis",children:"Modifique la informaci\xf3n de la cuenta"}),Object(x.jsxs)(O.y,{className:"mb-3",children:[Object(x.jsx)(O.z,{children:Object(x.jsx)(b.h,{})}),Object(x.jsx)(O.r,{type:"text",placeholder:"Nombre Cuenta",name:"numero_cuenta",onChange:G,defaultValue:c.numero_cuenta})]}),Object(x.jsxs)(O.y,{className:"mb-3",children:[Object(x.jsx)(O.z,{children:Object(x.jsx)(b.h,{})}),Object(x.jsx)(O.r,{type:"text",placeholder:"Nombre",name:"nombre",onChange:G,defaultValue:c.nombre})]}),Object(x.jsxs)(O.y,{className:"mb-3",children:[Object(x.jsx)(O.z,{children:Object(x.jsx)(m.n,{})}),Object(x.jsx)(O.r,{type:"text",placeholder:"C\xf3digo Empresa",name:"id_empresa",onChange:G,defaultValue:c.id_empresa})]}),Object(x.jsxs)(O.y,{className:"mb-3",children:[Object(x.jsx)(O.z,{children:Object(x.jsx)(h.a,{})}),Object(x.jsxs)(O.t,{name:"id_banco",onChange:G,children:[Object(x.jsx)("option",{children:"Seleccione un banco. (Opcional)"}),k.map(((e,t)=>{if(0==e.eliminado&&1==e.activo)return Object(x.jsx)("option",{value:e.id_banco,children:e.nombre},e.id_banco)}))]})]}),Object(x.jsxs)(O.y,{className:"mb-3",children:[Object(x.jsx)(O.z,{children:Object(x.jsx)(p.a,{})}),Object(x.jsxs)(O.t,{name:"id_moneda",onChange:G,children:[Object(x.jsx)("option",{children:"Seleccione un tipo de moneda. (Opcional)"}),w.map(((e,t)=>{if(0==e.eliminado&&1==e.activo)return Object(x.jsx)("option",{value:e.id_moneda,children:e.nombre},e.id_moneda)}))]})]}),Object(x.jsxs)(O.y,{className:"mb-3",children:[Object(x.jsx)(O.z,{children:Object(x.jsx)(b.h,{})}),Object(x.jsx)(O.r,{type:"text",placeholder:"C\xf3digo ACH",name:"codigo_ach",onChange:G,defaultValue:c.codigo_ach})]}),Object(x.jsx)(O.c,{color:"primary",onClick:R,children:"Guardar Cambios"})]})})})]})}):(t.push("/cuentas"),Object(x.jsx)("div",{className:"sin-sesion",children:"NO SE CARG\xd3 EL C\xd3DIGO DEL USUARIO. REGRESE A LA PANTALLA DE USUARIOS."})):(t.push("/"),Object(x.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=26.b92b059e.chunk.js.map