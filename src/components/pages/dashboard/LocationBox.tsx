import DashboardBox from "./DashboardBox";
import { useForecast } from "../../../hooks/useForecast";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export interface LocationBoxProps {
    locationName: string;
    latitude: number;
    longitude: number;
}

function LocationBox({ locationName, latitude, longitude }: LocationBoxProps) {
    const { forecast, isLoading, error } = useForecast(latitude, longitude);

    if (error) {
        return <DashboardBox>{error}</DashboardBox>;
    }

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
                    {!isLoading ? (
                        temperature !== undefined ? (
                            `${temperature}°C`
                        ) : (
                            "-"
                        )
                    ) : (
                        <CircularProgress size={20} />
                    )}
                </span>
            </DashboardBox>
        </Link>
    );
}

export default LocationBox;
