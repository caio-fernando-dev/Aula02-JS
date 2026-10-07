let sequencia = [];
let player_sequencia = [];
let fim = true;
let jogador = false;

const turno = document.getElementById("turno");

const cores = ["g", "b", "r", "y"];

function reseta_sequencia() {
    sequencia = [];
    player_sequencia = [];
}

function sorteia_cor() {
    const indx = Math.floor(Math.random() * 4);
    const corSorteada = cores[indx];
    sequencia.push(corSorteada);
}

async function mostra_sequencia() {
    for (const cor of sequencia) {
        const botao = document.querySelector(`[value="${cor}"]`);
        botao.classList.add("clicked");

        await new Promise(r => setTimeout(r, 500));
        botao.classList.remove("clicked");
        await new Promise(r => setTimeout(r, 500));
    }
    turno.innerText = "Jogador"
}

function esperarCliqueDoJogador() {
    return new Promise((resolve) => {
        const botoes = document.querySelectorAll(".botao");

        function trataClique() {
            botoes.forEach(b => b.removeEventListener("click", trataClique));
            this.classList.add("clicked");
            setTimeout(() => this.classList.remove("clicked"), 200);
            resolve(this.value);
        }

        botoes.forEach(botao => {
            botao.addEventListener("click", trataClique);
        });
    });
}

async function vez_jogador() {
    for (const corCorreta of sequencia) {
        let cor_jogada = await esperarCliqueDoJogador();

        if (cor_jogada !== corCorreta) {
            console.log("Jogador perdeu!");
            fim = true;
            return false;
        } else {
            console.log("Certo!");
        }
    }
    return true;
}

async function comeca() {
    console.log("Início do jogo");
    reseta_sequencia();
    fim = false;

    while (!fim) {
        turno.innerText = "CPU"
        sorteia_cor();
        mostra_sequencia();

        await new Promise(r => setTimeout(r, 1000));

        const acertouRodada = await vez_jogador();

        if (!acertouRodada) {
            alert("Game Over!");
            break;
        }

        await new Promise(r => setTimeout(r, 1000));
    }
}

function finalizar() {
    fim = true;
    reseta_sequencia();
    turno.innerText = "---"
}
