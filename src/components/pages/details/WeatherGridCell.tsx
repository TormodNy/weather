import Unit from "./Unit";

interface WeatherGridCellProps {
    title: string;
    value?: string | number;
    unit?: string;
}

function WeatherGridCell({ title, value, unit }: WeatherGridCellProps) {
    return (
        <section className="flex flex-col items-center justify-center relative grid-border">
            <h1 className="text-2xl">{title}</h1>
            <p className="text-5xl">
                {value ?? "-"}
                {unit && <Unit unit={unit} />}
            </p>
        </section>
    );
}

export default WeatherGridCell;
