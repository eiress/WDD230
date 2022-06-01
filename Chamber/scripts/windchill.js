let temp = document.getElementById("temp");
let windspeed = document.getElementById('windSpeed');

if(temp <= 50 && windspeed >= 30){
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    console.log(chill)
    document.getElementById("windChill").textContent = chill + ' °F';
}else{
    document.getElementById("windChill").textContent = "N/A"
}
console.log(temp);
