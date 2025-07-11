    // src/App.js or src/Counter.js
    import React, { useState } from 'react';

    function Counter() {
      // Declare a state variable 'count' and a function 'setCount' to update it
      const [count, setCount] = useState(0); // Initial value of count is 0

      // Event handler for incrementing the count
      const increment = () => {
        setCount(count + 1);
      };

      // Event handler for decrementing the count
      const decrement = () => {
        setCount(count - 1);
      };

      // Event handler for resetting the count
      const reset = () => {
        setCount(0);
      };

      return (
        <div>
          <h1>Counter: {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrease</button>
          <button onClick={reset}>Reset</button>
        </div>
      );
    }

    export default Counter; // Export if creating a separate component