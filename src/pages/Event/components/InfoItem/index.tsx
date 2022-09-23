import React from 'react';
import arrowImage from './arrow.png';
import styles from './index.module.scss';

type Props = {
  icon?: string;
  children?: JSX.Element | JSX.Element[];
}

export const InfoItem: React.FC<Props> = ({ icon, children }) => {
  return (
    <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
      <div className={styles.icon}>
        <img
          className="tw-w-full"
          src={icon}
        />
      </div>
      {children}
      <img
        className="tw-w-[7px] tw-h-[14px]"
        src={arrowImage} />
    </div>
  )
}

export default InfoItem;