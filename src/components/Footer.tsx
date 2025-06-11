import React from 'react'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')

  return (
    <footer className="bg-black h-full lg:h-[412px] w-full text-white">
      <div className="flex flex-col lg:flex-row gap-[50px] lg:pt-[100px] p-4 lg:px-[100px]">
        <div className="w-full">
          <h2>2.47</h2>
          <p className="flex gap-2 items-center text-[20px] lg:text-[30px]">
            <Mail />
            dvasoroksem@gmail.com
          </p>
          <p className="flex gap-2 items-center text-[20px] lg:text-[30px]">
            <Phone />
            +7 777 666 02 47
          </p>
        </div>
        <div className="flex flex-col justify-end w-full ">
          <p>{t('address')}</p>
          <div className="flex gap-2 mt-[25px]">
            <Link href="#">
              <img src="/icons/instagram.svg" alt="instagram" />
            </Link>
            <Link href="#">
              <img src="/icons/tiktok.svg" alt="tiktok" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-4 lg:mt-[60px] w-[87%] mx-auto text-neutral-700" />
      <p className="flex justify-center mt-[30px] p-4">
        {t('dvasoroksemGroupAllRightsReserveded')}
      </p>
    </footer>
  )
}

export default Footer
