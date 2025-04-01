

let input = document.querySelector('input');
let submit = document.querySelector('#submit');
let wrapper = document.querySelector('#container-alert');


let tasks = ['dssds', 'dssd'];

// Pour récupérer
let storedTasks = localStorage.getItem('mytodo');
let tasksArray = storedTasks ? storedTasks.split(';') : []

tasks = tasksArray;



submit.addEventListener('click', () => {
    console.log(input.value)
    if(input.value != ''){
        tasks.push(input.value)
        console.log(tasks)
        createElement(input.value)
        localStorage.setItem('mytodo', tasks.join(';'));
        console.log(tasks.join(';'))
        input.value = '';
    }
})

// Pour enregistrer








tasks.forEach((task) => {
    createElement(task);
})

//Creation de notif
function createElement(task){
    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.classList.add("alert");
    notification.classList.add("alert-light");
    wrapper.append(notification)
    notification.innerHTML = task;
    
    // button supprimer
    let suppr = document.createElement("button");
    suppr.classList.add("btn");
    suppr.classList.add("btn-danger");
    suppr.innerHTML = 'Supprimer'
    notification.append(suppr)

    suppr.addEventListener('click', () => {
        let index = tasks.indexOf(task);
        tasks.splice(index, 1);
        notification.remove()
        console.log(tasks)
        localStorage.setItem('mytodo', tasks.join(';'));
    })
}




