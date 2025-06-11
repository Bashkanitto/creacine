import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServicesSection from '@/components/services'
import { colors } from '@/constants/colors'
import { FeedbackForm } from '@/features/feedbackForm/ui'
import Reviews from '@/features/reviews/ui'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function HomePage() {
  const t = useTranslations()

  return (
    <main className="w-full max-w-[100vw] lg:max-w-[1440px] mx-auto overflow-x-hidden min-h-screen">
      <Header />
      <section className="relative w-full h-[385px] lg:h-[696px]">
        <Image
          width={1440}
          height={696}
          className="w-full h-full object-cover"
          src="/images/hero.png"
          alt="hero images"
          priority
        />
      </section>

      <section className="flex flex-col lg:flex-row gap-[30px] w-[86%] mx-auto mt-[32px] lg:mt-[100px] min-h-[600px]">
        <div>
          <p style={{ color: colors.text }} className="text-center md:text-start">
            {t('provenByResults')}
          </p>
          <h2 className="mt-[20px] text-center lg:text-start">{t('howWeHelpBusinesses')}</h2>
          <button className="w-[321px] border rounded-full mt-[280px] px-4 py-2 flex justify-center hidden lg:flex">
            {t('seeAllCases')} <ArrowRight />
          </button>
        </div>
        <div className="hidden lg:flex">
          <Image
            width={605}
            height={496}
            className="w-[705px]"
            src="/images/business.png"
            alt="business"
          />
        </div>

        {/* mobile image */}
        <div className="flex flex-col items-center gap-[30px] lg:hidden">
          <Image
            width={358}
            height={273}
            className="min-w-[358px]"
            src="/images/mobile-result1.png"
            alt="business"
          />
          <Image
            width={358}
            height={273}
            className="min-w-[358px]"
            src="/images/mobile-result2.png"
            alt="business"
          />
          <Image
            width={358}
            height={273}
            className="min-w-[358px]"
            src="/images/mobile-result3.png"
            alt="business"
          />
          <button className="w-[321px] border rounded-full px-4 py-2 flex justify-center flex lg:hidden">
            {t('seeAllCases')} <ArrowRight />
          </button>
        </div>
      </section>

      <section className="team w-[86%] mx-auto mt-[50px] lg:mt-[200px] flex flex-col items-center lg:items-start lg:flex-row gap-[50px] min-h-[600px]">
        <Image
          width={358}
          height={359}
          className="w-[358px] lg:w-full h-[359px] lg:h-[463px] "
          src="/images/team.png"
          alt="our team"
        />
        <div>
          <p style={{ color: colors.text }} className="text-center lg:text-start">
            {t('marketingWitchworks')}
          </p>
          <h2 className="text-center lg:text-start">{t('weTwo')}</h2>
          <p
            className="text-[24px] lg:text-[30px] text-center lg:text-start mt-[20px] lg:mt-0"
            style={{ color: colors.text }}
          >
            {t('leadMarketing')}
          </p>
          <button className="w-full lg:w-[321px] border rounded-full mt-[30px] lg:mt-[172px] px-4 py-2 flex justify-center">
            {t('lookNumbers')} <ArrowRight />
          </button>
        </div>
      </section>

      <section className="services w-[86%] mx-auto mt-[100px] lg:mt-[200px] min-h-[600px]">
        <p className="text-center" style={{ color: colors.text }}>
          {t('what_we_do')}
        </p>
        <h2 className="text-center">{t('ourServices')}</h2>
        <ServicesSection />
      </section>

      <section className="about w-[86%] mx-auto mt-[100px] lg:mt-[200px] min-h-[600px]">
        <Reviews />
      </section>

      <section
        style={{ background: colors.background }}
        className="certificates mt-[100px] p-4 lg:p-[100px] flex gap-[40px] min-h-[990px]"
      >
        <div className="hidden lg:block">
          <div className="columns-2 gap-[30px]">
            <Image width={280} height={280} src="/images/certificate5.png" alt="certificate" />
            <Image
              width={280}
              height={280}
              src="/images/certificate7.png"
              alt="certificate"
              className="mt-[30px]"
            />
            <Image
              width={280}
              height={170}
              src="/images/certificate8.png"
              alt="certificate"
              className="mt-[30px]"
            />
            <Image
              width={280}
              height={280}
              src="/images/certificate6.png"
              alt="certificate"
              className="mt-[30px]"
            />
            <Image
              width={280}
              height={170}
              src="/images/certificate9.png"
              alt="certificate"
              className="mt-[30px]"
            />
            <Image
              width={280}
              height={280}
              src="/images/certificate10.png"
              alt="certificate"
              className="mt-[30px]"
            />
          </div>
        </div>
        <div>
          <p style={{ color: colors.text }} className="text-center lg:text-start">
            {t('trust_in_facts')}
          </p>
          <h2 className="mt-[20px] text-center lg:text-start">{t('certificates')}</h2>
          <div className="grid grid-cols-2 gap-[20px] lg:gap-[30px] mt-[20px] lg:mt-[100px]">
            <Image
              width={280}
              height={230}
              src="/images/certificate1.png"
              alt="certificate"
              className="mt-[30px]"
            />
            <Image
              width={280}
              height={200}
              src="/images/certificate2.png"
              alt="certificate"
              className="mt-[30px]"
            />
            <Image
              width={280}
              height={230}
              src="/images/certificate3.png"
              alt="certificate"
              className="lg:mt-[30px]"
            />
            <Image
              width={280}
              height={230}
              src="/images/certificate4.png"
              alt="certificate"
              className="lg:mt-[30px]"
            />

            {/* mobile version */}
            <Image
              width={280}
              height={280}
              src="/images/certificate5.png"
              alt="certificate"
              className="lg:hidden"
            />
            <Image
              width={280}
              height={280}
              src="/images/certificate7.png"
              alt="certificate"
              className="lg:mt-[30px] lg:hidden"
            />
            <Image
              width={280}
              height={280}
              src="/images/certificate6.png"
              alt="certificate"
              className="lg:mt-[30px] lg:hidden"
            />
            <Image
              width={280}
              height={280}
              src="/images/certificate10.png"
              alt="certificate"
              className="lg:mt-[30px] lg:hidden"
            />
          </div>
        </div>
      </section>

      <FeedbackForm />
      <Footer />
    </main>
  )
}
