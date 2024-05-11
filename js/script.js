//  alert("tudo ok!");
 var items = [];// var itens = array vazio

 document.querySelector('input[type=submit]').addEventListener('click',()=>{// ao clicar no input do tipo enviar

     // alert('clicado');

     var description = document.querySelector('input[name=description]').value;// armazenar valor do campo input com o nome nome do produto na variavel Nome do produto
     var value = document.querySelector('input[name=value]').value;// armazenar valor do campo input com o nome Preco do produto na variavel Preco do produto
     var payment = document.querySelector('input[name=payment]').value;// armazenar valor do campo input com o nome Preco do produto na variavel Preco do produto
     var date = document.querySelector('input[name=date]').value;// armazenar valor do campo input com o nome Preco do produto na variavel Preco do produto
     var operation = document.querySelector('input[name=operation]').value;// armazenar valor do campo input com o nome Preco do produto na variavel Preco do produto

     // alert('Produto: ' + productName + '\n' + 'Valor: ' + productPrice);

     items.push({// empurrar/adicionar em itens
         description: description, // nome: nome do produto
         value: parseFloat(value), // preco: mudar para tipo floar(preco do produto)
         payment: payment, // nome: nome do produto
         date: date, // nome: nome do produto
         operation: operation, // nome: nome do produto
     })

     let productList = document.querySelector('.product-list > table > tbody');// armazenar elemento tbody na let lista de produtos
     productList.innerHTML = "";// produtos da lista deixar elemento html vazio
     let sum = 0;// variavel soma = 0
     items.map((val)=>{// mapear valores em itens
         sum+=(val.value);//soma = acrescentar valor de price

         productList.innerHTML+= // produtos da lista inserir dentro do html
         `
         <tr>
             <th scope="row"></th>
             <td>`+val.description+`</td>
             <td>R$ `+val.value.toFixed(2)+`</td>
             <td>`+val.payment+`</td>
             <td>`+val.date+`</td>
             <td>`+val.operation+`</td>
             <td>
                 <button class="btn btn-warning">
                     <i class="fa-regular fa-pen-to-square fa-xl" style="color: #ffffff;"></i></td>
                 </button>
             <td>
                 <button class="btn btn-danger">
                     <i class="fa-regular fa-trash-can fa-xl" style="color: #ffffff;"></i>
                 </button>
             </td>
         </tr>
         `
     })

     // alert(sum);

     sum = sum.toFixed(2);// fixar soma em 2 casas decimais
     document.querySelector('input[name=description]').value = "";// esvaziar valor de nome do produto
     document.querySelector('input[name=value]').value = "";// esvaziar valor de preco do prouto
     document.querySelector('input[name=payment]').value = "";// esvaziar valor de preco do prouto
     document.querySelector('input[name=date]').value = "";// esvaziar valor de preco do prouto
     document.querySelector('input[name=operation]').value = "";// esvaziar valor de preco do prouto

     let sumElement = document.querySelector('.list-sum h2');// armazenar elemento h2 na variavel elemento soma
     sumElement.innerHTML = 'Total: R$'+sum;// inserir no html do elemento soma 'total: R$' concatenação com soma


     alert(`
         Description: ` + items[0].description +  `
         Value: R$` + items[0].value.toFixed(2) + `
         Payment: ` + items[0].payment + `
         Date: ` + items[0].date +  `
         Operation: ` + items[0].operation
     );
  
 });

 

 // filter
 // remove
 // pop