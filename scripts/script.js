const mystorage = window.localStorage
const idStorage = window.localStorage

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
        console.log(data['access_token'])
        mystorage.setItem('username', document.getElementById("username").value)
        idStorage.setItem('user_id', data['data'][0][0])
        window.location.href = 'store.html'
    }    
    });
    
}

function admin(){
    fetch('https://tashwill-system.herokuapp.com/admin-login/', {
    method: "POST",
    body: JSON.stringify({
        'admin_username': document.getElementById("ausername").value,
        'admin_password': document.getElementById("apassword").value,
    }),
    headers: {
        'Content-type': 'application/json',
    }
    }).then(response => response.json()).then(data => {
        console.log(data)
        if (data['message'] == 'failed'){
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



