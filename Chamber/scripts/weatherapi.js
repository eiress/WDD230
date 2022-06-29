const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=e9180b9a793b8b6a212d9f8d37c2bdb6&metric=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);

    document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.getElementById('temp').textContent = jsObject.main.temp_max;
document.getElementById('windspeed').textContent = jsObject.wind.speed;
document.getElementById('windChill').textContent;

});





   //WindChill     
        var temp = document.getElementById("temp");
        var t = temp.textContent;
        var windSpeed = document.getElementById("windspeed");
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
          
                