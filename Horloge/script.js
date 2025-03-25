let time = document.querySelectorAll("span");

console.log(time[1]);
console.log(time[2]);

// document.getElementById("p1").innerHTML = "New text!";
// let now = new Date();
// console.log('O' + now.getSeconds()) ;





setInterval(mafonction,1000);

function mafonction(){
 let now = new Date();
 time[0].innerHTML = now.getHours();
 time[1].innerHTML = now.getMinutes();

    if(10 > now.getSeconds() ){
     time[2].innerHTML = '0' + now.getSeconds();
    }
    else{
        time[2].innerHTML = now.getSeconds();
    }

 
}


function intializeClock(){
    const nyDateStr = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    const londonDateStr = new Date().toLocaleString('en-BR', { timeZone: 'Europe/London' });


    let now = [new Date(), new Date(nyDateStr), new Date(londonDateStr)];
    hours = [now[0].getHours(), now[1].getHours(), now[2].getHours()];
    minute = [now[0].getMinutes(), now[1].getMinutes(), now[2].getMinutes()];
    second = [now[0].getSeconds(), now[1].getSeconds(), now[2].getSeconds()];


    let hourspointer = document.querySelectorAll('.hours-container');
    let minutespointer = document.querySelectorAll('.minutes-container');
    let secondspointer = document.querySelectorAll('.seconds-container');

   
//  //HORRAIRE PARIS
    hourspointer[0].style.transform = 'rotateZ(' + hours[0] * 30 + 'deg)';
    minutespointer[0].style.transform = 'rotateZ(' + minute[0] * 6 + 'deg)';
    secondspointer[0].style.transform = 'rotateZ(' + second[0] * 6 + 'deg)'; ;
   
    

   //HORRAIRE NEW YORK
    hourspointer[1].style.transform = 'rotateZ(' + hours[1] * 30 + 'deg)';
    secondspointer[1].style.transform = 'rotateZ(' + second[1] * 6 + 'deg)';
    minutespointer[1].style.transform = 'rotateZ(' + minute[1] * 6 + 'deg)';

    //HORRAIRE LONDRE
    hourspointer[2].style.transform = 'rotateZ(' + hours[2] * 30 + 'deg)';
    secondspointer[2].style.transform = 'rotateZ(' + second[2] * 6 + 'deg)';
    minutespointer[2].style.transform = 'rotateZ(' + minute[2] * 6 + 'deg)';
   
    
}


setInterval(intializeClock, 1000);

