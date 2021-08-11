import { useEffect, useState } from "react";
import { getWeatherDaily } from "Services/api";

const useWeather = (lat, long) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, message: "" });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (lat === 0 && long === 0) return;
    const asyncGetWeatherDaily = async () => {
      setLoading(true);
      const result = await getWeatherDaily(lat, long);
      console.log(result);

      const { body, messageError, hasError } = result;

      const { daily } = body;

      setError({
        hasError: hasError,
        message: messageError,
      });
      setData(daily.slice(0, 5));

      setLoading(false);
    };

    asyncGetWeatherDaily();
  }, [lat, long]);

  return [data, loading, error];
};

export default useWeather;
