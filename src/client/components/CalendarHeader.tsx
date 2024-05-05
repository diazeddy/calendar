import React from 'react';
import { format } from 'date-fns';

import './CalendarHeader.css';

interface CalendarHeaderProps {
    currentDate: Date;
    handleClick: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentDate, handleClick }) => { 
    const formattedDate = format(currentDate, 'EEEE, MMMM d');

    return (
        <div className='calendar-header' onClick={handleClick}>
            <h1>{formattedDate}</h1>
        </div>
    );
};

export default CalendarHeader;