(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[81],{579:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));const a="".concat("http://pagos.sion.com.gt/apipagos/api/","cuentagrupoautorizacion");function n(e,t,o,n,i,r){let c=a,s="";var l={id_cuentagrupo:e,opcion:n,id_usuario:i,CodigoCuenta:o,id_grupoautorizacion:t};""!==e&&""!==n&&(s+="/"+e+"/"+n),c+=s;const u=JSON.stringify(l);return fetch(c,{method:"POST",body:u,headers:{Authorization:"Bearer "+r,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},924:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o(16),i=o(818);const r="".concat("http://pagos.sion.com.gt/apipagos/api/","cuentagrupoautorizacion");function c(e,t){let o=r,a="";return null!==e&&(a+="/"+e),o+=a,fetch(o,{method:"GET",headers:{Authorization:"Bearer "+t,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}var s=o(470),l=o(463),u=o(579),d=o(459),p=o(464),h=(o(460),o(462)),j=o(469),b=o.n(j),f=o(471),g=o.n(f),O=(o(472),o(10));t.default=()=>{const e=Object(n.g)(),[t,o]=Object(a.useState)(null),{session:r,clear:f}=Object(d.useSession)("PendrogonIT-Session"),[m,x]=Object(a.useState)([]),[y,C]=Object(a.useState)([]),[S,v]=Object(a.useState)(!1),[z,A]=Object(a.useState)(0),[T,_]=Object(a.useState)(0),[k,w]=Object(a.useState)("");function R(e){let t=0;for(let o of y)e===o.objeto&&(t=1);return t}async function N(t){if(1==t)v(!1);else if(2==t){let t=0;r&&(t=r.id);"OK"===await Object(l.a)(t,null,null,"2",r.api_token)&&(f(),e.push("/"))}}Object(a.useEffect)((()=>{let e=!0,t=0;return r&&(t=r.id),c(null,r.api_token).then((t=>{e&&x(t.cuenta_grupo_autorizacion)})),Object(s.a)(t,"2","Modulo CuentaGrupoAutorizacion",r.api_token).then((t=>{e&&C(t.detalle)})),()=>e=!1}),[]);const B={headRow:{style:{borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:j.defaultThemes.default.divider.default}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",fontSize:"12px","&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:j.defaultThemes.default.divider.default}}},cells:{style:{"&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:j.defaultThemes.default.divider.default}}}},E=Object(a.useMemo)((()=>[{name:"Cuenta(s)",selector:e=>e.CodigoCuenta,center:!0,style:{fontSize:"11px"},sortable:!0,wrap:!0},{name:"Grupo autorizaci\xf3n",selector:e=>e.identificador,center:!0,style:{fontSize:"11px"},sortable:!0,wrap:!0},{name:"Acciones",cell:function(e){let t="Inactivo";1==e.activo&&(t="Activo");let o=!1;return 0==R("Modulo CuentaGrupoAutorizacion")&&(o=!0),Object(O.jsx)("div",{children:Object(O.jsx)(h.c,{color:"danger",size:"sm",title:"Eliminar cuenta",disabled:o,onClick:()=>function(e,t){A(e),_(t),v(!0),w("Est\xe1 seguro de eliminar la(s) cuenta(s) listado?")}(e.id_cuentagrupo,1),children:Object(O.jsx)(p.s,{})})})},center:!0,width:"200px"}])),G={columns:E,data:m,filterPlaceholder:"Filtrar datos",export:!1,print:!1};if(r){let t=!1;return 0==R("Modulo CuentaGrupoAutorizacion")&&(t=!0),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(i.a,{responsive:!0,variant:"primary",show:S,onHide:()=>N(T),centered:!0,children:[Object(O.jsx)(i.a.Header,{closeButton:!0,children:Object(O.jsx)(i.a.Title,{children:"Confirmaci\xf3n"})}),Object(O.jsx)(i.a.Body,{children:k}),Object(O.jsxs)(i.a.Footer,{children:[Object(O.jsx)(h.c,{color:"secondary",onClick:()=>N(T),children:"Cancelar"}),Object(O.jsx)(h.c,{color:"primary",onClick:()=>async function(e,t){1==t?"OK"===await Object(u.a)(e,"","","2",r.id,r.api_token)&&await c(null,r.api_token).then((e=>{x(e.cuenta_grupo_autorizacion)})):2==t&&v(!1)}(z,T).then((()=>N(1))),children:"Aceptar"})]})]}),Object(O.jsx)("div",{className:"float-right",style:{marginBottom:"10px"},children:Object(O.jsx)(h.c,{color:"primary",size:"sm",disabled:t,onClick:()=>e.push("/cuentagrupoautorizacion/nuevo"),children:"Agregar Nueva"})}),Object(O.jsx)(g.a,{...G,children:Object(O.jsx)(b.a,{columns:E,noDataComponent:"No hay usuarios que mostrar",data:m,customStyles:B,pagination:!0,paginationPerPage:25,responsive:!0,persistTableHead:!0,striped:!0,dense:!0})})]})}return e.push("/"),Object(O.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."})}}}]);
//# sourceMappingURL=81.efa03956.chunk.js.map