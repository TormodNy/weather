import { useLocation } from "react-router-dom";
import BasePage from "../base/BasePage";
import TemperatureView from "./TemperatureView";
import { LocationBoxProps } from "../dashboard/LocationBox";
import { useForecast } from "../../../hooks/useForecast";

function DetailsPage() {
    const { state } = useLocation();
    const { locationName, latitude, longitude } = state as LocationBoxProps;
    const forecast = useForecast(latitude, longitude);

    return (
        <BasePage heading={locationName} backTo="/">
            {forecast ? (
                <TemperatureView forecast={forecast} />
            ) : (
                <p>Forecast could not be fetched.</p>
            )}
        </BasePage>
    );
}

export default DetailsPage;
