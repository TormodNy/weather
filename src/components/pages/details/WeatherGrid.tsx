import { Forecast } from "../../../clients/locationforecast";
import { useSunrise } from "../../../hooks/useSunrise";
import { getTimeFromDateString } from "../../../utils/timeFormat";
import WeatherGridCell from "./WeatherGridCell";

interface WeatherGridProps {
    forecast: Forecast;
    latitude: number;
    longitude: number;
}

function WeatherGrid({ forecast, latitude, longitude }: WeatherGridProps) {
    const { sunriseData, isLoading, error } = useSunrise(latitude, longitude);
    const sunrise = sunriseData?.properties.sunrise.time;
    const sunset = sunriseData?.properties.sunset.time;

    if (error) {
        return <p className="text-2xl">Error: {error}</p>;
    }

    const humidity =
        forecast.timeseries[0].data.instant.details?.relative_humidity;
    const humidityUnit = forecast.meta.units.relative_humidity;

    const wind = forecast.timeseries[0].data.instant.details?.wind_speed;
    const windUnit = forecast.meta.units.wind_speed;

    return (
        <section className="grid grid-cols-2 gap-8 overflow-hidden">
            <WeatherGridCell
                title={"Sunrise"}
                value={sunrise && getTimeFromDateString(sunrise)}
                isLoading={isLoading}
            />
            <WeatherGridCell
                title={"Sunset"}
                value={sunset && getTimeFromDateString(sunset)}
                isLoading={isLoading}
            />
            <WeatherGridCell
                title={"Humidity"}
                value={humidity}
                unit={humidityUnit}
            />
            <WeatherGridCell
                title={"Wind"}
                value={wind}
                unit={` ${windUnit}`}
            />
        </section>
    );
}

export default WeatherGrid;
