import axios from "axios";

const API_KEY = "58d71b279c65ab9c5cf58116d62be394"; // Укажите ваш API-ключ

export const fetchOblasts = async () => {
  try {
    const response = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "getAreas",
      methodProperties: {},
    });
    return response.data.data;
  } catch (error) {
    console.error("Ошибка загрузки областей:", error);
    return [];
  }
};

export const fetchCities = async (oblastRef: string) => {
  try {
    const response = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {
        AreaRef: oblastRef,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Ошибка загрузки городов:", error);
    return [];
  }
};

export const fetchWarehouses = async (cityRef: string) => {
  try {
    const response = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityRef: cityRef,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Ошибка загрузки отделений:", error);
    return [];
  }
};
