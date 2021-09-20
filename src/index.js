import React from 'react';
import ReactDOM from 'react-dom';
import Counter3 from './Counter3';

function Test() {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>Show / Hide</button>
      {show ? <Counter3 /> : <></>}
    </>
  );
}

ReactDOM.render(<Test />, document.getElementById('root'));
