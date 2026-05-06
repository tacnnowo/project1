
// "}" is a block code, there is, beginning and end
const quiz = [
  {
    pergunta: "você recebeu um email suspeito, o que você faria?",
    opcoes: ["nao sei", "responderia", "clasificaria como spam","ignorava", "mandaria no grupo do zap", "denunciaria"],
    correta: 2
  },
  {
    pergunta:"você acaba de entrar em um site, mas derrepente começa \n a aparecer anuncios sem parar, o quê fazer?",
    opcoes: ["chorar", "sair do site e não aceitar nenhum cookie", "clicar em todos os anuncios e comprar tudo kkkk"],
    correta: 1
    
  }
];

let indiceAtual = 0;
let pontuacao = 0;

//como mostrar pergunta/mostrar text visivel em html
function mostrarPergunta() {
  const pergunta = quiz[indiceAtual];
  document.getElementById("pergunta").innerText = pergunta.pergunta;

  const respostasDiv = document.getElementById("respostas");
  respostasDiv.innerHTML = "";

//   Desenha no site cada opção da pergunta
  pergunta.opcoes.forEach((opcao, index) => {
    const botao = document.createElement("button");
    botao.innerText = opcao;
    botao.onclick = () => verificarResposta(index);
    respostasDiv.appendChild(botao);
  });
}

function verificarResposta(index) {
  if (index === quiz[indiceAtual].correta) {
    pontuacao++;
  }
}

function proximaPergunta() {
  indiceAtual++;

  if (indiceAtual < quiz.length) {
    mostrarPergunta();
  } else {
    document.getElementById("resultado").innerText =
      "Pontuação: " + pontuacao;
  }
}


//document.body.style.textAlign = "right";

mostrarPergunta();