import DashboardBox from "./DashboardBox";
import { useForecast } from "../../../hooks/useForecast";

interface LocationBoxProps {
    locationName: string;
    latitude: number;
    longitude: number;
}

function LocationBox({ locationName, latitude, longitude }: LocationBoxProps) {
    const forecast = useForecast(latitude, longitude);
    const temperature =
        forecast?.properties.timeseries[0]?.data.instant.details
            ?.air_temperature;

    return (
        <DashboardBox>
            <span>{locationName}</span>
            <span>{temperature !== undefined ? `${temperature}°C` : "-"}</span>
        </DashboardBox>
    );
}

export default LocationBox;
