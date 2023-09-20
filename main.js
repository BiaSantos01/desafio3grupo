function ZeroUm(A,B,C){
  const text = document.querySelector("p");
  const ABC = document.querySelector('#valor').value;


  if(A = 0 && A != 1 ){
    text.innerHTML="O jogador vencedor é o A!!!"
   }

  else if (B = 0 && B != 1 ){
    text.innerHTML="O jogador vencedor é o B!!!"
  }

  else if (C =0 && C != 1 ){
    text.innerHTML="O jogador vencedor é o C!!!"
  }

  else{
    texto.innerHTML = "os jogadores empataram";
  }



  
}
