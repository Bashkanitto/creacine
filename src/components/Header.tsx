import React from 'react'
import Link from 'next/link'
import { CustomButton } from './CustomButton'
import { useTranslations } from 'next-intl'

const Header = () => {
  const t = useTranslations('header')
  return (
    <header className="fixed flex h-[61px] sm:h-[104px]  w-full max-w-[1240px] items-center justify-between rounded-4xl bg-white px-[25px] shadow-lg m-4 mt-[20px]">
      <Link
        href="/"
        className="flex items-center justify-center text-6xl font-bold text-orange-500"
      >
        2.47
      </Link>
      <nav className="hidden md:flex ">
        <ul className="flex items-center gap-x-[35px] text-[13px] font-medium text-gray-600">
          <li>
            <Link href="/about" className="hover:text-black">
              {t('about')}
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-black">
              {t('portfolio')}
            </Link>
          </li>
          <li>
            <Link href="/services" className="flex items-center gap-1 hover:text-black">
              {t('services')} ▼
            </Link>
          </li>
          <li>
            <Link href="/reviews" className="hover:text-black">
              {t('reviews')}
            </Link>
          </li>
          <li>
            <Link href="/articles" className="hover:text-black">
              {t('articles')}
            </Link>
          </li>
        </ul>
      </nav>
      <CustomButton type="button"> {t('discussProject')} </CustomButton>
    </header>
  )
}

export default Header
