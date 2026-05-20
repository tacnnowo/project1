function escolher(nome) {

    let resultado = document.getElementById("resultado");

    // Personagem correto
    let correto = "chuck";

    if (nome === correto) {
        resultado.innerHTML = "Você descobriu o inocente!";
        resultado.style.color = "lime";
    } else {
        resultado.innerHTML = "errrrroouuu";
        resultado.style.color = "red";
    }
}