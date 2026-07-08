const chat=document.getElementById('chat'),opts=document.getElementById('opts');
const steps=[
{t:"¡Hola ñaño! 👋 Soy Formalízate YA. Te ayudaré a formalizar tu negocio paso a paso. ¿Cuál es tu rubro?",o:["🍗 Comidas","🛒 Bodega","👕 Ropa","🔧 Servicios","🌱 Agricultura"]},
{t:"¡Excelente! ¿Ya tienes RUC?",o:["Sí","No"]},
{t:"Si aún no tienes RUC, primero debes inscribirte como persona natural con negocio. Más información: https://www.gob.pe/284-sacar-ruc-persona-natural",o:["Continuar"]},
{t:"¿Cuánto vendes al mes?",o:["Menos de S/5000","S/5000-S/8000"]},
{t:"Por tus ingresos, el NRUS podría ser una buena opción. ¿Deseas conocerlo?",o:["Sí"]},
{t:"El NRUS está pensado para pequeños negocios. Revisa la información oficial: https://emprender.sunat.gob.pe/",o:["Seguir"]},
{t:"Ahora obtén tu Clave SOL para realizar trámites virtuales.",o:["Listo"]},
{t:"Con tu Clave SOL podrás emitir boletas electrónicas. Guía oficial: https://www.gob.pe/7010-comprobantes-que-emites-en-el-nrus-emitir-boleta-de-venta-electronica-en-el-nuevo-rus",o:["Continuar"]},
{t:"Recuerda declarar y pagar según corresponda para mantener tu negocio al día.",o:["Entendido"]},
{t:"🎉 ¡Felicitaciones! Ya conoces el proceso básico para formalizarte. Estamos para ayudarte. ¡Éxitos con tu negocio!",o:[]}
];
let i=0;
function add(txt,cls){let d=document.createElement('div');d.className='b '+cls;
d.innerHTML=txt.replace(/https:\/\/\S+/g,m=>`<a target="_blank" href="${m}">Abrir enlace oficial</a>`);chat.appendChild(d);chat.scrollTop=chat.scrollHeight;}
function show(){opts.innerHTML='';add(steps[i].t,'bot');steps[i].o.forEach(x=>{let b=document.createElement('button');b.textContent=x;b.onclick=()=>{add(x,'me');i++;if(i<steps.length)setTimeout(show,400);opts.innerHTML='';};opts.appendChild(b);});}
show();
