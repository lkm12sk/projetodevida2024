const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2020-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];

    for (let i=0; i<contadores.length;i++){
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];

        for (let i=0; i<contadores.length;i++){
            document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
            document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
            document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
            document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
        }
    
       // contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();

//contadores[i].textContent = calculaTempo(tempos[i]);
//atualiza a const tempos
//O comando setInterval espera a função de retorno e não a referência da função.
// O método setInterval recebe dois argumentos principais:Uma função callback,
//que é a função que você deseja que seja executada em cada intervalo;
 //Um número que representa o intervalo de tempo em milissegundos.
//Neste caso, o setInterval recebe a função atualizaContador para ser executada a cada 1000 milissegundos (ou seja, a cada segundo).
// Quando a função comecaContagem é chamada, ela tenta definir um intervalo, mas em vez de passar a função atualizaCronometro como
//argumento para setInterval, ela está passando o valor retornado por atualizaContador(). A menos que atualizaContador() retorne    
 // uma função outra função, isso causará um erro porque setInterval espera uma função como seu primeiro argumento.
//Em resumo, o setInterval precisa receber uma referência à função que deve ser chamada, não o resultado da chamada de uma função,
// a menos que essa chamada retorne a outra função.

//nome da função X separada serve para chamar ela
