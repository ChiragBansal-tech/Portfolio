import React from 'react';

const Bar = ({ value, label }) => {
    const isComplete = value >= 100;

    return (
        <div className="relative w-[90%]">
            <div className="mt-1 text-left text-md font-medium text-white">
                {label}
            </div>
            <div className="h-2 bg-gray-300 rounded overflow-hidden">
                <div
                    className={`h-full bg-orange-500 transition-all duration-300 ease-in-out ${
                        isComplete ? 'rounded-r' : ''
                    }`}
                    style={{ width: `${Math.min(value, 100)}%` }} 
                />
            </div>
            {/* Dynamic circle at the end of the bar */}
            <div
                className={`absolute  -bottom-1 w-4 h-4 border-2 border-white bg-orange-500 rounded-full`}
                style={{ 
                    left: `${Math.min(value, 100)}%`,
                    transform: 'translateX(-10%)' 
                }}
            />
        </div>
    );
};

export default Bar;
