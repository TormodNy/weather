import { useCallback, useEffect, useState } from "react";
import { LocationForecastService } from "../../../clients";
import { GetCompactResponse } from "../../../clients/locationforecast";
import DashboardBox from "./DashboardBox";

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
        <DashboardBox>
            <span>{locationName}</span>
            <span>{temperature !== undefined ? `${temperature}°C` : "-"}</span>
        </DashboardBox>
    );
}

export default LocationBox;
