(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[86],{517:function(e,c,t){"use strict";t.d(c,"a",(function(){return i}));const s="".concat("http://pagos.sion.com.gt/apipagos/api/","perfiles");function i(e,c,t,i,r,n){let a=s,o="";var l={id_perfil:e,descripcion:c,activo:t,opcion:i,id_usuario:r};""!==e&&""!==i&&(o+="/"+e+"/"+i),a+=o;const j=JSON.stringify(l);return fetch(a,{method:"POST",body:j,headers:{Authorization:"Bearer "+n,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},853:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t(459),r=t(818),n=t(719),a=t(835),o=(t(465),t(16)),l=t(500),j=t(517),d=t(463),p=(t(460),t(462)),h=t(464),b=t(10);c.default=e=>{const c=Object(o.g)(),[t,O]=Object(s.useState)(null),{session:u,clear:x}=Object(i.useSession)("PendrogonIT-Session"),[m,f]=Object(s.useState)(!1),[g,y]=Object(s.useState)(!1),[S,v]=Object(s.useState)(""),[C,w]=Object(s.useState)("danger"),[k,N]=Object(s.useState)("Error!"),[A,B]=Object(s.useState)({descripcion:""}),I=e=>{B({...A,[e.target.name]:e.target.value})},T=async e=>{if(""!==A.descripcion){e.preventDefault();"OK"===await Object(j.a)("",A.descripcion,"","",u.id,u.api_token)&&c.push("/perfiles")}else f(!0),N("Error!"),w("danger"),v("No has ingresado ninguna descripci\xf3n.")};async function P(e){if(1==e)y(!1);else if(2==e){let e=0;u&&(e=u.id);"OK"===await Object(d.a)(e,null,null,"2",u.api_token)&&(x(),c.push("/"))}}return u?Object(b.jsx)("div",{style:{flexDirection:"row"},children:Object(b.jsxs)(p.i,{children:[Object(b.jsxs)(r.a,{responsive:!0,variant:"primary",show:g,onHide:()=>P(2),centered:!0,children:[Object(b.jsx)(r.a.Header,{closeButton:!0,children:Object(b.jsx)(r.a.Title,{children:"Confirmaci\xf3n"})}),Object(b.jsx)(r.a.Body,{children:S}),Object(b.jsxs)(r.a.Footer,{children:[Object(b.jsx)(p.c,{color:"secondary",onClick:()=>P(2),children:"Cancelar"}),Object(b.jsx)(p.c,{color:"primary",onClick:()=>P(1),children:"Aceptar"})]})]}),Object(b.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(b.jsxs)(n.a,{variant:"primary",size:"sm",onClick:()=>c.goBack(),children:[Object(b.jsx)(h.c,{}),"\xa0\xa0Regresar"]})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)(a.a,{show:m,variant:C,onClose:()=>f(!1),dismissible:!0,children:[Object(b.jsx)(a.a.Heading,{children:k}),Object(b.jsx)("p",{children:S})]}),Object(b.jsx)(p.d,{style:{display:"flex",alignItems:"center"},children:Object(b.jsx)(p.e,{style:{width:"80%"},children:Object(b.jsxs)(p.p,{style:{width:"100%"},children:[Object(b.jsx)("h1",{children:"Creaci\xf3n de Perfil"}),Object(b.jsx)("p",{className:"text-medium-emphasis",children:"Cree un nuevo perfil"}),Object(b.jsxs)(p.y,{className:"mb-3",children:[Object(b.jsx)(p.z,{children:Object(b.jsx)(l.a,{})}),Object(b.jsx)("textarea",{placeholder:"Descripci\xf3n",className:"form-control",rows:"2",onChange:I,name:"descripcion"})]}),Object(b.jsx)(p.c,{color:"primary",onClick:T,children:"Crear Perfil"})]})})})]})}):(c.push("/"),Object(b.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=86.f7f0701c.chunk.js.map