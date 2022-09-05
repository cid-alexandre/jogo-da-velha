//primeiro tem que verificar se a página carregou, por isso esse addEventListener
document.addEventListener('DOMContentLoaded', () => {
	//Aqui eu estou colocando todas as divs que tem a class quadrado dentro de squares
	let squares = document.querySelectorAll('.square');
	//aqui vai ser verificado se algum dos squares foi clicado e rodar a função handleClick
	squares.forEach((squares) => {
		squares.addEventListener('click', handleClick);
	});
});
//essa função procura o id da div que foi clicada, declara ela como a variavel position e coloca dentro da função que esta no game.js
function handleClick(event) {
	let square = event.target;
	let position = square.id;
	//o handleMove sempre retorna o valor do gameOver que é falso enquanto o jogo não acaba, por isso esse if verifica quando a função retornar verdadeira, e avisa que o jogo acabaou
	if (handleMove(position)) {
		//foi feito um setTimeout pois o alert não da tempo de carregar a imagem.
		setTimeout(() => {
			alert('O jogo acabou! O vencedor foi o jogador ' + symbols[playerTime].toUpperCase());
		}, 5);
		if (symbols[playerTime] == 'o') {
			placarO++;
			document.getElementById('placarO').innerHTML = `Vitorias O: ${placarO}`;
		} else if (symbols[playerTime] == 'x') {
			placarX++;
			document.getElementById('placarX').innerHTML = `Vitorias X: ${placarX}`;
		}
	}
	if (isOld()) {
		setTimeout(() => {
			clearBoard();
			alert('Emaptou');
		}, 5);
		empate++;
		document.getElementById('empate').innerHTML = `Empates: ${empate}`;
	}
	updateSquare(position);
}
//essa função pega o id do elemento que foi clicado e coloca dentro de square, pega o symbol que esta dentro do array correspondente e muda o innerHTML do square para o ou x
const p = document.getElementById('turn');
function updateSquare(position) {
	let square = document.getElementById(position.toString());
	let symbol = board[position];
	square.innerHTML = `<div class='${symbol}'></div>`;
	if (playerTime == 0) {
		p.innerText = 'É a vez do jogador: O';
	} else {
		p.innerText = 'É a vez do jogador: X';
	}

	// if (playerTime == 0) {
	// 	p.innerText = 'De quem é a vez: o';
	// } else {
	// 	p.innerText = 'De quem é a vez: x';
	// }
}
//nesse caso eu criei um botão que quando clica ele varre todo os quadrados e substitui o innerHTML de cada quadrado por nada
let button = document.getElementById('button');
button.addEventListener('click', clearBoard);
function clearBoard() {
	resetGame();
	let squares = document.querySelectorAll('.square');
	squares.forEach((square) => {
		square.innerHTML = '';
	});
}
//essa função verifica todos as divs e pega o id de cada uma das divs, pega o valor dentro do array se é x ou o e coloca dentro de symbols, verifica se symbols é diferente de '' e se estiver vazio, muda o valor interno para uma div com a class x ou o que se encaixa dentro do css que foi criado antes.
/* function updateSquares() {
        let squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            let position = square.id;
            let symbols = board[position];
            if (symbols != '') {
                square.innerHTML = `<div class='${symbols}'></div>`;
            }
        });
     */
