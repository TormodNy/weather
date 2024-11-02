import { describe, expect, test, vi } from "vitest";
import { useForecast } from "../../hooks/useForecast";
import { renderHook, waitFor } from "@testing-library/react";
import { locationForecastMock } from "../mockData/locationforecast";
import { LocationForecastService } from "../../clients";

describe("useForecast", () => {
    const getCompactSpy = vi.spyOn(LocationForecastService, "getCompact");

    test("should return null before fetching", () => {
        const { result } = renderHook(() => useForecast(59.911491, 10.757933));
        expect(result.current).toBeNull();
    });

    test("should return forecast data after fetching", async () => {
        getCompactSpy.mockReturnValue(
            new Promise((resolve) =>
                resolve({
                    data: locationForecastMock,
                    request: null as unknown as Request,
                    response: null as unknown as Response,
                }),
            ),
        );

        const { result } = renderHook(() => useForecast(59.911491, 10.757933));
        await waitFor(() =>
            expect(result.current).toEqual(locationForecastMock),
        );
    });
});
