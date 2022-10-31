const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) =>{
const cityDets = data.cityDets;
const weather = data.weather;

details.innerHTML = `
<h5 class="my-3">${cityDets}</h5>
        <div class="my-3">Weather Condition</div>
        <div class="display-4 my-4"></div>
        <span>temp</span>
        <span>&deg;C</span>
    </div>
`;
};


const updateCity = async (city) =>{
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    return { 
        //property and the value
        cityDets: cityDets,
        weather: weather
    };
};

cityForm.addEventListener('submit', (e) =>{
e.preventDefault();

const city = cityForm.city.value.trim();
cityForm.reset();


updateCity(city)
.then(data = updateUI(data))
.catch(console.log(err));
});