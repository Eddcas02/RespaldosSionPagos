/*! For license information please see 25.635bb1cd.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[25],{479:function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},486:function(e,t,r){!function(){var t=r(487),n=r(479).utf8,s=r(488),o=r(479).bin,a=function(e,r){e.constructor==String?e=r&&"binary"===r.encoding?o.stringToBytes(e):n.stringToBytes(e):s(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var c=t.bytesToWords(e),i=8*e.length,l=1732584193,u=-271733879,d=-1732584194,j=271733878,h=0;h<c.length;h++)c[h]=16711935&(c[h]<<8|c[h]>>>24)|4278255360&(c[h]<<24|c[h]>>>8);c[i>>>5]|=128<<i%32,c[14+(i+64>>>9<<4)]=i;var b=a._ff,p=a._gg,f=a._hh,m=a._ii;for(h=0;h<c.length;h+=16){var x=l,O=u,g=d,y=j;l=b(l,u,d,j,c[h+0],7,-680876936),j=b(j,l,u,d,c[h+1],12,-389564586),d=b(d,j,l,u,c[h+2],17,606105819),u=b(u,d,j,l,c[h+3],22,-1044525330),l=b(l,u,d,j,c[h+4],7,-176418897),j=b(j,l,u,d,c[h+5],12,1200080426),d=b(d,j,l,u,c[h+6],17,-1473231341),u=b(u,d,j,l,c[h+7],22,-45705983),l=b(l,u,d,j,c[h+8],7,1770035416),j=b(j,l,u,d,c[h+9],12,-1958414417),d=b(d,j,l,u,c[h+10],17,-42063),u=b(u,d,j,l,c[h+11],22,-1990404162),l=b(l,u,d,j,c[h+12],7,1804603682),j=b(j,l,u,d,c[h+13],12,-40341101),d=b(d,j,l,u,c[h+14],17,-1502002290),l=p(l,u=b(u,d,j,l,c[h+15],22,1236535329),d,j,c[h+1],5,-165796510),j=p(j,l,u,d,c[h+6],9,-1069501632),d=p(d,j,l,u,c[h+11],14,643717713),u=p(u,d,j,l,c[h+0],20,-373897302),l=p(l,u,d,j,c[h+5],5,-701558691),j=p(j,l,u,d,c[h+10],9,38016083),d=p(d,j,l,u,c[h+15],14,-660478335),u=p(u,d,j,l,c[h+4],20,-405537848),l=p(l,u,d,j,c[h+9],5,568446438),j=p(j,l,u,d,c[h+14],9,-1019803690),d=p(d,j,l,u,c[h+3],14,-187363961),u=p(u,d,j,l,c[h+8],20,1163531501),l=p(l,u,d,j,c[h+13],5,-1444681467),j=p(j,l,u,d,c[h+2],9,-51403784),d=p(d,j,l,u,c[h+7],14,1735328473),l=f(l,u=p(u,d,j,l,c[h+12],20,-1926607734),d,j,c[h+5],4,-378558),j=f(j,l,u,d,c[h+8],11,-2022574463),d=f(d,j,l,u,c[h+11],16,1839030562),u=f(u,d,j,l,c[h+14],23,-35309556),l=f(l,u,d,j,c[h+1],4,-1530992060),j=f(j,l,u,d,c[h+4],11,1272893353),d=f(d,j,l,u,c[h+7],16,-155497632),u=f(u,d,j,l,c[h+10],23,-1094730640),l=f(l,u,d,j,c[h+13],4,681279174),j=f(j,l,u,d,c[h+0],11,-358537222),d=f(d,j,l,u,c[h+3],16,-722521979),u=f(u,d,j,l,c[h+6],23,76029189),l=f(l,u,d,j,c[h+9],4,-640364487),j=f(j,l,u,d,c[h+12],11,-421815835),d=f(d,j,l,u,c[h+15],16,530742520),l=m(l,u=f(u,d,j,l,c[h+2],23,-995338651),d,j,c[h+0],6,-198630844),j=m(j,l,u,d,c[h+7],10,1126891415),d=m(d,j,l,u,c[h+14],15,-1416354905),u=m(u,d,j,l,c[h+5],21,-57434055),l=m(l,u,d,j,c[h+12],6,1700485571),j=m(j,l,u,d,c[h+3],10,-1894986606),d=m(d,j,l,u,c[h+10],15,-1051523),u=m(u,d,j,l,c[h+1],21,-2054922799),l=m(l,u,d,j,c[h+8],6,1873313359),j=m(j,l,u,d,c[h+15],10,-30611744),d=m(d,j,l,u,c[h+6],15,-1560198380),u=m(u,d,j,l,c[h+13],21,1309151649),l=m(l,u,d,j,c[h+4],6,-145523070),j=m(j,l,u,d,c[h+11],10,-1120210379),d=m(d,j,l,u,c[h+2],15,718787259),u=m(u,d,j,l,c[h+9],21,-343485551),l=l+x>>>0,u=u+O>>>0,d=d+g>>>0,j=j+y>>>0}return t.endian([l,u,d,j])};a._ff=function(e,t,r,n,s,o,a){var c=e+(t&r|~t&n)+(s>>>0)+a;return(c<<o|c>>>32-o)+t},a._gg=function(e,t,r,n,s,o,a){var c=e+(t&n|r&~n)+(s>>>0)+a;return(c<<o|c>>>32-o)+t},a._hh=function(e,t,r,n,s,o,a){var c=e+(t^r^n)+(s>>>0)+a;return(c<<o|c>>>32-o)+t},a._ii=function(e,t,r,n,s,o,a){var c=e+(r^(t|~n))+(s>>>0)+a;return(c<<o|c>>>32-o)+t},a._blocksize=16,a._digestsize=16,e.exports=function(e,r){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var n=t.wordsToBytes(a(e,r));return r&&r.asBytes?n:r&&r.asString?o.bytesToString(n):t.bytesToHex(n)}}()},487:function(e,t){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var r=[],n=0;n<e.length;n+=3)for(var s=e[n]<<16|e[n+1]<<8|e[n+2],o=0;o<4;o++)8*n+6*o<=8*e.length?r.push(t.charAt(s>>>6*(3-o)&63)):r.push("=");return r.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,s=0;n<e.length;s=++n%4)0!=s&&r.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*s+8)-1)<<2*s|t.indexOf(e.charAt(n))>>>6-2*s);return r}};e.exports=r}()},488:function(e,t){function r(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},922:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(459),o=r(818),a=r(719),c=r(835),i=r(16),l=(r(465),r(467)),u=r(463);const d="".concat("http://34.208.193.210/apipagos/api/","usuarios");r(460);var j=r(486),h=r.n(j),b=r(462),p=r(464),f=r(10);t.default=e=>{const t=Object(i.g)(),[r,j]=Object(n.useState)(null),{session:m,clear:x}=Object(s.useSession)("PendrogonIT-Session"),[O,g]=Object(n.useState)(!1),[y,v]=Object(n.useState)(!1),[w,C]=Object(n.useState)(""),[S,T]=Object(n.useState)("danger"),[B,_]=Object(n.useState)("Error!"),[N,A]=Object(n.useState)({nombre:"",apellido:"",usuario:"",email:"",password:"",password_repetida:""}),k=e=>{A({...N,[e.target.name]:e.target.value})},z=async e=>{let r=0;if(""!==N.nombre&&""!==N.apellido&&""!==N.usuario&&""!==N.email&&""!==N.password&&""!==N.password_repetida)if(N.password===N.password_repetida)if(N.password.length>=10){e.preventDefault();var n=document.getElementsByName("cambiapassword");for(var s of n)r=s.checked?1:0;const o=await function(e,t,r,n,s,o,a,c){var i={nombre:e,apellido:t,nombre_usuario:r,correo:n,password:s,cambia_password:o,id_usuario:a};const l=JSON.stringify(i);return fetch(d,{method:"POST",body:l,headers:{Authorization:"Bearer "+c,Accept:"application/json","Content-type":"application/json;charset=UTF-8"}}).then((e=>e.json())).then((e=>e)).catch((e=>e))}(N.nombre,N.apellido,N.usuario,N.email,h()(N.password_repetida,{encoding:"binary"}),r,m.id,m.api_token);"OK"===o?t.push("/usuarios"):"Repetido"===o&&(g(!0),_("Usuario repetido!"),C("Un usuario ya tiene asociado este correo. Intente con otro."))}else N.password.length<5?(g(!0),_("Contrase\xf1a muy d\xe9bil!"),C("La contrase\xf1a debe contener al menos 10 caracteres.")):(N.password.length>=5||N.password.length<10)&&(g(!0),_("Contrase\xf1a d\xe9bil!"),C("La contrase\xf1a debe contener al menos 10 caracteres."),T("warning"));else g(!0),C("Las contrase\xf1as no coinciden.");else g(!0),C("No has llenado todos los campos.")};async function I(e){if(1==e)v(!1);else if(2==e){let e=0;m&&(e=m.id);"OK"===await Object(u.a)(e,null,null,"2",m.api_token)&&(x(),t.push("/"))}}return m?Object(f.jsx)("div",{style:{flexDirection:"row"},children:Object(f.jsxs)(b.i,{children:[Object(f.jsxs)(o.a,{responsive:!0,variant:"primary",show:y,onHide:()=>I(2),centered:!0,children:[Object(f.jsx)(o.a.Header,{closeButton:!0,children:Object(f.jsx)(o.a.Title,{children:"Confirmaci\xf3n"})}),Object(f.jsx)(o.a.Body,{children:w}),Object(f.jsxs)(o.a.Footer,{children:[Object(f.jsx)(b.c,{color:"secondary",onClick:()=>I(2),children:"Cancelar"}),Object(f.jsx)(b.c,{color:"primary",onClick:()=>I(1),children:"Aceptar"})]})]}),Object(f.jsx)("div",{className:"float-left",style:{marginBottom:"10px"},children:Object(f.jsxs)(a.a,{variant:"primary",size:"sm",onClick:()=>t.goBack(),children:[Object(f.jsx)(p.c,{}),"\xa0\xa0Regresar"]})}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)(c.a,{show:O,variant:S,onClose:()=>g(!1),dismissible:!0,children:[Object(f.jsx)(c.a.Heading,{children:B}),Object(f.jsx)("p",{children:w})]}),Object(f.jsx)(b.d,{style:{display:"flex",alignItems:"center"},children:Object(f.jsx)(b.e,{style:{width:"80%"},children:Object(f.jsxs)(b.p,{style:{width:"100%"},children:[Object(f.jsx)("h1",{children:"Creaci\xf3n de Usuario"}),Object(f.jsx)("p",{className:"text-medium-emphasis",children:"Crear un nuevo usuario"}),Object(f.jsx)("div",{className:"float-right",style:{marginBottom:"10px"},children:Object(f.jsx)(b.q,{value:"",type:"checkbox",name:"cambiapassword",label:"Cambiar Contrase\xf1a",defaultChecked:!0})}),Object(f.jsxs)(b.y,{className:"mb-3",children:[Object(f.jsx)(b.z,{children:Object(f.jsx)(l.z,{})}),Object(f.jsx)(b.r,{type:"text",placeholder:"Nombre",name:"nombre",onChange:k})]}),Object(f.jsxs)(b.y,{className:"mb-3",children:[Object(f.jsx)(b.z,{children:Object(f.jsx)(l.z,{})}),Object(f.jsx)(b.r,{type:"text",placeholder:"Apellido",name:"apellido",onChange:k})]}),Object(f.jsxs)(b.y,{className:"mb-3",children:[Object(f.jsx)(b.z,{children:Object(f.jsx)(l.z,{})}),Object(f.jsx)(b.r,{type:"text",placeholder:"Nombre Usuario",name:"usuario",onChange:k})]}),Object(f.jsxs)(b.y,{className:"mb-3",children:[Object(f.jsx)(b.z,{children:Object(f.jsx)(l.e,{})}),Object(f.jsx)(b.r,{type:"email",placeholder:"Correo",name:"email",onChange:k})]}),Object(f.jsxs)(b.y,{className:"mb-3",children:[Object(f.jsx)(b.z,{children:Object(f.jsx)(l.r,{})}),Object(f.jsx)(b.r,{type:"password",placeholder:"Contrase\xf1a",name:"password",onChange:k})]}),Object(f.jsxs)(b.y,{className:"mb-4",children:[Object(f.jsx)(b.z,{children:Object(f.jsx)(l.r,{})}),Object(f.jsx)(b.r,{type:"password",placeholder:"Repetir Contrase\xf1a",name:"password_repetida",onChange:k})]}),Object(f.jsx)(b.c,{color:"primary",onClick:z,children:"Crear Usuario"})]})})})]})}):(t.push("/"),Object(f.jsx)("div",{className:"sin-sesion",children:"SIN SESI\xd3N ACTIVA."}))}}}]);
//# sourceMappingURL=25.635bb1cd.chunk.js.map