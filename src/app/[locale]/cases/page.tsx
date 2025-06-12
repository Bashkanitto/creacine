'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { colors } from '@/constants/colors'
import { FeedbackForm } from '@/features/feedbackForm/ui'
import { InstagramIcon, PlusCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function CasesPage() {
  const t = useTranslations('cases')
  const cases = [
    'case_content_brand_values',
    'case_unique_brand_design',
    'case_contests_engagement',
    'case_targeting_key_visual',
  ]
  return (
    <div className="w-[1440px] mx-auto">
      <Header />
      <section className='w-full h-[814px] bg-[url("/images/casesHero.png")] bg-no-repeat'></section>
      <section className="mt-[100px] w-[88%] mx-auto mt">
        <div className="flex justify-end">
          <div className="w-[50%] mt-[20px]">
            <p className="text-[14px]" style={{ color: colors.text }}>
              {t('case')}
            </p>
            <h2 className="w-[65%]">СОЗДАЕМ МИР ЗАБОТЫ И ЗДОРОВЬЯ</h2>
            <p className="text-[30px] mt-[20px]" style={{ color: colors.text }}>
              {t('splat_description')}
            </p>
            <button
              className="flex px-4 py-4 rounded-full text-white mt-[50px] gap-2 "
              style={{ background: colors.primary }}
            >
              <InstagramIcon />
              {t('splat')}
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center  mt-[50px] text-white">
          <div
            style={{ background: colors.primary }}
            className="w-[390px] h-[220px] p-[35px] rounded-[30px] flex flex-col justify-between"
          >
            <p className="text-[30px]/8">{t('microblogger_posts')}</p>
            <p className="text-[72px]">250+</p>
          </div>
          <div
            style={{
              background: colors.background,
              color: colors.black,
              borderColor: colors.border,
            }}
            className="w-[390px] h-[286px] p-[35px] rounded-[30px] border flex flex-col justify-between"
          >
            <p className="text-[30px]/8">{t('subscribers')}</p>
            <p className="text-[72px]">+5000</p>
          </div>
          <div
            style={{
              background: colors.background,
              color: colors.black,
              borderColor: colors.border,
            }}
            className="w-[390px] h-[317px] p-[35px] rounded-[30px] border flex flex-col justify-between"
          >
            <p className="text-[30px]/8">{t('account_engagement_increase')}</p>
            <p className="text-[72px]">4373%</p>
          </div>
        </div>
        <div className="flex justify-end mt-[100px]">
          <div className="w-[50%] mt-[20px]">
            <h2>{t('client_task_question')}</h2>
            <p className="text-[30px] mt-[20px]" style={{ color: colors.text }}>
              {t('splat_goal')}
            </p>
            <ul className="list-disc ml-12 mt-[20px]">
              <li>{t('increase_market_awareness')}</li>
              <li>{t('build_active_community')}</li>
              <li>{t('develop_smm_identity')}</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-[30px] mt-[100px]">
          <Image width={745} height={682} src="/images/casePR1.png" alt="PR image" />
          <div
            style={{ background: colors.primary }}
            className="flex flex-col justify-center items-center self-center rounded-[30px] text-white px-[85px] py-[30px] w-[465px] h-[276px]"
          >
            <p className="text-center text-[30px]">{t('launched_pr_campaign')}</p>
            <button>
              <PlusCircle className="w-10 h-10" />
            </button>
          </div>
        </div>

        <div className="flex gap-[50px] mt-[100px]">
          <Image
            width={651}
            height={726}
            className="max-h-[726px]"
            src="/images/casePR2.png"
            alt="PR image"
          />
          <div className="flex flex-col gap-[30px]">
            {cases.map((cases, index) => (
              <div
                key={index}
                style={{
                  background: index === 0 ? colors.primary : colors.background,
                  color: index === 0 ? 'white' : colors.text,
                }}
                className="flex justify-center items-center rounded-[30px] text-white px-[30px] py-[20px] max-w-[539px]"
              >
                <button>
                  <PlusCircle className="w-10 h-10" />
                </button>
                <p className="text-center text-[30px]">{t(cases)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-[100px]">
        <FeedbackForm />
      </div>
      <Footer />
    </div>
  )
}
