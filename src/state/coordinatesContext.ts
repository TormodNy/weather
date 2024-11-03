import { createContext } from "react";

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface CoordinatesState {
    coordinates: Coordinates | null;
    error: string | null;
}

export const CoordinatesContext = createContext<
    [CoordinatesState, (coordinatesState: CoordinatesState) => void]
>([
    {
        coordinates: null,
        error: null,
    },
    () => {},
]);
