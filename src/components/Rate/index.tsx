import React, { useState } from 'react';

type Props = {
  callback: (e: string) => void;
};

const Rate: React.FC<Props> = ({ callback }) => {
  const [value, setValue] = useState('5');
  return (
    <div>
      <input
        type='range'
        min='1'
        max='10'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      {value}
      <p>
        <button onClick={() => callback(value)}>Puntúa</button>
      </p>
    </div>
  );
};

export default Rate;
