let myform = document.getElementById('myform');
let basic_info = document.querySelector('.basic_info');
let image = document.querySelector('.image');

myform.addEventListener('submit', function (event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    console.log(username);

    getUserInfo(username).then(function (data) {
        console.log(data);
        let name = data.name;
        let followers = data.followers;
        let following = data.following;
        let public_repos = data.public_repos;
        let image_url = data.avatar_url;

        let info = `
                <h2>Name = ${name}</h2>
                <h2>Username = ${username}</h2>
                <h2>Followers = ${followers}</h2>
                <h2>Following = ${following}</h2>
                <h2>Public Repos = ${public_repos}</h2>`

        let img_info = `<img id="img" src="${image_url}" alt="profile">`
        basic_info.innerHTML = info;
        image.innerHTML = img_info;
    });
});

function getUserInfo(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then((raw) => raw.json());
}