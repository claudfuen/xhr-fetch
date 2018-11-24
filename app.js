let btn = document.querySelector("#btn");

let fullname = document.querySelector("#fullname");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let avatar = document.querySelector("#avatar");

btn.addEventListener("click", () => {
    generateUser();
});

window.addEventListener("load", () => {
    generateUser();
});

const generateUser = () => {
    fetch("https://randomuser.me/api/")
        .then(res => {
            return res.json();
        })
        .then(res => {
            fullname.textContent = `${res.results[0].name.first} ${
                res.results[0].name.last
            }`;
            username.textContent = res.results[0].login.username;
            email.textContent = res.results[0].email;
            city.textContent = res.results[0].location.city;
            avatar.src = res.results[0].picture.medium;
        });
};
