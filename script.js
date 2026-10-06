function responder(alternativa) {

    const resposta = document.getElementById("resposta");

    if (alternativa === "A") {

        resposta.textContent =
            "✅ Correto! A mistura das luzes vermelha, verde e azul produz a luz branca.";

    } else {

        resposta.textContent =
            "❌ Não é essa. Lembre-se das cores primárias da luz (RGB): Vermelho, Verde e Azul.";

    }

}