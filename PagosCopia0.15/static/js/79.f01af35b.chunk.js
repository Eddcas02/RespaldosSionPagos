(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[79],{524:function(e,c,t){"use strict";t.d(c,"a",(function(){return s}));const i="".concat("http://pagos.sion.com.gt/apipagos/api/","condicionautorizacion");function s(e,c,t,s,n,a,o){let r=i,d="";var l={id_condicion:e,descripcion:c,parametro:t,activo:s,opcion:n,id_usuario:a};""!==e&&""!==n&&(d+="/"+e+"/"+n),r+=d;const j=JSON.stringify(l);return fetch(r,{method:"POST",body:j,headers:{Authorization:"Bearer "+o,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},880:function(e,c,t){"use strict";t.r(c);var i=t(1),s=t(459),n=t(818),a=t(835),o=(t(465),t(16)),r=t(467),d=t(524),l=t(463),j=(t(460),t(462)),h=t(10);c.default=()=>{const e=Object(o.g)(),c=Object(o.h)(),[t,p]=Object(i.useState)(null),{session:b,clear:O}=Object(s.useSession)("PendrogonIT-Session"),[u,m]=Object(i.useState)(!1),[x,f]=Object(i.useState)(!1),[y,S]=Object(i.useState)(""),[C,g]=Object(i.useState)("danger"),[v,N]=Object(i.useState)("Error!"),[A,w]=Object(i.useState)({descripcion:c.descripcion,parametros:c.parametro,estado:c.estado}),E=e=>{w({...A,[e.target.name]:e.target.value})},I=async t=>{if(""!==A.descripcion&&""!==A.parametros){t.preventDefault();"OK"===await Object(d.a)(c.id_condicion,A.descripcion,A.parametros,A.estado,"1",b.id,b.api_token)&&e.push("/condiciones")}else m(!0),N("Error!"),g("danger"),S("No has llenado todos los campos.")};async function k(c){if(1==c)f(!1);else if(2==c){let c=0;b&&(c=b.id);"OK"===await Object(l.a)(c,null,null,"2",b.api_token)&&(O(),e.push("/"))}}return b?c.id_condicion?Object(h.jsx)("div",{style:{flexDirection:"row"},children:Object(h.jsxs)(j.i,{children:[Object(h.jsxs)(n.a,{responsive:!0,variant:"primary",show:x,onHide:()=>k(2),centered:!0,children:[Object(h.jsx)(n.a.Header,{closeButton:!0,children:Object(h.jsx)(n.a.Title,{children:"Confirmaci\xf3n"})}),Object(h.jsx)(n.a.Body,{children:y}),Object(h.jsxs)(n.a.Footer,{children:[Object(h.jsx)(j.c,{color:"secondary",onClick:()=>k(2),children:"Cancelar"}),Object(h.jsx)(j.c,{color:"primary",onClick:()=>k(1),children:"Aceptar"})]})]}),Object(h.jsxs)(a.a,{show:u,variant:C,onClose:()=>m(!1),dismissible:!0,children:[Object(h.jsx)(a.a.Heading,{children:v}),Object(h.jsx)("p",{children:y})]}),Object(h.jsx)(j.d,{style:{display:"flex",alignItems:"center"},children:Object(h.jsx)(j.e,{style:{width:"80%"},children:Object(h.jsxs)(j.p,{style:{width:"100%"},children:[Object(h.jsx)("h1",{children:"Modificaci\xf3n de Condici\xf3n de Autorizaci\xf3n"}),Object(h.jsx)("p",{className:"text-medium-emphasis",children:"Modifique la informaci\xf3n de la condici\xf3n de autorizaci\xf3n"}),Object(h.jsxs)(j.y,{className:"mb-3",children:[Object(h.jsx)(j.z,{children:Object(h.jsx)(r.b,{})}),Object(h.jsx)("textarea",{placeholder:"Descripci\xf3n",name:"descripcion",className:"form-control",rows:"2",onChange:E,defaultValue:c.descripcion})]}),Object(h.jsxs)(j.y,{className:"mb-3",children:[Object(h.jsx)(j.z,{children:Object(h.jsx)(r.n,{})}),Object(h.jsx)(j.r,{type:"text",placeholder:"Parametros",name:"parametros",onChange:E,defaultValue:c.parametro})]}),Object(h.jsxs)(j.y,{className:"mb-3",children:[Object(h.jsx)(j.z,{children:Object(h.jsx)(r.w,{})}),Object(h.jsxs)(j.t,{name:"estado",onChange:E,children:[Object(h.jsx)("option",{children:"Seleccione estado. (Opcional)"}),Object(h.jsx)("option",{value:"1",children:"Activo"}),Object(h.jsx)("option",{value:"0",children:"Inactivo"})]})]}),Object(h.jsx)(j.c,{color:"primary",onClick:I,children:"Guardar Cambios"})]})})})]})}):(e.push("/condiciones"),Object(h.jsx)("div",{className:"sin-sesion",children:"NO SE CARG\xd3 EL C\xd3DIGO DE CONDICI\xd3N. REGRESE A LA PANTALLA DE PAGOS."})):(e.push("/"),Object(h.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=79.f01af35b.chunk.js.map