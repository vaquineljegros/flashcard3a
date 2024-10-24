funtion criaCartao(categoria,oergunta,resosta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = '
    <div class="cartao__conteudo">
    </h3>s{categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>s{pergunta}</p>
     </div>
     <div class"cartao__conteudo__resposta">
       <p>${resposta}</p>
       </div>
       </div>
    

       Let respostaEstaVisivel= false

       function viraCartao(){
        respostaEstaVisivel=!respostaEstaVisivel
        cartao.classList.toggle('active',respostaEstaVisivel)
       }
       cartao.addEventListener('click',viraCartao)

       container.appendChild(cartao)
}