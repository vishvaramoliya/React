import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Sec() {
    return (
        <div>
            <Carousel data-bs-theme="dark" className='slide1'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img1"
                        src="https://themewagon.github.io/HighTechIT/img/carousel-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption'>
                        <p className='t2'>Best IT Solutions</p>
                        <h1 className='t3'>Quality Digital Services You Really Need!</h1>
                        <p className='t4'>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt..</p>
                        <button className='btn1'>Read More</button>
                        <button className='btn2'>Contact Us</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img1"
                        src="https://themewagon.github.io/HighTechIT/img/carousel-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='caption'>
                        <p className='t2'>Best IT Solutions</p>
                        <h1 className='t3'>Quality Digital Services You Really Need!</h1>
                        <p className='t4'>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt..</p>
                        <button className='btn1'>Read More</button>
                        <button className='btn2'>Contact Us</button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}
