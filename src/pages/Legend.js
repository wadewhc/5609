import React from 'react';

const Legend = ({ colorScale, min, max }) => {
    const gradientStyle = {
        height: '30px',
        width: '300px',
        backgroundImage: `linear-gradient(to right, ${colorScale(min)}, ${colorScale(max)})`
    };

    return (
        <div>
            <div style={gradientStyle}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </div>
    );
};

export default Legend;
