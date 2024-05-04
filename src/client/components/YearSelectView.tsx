import React from 'react';

const YearSelectView: React.FC<{ selectedYear: number, onChange: (year: number) => void }> = ({ selectedYear, onChange }) => {
    const handleYearChange = (increment: number) => {
        const newYear = selectedYear + increment;
        onChange(newYear);
    };

    return (
        <div className="year-select-view">
            <button onClick={() => handleYearChange(-1)}>Prev</button>
            <span> {selectedYear} </span>
            <button onClick={() => handleYearChange(1)}>Next</button>
        </div>
    );
};

export default YearSelectView;
