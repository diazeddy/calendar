import React from 'react';
import { format } from 'date-fns';

import './CalendarHeader.css';


const CalendarHeader: React.FC<{ currentDate: Date }> = ({ currentDate }) => { 
    const formattedDate = format(currentDate, 'EEEE, MMMM d');

    return (
        <div className='calendar-header'>
            <h1>{formattedDate}</h1>
        </div>
    );
};

export default CalendarHeader;