import React, { ReactNode } from 'react';

const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="w-full px-2 py-1 bg-blue-400 border rounded drop-shadow-sm"
  >
    {children}
  </button>
);

export default Button;
