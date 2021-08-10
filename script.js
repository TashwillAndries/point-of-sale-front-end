const formEl = document.querySelector('form')

formEl.addEventListener('submit', (e) =>{
    e.preventDefault();
    let firstName = document.getElementById('first_name').value
    let lastName = document.getElementById('last_name').value
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    fetch('https://tashwill-pos.herokuapp.com/user-registration',{
        method:"POST",
        body:JSON.stringify({
            first_name:firstName,
            last_name:lastName,
            username:username,
            password:password
        }),
        headers:{
            "Content-Type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            'mode':'no-cors'
        }
    })
    .then(function(response){
        return response.json

    })
    .then(function(data){
        console.log(data)
    })
})