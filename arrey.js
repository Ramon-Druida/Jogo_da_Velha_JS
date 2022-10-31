
const position00 = document.getElementById('dv00'); 
const position01 = document.getElementById('dv01');
const position02 = document.getElementById('dv02');

const position10 = document.getElementById('dv10');
const position11 = document.getElementById("dv11");
const position12 = document.getElementById("dv12");

const position20 = document.getElementById('dv20');
const position21 = document.getElementById('dv21');
const position22 = document.getElementById('dv22');

const corPlayer1 = 'rgb(100,255,100)';
const corPlayer2 = 'rgb(100,100,255)';

const key = { 
        k0 : [0,1,2],
        k1 : [3,4,5],
        k2 : [6,7,8],
        k3 : [0,3,6],
        k4 : [1,4,7],
        k5 : [2,5,8],
        k6 : [0,4,8],
        k7 : [2,4,6]
}

var  linha1 = [0,0,0];
var  linha2 = [0,0,0];
var  linha3 = [0,0,0];
var mapa = [ linha1 , linha2, linha3];

var player1 = [];
var player2 = [];
var progress = 0;
var lines = [];

var statusp1 = [];
var statusp2 = [];

var jogador = true;


function verifica(x){

    if( mapa[0][0] == 1 && mapa[0][1] == 1 && mapa[0][2] == 1 ){ganhou(x);}
    if( mapa[1][0] == 1 && mapa[1][1] == 1 && mapa[1][2] == 1 ){ganhou(x);}
    if( mapa[2][0] == 1 && mapa[2][1] == 1 && mapa[2][2] == 1 ){ganhou(x);}
    if( mapa[0][0] == 1 && mapa[1][0] == 1 && mapa[2][0] == 1 ){ganhou(x);}
    if( mapa[0][1] == 1 && mapa[1][1] == 1 && mapa[2][1] == 1 ){ganhou(x);}
    if( mapa[0][2] == 1 && mapa[1][2] == 1 && mapa[2][2] == 1 ){ganhou(x);}               
    if( mapa[0][0] == 1 && mapa[1][1] == 1 && mapa[2][2] == 1 ){ganhou(x);}
    if( mapa[0][2] == 1 && mapa[1][1] == 1 && mapa[2][0] == 1 ){ganhou(x);}

    if( mapa[0][0] == 2 && mapa[0][1] == 2 && mapa[0][2] == 2 ){ganhou(x);}
    if( mapa[1][0] == 2 && mapa[1][1] == 2 && mapa[1][2] == 2 ){ganhou(x);}
    if( mapa[2][0] == 2 && mapa[2][1] == 2 && mapa[2][2] == 2 ){ganhou(x);}
    if( mapa[0][0] == 2 && mapa[1][0] == 2 && mapa[2][0] == 2 ){ganhou(x);}
    if( mapa[0][1] == 2 && mapa[1][1] == 2 && mapa[2][1] == 2 ){ganhou(x);}
    if( mapa[0][2] == 2 && mapa[1][2] == 2 && mapa[2][2] == 2 ){ganhou(x);}               
    if( mapa[0][0] == 2 && mapa[1][1] == 2 && mapa[2][2] == 2 ){ganhou(x);}
    if( mapa[0][2] == 2 && mapa[1][1] == 2 && mapa[2][0] == 2 ){ganhou(x);}
}

function mov(player, linha){

    if(player == true){
        player1.push(linha);
       // console.log('Player==> ' + player + ' linha ==> ' + linha);   
    }//PLAYER1

    if(player == false){
        player2.push(linha);
       // console.log('Player==> ' + player + ' linha ==> ' + linha);
    }//PLAYER2
}// FIM DO MOV  

function vencedor(status,PLAYER){

    switch(status){
        case 0: { mapa[0][0] = PLAYER; break; }
        case 1: { mapa[0][1] = PLAYER; break; }
        case 2: { mapa[0][2] = PLAYER; break; }
        case 3: { mapa[1][0] = PLAYER; break; }
        case 4: { mapa[1][1] = PLAYER; break; }
        case 5: { mapa[1][2] = PLAYER; break; }
        case 6: { mapa[2][0] = PLAYER; break; }
        case 7: { mapa[2][1] = PLAYER; break; }
        case 8: { mapa[2][2] = PLAYER; break; }
        default: break;
    }
}// VENCEDOR

    function ativa00(){
        if(jogador == true){
            position00.style.backgroundColor = corPlayer1;
            mov(jogador, 00);
            vencedor(0, 1);
            verifica(jogador);
            jogador = !jogador;
            
        }else{
            position00.style.backgroundColor = corPlayer2;
            mov(jogador, 00);
            vencedor(0, 2);
            verifica(jogador);
            jogador = !jogador;
        }
       
    }
    function ativa01(){
        
        if(jogador == true){
            position01.style.backgroundColor = corPlayer1;
            mov(jogador, 01);
            vencedor(1,1);
            verifica(jogador);
            jogador = !jogador;
            
        }else{
            position01.style.backgroundColor = corPlayer2;
            mov(jogador, 01);
            vencedor(1,2);
            verifica(jogador);
            jogador = !jogador;
            
        }
    }

    function ativa02(){
    
        if(jogador == true){
            position02.style.backgroundColor = corPlayer1;
            mov(jogador, 02);
            vencedor(2,1);
            verifica(jogador);
            jogador = !jogador;
            
        }else{
            position02.style.backgroundColor = corPlayer2;
            mov(jogador, 02);
            vencedor(2,2);
            verifica(jogador);
            jogador = !jogador;
            
        }
    }
    function ativa10(){
    
        if(jogador == true){
            position10.style.backgroundColor = corPlayer1;
            mov(jogador, 10);
            vencedor(3,1);
            verifica(jogador);
            jogador = !jogador;
            
        }else{
            position10.style.backgroundColor = corPlayer2;
            mov(jogador, 10);
            vencedor(3,2);
            verifica(jogador);
            jogador = !jogador;
            
        }
    }
    function ativa11(){
    
        if(jogador == true){
            position11.style.backgroundColor = corPlayer1;
            mov(jogador, 11);
            vencedor(4,1);
            verifica(jogador);
            jogador = !jogador;
            
        }else{
            position11.style.backgroundColor = corPlayer2;
            mov(jogador, 11);
            vencedor(4,2);
            verifica(jogador);
            jogador = !jogador;
            
        }
    }
    function ativa12(){
    
        if(jogador == true){
            position12.style.backgroundColor = corPlayer1;
            mov(jogador, 12);
            vencedor(5,1);
            verifica(jogador);
            jogador = !jogador;
            
        }else{
            position12.style.backgroundColor = corPlayer2;
            mov(jogador, 12);
            vencedor(5,2);
            verifica(jogador);
            jogador = !jogador;
            
        }
    }
    function ativa20(){
    
        if(jogador == true){
            position20.style.backgroundColor = corPlayer1;
            mov(jogador, 20);
            vencedor(6,1);
            verifica(jogador);
            jogador = !jogador;
            
        }else{
            position20.style.backgroundColor = corPlayer2;
            mov(jogador, 20);
            vencedor(6,2);
            verifica(jogador);
            jogador = !jogador;
            
        }
    }
    function ativa21(){
    
        if(jogador == true){
            position21.style.backgroundColor = corPlayer1;
            mov(jogador, 21);
            vencedor(7, 1);
            verifica(jogador);
            jogador = !jogador;
            
        }else{
            position21.style.backgroundColor = corPlayer2;
            mov(jogador, 21);
            vencedor(7, 2);
            verifica(jogador);
            jogador = !jogador;
            
        }
    }
    function ativa22(){
    
        if(jogador == true){
            position22.style.backgroundColor = corPlayer1;
            mov(jogador, 22);
            vencedor(8, 1);
            verifica(jogador);
            jogador = !jogador;
            
        }else{
            position22.style.backgroundColor = corPlayer2;
            mov(jogador, 22);
            vencedor(8, 2);
            verifica(jogador);
            jogador = !jogador;
            
        }
    }

    function ganhou(cor){

        if( cor == true){
            position00.style.backgroundColor = corPlayer1;
            position01.style.backgroundColor = corPlayer1;
            position02.style.backgroundColor = corPlayer1;

            position10.style.backgroundColor = corPlayer1;
            position11.style.backgroundColor = corPlayer1;
            position12.style.backgroundColor = corPlayer1;

            position20.style.backgroundColor = corPlayer1;
            position21.style.backgroundColor = corPlayer1;
            position22.style.backgroundColor = corPlayer1;
        }//COR TRUE
        if( cor == false){
            position00.style.backgroundColor = corPlayer2;
            position01.style.backgroundColor = corPlayer2;
            position02.style.backgroundColor = corPlayer2;

            position10.style.backgroundColor = corPlayer2;
            position11.style.backgroundColor = corPlayer2;
            position12.style.backgroundColor = corPlayer2;

            position20.style.backgroundColor = corPlayer2;
            position21.style.backgroundColor = corPlayer2;
            position22.style.backgroundColor = corPlayer2;
        }//COR FALSE


    }//GANHOU