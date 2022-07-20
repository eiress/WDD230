const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=2328926&appid=e9180b9a793b8b6a212d9f8d37c2bdb6&metric=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.getElementById('temp').textContent = ((jsObject.main.temp- 273.15) * 1.8 +32).toFixed(2);
document.getElementById('windSpeed').textContent = jsObject.wind.speed;
document.getElementById('windChill').textContent;
document.getElementById('weather_des').textContent = desc;

});





   //WindChill     
        var tempTwo = document.getElementById("temp");
        var t = tempTwo.textContent;
        var windSpeed = document.getElementById("windSpeed");
        var s = windSpeed.textContent;
        document.getElementById
        if (t <= 50 && s > 3.0) {
            var f = (0.0817 * (3.71 * (Math.pow(s, 0.5)) +
                5.81 - 0.25 * s) * (t - 91.4) + 91.4);;
            var n = f.toFixed(2);
            document.getElementById("windChill").innerHTML = n;
            console.log(n);
        } else {
            document.getElementById("windChill").innerHTML = "N/A";
        }
        console.log(t);  
          
                