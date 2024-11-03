import { useContext } from "react";
import {
    CoordinatesContext,
    CoordinatesState,
} from "../state/coordinatesContext";

export function useCoordinates(): [CoordinatesState, () => void] {
    const [coordinatesState, setCoordinatesState] =
        useContext(CoordinatesContext);

    function getUserCoordinates() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                ({ coords: { latitude, longitude } }) => {
                    setCoordinatesState({
                        coordinates: {
                            latitude,
                            longitude,
                        },
                        error: null,
                    });
                },
                (error) =>
                    setCoordinatesState({
                        coordinates: null,
                        error: error.message,
                    }),
            );
        } else {
            setCoordinatesState({
                coordinates: null,
                error: "Cannot find user location",
            });
        }
    }

    return [coordinatesState, getUserCoordinates];
}
