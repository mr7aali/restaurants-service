export const formatTime = (date: Date): string => {
    let hours: number = date.getHours();
    const minutes: string = String(date.getMinutes()).padStart(2, '0');
    const ampm: string = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If 0 (midnight), change to 12

    return `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
}

