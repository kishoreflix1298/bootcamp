import React, { useState } from 'react';
import NumberCard from './NumberCard';

function NumberManager() {

  // Step 1: Create state for number
  const [number, setNumber] = useState(2); // initial value

  // Step 2: Function to handle updates from child
  const handleDouble = (childValue) => {
    // Double the number from child and update parent state
    setNumber(childValue * 2);
  };

  return (
    <div className="container mt-4 p-3 border">
      <h3>🧮 Parent Component</h3>
      <p><strong>Value in Parent:</strong> {number}</p>

      {/* Step 3: Pass props to child */}
      <NumberCard value={number} onDouble={handleDouble} />
    </div>
  );
}

export default NumberManager;
