import { apiURL, apiKey, lang, units } from "../constants/environment";

const initialResponse = {
  body: {},
  hasError: false,
  messageError: "",
};

const messageError = "Ha ocurrido un problema, comunicate con nosotros.";

const sendGet = async (url) => {
  try {
    const response = await fetch(`${apiURL}${url}`);
    if (!response.ok) {
      return {
        ...initialResponse,
        hasError: true,
        messageError: messageError,
      };
    }

    const result = await response.json();
    return { ...initialResponse, body: result };
  } catch (error) {
    console.log(error);
    return {
      ...initialResponse,
      hasError: true,
      messageError: messageError,
    };
  }
};

export const getWeatherDaily = async (lat, long) =>
  await sendGet(
    `onecall?lat=${lat}&lon=${long}&exclude=current,hourly,minutely,alerts&appid=${apiKey}&lang=${lang}&units=${units}
    `
  );
