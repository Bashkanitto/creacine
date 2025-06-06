import React from 'react'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  // const t = useTranslations('footer')

  return (
    <footer className="bg-black h-[412px] w-full text-white">
      <div className="flex gap-[50px] pt-[100px] px-[100px]">
        <div className="w-full">
          <h2 className="text-[58px]">2.47</h2>
          <p className="flex gap-2 items-center text-[30px]">
            <Mail />
            dvasoroksem@gmail.com
          </p>
          <p className="flex gap-2 items-center text-[30px]">
            <Phone />
            +7 777 666 02 47
          </p>
        </div>
        <div className="flex flex-col justify-end w-full ">
          <p>ул. Калибек Куанышбаев, 11Б, Астана, Казахстан</p>
          <div className="flex gap-2 mt-[25px]">
            <Link href="#">
              <img src="/icons/instagram.svg" alt="" />
            </Link>
            <Link href="#">
              <img src="/icons/tiktok.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-[60px] w-[87%] mx-auto text-neutral-700" />
      <p className="flex justify-center mt-[30px]">DVASOROKSEM GROUP - ALL RIGHTS RESERVED</p>
    </footer>
  )
}

export default Footer
