const requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=33789b3753906a12b1a0eb3b24df9788&units=metric'




function sendRequest(method, url) {

    return fetch(url).then(response => {
        return response.json();
    })


}

sendRequest('GET', requestURL)
    .then(data => document.getElementById("weather").innerHTML = (data.main.temp + ' C° &nbsp;&nbsp;Бишкек'))
    .catch(err => console.log(err))























