//iniciar as variaveis
var board = ['', '', '', '', '', '', '', '', ''];
var playerTime = 0;
var symbols = ['o', 'x'];
var gameOver = false;
var winStates = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
let placarO = 0;
let placarX = 0;
let empate = 0;
//essa função serve para trocar a vez do jogador
function handleMove(position) {
	if (gameOver) {
		return;
	}
	//esse if confere se a div que esta sendo clicada tem algum valor, e só vai ser ativada se o valor for zerado, ou seja, não foi clicado ainda.
	if (board[position] == '') {
		//esse board[position] substitui o valor do array do board por 'o' se o valor for 0 ou 'x' se o valor for 1
		board[position] = symbols[playerTime];
		gameOver = isWin();
		if (gameOver == false) {
			//esse if muda a vez, quando esta com o playerTime como 0 muda para 1 e vice-versa
			playerTime = playerTime == 0 ? 1 : 0;
		}
	}
	return gameOver;
}
//essa função varre todas as sequencias vencedorea que estão em winStates, faz um verificação com o if se a pos1, pos2 e pos3 são iguais e se são diferente de '', caso tudo isso seja verdadeiro, retorna com true, se não retorna como false
function isWin() {
	for (let i = 0; i < winStates.length; i++) {
		let seq = winStates[i];
		let pos1 = seq[0];
		let pos2 = seq[1];
		let pos3 = seq[2];

		if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
			return true;
		}
	}
	return false;
}
function isOld() {
	let velha = true;
	if (!isWin()) {
		for (let k = 0; k < winStates.length; k++) {
			if (board[k] == '' || velha == false) {
				velha = false;
			}
		}
		return velha;
	}
}
function resetGame() {
	board = ['', '', '', '', '', '', '', '', ''];
	gameOver = false;
}
