import { colors } from '@/shared/constants/colors'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function CertificatesSection() {
  const t = useTranslations()

  return (
    <section
      aria-label="секция сертификатов"
      style={{ background: colors.background }}
      className="certificates mt-[100px] p-4 lg:p-[100px] flex gap-[40px] h-full lg:h-[990px]"
    >
      <div className="hidden lg:block">
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
        <p style={{ color: colors.text }} className="text-center lg:text-start text-sm">
          {t('trust_in_facts')}
        </p>
        <h2 className="mt-[20px] text-center lg:text-start text-[42px] lg:text-[58px]">
          {t('certificates')}
        </h2>
        <div className="grid grid-cols-2 gap-[20px] lg:gap-[30px] mt-[20px] lg:mt-[100px]">
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
            className="lg:mt-[30px]"
          />
          <Image
            width={280}
            height={230}
            src="/images/certificate4.png"
            alt="certificate"
            className="lg:mt-[30px]"
          />

          {/* mobile version */}
          <Image
            width={280}
            height={280}
            src="/images/certificate5.png"
            alt="certificate"
            className="lg:hidden"
          />
          <Image
            width={280}
            height={280}
            src="/images/certificate7.png"
            alt="certificate"
            className="lg:mt-[30px] lg:hidden"
          />
          <Image
            width={280}
            height={280}
            src="/images/certificate6.png"
            alt="certificate"
            className="lg:mt-[30px] lg:hidden"
          />
          <Image
            width={280}
            height={280}
            src="/images/certificate10.png"
            alt="certificate"
            className="lg:mt-[30px] lg:hidden"
          />
        </div>
      </div>
    </section>
  )
}
