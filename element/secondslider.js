
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
function SecondSlider(){
    return(
<div>
<Carousel>
                  <div className="slider-image">
                      <div className="bg"><Image src="/images/background/jagdish-homepage-thumb.png" alt="image1" width={1200} height={500}/></div>
                      <div className="container text slider-border">
                          <div className="slider-texto">
                              <h5>WE CREATE INNOVATIVE <br /> PLATFORMS</h5>
                              <p>The changes that have been unfolding in the pandemic  <br /> are not evolutionary </p>
                              <a href="#">Know More</a>
                          </div>
                      </div>
  
                  </div>
                  <div className="slider-image">
                      <div className="bg"><Image src="/images/background/suri-homepage-thumb.png" alt="image1" width={1200} height={500}/></div>
                      <div className="container text slider-border">
                          <div className="slider-texto">
                              <h5>WE CREATE INNOVATIVE <br /> PLATFORMS</h5>
                              <p>The changes that have been unfolding in the pandemic  <br /> are not evolutionary </p>
                              <a href="#">Know More</a>
                          </div>
                      </div>
  
                  </div>
                  <div className="slider-image">
                      <div className="bg"><Image src="/images/background/sanyasi-homepage-thumb.png" alt="image1" width={1200} height={500}/></div>
                      <div className="container text slider-border">
                          <div className="slider-texto">
                              <h5>WE CREATE INNOVATIVE <br /> PLATFORMS</h5>
                              <p>The changes that have been unfolding in the pandemic  <br /> are not evolutionary </p>
                              <a href="#">Know More</a>
                          </div>
                      </div>
  
                  </div>
                  <div className="slider-image">
                      <div className="bg"><Image src="/images/background/jagdish-homepage-thumb.png" alt="image1" width={1200} height={500}/></div>
                      <div className="container text slider-border">
                          <div className="slider-texto">
                              <h5>WE CREATE INNOVATIVE <br /> PLATFORMS</h5>
                              <p>The changes that have been unfolding in the pandemic  <br /> are not evolutionary </p>
                              <a href="#">Know More</a>
                          </div>
                      </div>
  
                  </div>
                  
              </Carousel>
</div>
    )
}
export default SecondSlider;