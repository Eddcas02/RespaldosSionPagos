(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[93],{571:function(e,a,s){"use strict";s.d(a,"a",(function(){return c}));const t="".concat("http://pagos.sion.com.gt/apipagos/api/","usuarios");function c(e,a,s,c,i,r,o,n,l,j){let d=t,b="";var u={id:e,nombre:a,apellido:s,correo:c,nombre_usuario:i,activo:r,cambia_password:o,opcion:n,id_usuario:l};""!==e&&""!==n&&(b+="/"+e+"/"+n),d+=b;const h=JSON.stringify(u);return fetch(d,{method:"POST",body:h,headers:{Authorization:"Bearer "+j,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},843:function(e,a,s){"use strict";s.r(a);var t=s(1),c=s(459),i=s(818),r=s(835),o=s(719),n=(s(465),s(16)),l=s(571),j=s(463),d=s(467),b=(s(460),s(462)),u=s(464),h=s(10);a.default=e=>{const a=Object(n.g)(),s=Object(n.h)(),[m,O]=Object(t.useState)(null),{session:p,clear:x}=Object(c.useSession)("PendrogonIT-Session"),[f,y]=Object(t.useState)(!1),[g,v]=Object(t.useState)(!1),[C,N]=Object(t.useState)(""),[S,w]=Object(t.useState)({nombre:s.nombre,apellido:s.apellido,email:s.email,password:s.password,usuario:s.usuario,estado:s.estado}),A=e=>{w({...S,[e.target.name]:e.target.value})},k=async e=>{let t=0;if(""!==S.nombre&&""!==S.apellido&&""!==S.email&&""!==S.estado){e.preventDefault();var c=document.getElementsByName("cambiapassword");for(var i of c)t=i.checked?1:0;"OK"===await Object(l.a)(s.id,S.nombre,S.apellido,S.email,S.usuario,S.estado,t,"1",p.id,p.api_token)&&a.push("/usuarios")}else y(!0),N("No has llenado todos los campos.")};async function z(e){if(1==e)v(!1);else if(2==e){let e=0;p&&(e=p.id);"OK"===await Object(j.a)(e,null,null,"2",p.api_token)&&(x(),a.push("/"))}}if(p){if(s.id){let e=!1;return 1==s.cambia_password&&(e=!0),Object(h.jsx)("div",{style:{flexDirection:"row"},children:Object(h.jsxs)(b.i,{children:[Object(h.jsxs)(i.a,{responsive:!0,variant:"primary",show:g,onHide:()=>z(2),centered:!0,children:[Object(h.jsx)(i.a.Header,{closeButton:!0,children:Object(h.jsx)(i.a.Title,{children:"Confirmaci\xf3n"})}),Object(h.jsx)(i.a.Body,{children:C}),Object(h.jsxs)(i.a.Footer,{children:[Object(h.jsx)(b.c,{color:"secondary",onClick:()=>z(2),children:"Cancelar"}),Object(h.jsx)(b.c,{color:"primary",onClick:()=>z(1),children:"Aceptar"})]})]}),Object(h.jsxs)(r.a,{show:f,variant:"danger",onClose:()=>y(!1),dismissible:!0,children:[Object(h.jsx)(r.a.Heading,{children:"Error!"}),Object(h.jsx)("p",{children:C})]}),Object(h.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(h.jsxs)(o.a,{variant:"primary",size:"sm",onClick:()=>a.goBack(),children:[Object(h.jsx)(u.c,{}),"\xa0\xa0Regresar"]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(b.d,{style:{display:"flex",alignItems:"center"},children:Object(h.jsx)(b.e,{style:{width:"80%"},children:Object(h.jsxs)(b.p,{style:{width:"100%"},children:[Object(h.jsx)("h1",{children:"Modificaci\xf3n de Usuario"}),Object(h.jsx)("p",{className:"text-medium-emphasis",children:"Modifique la informaci\xf3n del usuario"}),Object(h.jsx)("div",{className:"float-right",style:{marginBottom:"10px"},children:Object(h.jsx)(b.q,{value:"",type:"checkbox",name:"cambiapassword",label:"Cambiar Contrase\xf1a",defaultChecked:e})}),Object(h.jsxs)(b.y,{className:"mb-3",children:[Object(h.jsx)(b.z,{children:Object(h.jsx)(d.z,{})}),Object(h.jsx)(b.r,{type:"text",placeholder:"Nombre",name:"nombre",defaultValue:s.nombre,onChange:A})]}),Object(h.jsxs)(b.y,{className:"mb-3",children:[Object(h.jsx)(b.z,{children:Object(h.jsx)(d.z,{})}),Object(h.jsx)(b.r,{type:"text",placeholder:"Apellido",name:"apellido",defaultValue:s.apellido,onChange:A})]}),Object(h.jsxs)(b.y,{className:"mb-3",children:[Object(h.jsx)(b.z,{children:Object(h.jsx)(d.z,{})}),Object(h.jsx)(b.r,{type:"text",placeholder:"Nombre Usuario",name:"usuario",defaultValue:s.usuario,onChange:A})]}),Object(h.jsxs)(b.y,{className:"mb-3",children:[Object(h.jsx)(b.z,{children:Object(h.jsx)(d.e,{})}),Object(h.jsx)(b.r,{type:"email",placeholder:"Correo",name:"email",defaultValue:s.email,onChange:A})]}),Object(h.jsxs)(b.y,{className:"mb-3",children:[Object(h.jsx)(b.z,{children:Object(h.jsx)(d.w,{})}),Object(h.jsxs)(b.t,{name:"estado",onChange:A,children:[Object(h.jsx)("option",{children:"Seleccione estado. (Opcional)"}),Object(h.jsx)("option",{value:"1",children:"Activo"}),Object(h.jsx)("option",{value:"0",children:"Inactivo"})]})]}),Object(h.jsx)(b.c,{color:"primary",onClick:k,children:"Guardar Cambios"})]})})})]})})}return a.push("/usuarios"),Object(h.jsx)("div",{className:"sin-sesion",children:"NO SE CARG\xd3 EL C\xd3DIGO DEL USUARIO. REGRESE A LA PANTALLA DE USUARIOS."})}return a.push("/"),Object(h.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."})}}}]);
//# sourceMappingURL=93.7d9ef066.chunk.js.map