import React from "react";
import "./YearGrid.css";

interface YearGridProps {
  handleClick: (newYear: number) => void;
}

const YearGrid: React.FC<YearGridProps> = ({ handleClick }) => {
    const years = Array.from(
        { length: 2050 - 1971 + 1 },
        (_, index) => 1971 + index
    );

    return (
        <div className="year-grid">
            {years.map((year, index) => (
                <div
                    key={index}
                    className="year-item"
                    onClick={() => {
                    handleClick(year);
                    }}
                >
                    {year}
                </div>
            ))}
        </div>
    );
};

export default YearGrid;
