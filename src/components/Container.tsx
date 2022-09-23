import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[],
}

const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={classNames("tw-min-h-screen tw-min-w-screen", className)}>
      {children}
    </div>
  )
}

export default Container;