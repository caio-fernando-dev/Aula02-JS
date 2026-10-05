let sequencia = []

let player = false

function reseta_sequencia() {
    sequencia = []
}

document.querySelectorAll(".botao").forEach(function (botao) {
    botao.addEventListener("click", function () {
        this.classList.add("clicked")
        sequencia.push(this.value)
        console.log(sequencia)
        setTimeout(() => {
            this.classList.remove("clicked")
        }, 500);
    });
});