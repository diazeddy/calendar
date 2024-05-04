import Reac, { useState } from 'react';
import CalendarHeader from './components/CalendarHeader';

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
    // State for storing notes
    const [notes, setNotes] = useState<{ [date: string]: string }>({});

    return (
        <div className="calendar">
            <CalendarHeader currentDate={currentDate} />
        </div>
    );
}

export default Calendar;