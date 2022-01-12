var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'):
console.log('Jogadores Inválidos');

if( jogador1 > 0 && jogador2 ==0){
	console.log('Jogador1 marcou ponto!');
	placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 ==0){
	console.log('Jogador2 marcou ponto!');
	placar = jogador2 > jogador1;
}else{
	console.log('Niguem marcou ponto');
}

switch (placar){
	case placar = jogador1 > jogador2:
	console.log('Jogador1 ganhou');
	break;
	case placar = jogador2 > jogador1:
	console.log('Jogador2 ganhou');
	default:
	console.log('Ninguem ganhou');
}

	
	
	
	
	
	
	