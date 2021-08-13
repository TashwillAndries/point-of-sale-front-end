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


let modalBtn = document.querySelector(".Add-product")
let modelBg = document.querySelector(".model-bg")
let modalClose = document.querySelector(".model-close")

modalBtn.addEventListener('click', function(){
    modelBg.classList.add("bg-active")
})

modalClose.addEventListener('click', function(){
    modelBg.classList.remove("bg-active")
})

function convert(){
    let imageInput = document.getElementById("picture").files[0];
    let image = document.getElementById("product_image");
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      image.src=reader.result;
    }, false);
  
    if (imageInput)
    reader.readAsDataURL(imageInput);
  
  
  }

function create(){
    console.log({
        'item_name': document.querySelector('#item_name').value,
            'description':  document.querySelector('#description').value,
            'quantity': document.querySelector('#quantity').value,
            'price' : document.querySelector('#price').value,
            'type': document.querySelector('#type').value,
            'picture': document.getElementById('product_image').src,
    }
    )
    fetch('https://tashwill-pos.herokuapp.com/products-create/', {
        method: "POST",
        body: JSON.stringify({
            'item_name': document.querySelector('#item_name').value,
            'description':  document.querySelector('#description').value,
            'quantity': document.querySelector('#quantity').value,
            'price' : document.querySelector('#price').value,
            'type': document.querySelector('#type').value,
            'picture': document.getElementById('product_image').src,
        }),
        headers: {
            "Authorization": `jwt ${window.localStorage.getItem('jwt-token')}`,
            'Content-type': 'application/json',
        }
})
.then(res => res.json())
    .then(res => {
      console.log(res);
      myStorage = window.localStorage;
      console.log(res["access_token"]);
      myStorage.setItem("jwt-token", res["access_token"]);

})
}


function remove(){
// let removeId = document.querySelector('#search-bar')
fetch(`https://tashwill-pos.herokuapp.com//delete-product/${document.querySelector('#search-bar')}/`, {
    method: "GET",
    body: JSON.stringify(),
    headers: {
        "Authorization": `jwt ${window.localStorage.getItem('jwt-token')}`,
        'Content-type': 'application/json',
    }
})
.then(res => res.json())
.then(res => {
  console.log(res);
  myStorage = window.localStorage;
  console.log(res["access_token"]);
  myStorage.setItem("jwt-token", res["access_token"]);

})
}