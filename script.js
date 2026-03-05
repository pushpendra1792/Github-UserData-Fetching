
        let myform = document.getElementById('myform');

        myform.addEventListener('submit', function (event) {
            event.preventDefault();

            let username = document.getElementById('username').value;
            console.log(username);

            getUserInfo(username).then(function (data) {
                console.log(data);
            });
        });

        function getUserInfo(username) {
            return fetch(`https://api.github.com/users/${username}`)
                .then((raw) => raw.json());
        }

