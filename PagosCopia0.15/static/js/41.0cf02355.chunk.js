(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[41],{490:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const i="".concat("http://pagos.sion.com.gt/apipagos/api/","estadoflujo");function n(e,t,c){let n=i,s="";return null!==e&&(s.length>0?s+="&id_estadoflujo="+e:s+="?id_estadoflujo="+e),null!==t&&(s.length>0?s+="&descripcion="+t:s+="?descripcion="+t),n+=s,fetch(n,{method:"GET",headers:{Authorization:"Bearer "+c,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}},530:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const i="".concat("http://pagos.sion.com.gt/apipagos/api/","tipoflujo");function n(e,t,c,n,s,o,a){let r=i,l="";var d={id_tipoflujo:e,descripcion:t,id_estadoinicial:c,activo:n,opcion:s,id_usuario:o};""!==e&&""!==s&&(l+="/"+e+"/"+s),r+=l;const j=JSON.stringify(d);return fetch(r,{method:"POST",body:j,headers:{Authorization:"Bearer "+a,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}},891:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(459),s=c(818),o=c(835),a=(c(465),c(16)),r=c(467),l=c(490),d=c(530),j=c(463),u=(c(460),c(462)),p=c(10);t.default=()=>{const e=Object(a.g)(),[t,c]=Object(i.useState)(null),{session:h,clear:b}=Object(n.useSession)("PendrogonIT-Session"),[O,f]=Object(i.useState)(!1),[x,m]=Object(i.useState)(!1),[g,y]=Object(i.useState)(""),[S,v]=Object(i.useState)("danger"),[C,_]=Object(i.useState)("Error!"),[w,N]=Object(i.useState)([]),[k,T]=Object(i.useState)({descripcion:"",estado_inicial:"0"});Object(i.useEffect)((()=>{let e=!0;return Object(l.a)(null,null,h.api_token).then((t=>{e&&N(t.estados)})),()=>e=!1}),[]);const A=e=>{T({...k,[e.target.name]:e.target.value})},E=async t=>{if(""!==k.descripcion){t.preventDefault();"OK"===await Object(d.a)("",k.descripcion,k.estado_inicial,"","",h.id,h.api_token)&&e.push("/tipoflujo")}else f(!0),_("Error!"),v("danger"),y("No has llenado todos los campos.")};async function I(t){if(1==t)m(!1);else if(2==t){let t=0;h&&(t=h.id);"OK"===await Object(j.a)(t,null,null,"2",h.api_token)&&(b(),e.push("/"))}}return h?Object(p.jsx)("div",{style:{flexDirection:"row"},children:Object(p.jsxs)(u.i,{children:[Object(p.jsxs)(s.a,{responsive:!0,variant:"primary",show:x,onHide:()=>I(2),centered:!0,children:[Object(p.jsx)(s.a.Header,{closeButton:!0,children:Object(p.jsx)(s.a.Title,{children:"Confirmaci\xf3n"})}),Object(p.jsx)(s.a.Body,{children:g}),Object(p.jsxs)(s.a.Footer,{children:[Object(p.jsx)(u.c,{color:"secondary",onClick:()=>I(2),children:"Cancelar"}),Object(p.jsx)(u.c,{color:"primary",onClick:()=>I(1),children:"Aceptar"})]})]}),Object(p.jsxs)(o.a,{show:O,variant:S,onClose:()=>f(!1),dismissible:!0,children:[Object(p.jsx)(o.a.Heading,{children:C}),Object(p.jsx)("p",{children:g})]}),Object(p.jsx)(u.d,{style:{display:"flex",alignItems:"center"},children:Object(p.jsx)(u.e,{style:{width:"80%"},children:Object(p.jsxs)(u.p,{style:{width:"100%"},children:[Object(p.jsx)("h1",{children:"Creaci\xf3n de Tipo de Flujo"}),Object(p.jsx)("p",{className:"text-medium-emphasis",children:"Cree un nuevo tipo de flujo"}),Object(p.jsxs)(u.y,{className:"mb-3",children:[Object(p.jsx)(u.z,{children:Object(p.jsx)(r.n,{})}),Object(p.jsx)("textarea",{placeholder:"Descripci\xf3n",name:"descripcion",className:"form-control",rows:"2",onChange:A})]}),Object(p.jsxs)(u.y,{className:"mb-3",children:[Object(p.jsx)(u.z,{children:Object(p.jsx)(r.w,{})}),Object(p.jsxs)(u.t,{name:"estado_inicial",onChange:A,children:[Object(p.jsx)("option",{children:"Seleccione estado inicial. (Opcional)"}),w.map(((e,t)=>{if(0==e.eliminado&&1==e.activo)return Object(p.jsx)("option",{value:e.id_estadoflujo,children:e.descripcion},e.id_estadoflujo)}))]})]}),Object(p.jsx)(u.c,{color:"primary",onClick:E,children:"Crear Tipo"})]})})})]})}):(e.push("/"),Object(p.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=41.0cf02355.chunk.js.map