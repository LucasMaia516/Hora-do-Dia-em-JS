//1 criar o balao
//2 estourar o balao
//3 carregar o jogo

var total = 0


function criarBalao (){

var balao = document.createElement ('div');
balao.setAttribute('class', 'balao');

var x = Math.floor(Math.random()* 1260);
var y = Math.floor(Math.random()* 500);

balao.setAttribute ('style', 'left: ' + x + 'px; top: ' + y + 'px; ' );
// <div.class = 'balao'.style='left: 30px; top:60px'></div> = Como se tivesse criado uma div com essas configurações, o cod acima.

document.body.appendChild (balao);
//mostrar o balao na tela, o codigo acima

balao.setAttribute ('onclick', 'estourar(this)');
// criando um atributo para estourar o balao com um clik, o codigo acima

}


function carregarJogo (){

    setInterval(criarBalao, 1000);

}
// O codigo acima setInterval, faz com que cria-se os baloes na tela quando se carrega a pagina

function estourar (objeto) {

    document.body.removeChild(objeto);
    total ++;
    var pontuacao = document.getElementById('total');
    pontuacao.innerHTML = 'Total de balões estourados: ' + total;

}
// O codigo acima "removeChild", remove os baloes que são os objetos, mas esse código só funciona se tiver o atributo de estourar na função Onclik.

