(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[99],{530:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));const c="".concat("http://pagos.sion.com.gt/apipagos/api/","tipoflujo");function o(e,t,i,o,n,s,a){let l=c,r="";var d={id_tipoflujo:e,descripcion:t,id_estadoinicial:i,activo:o,opcion:n,id_usuario:s};""!==e&&""!==n&&(r+="/"+e+"/"+n),l+=r;const j=JSON.stringify(d);return fetch(l,{method:"POST",body:j,headers:{Authorization:"Bearer "+a,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},928:function(e,t,i){"use strict";i.r(t);var c=i(1),o=i(16),n=(i(465),i(818)),s=i(462);const a="".concat("http://pagos.sion.com.gt/apipagos/api/","tipoflujo");function l(e,t,i){let c=a,o="";return null!==e&&(o.length>0?o+="&id_tipoflujo="+e:o+="?id_tipoflujo="+e),null!==t&&(o.length>0?o+="&descripcion="+t:o+="?descripcion="+t),c+=o,fetch(c,{method:"GET",headers:{Authorization:"Bearer "+i,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}var r=i(470),d=i(463),j=i(530),u=i(459),p=i(464),h=(i(460),i(10));t.default=()=>{const e=Object(o.g)(),[t,i]=Object(c.useState)(null),{session:a,clear:b}=Object(u.useSession)("PendrogonIT-Session"),[O,f]=Object(c.useState)([]),[m,x]=Object(c.useState)([]),[g,_]=Object(c.useState)(!1),[v,N]=Object(c.useState)(0),[S,y]=Object(c.useState)(0),[k,T]=Object(c.useState)("");async function A(t){if(1==t)_(!1);else if(2==t){let t=0;a&&(t=a.id);"OK"===await Object(d.a)(t,null,null,"2",a.api_token)&&(b(),e.push("/"))}}if(Object(c.useEffect)((()=>{let e=!0,t=0;return a&&(t=a.id),l(null,null,a.api_token).then((t=>{e&&f(t.tipos)})),Object(r.a)(t,"2","Modulo Tipos Flujo",a.api_token).then((t=>{e&&x(t.detalle)})),()=>e=!1}),[]),a){let t=!1;return 0==function(e){let t=0;for(let i of m)e===i.objeto&&(t=1);return t}("Modulo Tipos Flujo")&&(t=!0),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(n.a,{responsive:!0,variant:"primary",show:g,onHide:()=>A(S),centered:!0,children:[Object(h.jsx)(n.a.Header,{closeButton:!0,children:Object(h.jsx)(n.a.Title,{children:"Confirmaci\xf3n"})}),Object(h.jsx)(n.a.Body,{children:k}),Object(h.jsxs)(n.a.Footer,{children:[Object(h.jsx)(s.c,{color:"secondary",onClick:()=>A(S),children:"Cancelar"}),Object(h.jsx)(s.c,{color:"primary",onClick:()=>async function(e,t){1==t?"OK"===await Object(j.a)(e,"","","","2",a.id,a.api_token)&&await l(null,null,a.api_token).then((e=>{f(e.tipos)})):2==t&&_(!1)}(v,S).then((()=>A(1))),children:"Aceptar"})]})]}),Object(h.jsx)("div",{className:"float-right",style:{marginBottom:"10px"},children:Object(h.jsx)(s.c,{color:"primary",size:"sm",disabled:t,onClick:()=>e.push("/tipoflujo/nuevo"),children:"Crear Nuevo"})}),Object(h.jsxs)(s.F,{hover:!0,responsive:!0,align:"middle",className:"mb-0 border",children:[Object(h.jsx)(s.I,{color:"light",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.J,{className:"text-center",children:"Tipo Flujo"}),Object(h.jsx)(s.J,{className:"text-center",children:"Estado Inicial"}),Object(h.jsx)(s.J,{className:"text-center",children:"Estado"}),Object(h.jsx)(s.J,{style:{textAlign:"center",width:"20%"},children:"Acciones"})]})}),Object(h.jsx)(s.G,{children:O.map(((i,c)=>{let o="",n="Inactivo";if(0==i.eliminado)return 1==i.activo&&(n="Activo"),o=""===i.id_estadoinicial||"0"===i.id_estadoinicial?"No asignado":i.estadoinicial,Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.H,{className:"text-center",children:i.descripcion}),Object(h.jsx)(s.H,{className:"text-center",children:o}),Object(h.jsx)(s.H,{className:"text-center",children:n}),Object(h.jsxs)(s.H,{className:"text-center",children:[Object(h.jsx)(s.c,{color:"primary",size:"sm",title:"Editar Tipo Flujo",disabled:t,onClick:()=>e.push({pathname:"/tipoflujo/editar",id_tipoflujo:i.id_tipoflujo,id_estadoinicial:i.id_estadoinicial,descripcion:i.descripcion,estado:i.activo}),children:Object(h.jsx)(p.m,{})})," ",Object(h.jsx)(s.c,{color:"danger",size:"sm",title:"Eliminar Tipo Flujo",disabled:t,onClick:()=>function(e,t,i){N(e),y(i),_(!0),T("Est\xe1 seguro de eliminar el tipo de flujo "+t+"?")}(i.id_tipoflujo,i.descripcion,1),children:Object(h.jsx)(p.s,{})})]})]},i.id_tipoflujo)}))})]})]})}return e.push("/"),Object(h.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."})}}}]);
//# sourceMappingURL=99.87cbf81e.chunk.js.map