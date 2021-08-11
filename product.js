fetch('https://tashwill-pos.herokuapp.com/get-products/')
.then(res => res.json())
.then(data =>{
    console.log(data)


let productContainer = document.querySelector('#product-container')
productContainer.innerHTML = "";
data['data'].forEach(product => {
productContainer.innerHTML += `<div class = 'product'>
                                 <img src="${product[6]}" class="product_image">
                                 <h4 class="product_title">${product[1]}</h4> 
                                 <p class="product_description">${product[2]}<p>
                                 <p class="product_price">R ${product[4]}<p>
                                 <button class="btn-cart">Add to cart</button>
                                 
                                 </div>`
})
})