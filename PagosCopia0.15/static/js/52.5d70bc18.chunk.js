(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[52],{514:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return r}));const n="".concat("http://pagos.sion.com.gt/apipagos/api/","perfiles");function o(e,t,i){let o=n,r="";return null!==e&&(r.length>0?r+="&id="+e:r+="?id="+e),null!==t&&(r.length>0?r+="&descripcion="+t:r+="?descripcion="+t),o+=r,fetch(o,{method:"GET",headers:{Authorization:"Bearer "+i,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}function r(e,t){let i=n;return i+="paraasignar/"+e,fetch(i,{method:"GET",headers:{Authorization:"Bearer "+t,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}},517:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));const n="".concat("http://pagos.sion.com.gt/apipagos/api/","perfiles");function o(e,t,i,o,r,c){let s=n,a="";var l={id_perfil:e,descripcion:t,activo:i,opcion:o,id_usuario:r};""!==e&&""!==o&&(a+="/"+e+"/"+o),s+=a;const d=JSON.stringify(l);return fetch(s,{method:"POST",body:d,headers:{Authorization:"Bearer "+c,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},854:function(e,t,i){"use strict";i.r(t);var n=i(1),o=i(16),r=i(463),c=i(517),s=i(514),a=i(470),l=i(818),d=(i(465),i(459)),p=i(464),u=(i(460),i(462)),h=i(469),f=i.n(h),j=i(471),b=i.n(j),O=(i(472),i(10));t.default=()=>{const e=Object(o.g)(),[t,i]=Object(n.useState)(null),{session:j,clear:m}=Object(d.useSession)("PendrogonIT-Session"),[x,g]=Object(n.useState)([]),[y,v]=Object(n.useState)([]),[S,C]=Object(n.useState)(!1),[k,T]=Object(n.useState)(0),[_,A]=Object(n.useState)(0),[z,P]=Object(n.useState)("");function w(e){let t=0;for(let i of y)e===i.objeto&&(t=1);return t}async function R(t){if(1==t)C(!1);else if(2==t){let t=0;j&&(t=j.id);"OK"===await Object(r.a)(t,null,null,"2",j.api_token)&&(m(),e.push("/"))}}Object(n.useEffect)((()=>{let e=!0,t=0;return j&&(t=j.id),Object(s.a)(null,null,j.api_token).then((t=>{e&&g(t.perfiles)})),Object(a.a)(t,"2","Modulo Perfiles",j.api_token).then((t=>{e&&v(t.detalle)})),()=>e=!1}),[]);const E={headRow:{style:{borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:h.defaultThemes.default.divider.default}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",fontSize:"12px","&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:h.defaultThemes.default.divider.default}}},cells:{style:{"&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:h.defaultThemes.default.divider.default}}}},N=Object(n.useMemo)((()=>[{name:"Descripcion",selector:e=>e.descripcion,center:!0,style:{fontSize:"11px"},sortable:!0,wrap:!0},{name:"Estado",cell:function(e){let t="Inactivo";return 1==e.activo&&(t="Activo"),t},center:!0,sortable:!0,style:{fontSize:"11px"},wrap:!0},{name:"Acciones",cell:function(t){let i=!1;0==w("Modulo Perfiles")&&(i=!0);let n="Inactivo";return 1==t.activo&&(n="Activo"),Object(O.jsxs)("div",{children:[Object(O.jsx)(u.c,{color:"info",size:"sm",title:"Consultar Perfil Rol",disabled:i,onClick:()=>e.push({pathname:"/perfiles/consulta",id_perfil:t.id_perfil,descripcion:t.descripcion,estado:n}),children:Object(O.jsx)(p.g,{})})," ",Object(O.jsx)(u.c,{color:"success",size:"sm",title:"Asignar Rol",disabled:i,onClick:()=>e.push({pathname:"/perfiles/perfilrol",id_perfil:t.id_perfil,descripcion:t.descripcion,estado:t.activo}),children:Object(O.jsx)(p.u,{})})," ",Object(O.jsx)(u.c,{color:"primary",size:"sm",title:"Editar Perfil",disabled:i,onClick:()=>e.push({pathname:"/perfiles/editar",id_perfil:t.id_perfil,descripcion:t.descripcion,estado:t.activo}),children:Object(O.jsx)(p.v,{})})," ",Object(O.jsx)(u.c,{color:"danger",size:"sm",title:"Eliminar Perfil",disabled:i,onClick:()=>function(e,t,i){T(e),A(i),P("Est\xe1 seguro de eliminar el perfil "+t+"?"),C(!0)}(t.id_perfil,t.descripcion,1),children:Object(O.jsx)(p.s,{})})]})},center:!0,width:"200px"}])),B={columns:N,data:x,filterPlaceholder:"Filtrar datos",export:!1,print:!1};if(j){let t=!1;return 0==w("Modulo Perfiles")&&(t=!0),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(l.a,{responsive:!0,variant:"primary",show:S,onHide:()=>R(_),centered:!0,children:[Object(O.jsx)(l.a.Header,{closeButton:!0,children:Object(O.jsx)(l.a.Title,{children:"Confirmaci\xf3n"})}),Object(O.jsx)(l.a.Body,{children:z}),Object(O.jsxs)(l.a.Footer,{children:[Object(O.jsx)(u.c,{color:"secondary",onClick:()=>R(_),children:"Cancelar"}),Object(O.jsx)(u.c,{color:"primary",onClick:()=>async function(e,t){1==t?"OK"===await Object(c.a)(e,"","","2",j.id,j.api_token)&&await Object(s.a)(null,null,j.api_token).then((e=>{g(e.perfiles)})):2==t&&C(!1)}(k,_).then((()=>R(1))),children:"Aceptar"})]})]}),Object(O.jsx)("div",{className:"float-right",style:{marginBottom:"10px"},children:Object(O.jsx)(u.c,{color:"primary",size:"sm",disabled:t,onClick:()=>e.push("/perfiles/nuevo"),children:"Crear Nuevo"})}),Object(O.jsx)(b.a,{...B,children:Object(O.jsx)(f.a,{columns:N,noDataComponent:"No hay perfiles que mostrar",data:x,customStyles:E,pagination:!0,paginationPerPage:25,responsive:!0,persistTableHead:!0,striped:!0,dense:!0})})]})}return e.push("/"),Object(O.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."})}}}]);
//# sourceMappingURL=52.5d70bc18.chunk.js.map