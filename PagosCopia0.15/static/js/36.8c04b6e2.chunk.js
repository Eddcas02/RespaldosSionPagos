(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[36],{531:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));const n="".concat("http://34.208.193.210/apipagos/api/","bancos");function i(e,t,o){let i=n,c="";return null!==e&&(c+="/"+e),null!==t&&(c+="/"+t),i+=c,fetch(i,{method:"GET",headers:{Authorization:"Bearer "+o,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}},532:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));const n="".concat("http://34.208.193.210/apipagos/api/","bancos");function i(e,t,o,i,c,a,r,s,l,d){let u=n,b="";var p={id_banco:e,nombre:t,direccion:o,codigo_transferencia:i,codigo_SAP:c,id_pais:a,activo:r,opcion:s,id_usuario:l};""!==e&&""!==s&&(b+="/"+e+"/"+s),u+=b;const h=JSON.stringify(p);return fetch(u,{method:"POST",body:h,headers:{Authorization:"Bearer "+d,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},905:function(e,t,o){"use strict";o.r(t);var n=o(1),i=o(16),c=o(818),a=(o(465),o(531)),r=o(470),s=o(532),l=o(463),d=o(459),u=o(464),b=(o(460),o(462)),p=o(469),h=o.n(p),j=o(471),f=o.n(j),m=(o(472),o(10));t.default=()=>{const e=Object(i.g)(),[t,o]=Object(n.useState)(null),{session:j,clear:O}=Object(d.useSession)("PendrogonIT-Session"),[x,g]=Object(n.useState)([]),[w,S]=Object(n.useState)([]),[C,v]=Object(n.useState)(!1),[y,_]=Object(n.useState)(0),[A,T]=Object(n.useState)(0),[k,N]=Object(n.useState)(""),[P,B]=Object(n.useState)(""),[L,R]=Object(n.useState)(!1);x.filter((e=>e.codigo_transferencia.toString().toLowerCase().includes(P.toLowerCase())||e.nombre.toLowerCase().includes(P.toLowerCase())||e.direccion.toLowerCase().includes(P.toLowerCase())||e.Nombre.toLowerCase().includes(P.toLowerCase())));async function E(t){if(1==t)v(!1);else if(2==t){let t=0;j&&(t=j.id);"OK"===await Object(l.a)(t,null,null,"2",j.api_token)&&(O(),e.push("/"))}}Object(n.useEffect)((()=>{let e=!0,t=0;return j&&(t=j.id),Object(a.a)(null,null,j.api_token).then((t=>{e&&g(t.bancos)})),Object(r.a)(t,"2","Modulo Bancos",j.api_token).then((t=>{e&&S(t.detalle)})),()=>e=!1}),[]);const z={headRow:{style:{borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:p.defaultThemes.default.divider.default}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",fontSize:"12px","&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:p.defaultThemes.default.divider.default}}},cells:{style:{"&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:p.defaultThemes.default.divider.default}}}},I=Object(n.useMemo)((()=>[{name:"No.",selector:e=>e.codigo_transferencia,center:!0,width:"65px",sortable:!0,wrap:!0},{name:"Nombre",selector:e=>e.nombre,center:!0,width:"320px",sortable:!0,wrap:!0},{name:"Direcci\xf3n",selector:e=>e.direccion,center:!0,width:"300px",sortable:!0,wrap:!0},{name:"Pa\xeds",selector:e=>e.Nombre,center:!0,width:"100px",sortable:!0,wrap:!0},{name:"SAP",selector:e=>e.codigo_SAP,center:!0,width:"90px",sortable:!0,wrap:!0},{name:"Estado",center:!0,width:"80px",cell:function(e){return 1==e.activo?Object(m.jsx)("div",{children:"Activo"}):0==e.activo?Object(m.jsx)("div",{children:"Inactivo"}):void 0},sortable:!0,wrap:!0},{name:"Acciones",width:"10%",sortable:!0,wrap:!0,cell:function(t){let o=!1;return 0==M("Modulo Bancos")&&(o=!0),Object(m.jsxs)("div",{children:[Object(m.jsx)(b.c,{color:"primary",size:"sm",title:"Editar Banco",disabled:o,onClick:()=>e.push({pathname:"/bancos/editar",id_banco:t.id_banco,nombre:t.nombre,direccion:t.direccion,codigoTransferencia:t.codigo_transferencia,codigoSAP:t.codigo_SAP,pais:t.id_pais,estado:t.activo}),children:Object(m.jsx)(u.m,{})})," ",Object(m.jsx)(b.c,{color:"danger",size:"sm",title:"Eliminar Banco",disabled:o,onClick:()=>function(e,t,o){_(e),T(t),N("Est\xe1 seguro de eliminar el banco "+o+"?"),v(!0)}(t.id_banco,1,t.nombre),children:Object(m.jsx)(u.s,{})})]})},center:!0}])),F={columns:I,data:x,filterPlaceholder:"Filtrar datos",export:!1,print:!1};function M(e){let t=0;for(let o of w)e===o.objeto&&(t=1);return t}if(j){let t=!1;return 0==M("Modulo Bancos")&&(t=!0),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(c.a,{responsive:!0,variant:"primary",show:C,onHide:()=>E(A),centered:!0,children:[Object(m.jsx)(c.a.Header,{closeButton:!0,children:Object(m.jsx)(c.a.Title,{children:"Confirmaci\xf3n"})}),Object(m.jsx)(c.a.Body,{children:k}),Object(m.jsxs)(c.a.Footer,{children:[Object(m.jsx)(b.c,{color:"secondary",onClick:()=>E(A),children:"Cancelar"}),Object(m.jsx)(b.c,{color:"primary",onClick:()=>async function(e,t){1==t?"OK"===await Object(s.a)(e,"","","","","","","2",j.id,j.api_token)&&await Object(a.a)(null,null,j.api_token).then((e=>{g(e.bancos)})):2==t&&v(!1)}(y,A).then((()=>E(1))),children:"Aceptar"})]})]}),Object(m.jsx)("div",{className:"float-right",style:{marginBottom:"10px"},children:Object(m.jsx)(b.c,{color:"primary",size:"sm",disabled:t,onClick:()=>e.push("/bancos/nuevo"),children:"Crear Nuevo"})}),Object(m.jsx)(f.a,{...F,children:Object(m.jsx)(h.a,{columns:I,noDataComponent:"No hay registros que mostrar",data:x,customStyles:z,pagination:!0,paginationPerPage:25,responsive:!0,persistTableHead:!0,striped:!0,dense:!0})})]})}return e.push("/"),Object(m.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."})}}}]);
//# sourceMappingURL=36.8c04b6e2.chunk.js.map