import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface type {
  children: ReactNode;
  col?: boolean;
  items?: string;
  justify?: string;
}

const Flex = ({ children, col, items, justify }: type) => {
  return (
    <div className={classNames('flex', items, justify, { 'flex-col': col })}>
      {children}
    </div>
  );
};

export default Flex;
