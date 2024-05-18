const botões = document.querySelectorAll(".botão");

  for(let a=0;a<botões.length;a++){
    botões[a].onclick = function{

      for{let b=0;b<botões.length;b++){
        botões[b].classList.remove("ativo");
      }

botões[a].classList.add("ativo");
         }
    }
