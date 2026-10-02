// ====== EDITE AQUI ======
const NUMERO = "5511958480468"; // DDI + DDD + número, só dígitos


const servicos = [
    { nome: "Site para barbearia ou salão", msg: "Oi Junior, quero um site para minha barbearia/salão." },
    { nome: "Cardápio digital para delivery", msg: "Oi Junior, quero um cardápio digital para meu delivery." },
    { nome: "Página de links como esta", msg: "Oi Junior, quero uma página de links para meu negócio." },
    { nome: "Design gráfico e posts", msg: "Oi Junior, quero orçamento de design gráfico." }
];

const portfolio = "https://junior447.github.io/barbearia/"; // troque pelo link dos seus trabalhos

const redes = [
    { nome: "Instagram", url: "#" },
    { nome: "Facebook", url: "https://www.facebook.com/?locale=pt_BR" },
    { nome: "TikTok", url: "#" },
    { nome: "X", url: "#" }
];
// ========================

function linkWhatsapp(msg) {
    return `https://wa.me/${NUMERO}?text=${encodeURIComponent(msg)}`;
}

function criarLink(texto, url, classe) {//função criar link para botões e redes sociais
    const a = document.createElement("a");
    a.textContent = texto;
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    if (classe) a.className = classe;
    return a;
}

const botoes = document.getElementById("botoes");//DOM

//Chamada para as funções criarLink e linkWhatsapp, criando o botão principal de contato no WhatsApp
botoes.appendChild(criarLink("Chamar no WhatsApp", linkWhatsapp("Oi Junior, vim pela sua página e quero um orçamento."), "btn principal"));

const titulo = document.createElement("p");
titulo.className = "titulo";
titulo.textContent = "Escolha o que você precisa";
botoes.appendChild(titulo);
console.log(botoes)

servicos.forEach(s => botoes.appendChild(criarLink(s.nome, linkWhatsapp(s.msg), "btn")));
botoes.appendChild(criarLink("Ver meus trabalhos", portfolio, "btn"));

const nav = document.getElementById("redes");
redes.forEach(r => nav.appendChild(criarLink(r.nome, r.url)));