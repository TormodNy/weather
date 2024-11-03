import { useCallback, useEffect, useState } from "react";
import { Forecast } from "../clients/locationforecast";
import { LocationForecastService } from "../clients";

interface ForecastState {
    forecast: Forecast | null;
    isLoading: boolean;
    error: string | null;
}

export function useForecast(latitude: number, longitude: number) {
    const [forecastState, setForecastState] = useState<ForecastState>({
        forecast: null,
        isLoading: true,
        error: null,
    });

    const fetchLocationForecast = useCallback(async () => {
        setForecastState({ forecast: null, isLoading: true, error: null });

        try {
            const { data } = await LocationForecastService.getCompact({
                query: {
                    lat: latitude,
                    lon: longitude,
                },
            });
            if (data) {
                setForecastState({
                    forecast: data.properties,
                    isLoading: false,
                    error: null,
                });
            } else {
                setForecastState({
                    forecast: null,
                    isLoading: false,
                    error: "Forecast data is empty",
                });
            }
        } catch (error: unknown) {
            console.error(error);

            setForecastState({
                forecast: null,
                isLoading: false,
                error: "Could not fetch forecast data",
            });
        }
    }, [latitude, longitude]);

    useEffect(() => {
        fetchLocationForecast();
    }, [fetchLocationForecast]);

    return forecastState;
}
