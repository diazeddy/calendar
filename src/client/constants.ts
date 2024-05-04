type USGovHoliday = Date;

const NewYearsDay: USGovHoliday[] = [];
const MartinLutherKingJrDay: USGovHoliday[] = [];
const presidentsDay: USGovHoliday[] = [];
const MemorialDay: USGovHoliday[] = [];
const IndependenceDay: USGovHoliday[] = [];
const LaborDay: USGovHoliday[] = [];
const ColumbusDay: USGovHoliday[] = [];
const VeteransDay: USGovHoliday[] = [];
const ThanksgivingDay: USGovHoliday[] = [];
const ChristmasDay: USGovHoliday[] = [];

for (let i = 1970; i < 2051; i++) {
    NewYearsDay.push(new Date(i, 0, 1));
    MartinLutherKingJrDay.push(new Date(i, 0, 16));
    presidentsDay.push(new Date(i, 1, 20));
    MemorialDay.push(new Date(i, 4, 29));
    IndependenceDay.push(new Date(i, 6, 4));
    LaborDay.push(new Date(i, 8, 4));
    ColumbusDay.push(new Date(i, 9, 9));
    VeteransDay.push(new Date(i, 10, 11));
    ThanksgivingDay.push(new Date(i, 11, 23));
    ChristmasDay.push(new Date(i, 11, 25));
}

export const holidayArray: USGovHoliday[] = [...NewYearsDay, ...MartinLutherKingJrDay, ...presidentsDay, ...MemorialDay, ...IndependenceDay, ...LaborDay, ...ColumbusDay, ...VeteransDay, ...ThanksgivingDay, ...ChristmasDay]

export const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];