import { Outlet } from "react-router-dom";
import { locationForecastClient, sunriseClient } from "./clients";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

locationForecastClient.setConfig({
    baseUrl: "https://api.met.no/weatherapi/locationforecast/2.0",
});

sunriseClient.setConfig({
    baseUrl: "https://api.met.no/weatherapi/sunrise/3.0",
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Outlet />
        </ThemeProvider>
    );
}

export default App;
