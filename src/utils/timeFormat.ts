export function getTimeFromDateString(dateString: string) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (Number.isNaN(hours) || Number.isNaN(minutes)) {
        throw new Error(`'${dateString}' is not a valid date string!`);
    }

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

export function getTimezoneOffsetString() {
    const timezoneOffset = new Date().getTimezoneOffset() / 60;
    const sign = timezoneOffset < 0 ? "+" : "-";
    const paddedOffset = Math.abs(timezoneOffset).toString().padStart(2, "0");
    return `${sign}${paddedOffset}:00`;
}
