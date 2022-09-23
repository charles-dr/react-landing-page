import React from 'react';
import textImage from './create_event.png';
import styles from './index.module.scss';

export const CreateEventButton: React.FC = () => {
  return (
    <button className={styles.createBtn}>
      <img src={textImage} alt="Create my event" />
    </button>
  )
}

export default CreateEventButton;