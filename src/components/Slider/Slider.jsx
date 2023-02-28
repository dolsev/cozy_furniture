import React, {useState, useEffect} from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Slider.scss'
function Slider() {
    const data = [
                'https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','' +
        'https://images.unsplash.com/photo-1625958317053-b10ae8424fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80'
    ]
    const [currentSlide,setCurrentSlide] = useState(0)

    const nextSlide = ()=>{
        setCurrentSlide(currentSlide===data.length-1?0:currentSlide+1)
    }
    const prevSlide = ()=>{
        setCurrentSlide(currentSlide===0?data.length-1:currentSlide-1)
    }

    if (!Array.isArray(data) || data.length <= 0) {
        return null;
    }

    return (
        <div className='slider'>
            <div className='container' >
                {data.map((slide,index)=>{
                    return(
                        <div className={index===currentSlide?'slide active':'slide'} key={index}>
                            {index===currentSlide&&(
                                <img src={data[currentSlide]} alt='furniture image'
                                     className='image'/>
                            )}
                        </div>
                    )
                })
                }

            </div>
            <div className='icons'>
                <div className='icon'onClick={prevSlide}><KeyboardArrowLeftIcon/></div>
                <div className='icon' onClick={nextSlide}><KeyboardArrowRightIcon/></div>
            </div>
        </div>
    );
}

export default Slider;