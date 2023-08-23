document.querySelector('button[name=clear]').addEventListener('click',()=>{
    // ao clicar no botao limpar
        items = [];// esvaziar itens
    
        document.querySelector('.product-list > table > tbody').innerHTML = "";// esvaziar hmtl do elemento tbody
        document.querySelector('.list-sum h2').innerHTML = "Total: R$ 0,00";// inserir no html do elemento soma 'Total: R$ 0,00'
        //  alert('cleaned!');
    
     })