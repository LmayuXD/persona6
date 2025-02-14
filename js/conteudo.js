//TELA DE CARREGAMENTO
function loading() {
    document.getElementsByClassName("box-load")[0].style.display = "none";
    document.getElementsByClassName("conteudo")[0].style.display = "block";
}

//CONTEÚDO
document.getElementById("next-btn").style.cursor = "pointer";

const historia = {
    ato1: {
        Text: "IS THAT THE GRIM REAPER??",
        Image: "joker.jpeg",
        next: []
    },
    ato2: {
        Text: "Junpei? More like stupei!",
        Image: "makoto.jpeg",
        next: []
    }
};

function carregarCena(cenaChave) {
    const cena = historia[cenaChave];

    document.getElementById("texto-da-historia").textContent = cena.Text;
    document.getElementById("cena-do-personagem").src = cena.Image;

    const proxCena = document.getElementById("next-btn");

    cena.next.forEach(nexts => {
        const button = document.createElement("button");
        button.textContent = nexts.Text;
        button.classList.add("next-button");
        button.addEventListener("click", () => carregarCena(nexts));
        proxCena.appendChild(button);
    });
    };
carregarCena("ato1");

//SAIR DO JOGO
function sair() {
    window.close();
}