sessionStorage.getItem("score")

console.log(sessionStorage);

let resultat  = document.querySelector('p span');


resultat.innerHTML = sessionStorage.getItem("score");
