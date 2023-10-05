import fishImg1 from '../../assets/fish_img1.jpg'
import fishImg2 from '../../assets/fish_img2.jpg'
import fishImg3 from '../../assets/fish_img4.png'
import { useEffect } from 'react'
import './Slider.css'

const Slider = () => {

    useEffect(() => {
        const imgElementsArray = Array.from(document.getElementsByClassName('slider-image'))
        window.addEventListener('load', () => {
            const widthContainer = document.getElementById('body_bottom').offsetWidth
            imgElementsArray.forEach((img) => {
                img.style.width = `${widthContainer}px`
            })
        })

        window.addEventListener('resize', () => {
            const widthContainer = document.getElementById('body_bottom').offsetWidth
            imgElementsArray.forEach((img) => {
                img.style.width = `${widthContainer}px`
            })
        })
    }, [])

    return (
        <div className="testTheFlex">
        <div id="body_bottom_wrapper">
            <div id="body_bottom">
                <div className="slider-holder">
                    <span id="slider-image-1"></span>
                    <span id="slider-image-2"></span>
                    <span id="slider-image-3"></span>
                    <div className="image-holder">
                        <div className="imgTest">
                            <img src={fishImg1} className="slider-image" />
                        </div>
                        <div className="imgTest">
                            <img src={fishImg2} className="slider-image" />
                        </div>
                        <div className="imgTest">
                            <img src={fishImg3} className="slider-image" />
                        </div>
                    </div>
                    <div className="button-holder">
                        <a href="#slider-image-1" className="slider-change"></a>
                        <a href="#slider-image-2" className="slider-change"></a>
                        <a href="#slider-image-3" className="slider-change"></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Slider;