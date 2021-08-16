let access_token = window.localStorage.getItem("jwt-token")

function login(){
    fetch('https://tashwill-system.herokuapp.com/auth', {
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
        if (data['description'] == 'Invalid credentials'){
        alert("Error not valid login in!")
        }
    else{
        mystorage = window.localStorage
        console.log(data['access_token'])
        mystorage.setItem('jwt-token', data['access_token'])
        window.location.href = 'products.html'
    }    
    });
    
}

function admin(){
    fetch('https://tashwill-system.herokuapp.com/admin-login/', {
    method: "POST",
    body: JSON.stringify({
        'admin_username': document.getElementById("username").value,
        'admin_password': document.getElementById("password").value,
    }),
    headers: {
        'Content-type': 'application/json',
    }
    }).then(response => response.json()).then(data => {
        console.log(data)
        if (data['description'] == 'Invalid credentials'){
        alert("Error not valid login in!")
        }
    else{
        window.location.href = './products.html'
    }    
    });
    
}

// function submitForm(event) {
//     event.preventDefault();
//     login();
// }

// form.addEventListener("submit", submitForm);


// // delete product



