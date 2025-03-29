let input = document.querySelectorAll('input');
let button = document.querySelectorAll('button');
let list = document.querySelectorAll('.toDoContainer');

// let p = document.createElement("p");

//notification



list.forEach((list) => {
    input.forEach((input) => {
        button.forEach((button) => {
            console.log(button)
            button.addEventListener('click', () => {
                let notification = document.createElement("div");
                let check = document.createElement("input");
                check.type = 'checkbox';
                let p = document.createElement("p");
                
                list.append(notification)
                notification.classList.add("notification");
                notification.append(check); 
                notification.append(p); 
                p.innerHTML = input.value;
                input.value = ''
                if(todoText != ''){
                    setData(todoText); // handler for adding item into local storage
                    listTodo(); // handler for showing item from local storage
                }
            })
        });
    });
})



