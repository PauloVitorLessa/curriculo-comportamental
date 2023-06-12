function verificaPalindromo(palavra){
    var inverso = palavra.split("").reverse().join("");    
    if(palavra.toLowerCase() == inverso.toLowerCase()){
        console.log("é palindromo");
    }else{
        console.log("não é palindromo");
    }
}

window.onload = ()=>{
    document.querySelector("#conteudo").style.display ="block";
    document.querySelector("#texto").innerHTML  = '<h2>Missão de Vida</h2><p><br>Minha missão de vida é dar, à minha família e a mim, segurança e qualidade de vida,'+
     ' de forma honesta, trabalhando com o que eu gosto: desenvolvimento de software.'+
     ' Gostaria também de contribuir de alguma forma com educação financeira para crianças e'+
     ' adolescentes carentes, pois acredito que isso impactaria positivamente em seus futuros. Acredito que por meio da tecnologia eu consiga isto. <br></p>'
}


document.querySelector("#missao_btn").addEventListener('click', e =>{

    document.querySelector(".div_fraquezas").style.display = "none";
    document.querySelector(".div_forcas").style.display = "none";
    document.querySelector("#sub_conteudo").style.display = "none";
    document.querySelector("#texto").innerHTML  = '<h2>Missão de Vida</h2><p><br>Minha missão de vida é dar, à minha família e a mim, segurança e qualidade de vida,'+
    ' de forma honesta, trabalhando com o que eu gosto: desenvolvimento de software.'+
    ' Gostaria também de contribuir de alguma forma com educação financeira para crianças e'+
    ' adolescentes carentes, pois acredito que isso impactaria positivamente em seus futuros. Acredito que por meio da tecnologia eu consiga isto. <br></p>'
})

document.querySelector("#forcas_btn").addEventListener('click', e =>{

    document.querySelector("#conteudo").style.display ="flex";
    document.querySelector("#texto").innerHTML  = "";
    document.querySelector("#sub_conteudo").innerHTML  ="";
    document.querySelector(".div_fraquezas").style.display = "none";
    document.querySelector(".div_forcas").style.display = "block";
  
})

document.querySelector("#crencas_btn").addEventListener('click', e =>{

    document.querySelector(".div_fraquezas").style.display = "none";
    document.querySelector(".div_forcas").style.display = "none";
    document.querySelector("#sub_conteudo").style.display = "none";
    document.querySelector("#texto").innerHTML  = '<h2>Crenças e Valores</h2>' +
    '<ul><li>Honestidade</li>'+
        '<li>Sinceridade</li>'+
        '<li>Lealdade</li>'+
        '<li>Respeito</li>'+
        '<li>Empatia</li>'+
        '<li>Justiça</li>'+
        '<li>Confiança</li>'+
        '<li>Solidariedade</li>'+
        '<li>Ética</li>'+        
        '<li>Responsabilidade</li>'+
    '</ul>'
})

document.querySelector("#fraquezas_btn").addEventListener('click', e =>{

    document.querySelector("#texto").innerHTML  = "";
    document.querySelector("#sub_conteudo").innerHTML  ="";
    document.querySelector(".div_fraquezas").style.display = "block";
    document.querySelector(".div_forcas").style.display = "none";
    
})

document.querySelector("#progresso_btn").addEventListener('click', e =>{

    document.querySelector(".div_fraquezas").style.display = "none";
    document.querySelector(".div_forcas").style.display = "none";
    document.querySelector("#sub_conteudo").style.display = "none";
    document.querySelector("#texto").innerHTML  = '<h2>Trabalho para progresso</h2>' +
    '<p></p><br>Reconheço meus defeitos e não os aceito como imutáveis. Procuro ser simpático, educado e receptivo.'+
        ' Por mais que seja mais confortável não falar e não me expor, eu enfrento o desconforto e falo'+
        ' em reuniões, apresento trabalhos, participo bastate das aulas. Em grupos de amigos com pessoas desconhecidas, não fico quieto e puxo assunto.'+
        ' Quando digo que sou tímido, algumas pessoas ficam surpresas e falam que não sou, mas sim, é um defeito que eu não gostaria de ter.</;p>'   
    
})

document.querySelector("#metas_btn").addEventListener('click', e =>{

    document.querySelector(".div_fraquezas").style.display = "none";
    document.querySelector(".div_forcas").style.display = "none";
    document.querySelector("#sub_conteudo").style.display = "none";
    document.querySelector("#texto").innerHTML  = '<h2>Metas</h2>' +
    '<ul><li>Curto prazo (dez/23)</li>'+
            '<blockquote>Concluir a residência de software e ser contratado por alguma empresa parceira.</blockquote>'+
        '</li>'+
        '<li>Médio prazo (dez/24)</li>'+
            '<blockquote>Me especializar ao máximo nas tecnologias usadas por essa empresa e superar suas expectativas.</blockquote>'+
        '</li>'+
        '<li>Longo prazo (dez/25)</li>'+
            '<blockquote>Ser promovido a desenvolvedor pleno na empresa que me deu a oportunidade.</blockquote>'+
        '</li>'+
           
    '</ul>'
})

document.querySelector("#resiliencia_btn").addEventListener('click', e =>{

    document.querySelector("#sub_conteudo").style.display = "block";
    document.querySelector("#sub_conteudo").innerHTML  = '<h2>Resiliência</h2>' +
    '<p>Não me deixo abater por adversidades, fracassos e perdas. Assumo a responsabilidade e encaro as novas realidades como forma de crescer.' +
       ' No trabalho, em situações estressantes e de mudanças, busco me adaptar e encontrar soluções, ao invés de reclamar e desanimar.</p>'
    
})

document.querySelector("#inteligencia_btn").addEventListener('click', e =>{

    document.querySelector("#sub_conteudo").style.display = "block";
    document.querySelector("#sub_conteudo").innerHTML  = '<h2>Inteligência Emocional</h2>' +
    '<p>Lido bem com as minhas emoções, dando tempo para que elas se esclareçam e a razão volte a falar mais alto. Não sou explosivo; sou calmo e penso' +
       ' bem antes de agir em situações adversas.</p>'    
})

document.querySelector("#proatividade_btn").addEventListener('click', e =>{

    document.querySelector("#sub_conteudo").style.display = "block";
    document.querySelector("#sub_conteudo").innerHTML  = '<h2>Proatividade</h2>' +
    '<p>Estou sempre buscando melhorar processos, me aprimorar em minhas tarefas e aprender novas.' +
       ' Não sou do tipo que evita aprender novas atribuições para ter menos trabalho. Também gosto e não tenho medo de compartilhar conhecimentos.</p>'    
})

document.querySelector("#curiosidade_btn").addEventListener('click', e =>{

    document.querySelector("#sub_conteudo").style.display = "block";
    document.querySelector("#sub_conteudo").innerHTML  = '<h2>Curiosidade</h2>' +
    '<p>Sempre fui muito curioso e me interessei por diversos assuntos.' +
       ' Gosto de saber como as coisas funcionam e não somente que funcionam.</p>'    
})
document.querySelector("#raciocinio_btn").addEventListener('click', e =>{

    document.querySelector("#sub_conteudo").style.display = "block";
    document.querySelector("#sub_conteudo").innerHTML  = '<h2>Raciocínio Lógico</h2>' +
    '<p>Não sou nenhum gênio, mas aprendo rápido, percebo padrões e gosto de analisar e resolver problemas.</p>'    
})
document.querySelector("#expressao_btn").addEventListener('click', e =>{

    document.querySelector("#conteudo").style.display ="flex";
    document.querySelector("#sub_conteudo").style.display = "block";
    document.querySelector("#sub_conteudo").innerHTML  = '<h2>Expressão facial fechada</h2>' +
    '<p>Tenho a "cara fechada", e todos dizem que sou muito sério ou pensam que estou bravo.' +
    ' Isso faz com que as pessoas sejam menos receptivas à mim ou tenham receio de falar comigo.</p>'    
})

document.querySelector("#timidez_btn").addEventListener('click', e =>{

    document.querySelector("#conteudo").style.display ="flex";
    document.querySelector("#sub_conteudo").style.display = "block";
    document.querySelector("#sub_conteudo").innerHTML  = '<h2>Timidez</h2>' +
    '<p>Fico um pouco nervoso ao falar em público.' +
    ' Na presença de pessoas desconhecidas, me sinto desconfortável em falar.</p>'    
})