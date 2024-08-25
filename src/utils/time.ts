export function transformTimeToMiliseconds(time: string) {
    const [hours, minutes, seconds] = time.split(':').map((element) => Number(element));
    const timeInMiliseconds = (hours*3600 + minutes*60 + seconds)*1000;
    return timeInMiliseconds;
}

export function formatTimeFromMiliseconds(time: number) {
    const transformTime = new Date(time);
    const formattedTime = transformTime.toLocaleTimeString('pt-Br', {hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC'});
    return formattedTime;
}
