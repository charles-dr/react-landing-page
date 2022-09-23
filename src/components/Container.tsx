import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[],
}

const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={classNames("tw-min-h-screen tw-min-w-screen", className)}>
      <div className="tw-max-w-[1512px] tw-mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Container;