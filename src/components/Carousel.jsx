import React, { useState } from "react";
import "./Carousel.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Style } from "@mui/icons-material";
import {images} from "../data/CarouselData";

// complete the function below:
function Carousel() {

    const [count,setCount] = useState(0)

    const handleNavigation = (val) => {
        if (val === "left") {
            if (count === 0) {
              setCount(images.length - 1);
            } else {
              setCount(count - 1);
            }
          } else {
            if (count === images.length - 1) {
              setCount(0);
            } else {
              setCount(count + 1);
            }
          }
    }

    return(
        <div id="carousel">
            <div style={ {backgroundImage:`url(${images[0].img})` }}>
                <div className="navBtn" onClick={()=> {handleNavigation("left")}}>
                    <ArrowBackIosIcon className="icon"></ArrowBackIosIcon>
                </div>
                <div id="details">
                    <h1>{images[count].title}</h1>
                    <h2>{images[count].subtitle}</h2>
                </div>
                <div className="navBtn" onClick={() => {handleNavigation("right")}} >
                    <ArrowForwardIosIcon className="icon"></ArrowForwardIosIcon>
                </div>
            </div>
        </div>
    )

}

export default Carousel;