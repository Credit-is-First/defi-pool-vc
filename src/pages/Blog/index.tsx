import React from 'react'
import blogBankSrc from 'src/assets/images/blog_bank.jpg'
import BaseCarousel from 'src/components/BaseCarousel'
import BlogCarouselItem from 'src/components/BlogCarouselItem'

function BlogPage() {
  return (
    <>
      <div className='bg-card rounded-[50px] mt-[57px] px-11 pt-[51px] pb-[157px]'>
        <h3 className='max-w-[650px]'>Crypto Banking: how to bank your digital coin</h3>
        <div className='mt-[20px]'>
          Crypto banking allows customers to hold and send cryptocurrecy with crypto debit cards
        </div>
        <img className='rounded-[30px] mt-[90px]' src={blogBankSrc} alt='blog bank' />
        <h4 className='mt-[70px]'>Summary: crypto banking</h4>
        <div className='grid grid-flow-row gap-[20px] mt-[50px]'>
          <span>
            Cryptocurrency banking — or crypto banking — is a relatively new financial product that
            allows people to manage their cryptocurrency in bank account like they would manage
            regular fiat currency.
          </span>
          <span>
            The dollar value of cryptocurrency is volatile, so it&apos;s risky to buy or spend
            crypto since the value could fall or rise quickly. If you accept that risk, then crypto
            banking can help you spend with a special crypto debit card.
          </span>
          <span>
            Consumers who are interested in crypto banking can get started by researching the
            various financial service companies that offer crypto banking services.
          </span>
          <span>
            Cryptocurrency, the blockchain-based digital currency that has captured the interest of
            investors and financial service firms alike, has a challenging problem. It can be hard
            to actually spend this currency like you would regular money. But there are new services
            on the horizon that could help people use bitcoin and other digital coins in more
            mainstream ways for their day-to-day finances.
          </span>
          <span>
            Here&apos;s a look at how to use these banking-style services for cryptocurrency, as
            well as their benefits and barriers.
          </span>
        </div>
        <h4 className='mt-[112px]'>What is crypto banking?</h4>
        <div className='mt-[50px]'>
          The term crypto banking could be considered a misnomer, since the exchange companies and
          firms that offer these services aren&apos;t technically banks, but it generally refers to
          the ways in which consumers can manage their cryptocurrency balances. At this stage, this
          kind of banking mostly just allows people to hold their funds in a digital wallet or spend
          it like they would spend traditional money.
        </div>
        <h4 className='mt-[91px]'>Benefits of crypto banking</h4>
        <div className='mt-[50px]'>
          At this time, the main benefit of this kind of banking is cryptocurrency debit cards. They
          allow you to use your digital coin balance like any other currency to make everyday
          purchases or withdraw it as cash instead of keeping it as an investment.
        </div>
        <div className='mt-[20px]'>
          Before these debit cards were available, you could spend your cryptocurrency only at
          retailers that chose to accept it directly or sell it in exchange for dollars. Now,
          financial technology firms are partnering with chartered banks and/or debit card issuers
          to offer these cards, using their partner&apos;s logistical and regulatory framework to
          automatically sell your cryptocurrency behind the scenes, converting it into dollars and
          allowing retailers to accept it. This means that your digital funds are accepted wherever
          many regular debit cards are.
        </div>
      </div>
      <h4 className='text-shadow mt-[96px]'>You can also like</h4>
      <BaseCarousel className='mt-[70px] mb-[52px]'>
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
      </BaseCarousel>
    </>
  )
}

export default BlogPage
