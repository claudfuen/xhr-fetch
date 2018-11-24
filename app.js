/**
 * Callback is a function we pass into an other fucntion
 
Higher order functions take in callbacks as a param (fn)
then executes the callback;
fn();


- Advanced Array methods
- Browser Events
- AJAX Requests
- React Development

 */

//  function sendMessage (message, callback) {
//      return callback(message);
//  }

//  sendMessage("Message for console", console.log);
//  sendMessage("Message for alert", alert);

//  var answer = sendMessage("Are you sure?", confirm);

let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let img = document.getElementById("photo");
let price = document.getElementById("price");

btn.addEventListener("click", function() {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            img.setAttribute("src", JSON.parse(XHR.responseText).message);
        }
    };

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
});

btn2.addEventListener("click", function() {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            price.innerText = "$" + JSON.parse(XHR.responseText).bpi.USD.rate;
        }
    };

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});
