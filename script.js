let profile = document.getElementById('prof');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let username = document.getElementById('username').value;
    if (!username) {
        profile.innerHTML = "<p class='error'>Please enter a username</p>";
        return;
    }
    console.log(username);

    getUserInfo(username).then(function (data) {
        console.log(data);

        if(data.message === "Not Found"){
            profile.innerHTML = "<p class='error'>User not found. Please try another username.</p>";
            return;
        }

        if(data.bio==null){
            data.bio = "No bio found";
        }
        if(data.company==null){
            data.company = "N/A";
        }
        if(data.blog==""){
            data.blog = "N/A";
        }

        let info = `<img src="${data.avatar_url}" class="avatar">

            <div class="info">
                <h2>${data.name || data.login}</h2>
                <p class="username">@${data.login}</p>
                <p class="bio">${data.bio}</p>

                <div class="stats">
                    <p>Public Repos: ${data.public_repos}</p>
                    <p>Followers: ${data.followers}</p>
                    <p>Following: ${data.following}</p>
                </div>

                <div class="extra">
                    <p><b>Location:</b> ${data.location || "Not specified"}</p>
                    <p><b>Company:</b> ${data.company}</p>
                    <p><b>Blog:</b> ${data.blog}</p>
                </div>
            </div>`

        profile.innerHTML = info;
    }).catch(function(error) {
        console.error("Error fetching data:", error);
        profile.innerHTML = "<p class='error'>An error occurred while fetching data.</p>";
    });
});

function getUserInfo(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then((raw) => raw.json());
}