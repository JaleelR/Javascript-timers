/* const number = 11;
function countdown(num){
   let timer = setInterval(function(){ 
    num--;
        if(num === 0) {
            clearInterval(timer);
            console.log("DONE!");
        }
        else {
            console.log(num)
        }
     } ,1000)
    }
    


console.log(countdown(number));




function randomGame() {
    let num;
    let tries = 0; 
    let random = setInterval(function(){
    num = Math.random();
 tries++;
    if(num > 0.75) {
        clearInterval(random);
        console.log(tries);
    }
    }, 1000)
}
console.log(randomGame());
*/