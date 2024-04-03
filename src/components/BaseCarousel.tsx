import React, { useCallback, useState } from 'react'
import Carousel, { CarouselProps, ResponsiveType } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ReactComponent as LeftArrow } from 'src/assets/icons/arrow-icon.svg'

type Props = { responsive?: ResponsiveType } & Omit<CarouselProps, 'responsive'>

const defaultResponsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 4,
    partialVisibilityGutter: 15,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 15,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 15,
  },
}

function BaseCarousel({ className = '', itemClass = '', children, responsive, ...others }: Props) {
  const [carousel, setCarousel] = useState<Carousel | null>(null)

  const next = useCallback(() => {
    if (
      !carousel ||
      carousel.state.currentSlide >= carousel.state.totalItems - carousel.state.slidesToShow
    )
      return
    carousel.goToSlide(carousel.state.currentSlide + 1)
  }, [carousel])

  const prev = useCallback(() => {
    if (!carousel || carousel.state.currentSlide <= 0) return
    carousel.goToSlide(carousel.state.currentSlide - 1)
  }, [carousel])

  return (
    <>
      <Carousel
        {...others}
        ref={(el) => setCarousel(el)}
        arrows={false}
        className={className}
        partialVisible
        itemClass={`px-[1px] select-none ${itemClass}`}
        responsive={responsive || defaultResponsive}
      >
        {children}
      </Carousel>
      <div className='flex justify-between mt-[50px]'>
        <LeftArrow className={'cursor-pointer'} onClick={prev} />
        <LeftArrow className={'cursor-pointer transform -scale-x-100'} onClick={next} />
      </div>
    </>
  )
}

export default BaseCarousel
