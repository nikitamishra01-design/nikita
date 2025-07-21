
import React, { useState } from 'react';
import '../components/count.css';

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='box'>
      <p id='para'>You have clicked me {count}</p>
      <button id='btn' onClick={() => setCount(count + 1)}>+</button>
      <button id='btn' onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Count;
