(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[84],{534:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const s="".concat("http://pagos.sion.com.gt/apipagos/api/","monedas");function n(e,t,c,n,a,i,o){let r=s,l="";var j={id_moneda:e,nombre:t,simbolo:c,activo:n,opcion:a,id_usuario:i};""!==e&&""!==a&&(l+="/"+e+"/"+a),r+=l;const d=JSON.stringify(j);return fetch(r,{method:"POST",body:d,headers:{Authorization:"Bearer "+o,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},910:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(459),a=c(818),i=c(719),o=c(835),r=(c(465),c(16)),l=c(534),j=c(463),d=(c(460),c(462)),b=c(547),h=c(464),m=c(10);t.default=e=>{const t=Object(r.g)(),[c,O]=Object(s.useState)(null),{session:p,clear:x}=Object(n.useSession)("PendrogonIT-Session"),[u,y]=Object(s.useState)(!1),[f,g]=Object(s.useState)(!1),[C,v]=Object(s.useState)(""),[S,N]=Object(s.useState)({nombre:"",simbolo:""}),k=e=>{N({...S,[e.target.name]:e.target.value})},w=async e=>{if(""!==S.nombre&&""!==S.simbolo){e.preventDefault();"OK"===await Object(l.a)("",S.nombre,S.simbolo,"","",p.id,p.api_token)&&t.push("/monedas")}else y(!0),v("No has llenado todos los campos.")};async function A(e){if(1==e)g(!1);else if(2==e){let e=0;p&&(e=p.id);"OK"===await Object(j.a)(e,null,null,"2",p.api_token)&&(x(),t.push("/"))}}return p?Object(m.jsx)("div",{style:{flexDirection:"row"},children:Object(m.jsxs)(d.i,{children:[Object(m.jsxs)(a.a,{responsive:!0,variant:"primary",show:f,onHide:()=>A(2),centered:!0,children:[Object(m.jsx)(a.a.Header,{closeButton:!0,children:Object(m.jsx)(a.a.Title,{children:"Confirmaci\xf3n"})}),Object(m.jsx)(a.a.Body,{children:C}),Object(m.jsxs)(a.a.Footer,{children:[Object(m.jsx)(d.c,{color:"secondary",onClick:()=>A(2),children:"Cancelar"}),Object(m.jsx)(d.c,{color:"primary",onClick:()=>A(1),children:"Aceptar"})]})]}),Object(m.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(m.jsxs)(i.a,{variant:"primary",size:"sm",onClick:()=>t.goBack(),children:[Object(m.jsx)(h.c,{}),"\xa0\xa0Regresar"]})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)(o.a,{show:u,variant:"danger",onClose:()=>y(!1),dismissible:!0,children:[Object(m.jsx)(o.a.Heading,{children:"Error!"}),Object(m.jsx)("p",{children:C})]}),Object(m.jsx)(d.d,{style:{display:"flex",alignItems:"center"},children:Object(m.jsx)(d.e,{style:{width:"80%"},children:Object(m.jsxs)(d.p,{style:{width:"100%"},children:[Object(m.jsx)("h1",{children:"Creaci\xf3n de Moneda"}),Object(m.jsx)("p",{className:"text-medium-emphasis",children:"Cree una nueva moneda"}),Object(m.jsxs)(d.y,{className:"mb-3",children:[Object(m.jsx)(d.z,{children:Object(m.jsx)(h.h,{})}),Object(m.jsx)(d.r,{type:"text",placeholder:"Nombre",name:"nombre",onChange:k})]}),Object(m.jsxs)(d.y,{className:"mb-3",children:[Object(m.jsx)(d.z,{children:Object(m.jsx)(b.a,{})}),Object(m.jsx)(d.r,{type:"text",placeholder:"Simbolo",name:"simbolo",onChange:k})]}),Object(m.jsx)(d.c,{color:"primary",onClick:w,children:"Crear Moneda"})]})})})]})}):(t.push("/"),Object(m.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=84.93b1fd53.chunk.js.map