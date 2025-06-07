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
    <main className="w-[1440px] mx-auto overflow-x-hidden">
      <Header />
      <section className="hero h-[690px]">
        <img src="/images/hero.png" alt="" />
      </section>
      <section className="flex gap-[30px] w-[86%] mx-auto mt-[100px]">
        <div>
          <p style={{ color: colors.text }}>ПРОВЕРЕНО РЕЗУЛЬТАТАМИ</p>
          <h2 className="mt-[20px]">Как мы помогаем бизнесу расти</h2>
          <button className="w-[321px] border rounded-full mt-[280px] px-4 py-2 flex justify-center">
            Смотреть все кейсы <ArrowRight />
          </button>
        </div>
        <img src="/images/business.png" alt="business" />
      </section>

      <section className="team w-[86%] mx-auto mt-[200px] flex gap-[50px]">
        <img src="/images/team.png" alt="our team" />
        <div>
          <p style={{ color: colors.text }}>МАРКЕТИНГ, КОТОРЫЙ РАБОТАЕТ</p>
          <h2>Мы - двасороксемь.</h2>
          <p className="text-[30px]" style={{ color: colors.text }}>
            Ведущее маркетинговое агентство Центральной Азии. Помогаем брендам масштабироваться
            через стратегию, digital, SEO, SMM и брендинг.
          </p>
          <button className="w-[321px] border rounded-full mt-[172px] px-4 py-2 flex justify-center">
            Посмотреть в цифрах <ArrowRight />
          </button>
        </div>
      </section>

      <section className="services w-[86%] mx-auto mt-[200px]">
        <p className="text-center" style={{ color: colors.text }}>
          ЧТО МЫ ДЕЛАЕМ
        </p>
        <h2 className="text-center">Наши услуги</h2>
        <ServicesSection />
      </section>

      <section className="about w-[86%] mx-auto mt-[200px]">
        <Reviews />
      </section>

      <section
        style={{ background: colors.background }}
        className="mt-[100px] certificates p-[100px] flex gap-[60px] h-[990px]"
      >
        <div>
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
          <p style={{ color: colors.text }}>ДОВЕРИЕ В ФАКТАХ</p>
          <h2 className="mt-[20px]">Сертификаты</h2>
          <div className="grid grid-cols-2 gap-[30px] mt-[100px]">
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
              className="mt-[30px]"
            />
            <Image
              width={280}
              height={230}
              src="/images/certificate4.png"
              alt="certificate"
              className="mt-[30px]"
            />
          </div>
        </div>
      </section>

      <FeedbackForm />
      <Footer />
    </main>
  )
}
