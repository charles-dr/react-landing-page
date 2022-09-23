import React from 'react';
import Container from 'components/Container';
import InfoItem from './components/InfoItem';
import eventImage from './event_image.png';
import calendarImage from 'assets/images/Calendar.png';
import styles from './index.module.scss';

const EventPage: React.FC = () => {
  return (
    <Container className="">
      <div className="tw-w-full tw-flex tw-flex-col tw-max-w-[540px] tw-mx-auto
            tablet:tw-mt-[88px]
            laptop:tw-flex-row-reverse laptop:tw-max-w-none laptop:tw-mt-[184px] laptop:tw-justify-center laptop:tw-gap-[80px] laptop:tw-items-center"
      >
        <img
          className="tw-w-full laptop:tw-max-w-[500px]"
          alt="Event Details"
          src={eventImage}
        />
        <div className="tw-px-4 tw-mt-[11px]
              tablet:tw-mt-[36px] tablet:tw-px-0
              laptop:tw-mt-0 laptop:tw-min-w-[400px]"
        >
          <p className={styles.title}>Birthday Bash</p>
          <p className={styles.host}>Hosted by <strong>Elysia</strong></p>
          <InfoItem
            icon={calendarImage}
            primary={"18 August 6:00PM"}
            secondary={<span className="tw-text-gray-1 tw-font-normal tw-font-body tw-text-small tw-leading-[16px] tablet:tw-text-lg tablet:tw-leading-[21px] ">to <strong>19 August 1:00PM</strong> UTC+10</span>}
          />
          <InfoItem
            className="tw-mt-4 tablet:tw-mt-8"
            icon={calendarImage}
            primary={"18 August 6:00PM"}
            secondary={<span className="tw-text-gray-1 tw-font-normal tw-font-body tw-text-small tw-leading-[16px] tablet:tw-text-lg tablet:tw-leading-[21px] ">to <strong>19 August 1:00PM UTC+10</strong></span>}
          />
        </div>
      </div>
    </Container>
  )
}

export default EventPage;