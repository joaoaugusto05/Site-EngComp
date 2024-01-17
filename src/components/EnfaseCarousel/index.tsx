import { Carousel } from "react-bootstrap";
import { CarouselHover } from "./styles";
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { DefaultTitle, StandardText } from "../../pages/Default/styles";




export default function Carrossel(){
  const [open, setOpen] = useState(false);

  
    return (
        <div>
            <Carousel
              onTouchStart={() => setOpen(!open)}
              onMouseEnter={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              onMouseLeave={()=> setOpen(!open)}
            >
        
              <Carousel.Item>
                <CarouselHover>
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                    style={{
                      filter: 'brightness(30%)', 
                    }}
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: 'brightness(30%)', 
                    }}
                  />
                </picture>
                </CarouselHover>
            
                <Carousel.Caption 
                  style={{position: "absolute", top: open ? "10%" : "45%", pointerEvents: "none", transition: "top 0.5s ease"}}
                >
                  <DefaultTitle>SISTEMAS COMPUTACIONAIS AVANÇADOS</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      <p>
                        <StandardText>

                        
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Morbi tempus iaculis urna id volutpat. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Lacinia quis vel eros donec ac. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Congue quisque egestas diam in. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Nisi vitae suscipit tellus mauris a diam. Porta nibh venenatis cras sed felis eget velit aliquet. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Non blandit massa enim nec dui nunc mattis enim. Nibh tellus molestie nunc non. In massa tempor nec feugiat nisl.
                      
                      </StandardText>
                      </p>
                    </div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>
      
              <Carousel.Item>
                <CarouselHover>
                  <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                    style={{
                      filter: 'brightness(30%)', 
                    }}
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: 'brightness(30%)', 
                    }}
                  />
                </picture>
                </CarouselHover>

                <Carousel.Caption
                  style={{position: "absolute", top: open ? "10%" : "45%", pointerEvents: "none", transition: "top 0.5s ease"}}
                >
                  <DefaultTitle>SISTEMAS EMBARCADOS</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                    <p>
                        <StandardText>

                        
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Morbi tempus iaculis urna id volutpat. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Lacinia quis vel eros donec ac. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Congue quisque egestas diam in. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Nisi vitae suscipit tellus mauris a diam. Porta nibh venenatis cras sed felis eget velit aliquet. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Non blandit massa enim nec dui nunc mattis enim. Nibh tellus molestie nunc non. In massa tempor nec feugiat nisl.
                      
                      </StandardText>
                      </p>
                    </div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>
            
              <Carousel.Item>
                <CarouselHover>
                  <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: 'brightness(30%)', 
                    }}
                  />
                </picture>
                </CarouselHover>

                <Carousel.Caption 
                  style={{position: "absolute", top: open ? "10%" : "45%", pointerEvents: "none", transition: "top 0.5s ease"}}
                >
                  <DefaultTitle>SISTEMAS DE COMUNICAÇÃO E COMPUTAÇÃO MÓVEL</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                    <p>
                        <StandardText>

                        
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Morbi tempus iaculis urna id volutpat. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Lacinia quis vel eros donec ac. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Congue quisque egestas diam in. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Nisi vitae suscipit tellus mauris a diam. Porta nibh venenatis cras sed felis eget velit aliquet. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Non blandit massa enim nec dui nunc mattis enim. Nibh tellus molestie nunc non. In massa tempor nec feugiat nisl.
                      
                      </StandardText>
                      </p>
                      </div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <CarouselHover>
                  <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: 'brightness(30%)', 
                    }}
                  />
                </picture>
                </CarouselHover>

                <Carousel.Caption 
                  style={{position: "absolute", top: open ? "10%" : "45%", pointerEvents: "none", transition: "top 0.5s ease"}}
                >
                  <DefaultTitle>ROBÓTICA</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                    <p>
                      <StandardText>
                        
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Morbi tempus iaculis urna id volutpat. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Lacinia quis vel eros donec ac. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Congue quisque egestas diam in. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Nisi vitae suscipit tellus mauris a diam. Porta nibh venenatis cras sed felis eget velit aliquet. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Non blandit massa enim nec dui nunc mattis enim. Nibh tellus molestie nunc non. In massa tempor nec feugiat nisl.
                      
                      </StandardText>
                      </p>
                      </div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <CarouselHover>
                  <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: 'brightness(30%)', 
                    }}
                  />
                </picture>
                </CarouselHover>

                <Carousel.Caption 
                  style={{position: "absolute", top: open ? "10%" : "45%", pointerEvents: "none", transition: "top 0.5s ease"}}
                >
                  <DefaultTitle>CIÊNCIA DE DADOS</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                    <p>
                        <StandardText>

                        
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Morbi tempus iaculis urna id volutpat. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Lacinia quis vel eros donec ac. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Congue quisque egestas diam in. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Nisi vitae suscipit tellus mauris a diam. Porta nibh venenatis cras sed felis eget velit aliquet. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Non blandit massa enim nec dui nunc mattis enim. Nibh tellus molestie nunc non. In massa tempor nec feugiat nisl.
                      
                      </StandardText>
                      </p></div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
        </div>
    )

}