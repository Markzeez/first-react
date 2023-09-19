import { useState } from 'react';

const Welcome = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count <= 0 ? 0 : count - 1);
  }

  return (
    <div className="flex text-5xl item-center justify-center">
      Welcome {name}
      <button className='gap-3' onClick={minus}>-</button>
      <p className='gap-3'>{count}</p>
      <button className='gap-3' onClick={add}>+</button>
    </div>
  );
};

export default Welcome;
