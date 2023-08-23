//  alert("tudo ok!");
 var items = [];// var itens = array vazio

 document.querySelector('input[type=submit]').addEventListener('click',()=>{// ao clicar no input do tipo enviar

     // alert('clicado');

     var productName = document.querySelector('input[name=product_name]').value;// armazenar valor do campo input com o nome nome do produto na variavel Nome do produto
     var productPrice = document.querySelector('input[name=product_price]').value;// armazenar valor do campo input com o nome Preco do produto na variavel Preco do produto

     // alert('Produto: ' + productName + '\n' + 'Valor: ' + productPrice);

     items.push({// empurrar/adicionar em itens
         name: productName, // nome: nome do produto
         price: parseFloat(productPrice) // preco: mudar para tipo floar(preco do produto)
     })

    

     /*
        Exemplo de Linha Tabela

        <tr>
            <td><input type="checkbox" name="" id=""></td>
            <th scope="row">1</th>
            <td>RedBull</td>
            <td>R$ 8,00</td>
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
     */

     let productList = document.querySelector('.product-list > table > tbody');// armazenar elemento tbody na let lista de produtos
     productList.innerHTML = "";// produtos da lista deixar elemento html vazio
     let sum = 0;// variavel soma = 0
     items.map((val)=>{// mapear valores em itens
         sum+=(val.price);//soma = acrescentar valor de price

         productList.innerHTML+= // produtos da lista inserir dentro do html
         `
         <tr>
             <td><input type="checkbox" name="" id=""></td>
             <th scope="row"></th>
             <td>`+val.name+`</td>
             <td>R$ `+val.price.toFixed(2)+`</td>
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
     document.querySelector('input[name=product_name]').value = "";// esvaziar valor de nome do produto
     document.querySelector('input[name=product_price]').value = "";// esvaziar valor de preco do prouto

     let sumElement = document.querySelector('.list-sum h2');// armazenar elemento h2 na variavel elemento soma
     sumElement.innerHTML = 'Total: R$'+sum;// inserir no html do elemento soma 'total: R$' concatenação com soma

     /*
     alert(`
         Product: ` + items[0].name +  `
         Price: ` + items[0].price
     );
     */
 });

 

 // filter
 // remove
 // pop