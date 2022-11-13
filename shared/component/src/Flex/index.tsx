import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface type {
  children: ReactNode;
  col?: boolean;
  items?: string;
  justify?: string;
  center?: boolean;
  height?: string;
  gap?: string;
}

const Flex = ({ children, col, items, justify, center, height, gap }: type) => {
  return (
    <div
      className={classNames(
        'flex',
        items,
        justify,
        gap,
        height,
        { 'flex-col': col },
        { 'items-center justify-center': center },
      )}
    >
      {children}
    </div>
  );
};

export default Flex;
