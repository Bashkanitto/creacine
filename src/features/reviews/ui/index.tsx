import { colors } from '@/shared/constants/colors'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Paper from '@/components/Paper'

export default function ReviewsSection() {
  const t = useTranslations('reviews')
  const reviews = [
    {
      id: 0,
      image: '/images/review1.png',
      comment: 'reviewComment1',
      name: 'reviewName1',
      role: 'reviewRole1',
    },
    {
      id: 1,
      image: '/images/review2.png',
      comment: 'reviewComment2',
      name: 'reviewName2',
      role: 'reviewRole2',
    },
  ]
  const videos = [
    {
      id: 0,
      video: '/images/video1.webp',
    },
    {
      id: 1,
      video: '/images/video2.webp',
    },
    {
      id: 2,
      video: '/images/video3.webp',
    },
  ]

  return (
    <section className="about w-full lg:w-[86%] mx-auto mt-[50px] lg:mt-[200px] p-2">
      <p className="text-center text-sm" style={{ color: colors.text }}>
        {t('clients')}
      </p>
      <h2 className="text-center mt-[20px] w-full lg:w-[60%] mx-auto text-[42px] lg:text-[58px]">
        {t('realCases')}
      </h2>
      <div className="flex flex-col lg:flex-row gap-[30px] overflow-x-scroll mt-[50px]">
        {reviews.map((review) => (
          <Paper
            key={review.id}
            className="flex flex-col gap-[25px] items-center p-4 lg:p-[50px] rounded-[30px]"
          >
            <p className="font-ivy text-md text-center w-full lg:w-[80%]">{t(review.comment)}</p>
            <Image width={75} height={75} src={review.image} alt="author avatar" priority />
            <h3 className="text-center text-[26px] lg:text-[32px]">{t(review.name)}</h3>
            <p style={{ color: colors.text }} className="text-sm">
              {t(review.role).toLocaleUpperCase()}
            </p>
          </Paper>
        ))}
      </div>
      <div className="video overflow-x-scroll mt-[50px] flex gap-[30px]">
        {videos.map((video) => (
          <Image key={video.id} width={395} height={760} src={video.video} alt="author avatar" />
        ))}
      </div>
    </section>
  )
}
