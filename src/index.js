import './style.css';


const getWeatherData = async (city)=>{
    const key = 'fad27574298abfd989e6954830b1e46c';
    const respose = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,{mode:'cors'});
    const weatherData = await respose.json();
    console.log(weatherData);
}

