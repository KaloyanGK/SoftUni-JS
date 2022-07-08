function attachEvents() {
  //ВЗИМАМЕ ИНПУТ ПОЛЕТО+БУТОНА
  let inputElement = document.getElementById(`location`);
  let button = document.getElementById(`submit`);
  let currentDiv = document.getElementById(`current`);
  let upcomingDiv = document.getElementById(`upcoming`);
  let forecastDiv = document.getElementById(`forecast`);
  let url = `http://localhost:3030/jsonstore/forecaster`;

  let divForecastCurrent = document.createElement(`div`);
  let divForecastUpcoming = document.createElement(`div`);

  let sunny = `☀`;
  let partlySunny = `⛅`;
  let overcast = `☁`;
  let rain = `☂`;
  let degrees = `°`;

  let code = ``;

  button.addEventListener(`click`, (e) => {
    divForecastUpcoming.innerHTML = "";
    divForecastCurrent.innerHTML = "";

    divForecastUpcoming.setAttribute(`class`, `forecast-info`);
    divForecastCurrent.setAttribute(`class`, `forecasts`);

    forecastDiv.style.display = `inline`;

    fetch(`${url}/locations`)
      .then((responce) => responce.json())
      .then((data) => {
        data.forEach((el) => {
          if (el.name == inputElement.value) {
            code = el.code;
          }
        });

        fetch(`${url}/today/${code}`)
          .then((responce) => responce.json())
          .then((data) => {
            let condition = data.forecast.condition;
            let cityName = data.name;
            let lowTemp = data.forecast.low;
            let highTmp = data.forecast.high;

            let conditionSymbolSpan = document.createElement(`span`);
            conditionSymbolSpan.setAttribute(`class`, `condition symbol`);

            if (condition == `Sunny`) {
              conditionSymbolSpan.textContent = sunny;
            } else if (condition == `Overcast`) {
              conditionSymbolSpan.textContent = overcast;
            } else if (condition == `Partly sunny`) {
              conditionSymbolSpan.textContent = partlySunny;
            } else if (condition == `Rain`) {
              conditionSymbolSpan.textContent = rain;
            }
            let conditionSpan = document.createElement(`span`);
            conditionSpan.setAttribute(`class`, `condition`);

            let cityNameSpan = document.createElement(`span`);
            cityNameSpan.setAttribute(`class`, `forecast-data`);
            cityNameSpan.textContent = cityName;

            let temperatureSpan = document.createElement(`span`);
            temperatureSpan.setAttribute(`class`, `forecast-data`);
            temperatureSpan.textContent = `${lowTemp}${degrees}/${highTmp}${degrees}`;

            let weatherSpan = document.createElement(`span`);
            weatherSpan.setAttribute(`class`, `forecast-data`);
            weatherSpan.textContent = condition;

            conditionSpan.appendChild(cityNameSpan);
            conditionSpan.appendChild(temperatureSpan);
            conditionSpan.appendChild(weatherSpan);

            divForecastCurrent.appendChild(conditionSymbolSpan);
            divForecastCurrent.appendChild(conditionSpan);

            currentDiv.appendChild(divForecastCurrent);
          })
          .catch((error) => (inputElement.value = `Error`));

        fetch(`${url}/upcoming/${code}`)
          .then((responce) => responce.json())
          .then((data) => {
            console.log(data);
          });
      })
  });
}

attachEvents();
