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

//     esults: Array(1)
// 0:
// cell: "(06) 2114-4433"
// dob: {date: "1977-04-26T19:16:49Z", age: 41}
// email: "lascívia.daluz@example.com"
// gender: "female"
// id: {name: "", value: null}
// location: {street: "6565 rua bela vista ", city: "bauru", state: "rio grande do norte", postcode: 61722, coordinates: {…}, …}
// login: {uuid: "846ca21b-912b-4104-abbe-56954232b990", username: "tinyfrog461", password: "promise", salt: "ekQebqkQ", md5: "7cb4d8d053c628d18b24e291efc0e036", …}
// name: {title: "mrs", first: "lascívia", last: "da luz"}
// nat: "BR"
// phone: "(12) 1756-0141"
// picture: {large: "https://randomuser.me/api/portraits/women/26.jpg", medium: "https://randomuser.me/api/portraits/med/women/26.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg"}
// registered: {date: "2007-12-21T01:46:14Z", age: 10}
// __proto__: Object
// length: 1
// __proto__: Array(0)
// __proto__: Object
