(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[50],{532:function(e,c,t){"use strict";t.d(c,"a",(function(){return s}));const n="".concat("http://34.208.193.210/apipagos/api/","bancos");function s(e,c,t,s,i,a,r,o,l,j){let d=n,b="";var h={id_banco:e,nombre:c,direccion:t,codigo_transferencia:s,codigo_SAP:i,id_pais:a,activo:r,opcion:o,id_usuario:l};""!==e&&""!==o&&(b+="/"+e+"/"+o),d+=b;const p=JSON.stringify(h);return fetch(d,{method:"POST",body:p,headers:{Authorization:"Bearer "+j,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},599:function(e,c,t){"use strict";t.d(c,"a",(function(){return s}));const n="".concat("http://34.208.193.210/apipagos/api/","paises");function s(e,c,t){let s=n,i="";return null!==e&&(i+="/"+e),null!==c&&(i+="/"+c),s+=i,fetch(s,{method:"GET",headers:{Authorization:"Bearer "+t,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}},907:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t(459),i=t(818),a=t(719),r=t(835),o=t(16),l=(t(465),t(532)),j=t(463),d=t(599),b=t(467),h=t(687),p=t(511),O=(t(460),t(462)),x=t(464),u=t(10);c.default=e=>{const c=Object(o.g)(),[t,m]=Object(n.useState)(null),{session:f,clear:g}=Object(s.useSession)("PendrogonIT-Session"),[y,S]=Object(n.useState)(!1),[C,v]=Object(n.useState)(!1),[N,A]=Object(n.useState)(""),[T,k]=Object(n.useState)([]),[w,P]=Object(n.useState)({nombre:"",direccion:"",pais:"",codigoTransferencia:"",codigoSAP:""});Object(n.useEffect)((()=>{let e=!0;return Object(d.a)(null,null,f.api_token).then((c=>{e&&k(c.paises)})),()=>e=!1}),[]);const z=e=>{P({...w,[e.target.name]:e.target.value})},B=async e=>{if(""!==w.nombre&&""!==w.direccion&&""!==w.pais&&""!==w.codigoTransferencia){e.preventDefault();const t=await Object(l.a)("",w.nombre,w.direccion,w.codigoTransferencia,w.codigoSAP,w.pais,"","",f.id,f.api_token);"OK"===t?c.push("/bancos"):"Repetido"===t&&(S(!0),A("Este banco seg\xfan el c\xf3digo de transferencia ingresado ya existe."))}else S(!0),A("No has llenado todos los campos.")};async function _(e){if(1==e)v(!1);else if(2==e){let e=0;f&&(e=f.id);"OK"===await Object(j.a)(e,null,null,"2",f.api_token)&&(g(),c.push("/"))}}return f?Object(u.jsx)("div",{style:{flexDirection:"row"},children:Object(u.jsxs)(O.i,{children:[Object(u.jsxs)(i.a,{responsive:!0,variant:"primary",show:C,onHide:()=>_(2),centered:!0,children:[Object(u.jsx)(i.a.Header,{closeButton:!0,children:Object(u.jsx)(i.a.Title,{children:"Confirmaci\xf3n"})}),Object(u.jsx)(i.a.Body,{children:N}),Object(u.jsxs)(i.a.Footer,{children:[Object(u.jsx)(O.c,{color:"secondary",onClick:()=>_(2),children:"Cancelar"}),Object(u.jsx)(O.c,{color:"primary",onClick:()=>_(1),children:"Aceptar"})]})]}),Object(u.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(u.jsxs)(a.a,{variant:"primary",size:"sm",onClick:()=>c.goBack(),children:[Object(u.jsx)(x.c,{}),"\xa0\xa0Regresar"]})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)(r.a,{show:y,variant:"danger",onClose:()=>S(!1),dismissible:!0,children:[Object(u.jsx)(r.a.Heading,{children:"Error!"}),Object(u.jsx)("p",{children:N})]}),Object(u.jsx)(O.d,{style:{display:"flex",alignItems:"center"},children:Object(u.jsx)(O.e,{style:{width:"80%"},children:Object(u.jsxs)(O.p,{style:{width:"100%"},children:[Object(u.jsx)("h1",{children:"Creaci\xf3n de Banco"}),Object(u.jsx)("p",{className:"text-medium-emphasis",children:"Registre un nuevo banco"}),Object(u.jsxs)(O.y,{className:"mb-3",children:[Object(u.jsx)(O.z,{children:Object(u.jsx)(p.a,{})}),Object(u.jsx)(O.r,{type:"text",placeholder:"Nombre",name:"nombre",onChange:z})]}),Object(u.jsxs)(O.y,{className:"mb-3",children:[Object(u.jsx)(O.z,{children:Object(u.jsx)(h.a,{})}),Object(u.jsx)(O.r,{type:"text",placeholder:"Direcci\xf3n",name:"direccion",onChange:z})]}),Object(u.jsxs)(O.y,{className:"mb-3",children:[Object(u.jsx)(O.z,{children:Object(u.jsx)(p.b,{})}),Object(u.jsx)(O.r,{type:"text",placeholder:"C\xf3digo Transferencia",name:"codigoTransferencia",onChange:z})]}),Object(u.jsxs)(O.y,{className:"mb-3",children:[Object(u.jsx)(O.z,{children:Object(u.jsx)(p.b,{})}),Object(u.jsx)(O.r,{type:"text",placeholder:"C\xf3digo SAP",name:"codigoSAP",onChange:z})]}),Object(u.jsxs)(O.y,{className:"mb-3",children:[Object(u.jsx)(O.z,{children:Object(u.jsx)(b.l,{})}),Object(u.jsxs)(O.t,{name:"pais",onChange:z,children:[Object(u.jsx)("option",{children:"Seleccione pa\xeds. (Opcional)"}),T.map(((e,c)=>Object(u.jsx)("option",{value:e.IdPais,children:e.Nombre},e.IdPais)))]})]}),Object(u.jsx)(O.c,{color:"primary",onClick:B,children:"Crear Banco"})]})})})]})}):(c.push("/"),Object(u.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=50.e7df0b12.chunk.js.map