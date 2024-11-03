interface WeatherGridCellProps {
    title: string;
    value?: string | number;
    unit?: string;
}

function WeatherGridCell({ title, value, unit }: WeatherGridCellProps) {
    return (
        <section className="flex flex-col items-center justify-center relative grid-border">
            <h1 className="text-lg">{title}</h1>
            <p className="text-4xl">{value ?? "-"}{unit}</p>
        </section>
    );
}

export default WeatherGridCell;
