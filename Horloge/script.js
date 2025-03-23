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

 
    
 // console.log(now.getHours(), now.getMinutes(), now.getSeconds())
}






