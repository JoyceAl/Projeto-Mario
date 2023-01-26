/*
OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer.
    Passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando javascript;
    Passo 2 - identificar quando o usuário clicar no botão;
    Passo 3 - Pegar o elemento da modal no js;
    Passo 4 - Abrir a modal na tela;

OBEJTIVO 2 - quando o usuário clicar no X devemos fechar a modal.
    Passo 1 - Pegar o elemento de fechar modal usando js 'X';
    Passo 2 - Identificar quando o usuário clicar no X;
    Passo 3 - Fechar a modal;
*/

//console.log('mostrar o document', document);
/*console.log(document.querySelector(".botao-trailer")); //o método querySelector busca um único elemento do html, que tem um determinado seletor*/

const botaoTrailer = document.querySelector(".botao-trailer"); /*atribuindo o elemento do botão a uma constante em js, 'pegando' o elemento do html e trazendo para js.*/
const modal = document.querySelector(".modal"); /*pegando o elemento da modal no html para o js, atribuindo a uma variavel em js */
const botaoFecharModal = document.querySelector(".fechar-modal"); /*pegando o elemento de fechar modal no html para o js, atribuindo a uma variavel em js*/
const video = document.getElementById("video"); /*pegue um elemento pelo id*/
const linkDoVideo = video.src; /*buscando propriedade de um objeto*/

function alternarModal(){ /*criando uma função para não ter repetição no codigo*/
    modal.classList.toggle("aberto"); /*lista de classes do objeto modal, toggle (add, remove) para adicionar/remover uma classe nova pelo js*/
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
}); /*elemento de escuta, método que irá identificar quando o elemento de botão for clicado*/
botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");/*setar/atribuir um atributo, no caso é o src do vídeo, passando um valor vazio para o video parar de tocar quando o botao de fechar o pupup for clicado*/
})