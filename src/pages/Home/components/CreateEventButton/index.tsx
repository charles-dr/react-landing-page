import React from 'react';
import textImage from './create_event.png';
import styles from './index.module.scss';

type Props = {
  onClick: () => void;
}

export const CreateEventButton: React.FC<Props> = ({ onClick: handleOnClick }) => {
  return (
    <button
      className={styles.createBtn}
      onClick={e => handleOnClick()}
    >
      <img src={textImage} alt="Create my event" />
    </button>
  )
}

export default CreateEventButton;