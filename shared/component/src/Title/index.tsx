import React, { ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }) => (
  <h1 className="text-2xl font-bold">{children}</h1>
);

export default Title;
