(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[54],{513:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));const c="".concat("http://pagos.sion.com.gt/apipagos/api/","usuarioperfil");function s(e,t,i,s,n,r,a,o){let l=c,j="";var d={id_usuarioperfil:e,idUsuario:t,id_perfil:n,perfiles:i,opcion:s,activo:r,id_usuario:a};""!==i&&(j+="/"+i),""!==e&&""!==s&&(j+="/"+e+"/"+s),l+=j;const u=JSON.stringify(d);return fetch(l,{method:"POST",body:u,headers:{Authorization:"Bearer "+o,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},514:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return n}));const c="".concat("http://pagos.sion.com.gt/apipagos/api/","perfiles");function s(e,t,i){let s=c,n="";return null!==e&&(n.length>0?n+="&id="+e:n+="?id="+e),null!==t&&(n.length>0?n+="&descripcion="+t:n+="?descripcion="+t),s+=n,fetch(s,{method:"GET",headers:{Authorization:"Bearer "+i,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}function n(e,t){let i=c;return i+="paraasignar/"+e,fetch(i,{method:"GET",headers:{Authorization:"Bearer "+t,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}},845:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i(459),n=i(818),r=i(835),a=i(719),o=(i(465),i(16)),l=i(513),j=i(463),d=i(514),u=(i(460),i(462)),p=i(467),h=i(464),b=i(10);t.default=()=>{const e=Object(o.g)(),t=Object(o.h)(),[i,O]=Object(c.useState)(null),{session:f,clear:m}=Object(s.useSession)("PendrogonIT-Session"),[x,g]=Object(c.useState)(!1),[y,v]=Object(c.useState)(!1),[A,S]=Object(c.useState)([]),[E,C]=Object(c.useState)(""),[N,k]=Object(c.useState)("Error!"),[w,I]=Object(c.useState)("danger"),[B,T]=Object(c.useState)({perfiles:""});Object(c.useEffect)((()=>{let e=!0,i=0;return f&&(i=f.id),Object(d.b)(t.id,f.api_token).then((t=>{e&&S(t.perfiles)})),()=>e=!1}),[]);const _=e=>{T({...B,[e.target.name]:e.target.value})},z=async i=>{let c="";i.preventDefault();var s=document.getElementsByName("perfiles");for(var n of s)n.checked&&(c+=n.value+"|");if(""!==c){const i=await Object(l.a)("",t.id,c,"","","",f.id,f.api_token);"OK"===i?e.push("/usuarios"):"Error"===i?(g(!0),k("Error!"),C("Error de conexi\xf3n.")):"Repetidos"===i&&(g(!0),k("Aviso!"),I("warning"),C("Los perfiles seleccionados ya fueron elegidos para este usuario! Intente con otros."))}else g(!0),k("Error!"),I("danger"),C("No has seleccionado ning\xfan perfil.")};async function R(t){if(1==t)v(!1);else if(2==t){let t=0;f&&(t=f.id);"OK"===await Object(j.a)(t,null,null,"2",f.api_token)&&(m(),e.push("/"))}}return f?t.id?Object(b.jsx)("div",{style:{flexDirection:"row"},children:Object(b.jsxs)(u.i,{children:[Object(b.jsxs)(n.a,{responsive:!0,variant:"primary",show:y,onHide:()=>R(2),centered:!0,children:[Object(b.jsx)(n.a.Header,{closeButton:!0,children:Object(b.jsx)(n.a.Title,{children:"Confirmaci\xf3n"})}),Object(b.jsx)(n.a.Body,{children:E}),Object(b.jsxs)(n.a.Footer,{children:[Object(b.jsx)(u.c,{color:"secondary",onClick:()=>R(2),children:"Cancelar"}),Object(b.jsx)(u.c,{color:"primary",onClick:()=>R(1),children:"Aceptar"})]})]}),Object(b.jsxs)(r.a,{show:x,variant:w,onClose:()=>g(!1),dismissible:!0,children:[Object(b.jsx)(r.a.Heading,{children:N}),Object(b.jsx)("p",{children:E})]}),Object(b.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(b.jsxs)(a.a,{variant:"primary",size:"sm",onClick:()=>e.goBack(),children:[Object(b.jsx)(h.c,{}),"\xa0\xa0Regresar"]})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(u.d,{style:{display:"flex",alignItems:"center"},children:Object(b.jsx)(u.e,{style:{width:"80%"},children:Object(b.jsxs)(u.p,{style:{width:"100%"},children:[Object(b.jsx)("h1",{children:"Asignaci\xf3n de Perfiles"}),Object(b.jsx)("p",{className:"text-medium-emphasis",children:"Asigne perfiles al usuario"}),Object(b.jsxs)(u.y,{className:"mb-3",children:[Object(b.jsx)(u.z,{children:Object(b.jsx)(p.z,{})}),Object(b.jsx)(u.r,{type:"text",placeholder:"Nombre",name:"nombre",value:t.nombre,disabled:!0})]}),Object(b.jsxs)(u.y,{className:"mb-3",children:[Object(b.jsx)(u.z,{children:Object(b.jsx)(p.e,{})}),Object(b.jsx)(u.r,{type:"email",placeholder:"Correo",name:"email",value:t.email,onChange:_,disabled:!0})]}),A.map(((e,t)=>{if(0==e.eliminado&&1==e.activo)return Object(b.jsx)(u.q,{value:e.id_perfil,type:"checkbox",name:"perfiles",label:e.descripcion,onChange:_},e.id_perfil)})),Object(b.jsx)("br",{}),Object(b.jsx)(u.c,{color:"primary",onClick:z,children:"Guardar Cambios"})]})})})]})}):(e.push("/usuarios"),Object(b.jsx)("div",{className:"sin-sesion",children:"NO SE CARG\xd3 EL C\xd3DIGO DEL USUARIO. REGRESE A LA PANTALLA DE USUARIOS."})):(e.push("/"),Object(b.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=54.f86dccea.chunk.js.map