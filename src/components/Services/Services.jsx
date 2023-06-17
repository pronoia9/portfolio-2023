import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';

import { ServicesCard } from './';
import { SectionWrapper } from '../../hoc';
import { servicesData } from '../../utils/data';

const Services = () => {
  const options = {
    modules: [Pagination, A11y],
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      640: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
    },
  };

  return (
    <Container>
      <Swiper {...options}>
        {servicesData.map((service, index) => (
          <SwiperSlide key={`service-${index}`}>
            <ServicesCard {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SectionWrapper(Services, 'services');

const Container = styled.div`
  .swiper-container {
    overflow: visible;
  }

  .swiper-wrapper {
    margin-bottom: 50px;
    text-align: left;
  }

  .swiper-slide {
    height: auto;

    & > div {
      height: 100%;
    }
  }
`;
