import { useCallback, useEffect, useState } from "react";
import { GetCompactResponse } from "../clients/locationforecast";
import { LocationForecastService } from "../clients";

export function useForecast(latitude: number, longitude: number) {
    const [forecast, setForecast] = useState<GetCompactResponse | null>(null);

    const fetchLocationForecast = useCallback(async () => {
        const { data } = await LocationForecastService.getCompact({
            query: {
                lat: latitude,
                lon: longitude,
            },
        });
        if (data) {
            setForecast(data);
        }
    }, [latitude, longitude]);

    useEffect(() => {
        fetchLocationForecast();
    }, [fetchLocationForecast]);

    return forecast;
}
