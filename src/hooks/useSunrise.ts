import { useCallback, useEffect, useState } from "react";
import { SunriseData, SunriseService } from "../clients";
import { getTimezoneOffsetString } from "../utils/timeFormat";

interface SunriseState {
    sunriseData: SunriseData | null;
    isLoading: boolean;
    error: string | null;
}

export function useSunrise(latitude: number, longitude: number) {
    const [sunriseState, setSunriseState] = useState<SunriseState>({
        sunriseData: null,
        isLoading: false,
        error: null,
    });

    const fetchSunrise = useCallback(async () => {
        setSunriseState({
            sunriseData: null,
            isLoading: true,
            error: null,
        });

        try {
            const { data } = await SunriseService.getSun({
                query: {
                    lat: latitude,
                    lon: longitude,
                    offset: getTimezoneOffsetString(),
                },
            });
            if (data) {
                // Data is not a string here as the client says
                setSunriseState({
                    sunriseData: data as unknown as SunriseData,
                    isLoading: false,
                    error: null,
                });
            } else {
                setSunriseState({
                    sunriseData: null,
                    isLoading: false,
                    error: "Sunrise data is empty",
                });
            }
        } catch (error: unknown) {
            console.error(error);

            setSunriseState({
                sunriseData: null,
                isLoading: false,
                error: "Could not fetch sunrise data",
            });
        }
    }, [latitude, longitude]);

    useEffect(() => {
        fetchSunrise();
    }, [fetchSunrise]);

    return sunriseState;
}
