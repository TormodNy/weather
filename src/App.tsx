import { locationForecastClient, sunriseClient } from "./clients";
import DashboardPage from "./pages/dashboard/DashboardPage";

locationForecastClient.setConfig({
    baseUrl: "https://api.met.no/weatherapi/locationforecast/2.0",
});

sunriseClient.setConfig({
    baseUrl: "https://api.met.no/weatherapi/sunrise/3.0",
});

function App() {
    return (
        <>
            <DashboardPage />
        </>
    );
}

export default App;
