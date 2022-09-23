import React from 'react';
import classNames from 'classnames';
import arrowImage from './arrow.png';
import styles from './index.module.scss';

type Props = {
  icon: string;
  primary: JSX.Element | string;
  secondary: JSX.Element;
  className?: string;
}

export const InfoItem: React.FC<Props> = ({ className, icon, primary, secondary }) => {
  return (
    <div className={classNames(className, "tw-w-full tw-flex tw-justify-between tw-items-center")}>
      <div className="tw-flex tw-justify-start tw-gap-[20px] tw-items-center">
        <div className={styles.icon}>
          <img
            className="tw-w-full"
            src={icon}
            alt="Info Item"
          />
        </div>
        <div>
          <div className={styles.primary}>{primary}</div>
          <div>{secondary}</div>
        </div>
      </div>
      <img
        className="tw-w-[7px] tw-h-[14px]"
        src={arrowImage}
        alt="Details"
      />
    </div>
  )
}

export default InfoItem;