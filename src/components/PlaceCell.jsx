import React from 'react';

const PlaceCell = (row) => {

    const className = row.value < 4 ? `place_${row.value}` : `place_standard`;
    return (
        <div className={className}>{row.value}</div>
    );
}

export default PlaceCell;