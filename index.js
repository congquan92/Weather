
const searchInput = document.querySelector('#search-input');
const APIkey = '635c0df05bc34c05e73848c6d7e69ea6';
const DEFFAULT_VALUE = '--'
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state')
const weatherImg = document.querySelector('.img-icon')
const temperature = document.querySelector('.temperature')

const sunrise = document.querySelector('.sunrise')
const sunset = document.querySelector('.sunset')
const humidity = document.querySelector('.humidity')
const windspeed = document.querySelector('.windspeed')

searchInput.addEventListener('change',(e)=>{
    // console.log(e)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APIkey}&units=metric&lang=vi`)// api
        .then(async res =>{
            const data = await res.json();
            // console.log(data);
            cityName.innerHTML = data.name || DEFFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFFAULT_VALUE;
            weatherImg.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temperature.innerHTML = Math.round(data.main.temp) ||DEFFAULT_VALUE;

            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') ||DEFFAULT_VALUE;
            sunset.innerHTML =  moment.unix(data.sys.sunset).format('H:mm') ||DEFFAULT_VALUE;
            humidity.innerHTML = data.main.humidity ||DEFFAULT_VALUE;
            windspeed.innerHTML = (data.wind.speed *3.6).toFixed(2) ||DEFFAULT_VALUE; // tofix la giu lai 2 so thap phan
        })
})

const check = document.querySelector('.input__check')
check.onchange = () =>{
    console.log(check.checked);
    if(check.checked){
        document.querySelector('body').style = 'background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);';
        document.querySelector('.container').style ='box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px; background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%); color: black';
      
    }
    if(!check.checked){
        document.querySelector('body').style = 'background: linear-gradient(90deg,#2193b0,#6dd5ed);'
        document.querySelector('.container').style =' box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; color: white';
       
    }
}