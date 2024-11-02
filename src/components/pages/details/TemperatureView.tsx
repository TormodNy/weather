import { GetCompactResponse } from "../../../clients/locationforecast";
import { WEATHER_ICON_MAP } from "../../../utils/weatherIconMap";

interface TemperatureViewProps {
    forecast: GetCompactResponse;
}

function TemperatureView({ forecast }: TemperatureViewProps) {
    const timeseries = forecast?.properties.timeseries;

    if (!timeseries) {
        return (
            <p>
                <i>Weather timeseries data is not available.</i>
            </p>
        );
    }

    const symbolCode = timeseries[0]?.data.next_1_hours?.summary.symbol_code;
    const weatherDescription = symbolCode
        ? (WEATHER_ICON_MAP[symbolCode.split("_")[0]] ?? "Unknown weather")
        : "Unknown weather";
    const currentTemperature =
        timeseries[0]?.data.instant.details?.air_temperature;
    const [minTemperature, maxTemperature] = timeseries
        .slice(0, 24)
        .reduce(
            ([min, max], timeStep) => [
                Math.min(
                    min,
                    timeStep.data.instant.details?.air_temperature ?? Infinity,
                ),
                Math.max(
                    max,
                    timeStep.data.instant.details?.air_temperature ?? -Infinity,
                ),
            ],
            [Infinity, -Infinity],
        );

    return (
        <section className="flex flex-col gap-4 items-center">
            <p className="text-3xl">{weatherDescription}</p>
            <p className="font-bold text-8xl">
                {currentTemperature !== undefined
                    ? `${currentTemperature}°C`
                    : "-"}
            </p>
            <span className="flex gap-4">
                <p className="text-2xl">
                    H:{" "}
                    {maxTemperature !== -Infinity ? `${maxTemperature}°C` : "-"}
                </p>
                <p className="text-2xl">
                    L:{" "}
                    {minTemperature !== Infinity ? `${minTemperature}°C` : "-"}
                </p>
            </span>
        </section>
    );
}

export default TemperatureView;
