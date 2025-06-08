'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { colors } from '@/constants/colors'
import { FeedbackForm } from '@/features/feedbackForm/ui'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const aboutSteps = [
    {
      h3: 'Маркетинговые стратегии',
      list: [
        'Анализ ниши и аудит конкурентов',
        'Позиционирование и стратегия бренда',
        'Раззработка tone of voice',
        ' Контент- и SMM-стратегия',
        'Медиа- и PR-стратегия',
        'План продвижения и роста',
      ],
    },
    {
      h3: 'Маркетинговые стратегии',
      list: [
        'Анализ ниши и аудит конкурентов',
        'Позиционирование и стратегия бренда',
        'Раззработка tone of voice',
        ' Контент- и SMM-стратегия',
        'Медиа- и PR-стратегия',
        'План продвижения и роста',
      ],
    },
    {
      h3: 'Маркетинговые стратегии',
      list: [
        'Анализ ниши и аудит конкурентов',
        'Позиционирование и стратегия бренда',
        'Раззработка tone of voice',
        ' Контент- и SMM-стратегия',
        'Медиа- и PR-стратегия',
        'План продвижения и роста',
      ],
    },
    {
      h3: 'Маркетинговые стратегии',
      list: [
        'Анализ ниши и аудит конкурентов',
        'Позиционирование и стратегия бренда',
        'Раззработка tone of voice',
        ' Контент- и SMM-стратегия',
        'Медиа- и PR-стратегия',
        'План продвижения и роста',
      ],
    },
    {
      h3: 'Маркетинговые стратегии',
      list: [
        'Анализ ниши и аудит конкурентов',
        'Позиционирование и стратегия бренда',
        'Раззработка tone of voice',
        ' Контент- и SMM-стратегия',
        'Медиа- и PR-стратегия',
        'План продвижения и роста',
      ],
    },
    {
      h3: 'Маркетинговые стратегии',
      list: [
        'Анализ ниши и аудит конкурентов',
        'Позиционирование и стратегия бренда',
        'Раззработка tone of voice',
        ' Контент- и SMM-стратегия',
        'Медиа- и PR-стратегия',
        'План продвижения и роста',
      ],
    },
  ]
  return (
    <div className="w-[1440px] mx-auto">
      <Header />
      <section className="pt-[200px] w-[88%] mx-auto">
        <h2 className="w-2/3 text-center mx-auto">Мы создаем маркетинг, который работает</h2>
        <div className="flex justify-between items-center mt-[50px] text-white">
          <div
            style={{ background: colors.black }}
            className="w-[260px] h-[150px] p-[35px] rounded-[30px]"
          >
            <h3>Стратегия</h3>
            <p>Долгосрочные решения для сильного бренда</p>
          </div>
          <div
            style={{ background: colors.primary }}
            className="w-[390px] h-[220px] p-[35px] rounded-[30px]"
          >
            <Image width={75} height={75} src="/icons/laptopIcon.png" alt="laptop icon" />
            <h3>Продвижение</h3>
            <p>Digital, SMM, реклама и PR</p>
          </div>
          <div
            style={{ background: colors.black }}
            className="w-[260px] h-[150px] p-[35px] rounded-[30px]"
          >
            <h3>Контент</h3>
            <p>Креатив, который вовлекает и продает</p>
          </div>
        </div>

        <p className="text-center mt-[120px]" style={{ color: colors.text }}>
          ЧТО МЫ УМЕЕМ
        </p>
        <h2 className="text-center w-[60%] mx-auto">Наши услуги</h2>

        <div className="aboutSteps mt-[50px]">
          <div
            style={{ background: colors.primary }}
            className="flex p-[35px] gap-[50px] text-white rounded-[35px]"
          >
            <h2 className="w-full">Комплексный маркетинг</h2>
            <ul className="w-full list-dotted text-[30px] list-disc">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>SEO, Контекстная реклама</li>
              <li>Карты</li>
              <li>Чат бот</li>
              <li>PR - работа с блогерами </li>
              <li>Работа с информационными платформами</li>
              <button>nav</button>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-[30px] mt-[50px]">
            {aboutSteps.map((step, index) => (
              <div
                key={index}
                style={{ background: colors.background }}
                className="p-[35px] rounded-[35px]"
              >
                <h3>{step.h3}</h3>
                <ul className="mt-2 list-disc">
                  {step.list.map((listItem, index) => (
                    <li className="ml-6" key={index}>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            style={{ background: colors.background }}
            className="mt-[35px] p-[35px] rounded-[35px]"
          >
            <h3 className="w-full">Брендинг</h3>
            <ul className="w-full list-dotted list-disc ml-10 mt-2">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>SEO, Контекстная реклама</li>
              <li>Карты</li>
              <li>Чат бот</li>
              <li>PR - работа с блогерами </li>
              <li>Работа с информационными платформами</li>
              <button>nav</button>
            </ul>
          </div>
        </div>

        <div className="flex gap-[35px] mt-[200px]">
          <Link href="#" className="rounded-[35px]">
            <Image width={400} height={360} src="/images/about1.png" alt="marketing examples" />
          </Link>
          <Link href="#" className="rounded-[35px]">
            <Image width={400} height={360} src="/images/about2.png" alt="marketing examples" />
          </Link>
          <Link href="#" className="rounded-[35px]">
            <Image width={400} height={360} src="/images/about3.png" alt="marketing examples" />
          </Link>
        </div>
      </section>
      <div className="mt-[100px]">
        <FeedbackForm />
      </div>
      <Footer />
    </div>
  )
}
