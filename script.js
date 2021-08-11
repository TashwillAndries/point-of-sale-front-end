let access_token = window.localStorage.getItem("jwt-token")

function login(){
    fetch('https://tashwill-pos.herokuapp.com/auth', {
    method: "POST",
    body: JSON.stringify({
        'username': document.getElementById("username").value,
        'password': document.getElementById("password").value,
    }),
    headers: {
        'Content-type': 'application/json',
    }
    }).then(response => response.json()).then(data => {
        console.log(data)
        mystorage = window.localStorage
        console.log(data['access_token'])
        mystorage.setItem('jwt-token', data['access_token'])
    });
    if (access_token !== ""){
        window.location="products.html"
        }
    else{
        alert("Erro not valid login in!")
     }
        
}

function submitForm(event) {
    event.preventDefault();
    login();
}

form.addEventListener("submit", submitForm);

// document.querySelector('#login')
//  .addEventListener('click', () =>{
//      if (access_token !== ""){
//      window.location.href ="../products.html"
//      }
//      else{
//          alert("Erro not valid login in!")
//      }
//  })

// function redirect(){
//     if (access_token !== ""){
//              window.location="products.html"
//              }
//              else{
//                  alert("Erro not valid login in!")
//              }

// }
