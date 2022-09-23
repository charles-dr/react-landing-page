import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

type Props = {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <div className={styles.title}>
        <p className="tw-text-purple-dark">Imagine if</p>
        <p className={styles.gradientText}>Snapchat</p>
        <p className="tw-text-purple-dark">had events.</p>
      </div>
      <div className="tw-flex tw-justify-center laptop:tw-justify-end">
        <p className={styles.description}>
          Easily host and share events with your friends across any social media.
        </p>
      </div>
    </div>
  )
}

export default Header;