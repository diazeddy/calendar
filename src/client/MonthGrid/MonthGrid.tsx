import React from "react";
import "./MonthGrid.css";

import { months } from "../constants";

interface MonthGridProps {
    handleClick: (newMonth: number) => void;
}

const MonthGrid: React.FC<MonthGridProps> = ({ handleClick }) => {
    return (
        <div className="month-grid">
            {months.map((month, index) => (
            <div
                key={index}
                className="month-item"
                onClick={() => {
                handleClick(index);
                }}
            >
                {month}
            </div>
            ))}
        </div>
    );
};

export default MonthGrid;
