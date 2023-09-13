
const Slider = () => {
    <div id="body_bottom_wrapper">
    <div id="body_bottom">
<div className="slider-holder">
    <span id="slider-image-1"></span>
    <span id="slider-image-2"></span>
    <span id="slider-image-3"></span>
    <div className="image-holder">
        <img src="resources/images/fish_img1.jpg" className="slider-image" />
        <img src="resources/images/fish_img2.jpg" className="slider-image" />
        <img src="resources/images/fish_img4.png" className="slider-image" />
    </div>
    <div className="button-holder">
        <a href="#slider-image-1" className="slider-change"></a>
        <a href="#slider-image-2" className="slider-change"></a>
        <a href="#slider-image-3" className="slider-change"></a>
    </div>
</div>
    </div>
    </div>
}

export default Slider;