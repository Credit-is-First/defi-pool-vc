import React, { useCallback, useState } from 'react'
import Carousel, { CarouselProps, ResponsiveType } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ReactComponent as LeftArrow } from 'src/assets/icons/arrow-icon.svg'

type Props = { responsive?: ResponsiveType } & Omit<CarouselProps, 'responsive'>

const defaultResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 0,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
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
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        focusOnSelect={false}
        infinite={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable
        ref={(el) => setCarousel(el)}
        arrows={false}
        className={className}
        itemClass={`px-[1px] flex justify-center select-none ${itemClass}`}
        responsive={responsive || defaultResponsive}
        draggable
      >
        {children}
      </Carousel>
      <div className='flex justify-between mt-[40px]'>
        <LeftArrow className={'cursor-pointer'} onClick={prev} />
        <LeftArrow className={'cursor-pointer transform -scale-x-100'} onClick={next} />
      </div>
    </>
  )
}

export default BaseCarousel
