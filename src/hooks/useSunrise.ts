import { useCallback, useEffect, useState } from "react";
import { SunriseData, SunriseService } from "../clients";

function getTimezoneOffsetString() {
    const timezoneOffset = new Date().getTimezoneOffset() / 60;
    const sign = timezoneOffset < 0 ? "+" : "-";
    const paddedOffset = Math.abs(timezoneOffset).toString().padStart(2, "0");
    return `${sign}${paddedOffset}:00`;
}

export function useSunrise(latitude: number, longitude: number) {
    const [sunrise, setSunrise] = useState<SunriseData | null>(null);

    const fetchSunrise = useCallback(async () => {
        const { data } = await SunriseService.getSun({
            query: {
                lat: latitude,
                lon: longitude,
                offset: getTimezoneOffsetString(),
            },
        });
        if (data) {
            // Data is not a string here as the client says
            setSunrise(data as unknown as SunriseData);
        }
    }, [latitude, longitude]);

    useEffect(() => {
        fetchSunrise();
    }, [fetchSunrise]);

    return sunrise;
}
