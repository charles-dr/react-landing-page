import React from 'react';
import classNames from 'classnames';
import eventCardImage from './event_card.png';
import styles from './index.module.scss';

type Props = {
  className?: string;
}

export const EventCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <img
        className="tw-w-full"
        src={eventCardImage}
        alt="Event Card"
      />
    </div>
  )
}

export default EventCard;