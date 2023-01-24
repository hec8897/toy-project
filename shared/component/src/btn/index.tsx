import React from 'react';

const Button = ({ label }: { label: string }) => (
  <input
    type="submit"
    className="w-full px-2 py-1 bg-blue-400 border rounded drop-shadow-sm"
    value={label}
  />
);

export default Button;
