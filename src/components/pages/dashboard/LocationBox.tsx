import DashboardBox from "./DashboardBox";
import { useForecast } from "../../../hooks/useForecast";
import { Link } from "react-router-dom";

export interface LocationBoxProps {
    locationName: string;
    latitude: number;
    longitude: number;
}

function LocationBox({ locationName, latitude, longitude }: LocationBoxProps) {
    const forecast = useForecast(latitude, longitude);
    const temperature =
        forecast?.timeseries[0]?.data.instant.details?.air_temperature;

    return (
        <Link
            to={"/details"}
            state={{ locationName, latitude, longitude }}
            className="max-w-96 w-full"
        >
            <DashboardBox>
                <span>{locationName}</span>
                <span>
                    {temperature !== undefined ? `${temperature}°C` : "-"}
                </span>
            </DashboardBox>
        </Link>
    );
}

export default LocationBox;
