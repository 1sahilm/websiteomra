
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
function HomeSlider(){
    return(
<div>
<Carousel>
                  <div className="slider-image">
                      <div className="bg"><Image src="/images/background/ideathon-homepage-banner-1.jpg" alt="image1" width={1200} height={500}/></div>
                      <div className="container text">
                     <div className="row">
                         <div className="col-md-6">
                         <div className="slidertextblock">
<h2>Omra Solution Launches First of its Kind, ‘Meta Village’ to Gamify Learning</h2>
<p>Our flagship thought leadership platform curated in collaboration with WSJ Custom Studios to deliver engaging perspectives from leaders across industries on Future that is driven by technology.
</p>
<a href="#" className="linkBtn">Know More <span></span> </a>

                     </div>
                         </div>
                     </div>
                      </div>
  
                  </div>
                  <div className="slider-image">
                      <div className="bg"><Image src="/images/background/ideathon-homepage-banner-1.jpg" alt="image1" width={1200} height={500}/></div>
                      <div className="container text">
                     <div className="row">
                         <div className="col-md-6">
                         <div className="slidertextblock">
<h2>Omra Solution Launches First of its Kind, ‘Meta Village’ to Gamify Learning</h2>
<p>Our flagship thought leadership platform curated in collaboration with WSJ Custom Studios to deliver engaging perspectives from leaders across industries on Future that is driven by technology.
</p>
<a href="#" className="linkBtn">Know More <span></span> </a>

                     </div>
                         </div>
                     </div>
                      </div>
  
                  </div>
                  <div className="slider-image">
                      <div className="bg"><Image src="/images/background/ideathon-homepage-banner-1.jpg" alt="image1" width={1200} height={500}/></div>
                      <div className="container text">
                     <div className="row">
                         <div className="col-md-6">
                         <div className="slidertextblock">
<h2>Omra Solution Launches First of its Kind, ‘Meta Village’ to Gamify Learning</h2>
<p>Our flagship thought leadership platform curated in collaboration with WSJ Custom Studios to deliver engaging perspectives from leaders across industries on Future that is driven by technology.
</p>
<a href="#" className="linkBtn">Know More <span></span> </a>

                     </div>
                         </div>
                     </div>
                      </div>
  
                  </div>
                  <div className="slider-image">
                      <div className="bg"><Image src="/images/background/ideathon-homepage-banner-1.jpg" alt="image1" width={1200} height={500}/></div>
                      <div className="container text">
                     <div className="row">
                         <div className="col-md-6">
                         <div className="slidertextblock">
<h2>Omra Solution Launches First of its Kind, ‘Meta Village’ to Gamify Learning</h2>
<p>Our flagship thought leadership platform curated in collaboration with WSJ Custom Studios to deliver engaging perspectives from leaders across industries on Future that is driven by technology.
</p>
<a href="#" className="linkBtn">Know More <span></span> </a>

                     </div>
                         </div>
                     </div>
                      </div>
  
                  </div>
                  
              </Carousel>
</div>
    )
}
export default HomeSlider;