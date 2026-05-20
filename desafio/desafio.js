// / armazenamento de descricao nas variaveis
let ogori = `come dmsssss`
let haru = `haru é muito boa no arima kinen`
let meisho= `muito engraçada só isso`

// criação da função parar mostrar descricao dependendo do personagem
function mostrardes(personagem) {

  let historia = document.getElementById("historia");
  
  // parte de identificar qual a descrição
  if (personagem == 'ogori') {

    historia.innerHTML = ogori
  }

  else if (personagem == 'haru') {

    historia.innerHTML = haru
  }
  else {
    historia.innerHTML = meisho
  }
}

console.log("testee")