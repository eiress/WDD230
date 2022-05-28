let temp = document.querySelector('.temp').textContent;
let wind = document.querySelector('.wind').textContent;
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16)));

if(temp <= 50 && wind >= 30){
 chill;	
}else{
    N/A 
}
