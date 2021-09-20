// useEffect

import { useState, useEffect } from 'react';

function Counter3() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Guvi');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const change = () => setName('Aravindan');

  // componentDidMount
  useEffect(() => {
    console.log('useEffect 1');
    return () => {
      console.log('useEffect 4'); // componentWillUpdate
    };
  }, []);

  //   componentDidUpdate
  useEffect(() => {
    console.log('useEffect 2');
  });

  //   componentDidUpdate - count
  useEffect(() => {
    console.log('useEffect 3');
  }, [count]);

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

export default Counter3;
