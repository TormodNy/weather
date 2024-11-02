import { GetCompactResponse } from "../../clients/locationforecast";

export const locationForecastMock: GetCompactResponse = {
    type: "Feature",
    geometry: { type: "Point", coordinates: [10.7579, 59.9115, 4] },
    properties: {
        meta: {
            updated_at: "2024-11-02T11:29:12Z",
            units: {
                air_pressure_at_sea_level: "hPa",
                air_temperature: "celsius",
                cloud_area_fraction: "%",
                precipitation_amount: "mm",
                relative_humidity: "%",
                wind_from_direction: "degrees",
                wind_speed: "m/s",
            },
        },
        timeseries: [
            {
                time: "2024-11-02T11:00:00Z",
                data: {
                    instant: {
                        details: {
                            air_pressure_at_sea_level: 1029.0,
                            air_temperature: 5.4,
                            cloud_area_fraction: 88.6,
                            relative_humidity: 49.6,
                            wind_from_direction: 207.0,
                            wind_speed: 1.8,
                        },
                    },
                    next_12_hours: {
                        summary: { symbol_code: "cloudy" },
                        details: {},
                    },
                    next_1_hours: {
                        summary: { symbol_code: "cloudy" },
                        details: { precipitation_amount: 0.0 },
                    },
                    next_6_hours: {
                        summary: { symbol_code: "cloudy" },
                        details: { precipitation_amount: 0.0 },
                    },
                },
            },
        ],
    },
};
