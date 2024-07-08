import { useState } from "react"
import { BiSearch, BiCurrentLocation } from "react-icons/bi"

export default function Inputs({ setQuery, setUnits }) {

  const [city, setCity] = useState('');
  const HandleSearchClick = () => {
    if (city !== "") setQuery({ q: city })
  };

  const locationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setQuery({ lat: latitude, lon: longitude })
      });
    }
  }

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder="Search by city..." className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase" />
        <BiSearch onClick={HandleSearchClick} size={32} className="cursor-pointer transition ease-out hover:scale-125" />
        <BiCurrentLocation onClick={locationClick} size={32} className="cursor-pointer transition ease-out hover:scale-125" />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-2xl transition ease-out font-medium hover:scale-125" onClick={() => setUnits('metric')}>°C</button>
        <p className="text-2xl font-medium mx-1"> | </p>
        <button className="text-2xl transition ease-out font-medium hover:scale-125" onClick={() => setUnits('imperial')}>°F</button>
      </div>
    </div>
  )
}
