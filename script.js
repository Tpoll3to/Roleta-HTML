// Variáveis globais
const canvas = document.getElementById("roleta");
const ctx = canvas.getContext("2d");
const NUM_CASAS = 37;
const cores = ["#000", "#fff"];
const anguloInicio = Math.PI / 2;
const anguloCasa = 2 * Math.PI / NUM_CASAS;

// Funções para desenhar a roleta
function desenharRoleta() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < NUM_CASAS; i++) {
        let angulo = anguloInicio + i * anguloCasa;
        let cor = cores[i % 2];
        desenharCasa(angulo, cor, i);
    }
}

function desenharCasa(angulo, cor, numero) {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 50, angulo, angulo + anguloCasa);
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.closePath();

    // Desenhar número da casa
    if (numero !== 0) {
        let texto = numero.toString();
        let x = canvas.width / 2 + (canvas.width / 2 - 50) * Math.cos(angulo + anguloCasa / 2);
        let y = canvas.height / 2 + (canvas.width / 2 - 50) * Math.sin(angulo + anguloCasa / 2);
        ctx.fillStyle = "#000";
        ctx.font = "bold 16px Arial";
        ctx.fillText(texto, x, y);
    }
}

// Função para iniciar o jogo
function iniciarJogo() {
    desenharRoleta();
    // Implementar lógica de apostas e sorteio
}

// Iniciar o jogo
iniciarJogo();
