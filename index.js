const input = document.querySelector("input")

const submit = document.querySelector(".btn")

const content = document.querySelector(".con")


window.addEventListener("DOMContentLoaded", () => chechAble())

input.addEventListener("keyup", () => input.value == "" ? window.location.reload() : chechAble())


function chechAble() {

    let url = input.value == "" ? 'https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=d155da8fa4a20d79453b73bd3ce86aff' : 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=d155da8fa4a20d79453b73bd3ce86aff'
    fetch(url)
        .then(data => data.json())
        .then(data => {
            let img = data.weather[0].icon;
            let windSpeed = data.wind.speed
            let seeson = data.weather[0].main
            let city = data.name
            let temps = data.main.temp
            let times = new Date().toLocaleTimeString()

            let lists = `
        <img src="http://openweathermap.org/img/w/${img}.png"> 
        <p class="dgeree">${Math.round(temps - 273.15)}${"°c"}</p>
        <p>${seeson}</p>
        <h2>${city}</h2>
        <p class="wind"><b>Wind Speed :</b> ${windSpeed} km-ph</p>
        <p class="time"><b>Time :</b> ${times}</p>`
            content.innerHTML = lists;

        })
}