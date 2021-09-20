// useState

import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('Guvi');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const change = () => setName('Aravindan');

  console.log('Rendering !!');
  return (
    <>
      <p>Counter : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>Name : {name}</p>
      <button onClick={change}>Change</button>
    </>
  );
}

export default Counter;
