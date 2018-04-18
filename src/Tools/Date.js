export const getDay = (args) => {
    let date = new Date(args);
    const days = [];

    days[1] = 'Poniedziałek';
    days[2] = 'Wtorek';
    days[3] = 'Środa';
    days[4] = 'Czwartek';
    days[5] = 'Piątek';
    days[6] = 'Sobota';
    days[0] = 'Niedziela';

    let dayOfWeek = days[date.getDay()];

    return dayOfWeek;
}