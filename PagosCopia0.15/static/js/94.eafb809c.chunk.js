(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[94],{571:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));const o="".concat("http://pagos.sion.com.gt/apipagos/api/","usuarios");function a(e,t,i,a,s,r,n,l,c,d){let u=o,p="";var b={id:e,nombre:t,apellido:i,correo:a,nombre_usuario:s,activo:r,cambia_password:n,opcion:l,id_usuario:c};""!==e&&""!==l&&(p+="/"+e+"/"+l),u+=p;const m=JSON.stringify(b);return fetch(u,{method:"POST",body:m,headers:{Authorization:"Bearer "+d,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},842:function(e,t,i){"use strict";i.r(t);var o=i(1),a=i(16),s=i(818),r=i(571),n=i(463),l=i(470),c=i(477),d=i(459),u=i(464),p=(i(460),i(462)),b=i(469),m=i.n(b),j=i(471),h=i.n(j),f=(i(472),i(10));t.default=()=>{const e=Object(a.g)(),[t,i]=Object(o.useState)(null),{session:j,clear:O}=Object(d.useSession)("PendrogonIT-Session"),[x,g]=Object(o.useState)([]),[y,S]=Object(o.useState)([]),[v,C]=Object(o.useState)(!1),[w,k]=Object(o.useState)(0),[_,z]=Object(o.useState)(0),[T,A]=Object(o.useState)("");function N(e){let t=!1;for(let i of y)e==i.objeto&&(t=!0);return t}async function R(t){if(1==t)C(!1);else if(2==t){let t=0;j&&(t=j.id);"OK"===await Object(n.a)(t,null,null,"2",j.api_token)&&(O(),e.push("/"))}}Object(o.useEffect)((()=>{let e=!0,t=0;return j&&(t=j.id),Object(c.a)(null,null,null,null,j.api_token).then((t=>{e&&g(t.users)})),Object(l.a)(t,"2","Modulo Usuarios",j.api_token).then((t=>{e&&S(t.detalle)})),()=>e=!1}),[]);const U={headRow:{style:{borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:b.defaultThemes.default.divider.default}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",fontSize:"12px","&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:b.defaultThemes.default.divider.default}}},cells:{style:{"&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:b.defaultThemes.default.divider.default}}}},P=Object(o.useMemo)((()=>[{name:"Nombre",selector:e=>e.nombre+" "+e.apellido,center:!0,style:{fontSize:"11px"},sortable:!0,wrap:!0},{name:"Correo",selector:e=>e.email,center:!0,style:{fontSize:"11px"},sortable:!0},{name:"Usuario",selector:e=>e.nombre_usuario,center:!0,sortable:!0,style:{fontSize:"11px"}},{name:"Estado",cell:function(e){let t="Inactivo";return 1==e.activo&&(t="Activo"),t},center:!0,sortable:!0,style:{fontSize:"11px"},wrap:!0},{name:"Acciones",cell:function(t){let i=!1;return N("Modulo Usuarios")||(i=!0),Object(f.jsxs)("div",{children:[Object(f.jsx)(p.c,{color:"info",size:"sm",title:"Consultar Usuario Perfil",disabled:i,onClick:()=>e.push({pathname:"/usuarios/consulta",id_usuario:t.id,email:t.email,nombre:t.nombre+" "+t.apellido,estado:t.activo}),children:Object(f.jsx)(u.t,{})})," ",Object(f.jsx)(p.c,{color:"success",size:"sm",title:"Asignar Perfiles",disabled:i,onClick:()=>e.push({pathname:"/usuarios/perfilusuario",id:t.id,nombre:t.nombre+" "+t.apellido,email:t.email,estado:t.activo}),children:Object(f.jsx)(u.u,{})})," ",Object(f.jsx)(p.c,{color:"warning",size:"sm",title:"Asignar Grupo Autorizaci\xf3n",disabled:i,onClick:()=>e.push({pathname:"/usuarios/usuariogrupo",id_usuario:t.id,nombre:t.nombre+" "+t.apellido,email:t.email,estado:t.activo,inhabilitar:!0}),children:Object(f.jsx)(u.x,{})})," ",Object(f.jsx)(p.c,{color:"primary",size:"sm",title:"Editar Usuario",disabled:i,onClick:()=>e.push({pathname:"/usuarios/editar",id:t.id,nombre:t.nombre,apellido:t.apellido,usuario:t.nombre_usuario,email:t.email,password:t.password,estado:t.activo,cambia_password:t.cambia_password}),children:Object(f.jsx)(u.v,{})})," ",Object(f.jsx)(p.c,{color:"danger",size:"sm",title:"Eliminar Usuario",disabled:i,onClick:()=>function(e,t,i){k(e),z(i),C(!0),A("Est\xe1 seguro de eliminar al usuario "+t+"?")}(t.id,t.nombre+" "+t.apellido,1),children:Object(f.jsx)(u.s,{})})]})},center:!0,width:"200px"}])),E={columns:P,data:x,filterPlaceholder:"Filtrar datos",export:!1,print:!1};if(j){let t=!1;return N("Modulo Usuarios")||(t=!0),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(s.a,{responsive:!0,variant:"primary",show:v,onHide:()=>R(_),centered:!0,children:[Object(f.jsx)(s.a.Header,{closeButton:!0,children:Object(f.jsx)(s.a.Title,{children:"Confirmaci\xf3n"})}),Object(f.jsx)(s.a.Body,{children:T}),Object(f.jsxs)(s.a.Footer,{children:[Object(f.jsx)(p.c,{color:"secondary",onClick:()=>R(_),children:"Cancelar"}),Object(f.jsx)(p.c,{color:"primary",onClick:()=>async function(e,t){1==t?"OK"===await Object(r.a)(e,"","","","","","","2",j.id,j.api_token)&&await Object(c.a)(null,null,null,null,j.api_token).then((e=>{g(e.users)})):2==t&&C(!1)}(w,_).then((()=>R(1))),children:"Aceptar"})]})]}),Object(f.jsx)("div",{className:"float-right",style:{marginBottom:"10px"},children:Object(f.jsx)(p.c,{color:"primary",size:"sm",disabled:t,onClick:()=>e.push("/usuarios/registro"),children:"Crear Nuevo"})}),Object(f.jsx)(h.a,{...E,children:Object(f.jsx)(m.a,{columns:P,noDataComponent:"No hay usuarios que mostrar",data:x,customStyles:U,pagination:!0,paginationPerPage:25,responsive:!0,persistTableHead:!0,striped:!0,dense:!0})})]})}return e.push("/"),Object(f.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."})}}}]);
//# sourceMappingURL=94.eafb809c.chunk.js.map