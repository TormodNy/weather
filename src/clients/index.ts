export { client as locationForecastClient } from "./locationforecast";
export { client as sunriseClient } from "./sunrise";
export { DataService as LocationForecastService } from "./locationforecast";
export { DataService as SunriseService } from "./sunrise";

// OpenAPI specification for Sunrise does not include the type for the returned data
// so this is a manual version based on the example in https://docs.api.met.no/doc/formats/SunriseJSON
export interface SunriseData {
    type: string;
    copyright: string;
    licenseURL: string;
    geometry: {
        coordinates: [number, number];
        type: "Point";
    };
    when: {
        interval: [string, string];
    };
    properties: {
        body: "Sun";
        solarmidnight: {
            disc_centre_elevation: number;
            time: string;
            visible: boolean;
        };
        solarnoon: {
            disc_centre_elevation: number;
            time: string;
            visible: boolean;
        };
        sunrise: {
            azimuth: number;
            time: string;
        };
        sunset: {
            azimuth: number;
            time: string;
        };
    };
}
