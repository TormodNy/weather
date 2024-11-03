interface UnitProps {
    unit: string;
}

function Unit({ unit }: UnitProps) {
    if (unit.includes("/")) {
        const splitUnit = unit.split("/");
        return (
            <span className="text-3xl">
                <sup>{splitUnit[0]}</sup>/<sub>{splitUnit[1]}</sub>
            </span>
        );
    }

    return <span className="text-4xl">{unit}</span>;
}

export default Unit;
