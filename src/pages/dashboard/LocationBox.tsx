interface LocationBoxProps {
    locationName: string;
    latitude: number;
    longitude: number;
}

function LocationBox({ locationName, latitude, longitude }: LocationBoxProps) {
    return (
        <button className="flex justify-between bg-gray-900 p-4 gap-2 text-xl max-w-96 w-full">
            <span>{locationName}</span>
            <span>15°C</span>
        </button>
    );
}

export default LocationBox;
