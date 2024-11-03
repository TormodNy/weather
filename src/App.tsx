import { Outlet } from "react-router-dom";
import { locationForecastClient, sunriseClient } from "./clients";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useState } from "react";
import {
    CoordinatesContext,
    CoordinatesState,
} from "./state/coordinatesContext";

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
    const [coordinatesState, setCoordinatesState] = useState<CoordinatesState>({
        coordinates: null,
        error: null,
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CoordinatesContext.Provider
                value={[coordinatesState, setCoordinatesState]}
            >
                <Outlet />
            </CoordinatesContext.Provider>
        </ThemeProvider>
    );
}

export default App;
