import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import patexLogoSrc from 'src/assets/icons/patex_log.png'
import patexBannerSrc from 'src/assets/images/patex_baner.jpg'
import loadmapSrc from 'src/assets/images/loadmap.jpg'
import teamsSrc from 'src/assets/images/teams.jpg'
import tokenomicsChartSrc from 'src/assets/images/tokenomics_chart.svg'
import LiItem from 'src/components/LiItem'
import Socials from 'src/components/Socials'
import BaseButton from 'src/components/buttons/BaseButton'
import InvestDialog from './components/InvestDialog'

function ProjectDetailPage() {
  const { id } = useParams()

  const [open, setOpen] = useState(false)

  const openInvestDialog = useCallback(() => {
    setOpen(true)
  }, [])

  const closeInvsetDialog = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {}, [id])

  return (
    <>
      <h3 className='flex items-center mt-[50px]'>
        <img className='pr-1' src={patexLogoSrc} width={60} alt='patex logo' /> PATEX
      </h3>
      <div className='rounded-[50px] overflow-hidden pb-[81px] mt-[50px] mb-[12px] bg-[#1C1C1E]'>
        <img src={patexBannerSrc} alt='patex banner' />
        <div className='px-[40px]'>
          <h4 className='text-shadow mt-[70px]'>What is Virtual Versions (VV)?</h4>
          <div className='mt-[30px]'>
            VV is the first social media platform to use 3D biometrically backed AI avatars to
            enhance your online experience. Our advanced in-house avatar creation technology allows
            you to create a Virtual Version of yourself, a unique digital identity that is fully
            customizable and interoperable to your preferences.
            <br />
            Our platform also offers the ability to interact with other users&apos; avatars in a
            variety of ways, from virtual events, animated social posts, and games to creative
            collaborations. With our In-App NFT marketplace, we bring endless creativity and
            expression to our community. We make it easy to plug and play into your favourite
            experiences seamlessly from a single point of access.
            <br />
            We believe that your digital identity should be fully owned and controlled by you, which
            is why we have designed our platform to be completely decentralized. Your avatar and
            personal data are yours alone, and you can choose to share them with others on your
            terms, as well as monetize your data.
          </div>
          <h4 className='text-shadow mt-[70px]'>What makes Virtual Versions (VV) unique?</h4>
          <div className='mt-[30px]'>
            What makes Virtual Versions (VV) unique?
            <br />
            Comprehensive Ecosystem - Unlike our competitors, who solely offer avatar plugins, our
            platform goes beyond that by providing a comprehensive, ready-to-use ecosystem with
            instant utility.
            <br />
            Major Brand Partnerships - We are proud to have 40+ major global brands already
            partnered with us, further solidifying our position in the market.
            <br />
            Web2 & Web3 Bridge - Our unique selling point lies in bridging the gap between Web2 and
            Web3 through our vast ecosystem, while also ensuring effortless avatar creation acting
            as the central hub for your digital identity.
            <br />
            Hyper-Realistic Avatars - Setting new standards in realism, our avatars are crafted from
            mobile phones, achieving hyper-realistic results.
            <br />
            Freemium Model - Distinguished from other platforms, our revenue model is not solely
            reliant on avatar creation. This flexibility enables us to onboard a significantly
            larger user base by offering a freemium model.
            <br />
            Innovative Revenue Strategy - Our revenue generation strategy is both innovative and
            successful, generating tangible income through established business models such as user
            engagement and distribution (B2B) as well as transaction fees (B2C).
          </div>
          <h4 className='text-shadow mt-[70px]'>Roadmap</h4>
          <img
            className='rounded-[30px] overflow-hidden mt-[30px]'
            src={loadmapSrc}
            alt='loadmap'
          />
          <h4 className='text-shadow mt-[70px]'>Business Model</h4>
          <div className='mt-[30px]'>
            Currently, our biggest source of income is the investment from Acura Capital. This is
            one of the largest Brazilian funds with $1.3 billion under management. Acura Capital is
            a crucial investor and partner in Patex Ecosystem. The fund acquired a 10% stake in
            Patex for $10 million, resulting in the current valuation of the project being $100
            million.
          </div>
          <div className='mt-[30px]'>
            Patex is focused on nurturing robust communities that support its entire ecosystem and
            distributing them across all global regions.
          </div>
          <h6 className='mt-[30px]'>
            The marketing cycle is currently split into 4 different phases:
          </h6>
          <div className='grid gap-[20px] mt-[30px]'>
            <div>
              <h6 className='inline'>Phase 1 — User Acquisition.</h6> Patex focuses on attracting
              new users to join the platform and become part of the vibrant community.
            </div>
            <div>
              <h6 className='inline'>Phase 2 — User Retention.</h6> Once users are on board, Patex
              starts building long-term relationships to foster loyalty.
            </div>
            <div>
              <h6 className='inline'>Phase 3 — Token Launch.</h6> This would expand its reach, and
              increase involvement for users.
            </div>
            <div>
              <h6 className='inline'>Phase 4 — Expansion.</h6> With ongoing institutional
              partnerships and collaborations with governmental entities, Patex aims to facilitate
              the integration of native digital currencies onto its network. This allows the project
              to accommodate billions of users and capture a significant market share.
            </div>
          </div>
          <h4 className='text-shadow mt-[70px]'>Team</h4>
          <img className='rounded-[20px] overflow-hidden mt-[30px]' src={teamsSrc} alt='teams' />
          <h4 className='text-shadow mt-[70px]'>Token utilities?</h4>
          <div className='mt-[30px]'>
            The utility of our token at Virtual Versions is an integral part of our comprehensive
            digital identity solution. By leveraging our token, users gain access to a range of
            powerful features and capabilities within our platform. Ownership, control, and
            monetization - The token empowers users to truly own, control, and monetize their
            digital identity securely and ethically within the Virtual Versions platform.
            <br />
            Collaboration and integration - As the demand for the platform grows, the utility of the
            token extends beyond Virtual Versions, creating opportunities for collaboration and
            integration with other decentralized applications in the digital identity ecosystem.
            <br />
            Exclusive benefits - Token holders enjoy exclusive benefits such as priority access to
            new features, early access to limited edition avatars, and participation in platform
            governance decisions.
            <br />
            Medium of exchange - The token facilitates seamless transactions for purchasing and
            selling digital assets, including 3D generative AI avatars and exclusive content.
            <br />
            Incentivization - The token incentivizes users to actively engage in the platform&apos;s
            social feed, promoting a vibrant and interactive community. By embracing the utility of
            the token, users can unlock a world of possibilities within Virtual Versions and
            actively participate in shaping their digital identity experience.
          </div>
          <h4 className='text-shadow mt-[70px]'>Tokenomics</h4>
          <div className='flex items-center mt-[30px]'>
            <img width={222} height={224} src={tokenomicsChartSrc} alt='tokenomics chart' />
            <div className='grid gap-[5px] ml-[30px]'>
              <LiItem
                className='text-sm font-inter'
                dotColor='bg-[#ffffff]'
                text='18.75% Marketing'
              />
              <LiItem
                className='text-sm font-inter'
                dotColor='bg-[#B9E6FE]'
                text='15% Private Sale'
              />
              <LiItem className='text-sm font-inter' dotColor='bg-[#7CD4FD]' text='13.25% IDO' />
              <LiItem
                className='text-sm font-inter'
                dotColor='bg-[#36BFFA]'
                text='12.5% Liquidity'
              />
              <LiItem
                className='text-sm font-inter'
                dotColor='bg-[#0086C9]'
                text='10.5% Community'
              />
              <LiItem className='text-sm font-inter' dotColor='bg-[#1FA5FF]' text='7.5% Advisors' />
              <LiItem
                className='text-sm font-inter'
                dotColor='bg-[#026AA2]'
                text='7.5% Ecosystem'
              />
              <LiItem
                className='text-sm font-inter'
                dotColor='bg-[#065986]'
                text="6.25% KOL's Round"
              />
              <LiItem className='text-sm font-inter' dotColor='bg-[#0B4A6F]' text='6.25% Team' />
              <LiItem className='text-sm font-inter' dotColor='bg-[#FFFFFF]' text='2.5% Promo' />
            </div>
          </div>
          <h4 className='text-shadow mt-[70px]'>Investors</h4>
          <div className='mt-[30px]'>
            Samsung, Animoca Brands, 10T Holdings, AdUX, Animal Ventures, Cité Gestion, FirstMark
            Capital, Draper Associates
          </div>
          <h4 className='text-shadow mt-[70px]'>Terms of the transaction</h4>
          <div className='mt-[30px] flex flex-col'>
            <span>Evaluation - $1.93 billion</span>
            <span>Round - A</span>
            <span>Token price - $10.50</span>
            <span>Allocation - $100000</span>
          </div>
          <h4 className='text-shadow mt-[70px]'>Conditions of entry into the project</h4>
          <div className='mt-[30px] flex flex-col'>
            <span>Vesting - 24months </span>
            <span>TGE - Q1 25 </span>
            <span>Linear unlocking</span>
          </div>

          <h4 className='text-shadow mt-[70px]'>The Fund&apos;s Commission</h4>
          <div className='mt-[30px] flex flex-col'>
            <span>Setup fee 10% Entering a trade</span>
            <span>Carry 20% From profits</span>
          </div>

          <h4 className='text-shadow mt-[70px]'>Socials</h4>
          <Socials size={50} className='mt-[30px]' />
          <div className='mt-[77px] flex justify-center'>
            <BaseButton className='w-[193px] h-[59px]' onClick={openInvestDialog}>
              Invest
            </BaseButton>
          </div>
        </div>
      </div>

      <InvestDialog open={open} onClose={closeInvsetDialog} />
    </>
  )
}

export default ProjectDetailPage
