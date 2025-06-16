'use client'
import { Link as LinkIcon, Paperclip } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { CustomInput } from '../../../components/CustomInput'
import { colors } from '@/shared/constants/colors'
import { CustomButton } from '../../../components/CustomButton'
import Link from 'next/link'
import { useState } from 'react'

export function FeedbackForm({ noBackground }: { noBackground?: boolean }) {
  const [selectedAim, setSelectedAim] = useState<number | null>(null)
  const t = useTranslations('FeedBackForm')

  const aims = [
    { label: 'comprehensive' },
    { label: 'instagram' },
    { label: 'production' },
    { label: 'creative_task' },
  ]

  return (
    <section className="w-full h-full lg:h-[752px] mt-[30px] lg:mt-0">
      <div className="flex flex-col items-center lg:items-start lg:flex-row h-full">
        <div
          style={{
            background: noBackground ? 'none' : "url('/images/feedbackBackground.jpg')",
            backgroundRepeat: 'no-repeat',
          }}
          className="w-[90%] lg:w-[80%] h-[224px] lg:h-full rounded-4xl lg:rounded-l-[0px] lg:rounded-r-4xl p-[30px] lg:p-[100px]"
        >
          <h1 className="text-[42px] lg:text-[58px] w-full lg:w-[70%]  text-white text-center lg:text-start">
            {t('ReadyToDiscuss')}
          </h1>
          <Link
            href="#"
            className="mt-2 underline flex gap-2 text-white justify-center lg:justify-start"
          >
            <LinkIcon />
            {t('downloadBrif')}
          </Link>
        </div>

        <form className="w-full px-4 py-4">
          <div className="flex flex-col lg:flex-row mt-[30px] lg:mt-[100px] gap-4 lg:gap-[30px] justify-between">
            <CustomInput type="text" placeholder={t('name')} />
            <CustomInput type="text" placeholder="+7" />
          </div>
          <CustomInput
            className="w-full mt-4 lg:mt-[35px]"
            type="text"
            placeholder={t('telegramOrEmail')}
          />
          <div className="mt-4 lg:mt-[35px] flex gap-1 justify-between">
            {aims.map((aim, idx) => (
              <button
                key={aim.label}
                type="button"
                onClick={() => setSelectedAim(idx)}
                style={{
                  background: selectedAim === idx ? colors.primary : colors.secondary,
                  color: selectedAim === idx ? 'white' : colors.text,
                }}
                className="py-0 lg:py-2 rounded-full w-full text-[12px] lg:text-1xl font-bold"
              >
                {t(aim.label)}
              </button>
            ))}
          </div>
          <textarea
            style={{
              backgroundColor: colors.secondary,
              borderColor: colors.border,
              borderWidth: '1px',
              padding: '18px',
              borderRadius: '14px',
            }}
            placeholder={t('describeProjectOrTask')}
            className="w-full mt-4 lg:mt-[35px] rounded-2xl"
          />

          <label
            style={{ color: colors.text }}
            className="flex gap-1 mt-4 lg:mt-[35px]"
            htmlFor="file"
          >
            <Paperclip />
            {t('attachFile')}
          </label>
          <input type="file" name="file" id="file" className="hidden" />
          <CustomButton type="button" className="w-full mt-4 lg:mt-[35px]">
            {t('sendMessage')}
          </CustomButton>
        </form>
      </div>
    </section>
  )
}
