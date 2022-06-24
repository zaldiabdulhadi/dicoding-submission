const username = document.querySelector("article .greeting");

const formName = prompt("Silahkan Tuliskan Nama");

username.innerHTML = `Hello, ${formName}`;
