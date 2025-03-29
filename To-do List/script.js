let input = document.querySelectorAll('input');
let button = document.querySelectorAll('button');
let list = document.querySelectorAll('.toDoContainer');

// let p = document.createElement("p");


list.forEach((list) => {
    input.forEach((input) => {
        button.forEach((button) => {
            button.addEventListener('click', () => {
                let p = document.createElement("p");
                list.append(p);
               console.log(input.value)
               
               p.innerHTML = input.value;
            })
        });
    });
})


// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let carre = document.querySelectorAll('carre');



// let p = document.createElement("p");



// button.addEventListener('click', () => {
//     carre.append(p);
//     console.log(input.value)
    
//     p.innerHTML = input.value;
// })