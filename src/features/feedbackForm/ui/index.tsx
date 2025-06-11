'use client'
import { Link as LinkIcon, Paperclip } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { CustomInput } from '../../../components/CustomInput'
import { colors } from '@/constants/colors'
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
    <section
      style={{
        background: noBackground ? 'none' : "url('/images/feedbackBackground.jpg')",
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full h-[752px]"
    >
      <div className="flex w-[88%] mx-auto">
        <div className="w-[80%] rounded-r-4xl mt-[100px]">
          <h1 className="text-[58px] w-[70%] text-white">{t('ReadyToDiscuss')}</h1>
          <Link href="#" className="mt-2 underline flex gap-2 text-white">
            <LinkIcon />
            {t('downloadBrif')}
          </Link>
        </div>

        <form className="w-full">
          <div className="flex mt-[100px] gap-[30px] justify-between">
            <CustomInput type="text" placeholder={t('name')} />
            <CustomInput type="text" placeholder="+7" />
          </div>
          <CustomInput
            className="w-full mt-[35px]"
            type="text"
            placeholder={t('telegramOrEmail')}
          />
          <div className="mt-[35px] flex gap-1 justify-between">
            {aims.map((aim, idx) => (
              <button
                key={aim.label}
                type="button"
                onClick={() => setSelectedAim(idx)}
                style={{
                  background: selectedAim === idx ? colors.primary : colors.secondary,
                  color: selectedAim === idx ? 'white' : colors.text,
                }}
                className="py-2 rounded-full w-full text-1xl font-bold"
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
            className="w-full mt-[35px] rounded-2xl"
          />

          <label style={{ color: colors.text }} className="flex gap-1 mt-[35px]" htmlFor="file">
            <Paperclip />
            {t('attachFile')}
          </label>
          <input type="file" name="file" id="file" className="hidden" />
          <CustomButton type="button" className="w-full mt-[35px]">
            {t('sendMessage')}
          </CustomButton>
        </form>
      </div>
    </section>
  )
}
