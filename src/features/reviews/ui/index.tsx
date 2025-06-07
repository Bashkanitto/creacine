import { colors } from '@/constants/colors'
import Image from 'next/image'

export default function ReviewsComponent() {
  const reviews = [
    {
      id: 0,
      image: '/images/review1.png',
      comment:
        '"Сотрудничество с двасороксемь - это про стратегию, вовлеченность и маркетинг, который работает"',
      name: 'Дидар Шаухаров',
      role: 'Qazaqstan catecing solutions',
    },
    {
      id: 1,
      image: '/images/review2.png',
      comment:
        '"Сотрудничество с двасороксемь - это про стратегию, вовлеченность и маркетинг, который работает"',
      name: 'Дидар Шаухаров',
      role: 'Qazaqstan catecing solutions',
    },
  ]
  const videos = [
    {
      id: 0,
      video: '/images/video1.png',
    },
    {
      id: 1,
      video: '/images/video2.png',
    },
    {
      id: 2,
      video: '/images/video3.png',
    },
  ]

  return (
    <>
      <p className="text-center" style={{ color: colors.text }}>
        КЛИЕНТЫ О НАС
      </p>
      <h2 className="text-center mt-[20px] w-[60%] mx-auto">Реальные кейсы, реальные результаты</h2>
      <div className="flex gap-[30px] overflow-x-scroll mt-[50px]">
        {reviews.map((review) => (
          <div
            style={{ background: colors.background }}
            key={review.id}
            className="flex flex-col gap-[25px] items-center p-[50px] rounded-[30px]"
          >
            <p className="text-center w-[80%]">{review.comment}</p>
            <Image width={75} height={75} src={review.image} alt="author avatar" />
            <h3>{review.name}</h3>
            <p style={{ color: colors.text }}>{review.role}</p>
          </div>
        ))}
      </div>
      <div className="video overflow-x-scroll mt-[50px] flex gap-[30px]">
        {videos.map((video) => (
          <Image key={video.id} width={395} height={760} src={video.video} alt="author avatar" />
        ))}
      </div>
    </>
  )
}
