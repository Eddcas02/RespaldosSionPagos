(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[56],{497:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));const c="".concat("http://pagos.sion.com.gt/apipagos/api/","permisos");function i(e,t,s){let i=c,n="";return null!==e&&(n.length>0?n+="&id="+e:n+="?id="+e),null!==t&&(n.length>0?n+="&descripcion="+t:n+="?descripcion="+t),i+=n,fetch(i,{method:"GET",headers:{Authorization:"Bearer "+s,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}},521:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));const c="".concat("http://pagos.sion.com.gt/apipagos/api/","rolpermiso");function i(e,t,s,i,n,r,o,a){let l=c,d="";var j={id_rolpermiso:e,id_rol:t,permisos:s,opcion:i,id_permiso:n,activo:r,id_usuario:o};""!==s&&(d+="/"+s),""!==e&&""!==i&&(d+="/"+e+"/"+i),l+=d;const p=JSON.stringify(j);return fetch(l,{method:"POST",body:p,headers:{Authorization:"Bearer "+a,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},870:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s(459),n=s(818),r=s(719),o=s(835),a=(s(465),s(16)),l=s(521),d=s(463),j=s(497),p=s(467),h=(s(460),s(462)),u=s(464),b=s(10);t.default=()=>{const e=Object(a.g)(),t=Object(a.h)(),[s,O]=Object(c.useState)(null),{session:m,clear:x}=Object(i.useSession)("PendrogonIT-Session"),[f,g]=Object(c.useState)(!1),[y,v]=Object(c.useState)(!1),[S,E]=Object(c.useState)([]),[A,C]=Object(c.useState)(""),[N,k]=Object(c.useState)("Error!"),[_,w]=Object(c.useState)("danger"),[B,L]=Object(c.useState)({estado:""});Object(c.useEffect)((()=>{let e=!0;return Object(j.a)(null,null,m.api_token).then((t=>{e&&E(t.permisos)})),()=>e=!1}),[]);const R=e=>{L({...B,[e.target.name]:e.target.value})},I=async s=>{let c="";s.preventDefault();var i=document.getElementsByName("estado");for(var n of i)n.checked&&(c+=n.value+"|");if(""!==c){const s=await Object(l.a)("",t.id_rol,c,"","","",m.id,m.api_token);"OK"===s?e.push("/roles"):"Error"===s?(g(!0),k("Error!"),C("Error de conexi\xf3n.")):"Repetidos"===s&&(g(!0),k("Aviso!"),w("warning"),C("Los permisos seleccionados ya fueron elegidos para este rol! Intente con otros."))}else g(!0),k("Error!"),w("danger"),C("No has seleccionado ning\xfan permiso.")};async function T(t){if(1==t)v(!1);else if(2==t){let t=0;m&&(t=m.id);"OK"===await Object(d.a)(t,null,null,"2",m.api_token)&&(x(),e.push("/"))}}return m?t.id_rol?Object(b.jsx)("div",{style:{flexDirection:"row"},children:Object(b.jsxs)(h.i,{children:[Object(b.jsxs)(n.a,{responsive:!0,variant:"primary",show:y,onHide:()=>T(2),centered:!0,children:[Object(b.jsx)(n.a.Header,{closeButton:!0,children:Object(b.jsx)(n.a.Title,{children:"Confirmaci\xf3n"})}),Object(b.jsx)(n.a.Body,{children:A}),Object(b.jsxs)(n.a.Footer,{children:[Object(b.jsx)(h.c,{color:"secondary",onClick:()=>T(2),children:"Cancelar"}),Object(b.jsx)(h.c,{color:"primary",onClick:()=>T(1),children:"Aceptar"})]})]}),Object(b.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(b.jsxs)(r.a,{variant:"primary",size:"sm",onClick:()=>e.goBack(),children:[Object(b.jsx)(u.c,{}),"\xa0\xa0Regresar"]})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)(o.a,{show:f,variant:_,onClose:()=>g(!1),dismissible:!0,children:[Object(b.jsx)(o.a.Heading,{children:N}),Object(b.jsx)("p",{children:A})]}),Object(b.jsx)(h.d,{style:{display:"flex",alignItems:"center"},children:Object(b.jsx)(h.e,{style:{width:"80%"},children:Object(b.jsxs)(h.p,{style:{width:"100%"},children:[Object(b.jsx)("h1",{children:"Asignaci\xf3n de Roles"}),Object(b.jsx)("p",{className:"text-medium-emphasis",children:"Asigne alg\xfan rol al perfil"}),Object(b.jsxs)(h.y,{className:"mb-3",children:[Object(b.jsx)(h.z,{children:Object(b.jsx)(p.B,{})}),Object(b.jsx)(h.r,{type:"text",placeholder:"Nombre",name:"nombre",value:t.descripcion,disabled:!0})]}),S.map(((e,t)=>{if(0==e.eliminado&&1==e.activo)return Object(b.jsx)(h.q,{value:e.id_permiso,type:"checkbox",name:"estado",label:e.descripcion,onChange:R},e.id_permiso)})),Object(b.jsx)("br",{}),Object(b.jsx)(h.c,{color:"primary",onClick:I,children:"Guardar Cambios"})]})})})]})}):(e.push("/roles"),Object(b.jsx)("div",{className:"sin-sesion",children:"NO SE CARG\xd3 EL C\xd3DIGO DEL ROL. REGRESE A LA PANTALLA DE ROLES."})):(e.push("/"),Object(b.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=56.99e12c0b.chunk.js.map