// useReducer

import React from 'react';

const countReducer = (count, action) => {
  console.log(count, action);
  switch (action.type) {
    case 'Increment': {
      return count + action.by;
    }
    case 'Decrement': {
      return count - action.by;
    }
    case 'Reset': {
      return 0;
    }
    default: {
      return count;
    }
  }
};

function Counter2() {
  const [count, dispatch] = React.useReducer(countReducer, 0);
  //   console.log(count);
  //   const [name, setName] = React.useState('Guvi');

  const increment = () => dispatch({ type: 'Increment', by: 10 });
  const decrement = () => dispatch({ type: 'Decrement', by: 5 });
  const reset = () => dispatch({ type: 'Reset' });
  //   const change = () => setName('Aravindan');

  //   console.log('Rendering !!');
  return (
    <>
      <p>Counter : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      {/* <p>Name : {name}</p>
      <button onClick={change}>Change</button> */}
    </>
  );
}

export default Counter2;
