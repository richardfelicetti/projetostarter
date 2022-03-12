fetch('https://2891637c-8ab7-4a84-906b-a98465726f85.mock.pstmn.io/prices')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const li = document.querySelector('#botao')
        //console.log(data.shared.products.product_5)
    });












 /*  
   .then(resposta => resposta.json())
   //.then(json => console.log(json));
   .then(json => carregar(json));

   function carregar(json) {
       document.getElementById("planop").innerHTML.Plano_P
   }
 
 
   .then(corpo => {
    console.log(corpo)
    document.getElementById("planop").value=corpo.Plano_P
    console.log(planop)

})
*/