import React from "react";
import vct from '../vct.png'
import pmpl from '../pmpl.png'
import mpl from '../mpl.png'
import '../style.css'

const Slideshow = () => {
    return (
        <div >
            <img className="slideshow" src={vct}/>
                <div className="listslideshow">

                    <img src={pmpl}/>            
                    <img src={mpl}/>            
                </div>
        </div>
        
    )
}
export default Slideshow