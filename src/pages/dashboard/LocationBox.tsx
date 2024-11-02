import { useCallback, useEffect, useState } from "react";
import { LocationForecastService } from "../../clients";
import { GetCompactResponse } from "../../clients/locationforecast";

interface LocationBoxProps {
    locationName: string;
    latitude: number;
    longitude: number;
}

function LocationBox({ locationName, latitude, longitude }: LocationBoxProps) {
    const [forecast, setForecast] = useState<GetCompactResponse | null>(null);
    const temperature =
        forecast?.properties.timeseries[0]?.data.instant.details
            ?.air_temperature;

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

    return (
        <button className="flex justify-between bg-gray-900 p-4 gap-2 text-xl max-w-96 w-full">
            <span>{locationName}</span>
            <span>{temperature !== undefined ? `${temperature}°C` : "-"}</span>
        </button>
    );
}

export default LocationBox;
