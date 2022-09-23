import React from 'react';
import Container from 'components/Container';
import HCenter from 'components/HCenter';
import Header from './components/Header';
import EventCard from './components/EventCard';
import CreateEventButton from './components/CreateEventButton';
import './index.style.scss';

const HomePage: React.FC = () => {
  return (
    <Container className="tw-bg-purple-3 container">
      <div className="tw-flex tw-flex-row tw-justify-center laptop:tw-justify-between laptop:tw-items-center">
        <div className="tw-hidden laptop:tw-block ">
          <EventCard className="laptop:tw-w-[440px]" />
        </div>
        <div className="tw-flex tw-flex-col tw-justify-between tw-text-center tw-gap-[10px] laptop:tw-justify-start">
          <Header />
          <HCenter className="laptop:tw-hidden">
            <EventCard className="tablet:tw-w-[311px] laptop:tw-w-[440px]" />
          </HCenter>
          <HCenter className="laptop:tw-text-right laptop:tw-mt-[52px]">
            <CreateEventButton />
          </HCenter>
        </div>
      </div>
    </Container >
  )
}

export default HomePage;