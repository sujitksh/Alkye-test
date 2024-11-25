
import React, { useEffect, useState,useRef } from 'react'
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import styles from "../../styles/Slider.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import useMediaQuery from '@/hooks/useMediaQuery';

function Slider({prompt,data}) {
    const isMobile = useMediaQuery('(max-width:768px)');

    const [item, setItem] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const handleDotClick = (index) => {
        if (swiperRef.current) {
          swiperRef.current.slideTo(index); // Move to the selected slide
        }
      };

    useEffect(()=>{
        if(data.length>0){
            const filterData = data.filter((res)=>res.prompt === prompt);
            setItem(filterData);
        }else{
            return <h3 style={{"color":"white","textAlign":"center"}}>Not Data Available</h3>
        }
    },[data,prompt])
    
   
  return (
    <div className={styles.slider}>
        <h3>
        {
            prompt == "Photography"?(isMobile?"Slider #1":prompt):(isMobile?"Slider #2":prompt)
        }
       </h3>
       <div className={styles.image_slider}>
        
     <Swiper
        modules={[Autoplay,Pagination]}
        spaceBetween={isMobile?80:200} 
        slidesPerView={isMobile?2:4} 
        onSwiper={(swiper) => {
            swiperRef.current = swiper; // Attach the swiper instance to ref
          }} 
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex); // Update active index
        }}
        autoplay={{ delay: 3000}} 
        className={styles.mySwiper}
        loop={true}
      >
        {item.map((res, index) => (
          <SwiperSlide key={index}>
            <Image className={styles.image} src={res.image_url} alt={`Slide ${index + 1}`} width={300} height={400} />
          </SwiperSlide>
        ))}
        
      </Swiper>
      
       </div>
       <div className='ellipse_slider'>
       {item.map((label, index) => (
          <span
            key={index}
            className="custom-dot"
            onClick={() => handleDotClick(index)}
          >
            <Image src={`/Icons/Ellipse${activeIndex == index?5:6}.svg`} alt="Dot Icon" width={23} height={23}/>
          </span>
        ))}
       </div>
       {/* <div className='ellipse_slider'> */}
          {/* <Image src={`/Icons/Ellipse5.svg`} alt="Ellipse1" width={23} height={23} />
          <Image src={`/Icons/Ellipse6.svg`} alt="Ellipse1" width={23} height={23} />
          <Image src={`/Icons/Ellipse6.svg`} alt="Ellipse1" width={23} height={23} /> */}
       {/* </div> */}
    </div>
  )
}

export default Slider