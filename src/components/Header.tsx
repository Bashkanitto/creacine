import React from 'react'
import Link from 'next/link'
import { CustomButton } from './CustomButton'
import { useTranslations } from 'next-intl'
import { Menu } from 'lucide-react'

const Header = () => {
  const t = useTranslations('header')
  return (
    <header className="fixed top-[20px] left-0 right-0 h-[61px] sm:h-[104px] w-[90%] xl:w-full max-w-[1240px] mx-auto flex items-center justify-between rounded-[30px] bg-white px-[25px] shadow-lg">
      <Link
        href="/"
        className="flex items-center justify-center text-6xl font-bold text-orange-500"
      >
        2.47
      </Link>
      <nav className="hidden md:flex ">
        <ul className="flex items-center gap-x-[35px] text-[16px] font-medium text-gray-600">
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
      <div className="flex items-center gap-2">
        <Link href="/form">
          <CustomButton type="button" className="w-[220px] hidden md:flex">
            {t('discussProject')}
          </CustomButton>
        </Link>
        <button className="flex md:hidden h-full">
          <Menu />
        </button>
      </div>
    </header>
  )
}

export default Header
