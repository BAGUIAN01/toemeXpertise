import React from "react";
import "../Styles/ServiceStyle.css";
import { Solutions_items } from "./data/Data";
import { useMediaQuery } from "@chakra-ui/react";
import Card from '../components/Card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "./ui/carousel"
function Services() {
  const [isDesktop, setisDesktop] = useMediaQuery("(min-width: 1100px)", '(display-mode: browser)');
  const handleClickNext = () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = document.querySelectorAll(".item");
    let lastItem = items[items.length - 1];
    document.querySelector(".slide").prepend(lastItem);
  };
  console.log(isDesktop)

  if (isDesktop) {
    return (
      <div className="container_solution">
        <div className="slide">
          {Solutions_items.map((item, index) => {
            return (
              <div
                key={index}
                className="item"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + item.image
                  })`,
                }}
              >
                <div className="content">
                  <div className="name">{item.title}</div>
                  <div className="des">{item.description}</div>
                  <button className="see_more">En savoir plus</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="button">
          <button className="prev" onClick={handleClickNext}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" onClick={handleClickPrev}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  }
  else{
    return (
        <Carousel
            opts={{
              align: "start",
            }}>
            <CarouselContent >
              
              {Solutions_items.map((item,index)=>(
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div key={index}>
                    <Card
                      image={item.image}
                      heading={item.title}
                      text={item.description}
                    />
                  </div>
                </CarouselItem>
                  
                ))}

            </CarouselContent>
             <CarouselPrevious />
              <CarouselNext />

            </Carousel>
    )
      

  }
  
}

export default Services;
