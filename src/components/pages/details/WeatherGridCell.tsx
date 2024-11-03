import { CircularProgress } from "@mui/material";
import Unit from "./Unit";

interface WeatherGridCellProps {
    title: string;
    value?: string | number;
    unit?: string;
    isLoading?: boolean;
}

function WeatherGridCell({
    title,
    value,
    unit,
    isLoading,
}: WeatherGridCellProps) {
    return (
        <section className="flex flex-col items-center justify-center relative grid-border">
            <h1 className="text-2xl">{title}</h1>
            {!isLoading ? (
                <p className="text-5xl">
                    {value ?? "-"}
                    {unit && <Unit unit={unit} />}
                </p>
            ) : (
                <CircularProgress />
            )}
        </section>
    );
}

export default WeatherGridCell;
