import React from 'react'
import './Slideshow.css'
import img1 from '../../../photo/banner01.jpg'
import img2 from '../../../photo/banner02.jpg'
import img3 from '../../../photo/banner03.jpg'
import img4 from '../../../photo/banner04.jpg'
import img5 from '../../../photo/banner05.jpg'
import img6 from '../../../photo/banner06.jpg'
import img7 from '../../../photo/banner07.jpg'
import img8 from '../../../photo/banner08.jpg'

const imgsArr = [img1,img2,img3,img4,img5,img6,img7,img8];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgsArr.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imgsArr.map((image, index) => (
          <div
            className="slide"
            key={index}
          >
            <img className='img-slide'src={image}></img>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {imgsArr.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow