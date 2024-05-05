export const fetchUSHolidays = async (y: number) => {
    const URL = `https://date.nager.at/api/v3/publicholidays/${y}/US`;
    const response = await fetch(URL, { method: "GET" });
    if (!response.ok) return [];
    const data = await response.json();
    return data.map((h: any) => {
        let date: string = h["date"];
        let [y, m, d] = date.split("-");
        return new Date(Number(y), Number(m) - 1, Number(d));
    });
}