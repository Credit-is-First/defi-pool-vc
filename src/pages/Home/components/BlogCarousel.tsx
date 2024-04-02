import React, { DetailedHTMLProps, HTMLAttributes, useCallback, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ReactComponent as LeftArrow } from 'src/assets/icons/arrow-icon.svg'
import Blog from './Blog'

const responsive = {
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
type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function BlogCarousel({ className }: Props) {
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
        ref={(el) => setCarousel(el)}
        arrows={false}
        className={className}
        partialVisible
        itemClass='px-[1px] select-none'
        responsive={responsive}
      >
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </Carousel>
      <div className='flex justify-between mt-[100px] mb-[66px]'>
        <LeftArrow className={'cursor-pointer'} onClick={prev} />
        <LeftArrow className={'cursor-pointer transform -scale-x-100'} onClick={next} />
      </div>
    </>
  )
}

export default BlogCarousel
