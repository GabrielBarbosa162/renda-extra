// ===========================
// MENU COM SOMBRA AO ROLAR
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
        header.style.background = "#ffffff";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
    }
});


// ===========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===========================

const elementos = document.querySelectorAll(
    ".card, .modulo, .depoimento, .faq-item, .garantia, .oferta"
);

const aparecer = () => {

    elementos.forEach((el) => {

        const topo = el.getBoundingClientRect().top;

        if (topo < window.innerHeight - 80) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";

        }

    });

}

elementos.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".7s";

});

window.addEventListener("scroll", aparecer);

aparecer();


// ===========================
// FAQ EM ACORDEÃO
// ===========================

const perguntas = document.querySelectorAll(".faq-item");

perguntas.forEach(item => {

    const resposta = item.querySelector("p");

    resposta.style.display = "none";

    item.style.cursor = "pointer";

    item.addEventListener("click", () => {

        const aberta = resposta.style.display === "block";

        document.querySelectorAll(".faq-item p").forEach(p => {

            p.style.display = "none";

        });

        if (!aberta) {

            resposta.style.display = "block";

        }

    });

});


// ===========================
// BOTÃO PULSANDO
// ===========================

const botoes = document.querySelectorAll(".btn-buy, .btn-primary");

setInterval(() => {

    botoes.forEach(btn => {

        btn.style.transform = "scale(1.04)";

        setTimeout(() => {

            btn.style.transform = "scale(1)";

        },300);

    });

},2500);


// ===========================
// SCROLL SUAVE
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

destino.scrollIntoView({

behavior:"smooth"

});

});

});


// ===========================
// CONTADOR REGRESSIVO
// ===========================

const contador = document.createElement("div");

contador.id = "contador";

contador.style.position = "fixed";
contador.style.bottom = "20px";
contador.style.right = "20px";
contador.style.background = "#16a34a";
contador.style.color = "#fff";
contador.style.padding = "15px 20px";
contador.style.borderRadius = "12px";
contador.style.fontWeight = "700";
contador.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
contador.style.zIndex = "9999";

document.body.appendChild(contador);

let horas = 1;
let minutos = 59;
let segundos = 59;

setInterval(()=>{

segundos--;

if(segundos<0){

segundos=59;
minutos--;

}

if(minutos<0){

minutos=59;
horas--;

}

contador.innerHTML=`
⏰ Oferta termina em<br>
${String(horas).padStart(2,"0")}:
${String(minutos).padStart(2,"0")}:
${String(segundos).padStart(2,"0")}
`;

},1000);


// ===========================
// BOTÃO VOLTAR AO TOPO
// ===========================

const topo = document.createElement("button");

topo.innerHTML = "↑";

topo.style.position = "fixed";
topo.style.bottom = "100px";
topo.style.right = "20px";
topo.style.width = "50px";
topo.style.height = "50px";
topo.style.border = "none";
topo.style.borderRadius = "50%";
topo.style.background = "#111827";
topo.style.color = "#fff";
topo.style.fontSize = "20px";
topo.style.cursor = "pointer";
topo.style.display = "none";
topo.style.zIndex = "9999";

document.body.appendChild(topo);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topo.style.display="block";

}else{

topo.style.display="none";

}

});

topo.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}