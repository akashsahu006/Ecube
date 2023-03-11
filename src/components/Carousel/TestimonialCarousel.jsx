import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import TestimonialCard from '../Cards/TestimonialCard'

import { StudentTestimonial } from '../../data/StudentTestimonialData'
import { TeacherTestimonial } from '../../data/TeacherTestimonialData'

const TestimonialCarousel = (props) => {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
        <Carousel responsive={responsive}>
            {StudentTestimonial.map((testimonial) => {
                return (<TestimonialCard occupation={testimonial.occupation}/>)
            })}
            {/* {props.firstButtonState ? <>{StudentTestimonial.map((testimonial) => {
                return (<TestimonialCard occupation={testimonial.occupation}/>)
            })}</>: <>{TeacherTestimonial.map((testimonial) => {
                return (<TestimonialCard occupation={testimonial.occupation}/>)
            })}</>} */}

        </Carousel>
    </div>
  )
}

export default TestimonialCarousel