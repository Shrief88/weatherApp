import './style.css';


const getWeatherData = async (city)=>{
    try{
        const key = 'fad27574298abfd989e6954830b1e46c';
        const respose = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`,{mode:'cors'});
        const weatherData = await respose.json();
        return weatherData;
    }catch(error){
        console.log(error.respose);
    }    
}

const displayData = (data)=>{
    const description = document.querySelector('#description');
    const city = document.querySelector('#city');
    const temp = document.querySelector('#temperature');
    const humidity = document.querySelector('#humidity');
    const pressure = document.querySelector('#pressure');
    const windSpeed = document.querySelector('#wind-speed');
    const feelsLike = document.querySelector('#feels-like');
    const icon = document.querySelector('#icon');

    description.textContent = data.weather[0].description;
    city.textContent = data.name;
    temp.textContent = ` ${Math.round(data.main.temp)} °C`;
    feelsLike.textContent = data.main.feels_like;
    humidity.textContent = data.main.humidity;
    pressure.textContent = data.main.pressure;
    windSpeed.textContent = data.wind.speed;    
}

const displayController = ()=>{
    const input = document.querySelector('#cityName');
    input.addEventListener('keypress', async (e)=>{
        let error=document.querySelector('#error');
        error.textContent=' ';
        if(e.key === 'Enter'){
            try{
                const data = await getWeatherData(input.value);
                displayData(data);
            }catch(e){
                error.textContent='Enter a Valid city name';
            } 
        }
    })
}

async function init() {
    const data = await getWeatherData('cairo');
    displayData(data);
}

init();
displayController();



