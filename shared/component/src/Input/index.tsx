import React from 'react';

interface Type {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: Type) => (
  <input
    className="w-full border outline-0"
    value={value}
    onChange={onChange}
  />
);

export default Input;
