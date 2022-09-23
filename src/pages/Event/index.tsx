import React from 'react';
import Container from 'components/Container';
import InfoItem from './components/InfoItem';
import eventImage from './event_image.png';
import calendarImage from 'assets/images/Calendar.png';
import styles from './index.module.scss';

const EventPage: React.FC = () => {
  return (
    <Container className="">
      <div>
        <img
          className="tw-w-full"
          alt="Event Details Image"
          src={eventImage}
        />
        <div className="tw-px-4">
          <p className={styles.title}>Birthday Bash</p>
          <p className={styles.host}>Hosted by <strong>Elysia</strong></p>
          <InfoItem
            icon={calendarImage}
          >
            <div>
              <p>18 August 6:00PM</p>
              <p>to 19 August 1:00PM UTC +10</p>
            </div>
          </InfoItem>
        </div>
      </div>
    </Container>
  )
}

export default EventPage;