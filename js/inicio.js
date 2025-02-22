//ANIMAÇÃO DO FUNDO
document.addEventListener("mousemove", (event) => {
    const background = document.querySelector(".background");

    //Captura a posição do mouse em relação ao centro da tela
    let x = (event.clientX / window.innerWidth - 0.5)*20;
    let y = (event.clientY / window.innerHeight - 0.5)*20;

    //move a imagem levemente p/direção do cursor
    background.style.transform = `translate(${x}px, ${y}px)`;
});

//TRANSIÇÃO P/MUDAR DE PÁGINA
function carregarJogo() {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = "conteudo.html";
    }, 1500);
}

function carregarCreditos(){
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = "creditos.html";
    }, 1500);
}
//SAIR DO JOGO
function sair() {
  window.close();
}