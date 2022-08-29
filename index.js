// Variáveis do Html Importados
const playerOne = document.querySelector('.playerOne'),
playerTwo = document.querySelector('.playerTwo'),
button = document.querySelector('button'),
tittle = document.querySelector('.tittle');

button.addEventListener('click', jogarDados);

// Função para Jogar o Jogo
function jogarDados(){
    // Dado do Jogador 1
    const dadoPlayerUm = Math.floor(Math.random() * 6) + 1;
    const imagemDadoUm = "/images/dice" + dadoPlayerUm + ".png";
    playerOne.setAttribute('src', imagemDadoUm);

    // Dado do Jogador 2
    const dadoPlayerDois = Math.floor(Math.random() * 6) + 1;
    const imagemDadoDois= "/images/dice" + dadoPlayerDois + ".png";
    playerTwo.setAttribute('src', imagemDadoDois);

    if (dadoPlayerUm == dadoPlayerDois){
        tittle.innerHTML = `<em>Empate!</em>`
    }
}








// Função de Teste
function teste() {
    console.log("click")}
