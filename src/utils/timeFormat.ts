export function getTimeFromDateString(dateString: string) {
    return dateString.split("T")[1].split("+")[0];
}

export function getTimezoneOffsetString() {
    const timezoneOffset = new Date().getTimezoneOffset() / 60;
    const sign = timezoneOffset < 0 ? "+" : "-";
    const paddedOffset = Math.abs(timezoneOffset).toString().padStart(2, "0");
    return `${sign}${paddedOffset}:00`;
}
