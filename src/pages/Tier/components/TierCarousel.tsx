import React, { DetailedHTMLProps, HTMLAttributes, useCallback, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ReactComponent as LeftArrow } from 'src/assets/icons/arrow-icon.svg'
import TierItem from './TierItem'

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

function TierCarousel({ className }: Props) {
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
        <TierItem name='Shrimp' allocation={100} poolSize={500} />
        <TierItem name='Crab' allocation={500} poolSize={2500} />
        <TierItem name='Octopus' allocation={1000} poolSize={5000} />
        <TierItem name='Fish' allocation={2500} poolSize={12500} />
        <TierItem name='Dolphin' allocation={5000} poolSize={25000} />
        <TierItem name='Shark' allocation={10000} poolSize={50000} />
        <TierItem name='Whale' allocation={25000} poolSize={125000} />
      </Carousel>
      <div className='flex justify-between mt-[50px]'>
        <LeftArrow className={'cursor-pointer'} onClick={prev} />
        <LeftArrow className={'cursor-pointer transform -scale-x-100'} onClick={next} />
      </div>
    </>
  )
}

export default TierCarousel
