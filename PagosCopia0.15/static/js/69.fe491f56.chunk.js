(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[69],{476:function(e,o,t){"use strict";t.d(o,"a",(function(){return n}));const a="".concat("http://pagos.sion.com.gt/apipagos/api/","ocultarcolumnausuario");function n(e,o){let t=a,n="";return null!==e&&(n+="/"+e),t+=n,fetch(t,{method:"GET",headers:{Authorization:"Bearer "+o,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}},552:function(e,o,t){"use strict";t.r(o);var a=t(1),n=t(16),i=t(719),r=t(469),s=t.n(r);const c="".concat("http://pagos.sion.com.gt/apipagos/api/","autorizados");function d(e,o,t){let a=c,n="";return null!==e&&(n+="/"+e),null!==o&&(n+="/"+o),a+=n,fetch(a,{method:"GET",headers:{Authorization:"Bearer "+t,Accept:"application/json"}}).then((function(e){return e.json()})).catch((e=>e))}var u=t(481),l=t(459),p=t(464),m=(t(460),t(471)),f=t.n(m),_=(t(472),t(476)),h=t(10);o.default=e=>{const o=Object(n.g)(),t=Object(n.h)(),{session:c}=Object(l.useSession)("PendrogonIT-Session"),[m,b]=Object(a.useState)([]),[g,j]=Object(a.useState)([]),[x,S]=Object(a.useState)([]),[v,z]=Object(a.useState)("285px"),O=m,y=g;Object(a.useEffect)((()=>{let o=!0;if(t.tipo){if(j(t.autorizados),t.autorizados)if(1==t.opcion){let e=[];t.autorizados.forEach((o=>{e.push({id_flujo:o.IdFlujo,estado:o.estado,nivel:o.nivel,id_grupo:o.IdGrupo,PuedoAutorizar:"0",pago:o.Pago,seccion:"Notificaciones"})})),sessionStorage.setItem("listaPagosNotificaciones",JSON.stringify(e))}else if(2==t.opcion){let e=[];t.autorizados.forEach((o=>{e.push({id_flujo:o.IdFlujo,estado:o.estado,nivel:o.nivel,id_grupo:o.IdGrupo,PuedoAutorizar:"1",pago:o.Pago,seccion:"Mensajes"})})),sessionStorage.setItem("listaPagosMensajes",JSON.stringify(e))}d(c.id,t.tipo,c.api_token).then((e=>{if(o){b(e.bitacora);let o=[];e.bitacora.forEach((e=>{o.push({id_flujo:e.IdFlujo,estado:e.estado,nivel:e.nivel,id_grupo:e.id_grupoautorizacion,PuedoAutorizar:"0",pago:e.doc_num,seccion:"Autorizados"})})),sessionStorage.setItem("listaPagosAutorizados",JSON.stringify(o))}})),Object(_.a)(c.id,c.api_token).then((e=>{o&&(S(e.ocultar),e.ocultar.length>0?z("auto"):z("285px"))}))}else d(c.id,e.tipo,c.api_token).then((e=>{if(o){b(e.bitacora);let o=[];e.bitacora.forEach((e=>{o.push({id_flujo:e.IdFlujo,estado:e.estado,nivel:e.nivel,id_grupo:e.id_grupoautorizacion,PuedoAutorizar:"0",pago:e.doc_num,seccion:"Autorizados"})})),sessionStorage.setItem("listaPagosAutorizados",JSON.stringify(o))}})),Object(_.a)(c.id,c.api_token).then((e=>{o&&(S(e.ocultar),e.ocultar.length>0?z("auto"):z("285px"))}));return()=>o=!1}),[]);const A={headRow:{style:{borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:r.defaultThemes.default.divider.default}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",fontSize:"12px","&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:r.defaultThemes.default.divider.default}}},cells:{style:{"&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:r.defaultThemes.default.divider.default}}}};function w(e){let o=!1;for(let t of x)e==t.NombreColumna&&(o=!0);return o}const P=(e,o)=>"QTZ"===o?N.format(e):E.format(e);let N=new Intl.NumberFormat("es-GT",{style:"currency",currency:"GTQ"}),E=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});const I=Object(a.useMemo)((()=>[{name:"Empresa",selector:e=>e.empresa_nombre,center:!0,style:{fontSize:"11px"},sortable:!0,wrap:!0,width:"150px",omit:w("Empresa")},{name:"No.",selector:e=>e.doc_num,center:!0,style:{fontSize:"11px"},sortable:!0,width:"90px",omit:w("No. documento")},{name:"Fecha Sis.",selector:e=>e.creation_date,center:!0,sortable:!0,style:{fontSize:"11px"},width:"100px",omit:w("Fecha sistema")},{name:"Beneficiario",selector:e=>e.en_favor_de,center:!0,sortable:!0,style:{fontSize:"11px"},wrap:!0,width:"250px",omit:w("Beneficiario")},{name:"Concepto",selector:e=>e.comments,center:!0,style:{fontSize:"11px"},wrap:!0,width:v,omit:w("Concepto")},{name:"Monto",selector:e=>P(e.doc_total,e.doc_curr),center:!0,style:{fontSize:"11px"},width:"120px",omit:w("Monto")},{name:"Acciones",cell:function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(i.a,{"data-tag":"allowRowEvents",variant:"success",size:"sm",title:"Consultar Detalle Pago",onClick:()=>o.push({pathname:"/pagos/tabs",id_flujo:e.IdFlujo,pago:e.doc_num,estado:e.estado,nivel:e.nivel,id_grupo:e.id_grupoautorizacion,PuedoAutorizar:"0",seccion:"Autorizados"}),children:Object(h.jsx)(p.k,{})})})},center:!0,width:"70px",omit:w("Acciones")}])),T=Object(a.useMemo)((()=>[{name:"Empresa",selector:e=>e.empresa_nombre,center:!0,style:{fontSize:"11px"},sortable:!0,wrap:!0,width:"150px",omit:w("Empresa")},{name:"No.",selector:e=>e.Pago,center:!0,style:{fontSize:"11px"},sortable:!0,width:"90px",omit:w("No. documento")},{name:"Fecha Sis.",selector:e=>e.creation_date,center:!0,sortable:!0,style:{fontSize:"11px"},width:"100px",omit:w("Fecha sistema")},{name:"Tipo",selector:e=>e.tipo,center:!0,style:{fontSize:"11px"},sortable:!0,width:"123px",omit:w("Tipo")},{name:"Beneficiario",selector:e=>e.en_favor_de,center:!0,sortable:!0,style:{fontSize:"11px"},wrap:!0,width:"250px",omit:w("Beneficiario")},{name:"Concepto",selector:e=>e.comments,center:!0,style:{fontSize:"11px"},wrap:!0,width:v,omit:w("Concepto")},{name:"Monto",selector:e=>P(e.doc_total,e.doc_curr),center:!0,style:{fontSize:"11px"},width:"120px",omit:w("Monto")},{name:"Acciones",cell:function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(i.a,{"data-tag":"allowRowEvents",variant:"success",size:"sm",title:"Consultar Detalle Pago",onClick:()=>async function(e,a,n,i,r){if(1==t.opcion){let t=[];t.push(e),"OK"==await Object(u.a)(t,c.id,"","1",c.api_token)&&o.push({pathname:"/pagos/tabs",id_flujo:e,pago:a,estado:n,nivel:i,id_grupo:r,PuedoAutorizar:"0",seccion:"Notificaciones"})}else 2==t.opcion&&o.push({pathname:"/pagos/tabs",id_flujo:e,pago:a,estado:n,nivel:i,id_grupo:r,PuedoAutorizar:"1",seccion:"Mensajes"})}(e.IdFlujo,e.Pago,e.estado,e.nivel,e.IdGrupo),children:Object(h.jsx)(p.k,{})})})},center:!0,width:"70px",omit:w("Acciones")}])),C={columns:I,data:O,filterPlaceholder:"Filtrar datos",export:!1,print:!1},F={columns:T,data:y,filterPlaceholder:"Filtrar datos",export:!1,print:!1};return c?t.tipo||e.tipo?t.tipo?Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"datatable-title",children:"Pagos Notificados"}),Object(h.jsx)(f.a,{...F,children:Object(h.jsx)(s.a,{columns:T,noDataComponent:"No hay pagos que mostrar",data:y,customStyles:A,pagination:!0,paginationPerPage:5,responsive:!0,persistTableHead:!0,striped:!0,dense:!0})})]})}):Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:Object(h.jsx)(f.a,{...C,children:Object(h.jsx)(s.a,{columns:I,noDataComponent:"No hay pagos que mostrar",data:O,customStyles:A,pagination:!0,paginationPerPage:25,responsive:!0,persistTableHead:!0,striped:!0,onSort:function(e,o,t){"Empresa"==e.name&&"asc"==o&&O.sort((function(e,o){return e.empresa_nombre>o.empresa_nombre?1:e.empresa_nombre<o.empresa_nombre?-1:0})),"Empresa"==e.name&&"desc"==o&&O.sort((function(e,o){return e.empresa_nombre>o.empresa_nombre?-1:e.empresa_nombre<o.empresa_nombre?1:0})),"No."==e.name&&"asc"==o&&O.sort((function(e,o){return e.doc_num>o.doc_num?1:e.doc_num<o.doc_num?-1:0})),"No."==e.name&&"desc"==o&&O.sort((function(e,o){return e.doc_num>o.doc_num?-1:e.doc_num<o.doc_num?1:0})),"Fecha Sis."==e.name&&"asc"==o&&O.sort((function(e,o){return e.creation_date>o.creation_date?1:e.creation_date<o.creation_date?-1:0})),"Fecha Sis."==e.name&&"desc"==o&&O.sort((function(e,o){return e.creation_date>o.creation_date?-1:e.creation_date<o.creation_date?1:0})),"Beneficiario"==e.name&&"asc"==o&&O.sort((function(e,o){return e.en_favor_de>o.en_favor_de?1:e.en_favor_de<o.en_favor_de?-1:0})),"Beneficiario"==e.name&&"desc"==o&&O.sort((function(e,o){return e.en_favor_de>o.en_favor_de?-1:e.en_favor_de<o.en_favor_de?1:0})),"Monto"==e.name&&"asc"==o&&O.sort((function(e,o){return P(e.doc_total,e.doc_curr)>P(o.doc_total,o.doc_curr)?1:P(e.doc_total,e.doc_curr)<P(o.doc_total,o.doc_curr)?-1:0})),"Monto"==e.name&&"desc"==o&&O.sort((function(e,o){return P(e.doc_total,e.doc_curr)>P(o.doc_total,o.doc_curr)?-1:P(e.doc_total,e.doc_curr)<P(o.doc_total,o.doc_curr)?1:0}));let a=[];return O.forEach((e=>{a.push({id_flujo:e.IdFlujo,estado:e.estado,nivel:e.nivel,id_grupo:e.id_grupoautorizacion,PuedoAutorizar:"0",pago:e.doc_num,seccion:"Autorizados"})})),sessionStorage.setItem("listaPagosAutorizados",JSON.stringify(a)),!0},dense:!0})})})}):(o.push("/dashboard"),Object(h.jsx)("div",{className:"sin-sesion",children:"NO SE CARG\xd3 EL N\xdaMERO DE PAGO. REGRESE A LA PANTALLA DE PAGOS."})):(o.push("/"),Object(h.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=69.fe491f56.chunk.js.map