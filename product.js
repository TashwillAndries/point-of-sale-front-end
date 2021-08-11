fetch('https://tashwill-pos.herokuapp.com/get-products/')
.then(res => res.json())
.then(data =>{
    console.log(data)
})

function products(products)
let productContainer = document.querySelector('.product')
