import React, { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./Services/WeatherService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LineChart from "./Charts/LineChart";
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import BarChart from "./Charts/BarChart";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.font.color = "black";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function App() {
  const [query, setQuery] = useState({ q: 'chandigarh' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : 'Current Location';
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

    await getFormattedWeatherData({ ...query, units }).then(data => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'metric' ? 35 : 60;
    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
    return 'from-yellow-600 to-orange-700';
  };

  return (
    <>
      <div className={`mx-auto sm:max-w-screen max-w-screen py-4 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} setUnits={setUnits} />
        {
          weather && (
            <>
              <TimeAndLocation weather={weather} />
              <TempAndDetails weather={weather} units={units} />
              <Forecast title="3 hour step forecast" data={weather.hourly} />
              <Forecast title="daily forecast" data={weather.daily} />
              <div className="flex justify-start gap-[2vw]">
                <LineChart data={weather} />
                <BarChart data={weather} units={units} />
              </div>
            </>
          )
        }
        <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
      </div>
    </>
  );
}
