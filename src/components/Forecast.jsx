export default function Forecast({ title, data }) {
  return (
    <div className="w-full px-4">
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase text-lg sm:text-xl">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex flex-wrap justify-between">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-1/2 sm:w-1/4 md:w-1/5 mb-4"
          >
            <p className="font-light text-sm sm:text-base">{d.title}</p>
            <img src={d.icon} alt="weatherIcon" className="w-12 my-1" />
            <p className="font-medium text-lg sm:text-xl">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
