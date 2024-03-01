import { useState, useEffect, useRef } from 'react';

export default function Carousel({ urls, size }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [imageWidth, setItemWidth] = useState(0);
  const [originLength, setOriginLength] = useState(urls.length);
  const [index, setIndex] = useState(0);
  const imagesRef = useRef();

  const slideNext = () => {
    setIndex((prev) => prev + 5);
  };
  const slidePrev = () => {
    setIndex((prev) => prev - 5);
  };

  const slide = () => {
    imagesRef.current.scroll({ left: index * imageWidth + index * 15, behavior: 'smooth' });

    // if (index >= originLength) {
    //   setTimeout(() => {
    //     let newIndex = index - originLength;
    //     imagesRef.current.scroll({ left: newIndex * imageWidth + newIndex * 15 });
    //     setIndex((prev) => newIndex);
    //     debugger;
    //   }, 1000);
    // }
  };

  useEffect(() => {
    setImageUrls((prev) => urls);

    setOffsetWidth((prev) => imagesRef.current.offsetWidth);
    let width = (imagesRef.current.offsetWidth - 15 * 4) / 5;
    setItemWidth((prev) => width);

    setOriginLength((prev) => urls.length);

    // let rest = 5 - (urls.length % 5);
    // if (rest !== 5) {
    //   let restUrls = urls.slice(0, rest + 5);
    //   let newUrls = [...urls, ...restUrls];
    //   setImageUrls((prev) => newUrls);
    // }
  }, [urls, imagesRef.current]);

  useEffect(() => {
    slide();
  }, [index]);

  return (
    <div className="carousel">
      <div className="carousel-images" ref={imagesRef}>
        {imageUrls.map((url, i) => (
          <img className="image" src={url} key={i} index={i} style={{ minWidth: imageWidth + 'px' }} />
        ))}
      </div>
      <button className="carousel-button left" onClick={slidePrev}></button>
      <button className="carousel-button right" onClick={slideNext}></button>
    </div>
  );
}
