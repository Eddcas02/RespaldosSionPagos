(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[63],{518:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));const s="".concat("http://pagos.sion.com.gt/apipagos/api/","perfilrol");function i(e,t,c,i,n,r,a,o){let l=s,j="";var d={id_perfilrol:e,id_perfil:t,roles:c,opcion:i,id_rol:n,activo:r,id_usuario:a};""!==c&&(j+="/"+c),""!==e&&""!==i&&(j+="/"+e+"/"+i),l+=j;const p=JSON.stringify(d);return fetch(l,{method:"POST",body:p,headers:{Authorization:"Bearer "+o,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},519:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));const s="".concat("http://pagos.sion.com.gt/apipagos/api/","roles");function i(e,t,c){let i=s,n="";return null!==e&&(n+="/"+e),null!==t&&(n+="/"+t),i+=n,fetch(i,{method:"GET",headers:{Authorization:"Bearer "+c,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}},855:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(459),n=c(818),r=c(835),a=c(719),o=(c(465),c(16)),l=c(518),j=c(463),d=c(519),p=c(467),u=(c(460),c(462)),b=c(464),h=c(10);t.default=()=>{const e=Object(o.g)(),t=Object(o.h)(),[c,O]=Object(s.useState)(null),{session:f,clear:m}=Object(i.useSession)("PendrogonIT-Session"),[x,g]=Object(s.useState)(!1),[y,v]=Object(s.useState)(!1),[E,S]=Object(s.useState)([]),[A,C]=Object(s.useState)(""),[N,k]=Object(s.useState)("Error!"),[_,w]=Object(s.useState)("danger"),[I,B]=Object(s.useState)({estado:""});Object(s.useEffect)((()=>{let e=!0;return Object(d.a)(null,null,f.api_token).then((t=>{e&&S(t.roles)})),()=>e=!1}),[]);const L=e=>{B({...I,[e.target.name]:e.target.value})},R=async c=>{let s="";c.preventDefault();var i=document.getElementsByName("estado");for(var n of i)n.checked&&(s+=n.value+"|");if(""!==s){const c=await Object(l.a)("",t.id_perfil,s,"","","",f.id,f.api_token);"OK"===c?e.push("/perfiles"):"Error"===c?(g(!0),k("Error!"),C("Error de conexi\xf3n.")):"Repetidos"===c&&(g(!0),k("Aviso!"),w("warning"),C("Los roles seleccionados ya fueron elegidos para este perfil! Intente con otros."))}else g(!0),k("Error!"),w("danger"),C("No has seleccionado ning\xfan rol.")};async function T(t){if(1==t)v(!1);else if(2==t){let t=0;f&&(t=f.id);"OK"===await Object(j.a)(t,null,null,"2",f.api_token)&&(m(),e.push("/"))}}return f?t.id_perfil?Object(h.jsx)("div",{style:{flexDirection:"row"},children:Object(h.jsxs)(u.i,{children:[Object(h.jsxs)(n.a,{responsive:!0,variant:"primary",show:y,onHide:()=>T(2),centered:!0,children:[Object(h.jsx)(n.a.Header,{closeButton:!0,children:Object(h.jsx)(n.a.Title,{children:"Confirmaci\xf3n"})}),Object(h.jsx)(n.a.Body,{children:A}),Object(h.jsxs)(n.a.Footer,{children:[Object(h.jsx)(u.c,{color:"secondary",onClick:()=>T(2),children:"Cancelar"}),Object(h.jsx)(u.c,{color:"primary",onClick:()=>T(1),children:"Aceptar"})]})]}),Object(h.jsxs)(r.a,{show:x,variant:_,onClose:()=>g(!1),dismissible:!0,children:[Object(h.jsx)(r.a.Heading,{children:N}),Object(h.jsx)("p",{children:A})]}),Object(h.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(h.jsxs)(a.a,{variant:"primary",size:"sm",onClick:()=>e.goBack(),children:[Object(h.jsx)(b.c,{}),"\xa0\xa0Regresar"]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(u.d,{style:{display:"flex",alignItems:"center"},children:Object(h.jsx)(u.e,{style:{width:"80%"},children:Object(h.jsxs)(u.p,{style:{width:"100%"},children:[Object(h.jsx)("h1",{children:"Asignaci\xf3n de Roles"}),Object(h.jsx)("p",{className:"text-medium-emphasis",children:"Asigne alg\xfan rol al perfil"}),Object(h.jsxs)(u.y,{className:"mb-3",children:[Object(h.jsx)(u.z,{children:Object(h.jsx)(p.B,{})}),Object(h.jsx)(u.r,{type:"text",placeholder:"Nombre",name:"nombre",value:t.descripcion,disabled:!0})]}),E.map(((e,t)=>{if(0==e.eliminado&&1==e.activo)return Object(h.jsx)(u.q,{value:e.id_rol,type:"checkbox",name:"estado",label:e.descripcion,onChange:L},e.id_rol)})),Object(h.jsx)("br",{}),Object(h.jsx)(u.c,{color:"primary",onClick:R,children:"Guardar Cambios"})]})})})]})}):(e.push("/perfiles"),Object(h.jsx)("div",{className:"sin-sesion",children:"NO SE CARG\xd3 EL C\xd3DIGO DEL PERFIL. REGRESE A LA PANTALLA DE PERFILES."})):(e.push("/"),Object(h.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=63.b796b97f.chunk.js.map