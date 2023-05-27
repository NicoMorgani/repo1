"use client"
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample2() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="c2.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="c3.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="c1.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample2;