(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[97],{576:function(e,c,t){"use strict";t.d(c,"a",(function(){return n}));const i="".concat("http://34.208.193.210/apipagos/api/","ocultarcolumnausuario");function n(e,c,t,n,a,s,o){let r=i,l="";var j={id_usuario:c,NombreColumna:t,activo:a,id_usuario_s:s};""!==e&&""!==n&&(l+="/"+e+"/"+n),r+=l;const u=JSON.stringify(j);return fetch(r,{method:"POST",body:u,headers:{Authorization:"Bearer "+o,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},865:function(e,c,t){"use strict";t.r(c);var i=t(1),n=t(459),a=t(818),s=t(719),o=t(835),r=t(16),l=(t(465),t(467)),j=t(576),u=t(463),d=(t(460),t(462)),b=t(464),h=t(477),O=t(10);c.default=()=>{const e=Object(r.g)(),[c,t]=Object(i.useState)(null),{session:p,clear:m}=Object(n.useSession)("PendrogonIT-Session"),[x,v]=Object(i.useState)(!1),[f,g]=Object(i.useState)(!1),[y,S]=Object(i.useState)(""),[C,N]=Object(i.useState)("danger"),[_,k]=Object(i.useState)("Error!"),[A,w]=Object(i.useState)([]),[B,T]=Object(i.useState)({id_usuario:"",NombreColumna:""});Object(i.useEffect)((()=>{let e=!0,c=0;return p&&(c=p.id),Object(h.a)(null,null,null,null,p.api_token).then((c=>{e&&w(c.users)})),()=>e=!1}),[]);const z=e=>{T({...B,[e.target.name]:e.target.value})},E=async c=>{if(""!==B.id_usuario&&""!==B.NombreColumna){c.preventDefault();"OK"===await Object(j.a)("",B.id_usuario,B.NombreColumna,"","",p.id,p.api_token)&&e.push("/ocultarcolumnas")}else v(!0),k("Error!"),N("danger"),S("No has llenado todos los campos.")};async function F(c){if(1==c)g(!1);else if(2==c){let c=0;p&&(c=p.id);"OK"===await Object(u.a)(c,null,null,"2",p.api_token)&&(m(),e.push("/"))}}return p?Object(O.jsx)("div",{style:{flexDirection:"row"},children:Object(O.jsxs)(d.i,{children:[Object(O.jsxs)(a.a,{responsive:!0,variant:"primary",show:f,onHide:()=>F(2),centered:!0,children:[Object(O.jsx)(a.a.Header,{closeButton:!0,children:Object(O.jsx)(a.a.Title,{children:"Confirmaci\xf3n"})}),Object(O.jsx)(a.a.Body,{children:y}),Object(O.jsxs)(a.a.Footer,{children:[Object(O.jsx)(d.c,{color:"secondary",onClick:()=>F(2),children:"Cancelar"}),Object(O.jsx)(d.c,{color:"primary",onClick:()=>F(1),children:"Aceptar"})]})]}),Object(O.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(O.jsxs)(s.a,{variant:"primary",size:"sm",onClick:()=>e.goBack(),children:[Object(O.jsx)(b.c,{}),"\xa0\xa0Regresar"]})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(o.a,{show:x,variant:C,onClose:()=>v(!1),dismissible:!0,children:[Object(O.jsx)(o.a.Heading,{children:_}),Object(O.jsx)("p",{children:y})]}),Object(O.jsx)(d.d,{style:{display:"flex",alignItems:"center"},children:Object(O.jsx)(d.e,{style:{width:"80%"},children:Object(O.jsxs)(d.p,{style:{width:"100%"},children:[Object(O.jsx)("h1",{children:"Oculta columna a usuario"}),Object(O.jsx)("p",{className:"text-medium-emphasis",children:"Agregue columna a lista de ocultos para usuario especifico."}),Object(O.jsxs)(d.y,{className:"mb-3",children:[Object(O.jsx)(d.z,{children:Object(O.jsx)(l.A,{})}),Object(O.jsxs)(d.t,{name:"id_usuario",onChange:z,children:[Object(O.jsx)("option",{value:"0",children:"Seleccione un usuario."}),A.map(((e,c)=>{if(0==e.eliminado&&1==e.activo)return Object(O.jsx)("option",{value:e.id,children:e.nombre+" "+e.apellido+" ["+e.nombre_usuario+"]"},e.id)}))]})]}),Object(O.jsxs)(d.y,{className:"mb-3",children:[Object(O.jsx)(d.z,{children:Object(O.jsx)(l.B,{})}),Object(O.jsxs)(d.t,{name:"NombreColumna",onChange:z,children:[Object(O.jsx)("option",{value:"0",children:"Seleccione columna"}),Object(O.jsx)("option",{value:"Selecci\xf3n",children:"Selecci\xf3n"}),Object(O.jsx)("option",{value:"Empresa",children:"Empresa"}),Object(O.jsx)("option",{value:"No. documento",children:"No. documento"}),Object(O.jsx)("option",{value:"Fecha sistema",children:"Fecha sistema"}),Object(O.jsx)("option",{value:"Beneficiario",children:"Beneficiario"}),Object(O.jsx)("option",{value:"Concepto",children:"Concepto"}),Object(O.jsx)("option",{value:"Monto",children:"Monto"}),Object(O.jsx)("option",{value:"Acciones",children:"Acciones"}),Object(O.jsx)("option",{value:"Fecha autorizaci\xf3n",children:"Fecha autorizaci\xf3n"}),Object(O.jsx)("option",{value:"Tipo",children:"Tipo"})]})]}),Object(O.jsx)(d.c,{color:"primary",onClick:E,children:"Agregar"})]})})})]})}):(e.push("/"),Object(O.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=97.8dd223c6.chunk.js.map