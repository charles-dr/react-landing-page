import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export const HCenter: React.FC<Props> = ({ className, children }) => {
  return <div className={classNames(className, "tw-text-center")} > {children}</ div>
}

export default HCenter;