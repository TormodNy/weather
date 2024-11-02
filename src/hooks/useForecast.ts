import { useCallback, useEffect, useState } from "react";
import { Forecast } from "../clients/locationforecast";
import { LocationForecastService } from "../clients";

export function useForecast(latitude: number, longitude: number) {
    const [forecast, setForecast] = useState<Forecast | null>(null);

    const fetchLocationForecast = useCallback(async () => {
        const { data } = await LocationForecastService.getCompact({
            query: {
                lat: latitude,
                lon: longitude,
            },
        });
        if (data) {
            setForecast(data.properties);
        }
    }, [latitude, longitude]);

    useEffect(() => {
        fetchLocationForecast();
    }, [fetchLocationForecast]);

    return forecast;
}
