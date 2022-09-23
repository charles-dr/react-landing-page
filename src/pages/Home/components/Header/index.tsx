import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

type Props = {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.wrapper}>
        <p className="tw-text-purple-dark">Imagine if</p>
        <p className={styles.gradientText}>Snapchat</p>
        <p className="tw-text-purple-dark">had events.</p>
      </div>
      <p className="tw-mt-4 tw-text-center tw-font-light tw-font-body tw-text-base tw-leading-[18.4px] tw-mx-auto tw-max-w-[321px]">
        Easily host and share events with your friends across any social media.
      </p>
    </div>
  )
}

export default Header;