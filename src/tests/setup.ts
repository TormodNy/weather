import { locationForecastClient, sunriseClient } from "../clients";

locationForecastClient.setConfig({
    baseUrl: "https://api.met.no/weatherapi/locationforecast/2.0",
});

sunriseClient.setConfig({
    baseUrl: "https://api.met.no/weatherapi/sunrise/3.0",
});
