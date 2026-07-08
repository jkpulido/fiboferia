const qs=[
['¿Qué documento necesitas para iniciar?', ['DNI','Pasaporte','Licencia'],0],
['¿Qué entidad registra el RUC?', ['SUNAT','RENIEC','Municipalidad'],0],
['¿Qué régimen es para pequeños negocios?', ['NRUS','General','Especial'],0],
['¿Qué obtienes después del RUC?', ['Clave SOL','Licencia','POS'],0],
['¿Con la Clave SOL puedes?', ['Emitir boletas','Votar','Abrir banco'],0],
['Si vendes S/3000 al mes, ¿NRUS puede ser una opción?', ['Sí','No'],0],
['¿Formalizarse ayuda a acceder a créditos?', ['Sí','No'],0],
['¿Debes emitir comprobantes?', ['Sí','No'],0],
['¿WhatsApp puede ayudarte a formalizarte?', ['Sí','No'],0],
['¿Listo para crecer formalmente?', ['¡Sí!','Todavía no'],0]
];
let i=0,s=0;
const app=document.getElementById('app');
function draw(){
 if(i>=qs.length){
 app.innerHTML='<h1>🎉 ¡Felicidades!</h1><h2>Ganaste</h2><p>Puntaje '+s+'/10</p>';
 for(let k=0;k<120;k++){let d=document.createElement('div');d.className='confetti';d.style.left=Math.random()*100+'vw';d.style.background='hsl('+Math.random()*360+',90%,60%)';d.style.animationDelay=(Math.random()*3)+'s';document.body.appendChild(d);}
 return;}
 let q=qs[i];
 app.innerHTML='<h2>Nivel '+(i+1)+'/10</h2><div class="bar"><div class="fill" style="width:'+(i*10)+'%"></div></div><h3>'+q[0]+'</h3>';
 q[1].forEach((t,idx)=>{let b=document.createElement('button');b.textContent=t;b.onclick=()=>{if(idx===q[2])s++;i++;draw();};app.appendChild(b);});
}
draw();
