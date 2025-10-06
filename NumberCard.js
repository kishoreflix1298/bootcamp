import React from 'react';

function NumberCard({ value, onDouble }) {

  const handleClick = () => {
    // Step 1: When button is clicked, send current value to parent
    onDouble(value);
  };

  return (
    <div className="card mt-3 p-3 border">
      <h5>🔢 Child Component</h5>
      <p><strong>Value in Child:</strong> {value}</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Double the Value
      </button>
    </div>
  );
}

export default NumberCard;
