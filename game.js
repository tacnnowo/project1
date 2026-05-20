
// "}" is a block code, there is, beginning and end
<<<<<<< Updated upstream
// const quiz = [
//   {
//     pergunta: "você recebeu um email suspeito, o que você faria?",
//     opcoes: ["nao sei", "responderia", "clasificaria como spam","ignorava", "mandaria no grupo do zap", "denunciaria"],
//     correta: 2
//   },
//   {
//     pergunta:"você acaba de entrar em um site, mas derrepente começa \n a aparecer anuncios sem parar, o quê fazer?",
//     opcoes: ["chorar", "sair do site e não aceitar nenhum cookie", "clicar em todos os anuncios e comprar tudo kkkk"],
//     correta: 1
=======

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
>>>>>>> Stashed changes
    
//   }
// ];

<<<<<<< Updated upstream
// let indiceAtual = 0;
// let pontuacao = 0;
=======
// esse aqui é o tutorial sdo spray né 

let indiceAtual = 0;
let pontuacao = 0;
>>>>>>> Stashed changes

// //como mostrar pergunta/mostrar text visivel em html
// function mostrarPergunta() {
//   const pergunta = quiz[indiceAtual];
//   document.getElementById("pergunta").innerText = pergunta.pergunta;

//   const respostasDiv = document.getElementById("respostas");
//   respostasDiv.innerHTML = "";

// //   Desenha no site cada opção da pergunta
//   pergunta.opcoes.forEach((opcao, index) => {
//     const botao = document.createElement("button");
//     botao.innerText = opcao;
//     botao.onclick = () => verificarResposta(index);
//     respostasDiv.appendChild(botao);
//   });
// }

// function verificarResposta(index) {
//   if (index === quiz[indiceAtual].correta) {
//     pontuacao++;
//   }
// }

// function proximaPergunta() {
//   indiceAtual++;

//   if (indiceAtual < quiz.length) {
//     mostrarPergunta();
//   } else {
//     document.getElementById("resultado").innerText =
//       "Pontuação: " + pontuacao;
//   }
// }


// mostrarPergunta();

let shinji = `aqui voce ira responder algumas perguntas sobre segurança digital` 
let asuka = `aqui vc vera a tragedia que é a vida da asuka kkakakakakka`
let rei = `triste mae do shinji`

function mostrarh(personagem) {

let historia = document.getElementById("historia");
{

if (personagem === 'shinji') {

historia.innerHTML = shinji
}
  
else if (personagem === 'rei') {

 historia.innerHTML = rei
}
else {
  historia.innerHTML = asuka
}
}
}

<<<<<<< Updated upstream
// document.body.style.textAlign = "left";
=======
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
>>>>>>> Stashed changes
