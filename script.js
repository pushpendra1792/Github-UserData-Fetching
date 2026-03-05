let myform = document.getElementById('myform');
myform.addEventListener('submit',function(event){
    event.preventDefault();
});

let username = document.getElementById('username').value;
console.log(username);

function getUserInfo(){
    return fetch(`https://api.github.com/users/pushpendra1792`).then((raw)=> raw.json())
}

getUserInfo().then(function(data){
    console.log(data);
})