import React from 'react';

import { months } from '../constants';

const MonthSelectView: React.FC<{ selectedMonth: number, onChange: (month: number) => void }> = ({ selectedMonth, onChange }) => {
    
    const handleMonthChange = (increment: number) => {
        let newMonth = selectedMonth + increment;
        if (newMonth < 0) newMonth = 11;
        if (newMonth > 11) newMonth = 0;
        onChange(newMonth);
    };

    return (
        <div className='month-select-view'>
            <button onClick={() => handleMonthChange(-1)}>Prev</button>
            <span> {months[selectedMonth]} </span>
            <button onClick={() => handleMonthChange(1)}>Next</button>        
        </div>
    );

};

export default MonthSelectView;