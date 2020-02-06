// Definindo as variáveis principais
var btnStart = document.querySelector('#start');
var apiEl = document.querySelector('#api');
var scoreEl = document.querySelector('#score');
var score = 0, scoreTxt, level = 1000;

// Desenhando a área de jogo
const areaEl = document.createElement('div');
areaEl.setAttribute('id', 'areaEl');
apiEl.appendChild(areaEl);
scoreTxt = document.createTextNode(`Pontuação: ${score}`);
scoreEl.appendChild(scoreTxt);

// Desenhando as posições
for(cont = 1; cont <=12; cont++){
	const posicoesEl = document.createElement('div');
	posicoesEl.setAttribute('class'	, `pos pos${cont}`);
	areaEl.appendChild(posicoesEl);
}

// Começando o jogo
btnStart.onclick = ()  => start();

function start() {
	btnStart.disabled = true;
	scoreEl.innerHTML = '';
	scoreTxt = document.createTextNode(`Pontuação: ${score}`);
	scoreEl.appendChild(scoreTxt);
	alert('Clique em ok quando estiver pronto!');
	setInterval(function(){ 
		var posEl;
		
		// Limpando as posições
		for(cont = 1; cont <=12; cont++) {
			posEl = document.querySelector(`.pos${cont}`);
			posEl.setAttribute('style', 'background-image:');
		}
		
		// Fazendo o alvo aparecer em uma posição aleatória
		var clicked = false;
		const randomPos = Math.floor(Math.random() * 12 + 1);
		posEl = document.querySelector(`.pos${randomPos}`);
		posEl.setAttribute('style', 'background-image: url(src/target.png)');
		
		// Definindo evento ao acertar o alvo
		posEl.onclick = function() {
			if(clicked === false) {
				clicked = true;
				score++;
				posEl.setAttribute('style', 'background-image:');
				
				// Aumentando a pontuação
				scoreEl.innerHTML = '';
				scoreTxt = document.createTextNode(`Pontuação: ${score}`);
				scoreEl.appendChild(scoreTxt);
			}
		}
	}, level);
}

