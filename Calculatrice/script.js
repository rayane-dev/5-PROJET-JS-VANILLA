let display = document.querySelector('#display');
let clear = document.querySelector('#clear')


function appendDisplay(input){
    display.value += input;
    if(display.value.includes('=')){
        console.log( display.value)
        calcule(display)
    }
    
}

clear.addEventListener('click', () => {
    display.value = '';
})


function calcule(){
    try {
        console.log(eval(display.value))
        display.value = eval(display.value);
        
      } catch (error) {
        display.value = 'errrrrr'
      }
}