let cards = document.getElementById('cards');



function makeCard(products) {
    let div = document.createElement('div')
     div.classList.add('card')
     div.innerHTML =`
         <h2> ${products.id}</h2>   
         <img src="${products.image}" alt=" RASM XATO! ">
         <h3> ${products.name}</h3>
         <h4>In Stock: ${products.stock}</h4>
         <h4 class="h">$${products.price}</h4>

        
     `
      cards.appendChild(div)
}
  function render(data) {
    cards.innerHTML = ''
    data.forEach((item)=>{
        makeCard(item)
    })
  }
  render(products)
   let inp = document.getElementById('search')



  inp.addEventListener('input', () => {
   

   let  filterdata = products.filter( (e) => e.name.toLocaleLowerCase().includes(inp.value.toLocaleLowerCase()))
   render(filterdata)
  })