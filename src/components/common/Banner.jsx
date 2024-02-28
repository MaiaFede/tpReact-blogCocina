import React from 'react';
import { Container, Image, Carousel} from 'react-bootstrap';
import banner_donut from "../../assets/Donuts banner.png"
import banner_churros from "../../assets/Blog Banner.png"
import banner_pancakes from "../../assets/Pancake Recipe Blog Banner.png"

const Banner = () => {
    return ( 
        
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100 object-fit-cover"
                  src={banner_churros}
                  alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 object-fit-cover"
                  src={banner_donut}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 object-fit-cover"
                  src={banner_pancakes}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        
       
    );
};

export default Banner;