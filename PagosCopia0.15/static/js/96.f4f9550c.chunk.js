(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[96],{528:function(e,c,t){"use strict";t.d(c,"a",(function(){return s}));const i="".concat("http://pagos.sion.com.gt/apipagos/api/","grupoautorizacion");function s(e,c,t,s,n,r,a,o){let l=i,j="";var d={id_grupo:e,identificador:c,descripcion:t,numero_niveles:s,activo:n,opcion:r,id_usuario:a};""!==e&&""!==r&&(j+="/"+e+"/"+r),l+=j;const b=JSON.stringify(d);return fetch(l,{method:"POST",body:b,headers:{Authorization:"Bearer "+o,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},887:function(e,c,t){"use strict";t.r(c);var i=t(1),s=t(459),n=t(818),r=t(719),a=t(835),o=(t(465),t(16)),l=t(467),j=t(464),d=t(528),b=t(463),h=(t(460),t(462)),p=t(10);c.default=()=>{const e=Object(o.g)(),[c,t]=Object(i.useState)(null),{session:u,clear:O}=Object(s.useSession)("PendrogonIT-Session"),[x,m]=Object(i.useState)(!1),[f,g]=Object(i.useState)(!1),[y,v]=Object(i.useState)(""),[C,S]=Object(i.useState)("danger"),[N,w]=Object(i.useState)("Error!"),[k,z]=Object(i.useState)({descripcion:"",identificador:"",numero_niveles:""}),_=e=>{z({...k,[e.target.name]:e.target.value})},A=async c=>{if(""!==k.descripcion&&""!==k.identificador){c.preventDefault();"OK"===await Object(d.a)("",k.identificador,k.descripcion,k.numero_niveles,"","",u.id,u.api_token)&&e.push("/grupos")}else m(!0),w("Error!"),S("danger"),v("No has llenado todos los campos.")};async function I(c){if(1==c)g(!1);else if(2==c){let c=0;u&&(c=u.id);"OK"===await Object(b.a)(c,null,null,"2",u.api_token)&&(O(),e.push("/"))}}return u?Object(p.jsx)("div",{style:{flexDirection:"row"},children:Object(p.jsxs)(h.i,{children:[Object(p.jsxs)(n.a,{responsive:!0,variant:"primary",show:f,onHide:()=>I(2),centered:!0,children:[Object(p.jsx)(n.a.Header,{closeButton:!0,children:Object(p.jsx)(n.a.Title,{children:"Confirmaci\xf3n"})}),Object(p.jsx)(n.a.Body,{children:y}),Object(p.jsxs)(n.a.Footer,{children:[Object(p.jsx)(h.c,{color:"secondary",onClick:()=>I(2),children:"Cancelar"}),Object(p.jsx)(h.c,{color:"primary",onClick:()=>I(1),children:"Aceptar"})]})]}),Object(p.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(p.jsxs)(r.a,{variant:"primary",size:"sm",onClick:()=>e.goBack(),children:[Object(p.jsx)(j.c,{}),"\xa0\xa0Regresar"]})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)(a.a,{show:x,variant:C,onClose:()=>m(!1),dismissible:!0,children:[Object(p.jsx)(a.a.Heading,{children:N}),Object(p.jsx)("p",{children:y})]}),Object(p.jsx)(h.d,{style:{display:"flex",alignItems:"center"},children:Object(p.jsx)(h.e,{style:{width:"80%"},children:Object(p.jsxs)(h.p,{style:{width:"100%"},children:[Object(p.jsx)("h1",{children:"Creaci\xf3n de Grupo de Autorizaci\xf3n"}),Object(p.jsx)("p",{className:"text-medium-emphasis",children:"Cree un nuevo grupo de autorizaci\xf3n"}),Object(p.jsxs)(h.y,{className:"mb-3",children:[Object(p.jsx)(h.z,{children:Object(p.jsx)(l.n,{})}),Object(p.jsx)(h.r,{type:"text",placeholder:"Identificador",name:"identificador",onChange:_})]}),Object(p.jsxs)(h.y,{className:"mb-3",children:[Object(p.jsx)(h.z,{children:Object(p.jsx)(l.C,{})}),Object(p.jsx)("textarea",{placeholder:"Descripci\xf3n",name:"descripcion",className:"form-control",rows:"2",onChange:_})]}),Object(p.jsxs)(h.y,{className:"mb-3",children:[Object(p.jsx)(h.z,{children:Object(p.jsx)(j.l,{})}),Object(p.jsx)(h.r,{type:"text",placeholder:"N\xfamero Niveles",name:"numero_niveles",onChange:_})]}),Object(p.jsx)(h.c,{color:"primary",onClick:A,children:"Crear Grupo"})]})})})]})}):(e.push("/"),Object(p.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=96.f4f9550c.chunk.js.map