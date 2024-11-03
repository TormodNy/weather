import { useLocation } from "react-router-dom";
import BasePage from "../base/BasePage";
import TemperatureView from "./TemperatureView";
import { LocationBoxProps } from "../dashboard/LocationBox";
import { useForecast } from "../../../hooks/useForecast";
import WeatherGrid from "./WeatherGrid";

function DetailsPage() {
    const { state } = useLocation();
    const { locationName, latitude, longitude } = state as LocationBoxProps;
    const forecast = useForecast(latitude, longitude);

    return (
        <BasePage heading={locationName} backTo="/">
            {forecast ? (
                <div className="w-full h-full grow flex landscape:flex-row flex-col justify-around items-center gap-8">
                    <TemperatureView forecast={forecast} />
                    <WeatherGrid
                        forecast={forecast}
                        latitude={latitude}
                        longitude={longitude}
                    />
                </div>
            ) : (
                <p>Forecast could not be fetched.</p>
            )}
        </BasePage>
    );
}

export default DetailsPage;
