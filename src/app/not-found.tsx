'use client'
import { CustomButton } from '@/components/CustomButton'
import { colors } from '@/constants/colors'
import { Home } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-[58px] font-bold">Ой, кажется, тут ничего нет</h2>
      <h2 className="text-[58px] font-bold" style={{ color: colors.text }}>
        Зато на главной - всё, что нужно
      </h2>
      <img src="/images/404.png" alt="" />
      <CustomButton type="button" className="p-2 flex gap-2" onClick={() => router.back()}>
        <Home />
        Вернутся на главную
      </CustomButton>
    </div>
  )
}
