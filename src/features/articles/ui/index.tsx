import { colors } from '@/constants/colors'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function ArticlesComponent() {
  const t = useTranslations('category')
  const categories = [
    'branding',
    'marketing',
    'trands',
    'userful',
    'psychology',
    'strategy',
    'any',
    'collections',
  ]
  type ArticleType = {
    id: number
    image: string
    message: string
    category: string
  }
  const articles: ArticleType[] = [
    {
      id: 0,
      image: '/images/article1.png',
      message: 'Почему маскоты являются мощным инструментом дизайна',
      category: 'branding',
    },
    {
      id: 1,
      image: '/images/article2.png',
      message: 'Полезные ресурсы для дизайнеров',
      category: 'collections',
    },
  ]

  return (
    <>
      <p className="text-center" style={{ color: colors.text }}>
        ЭКСПЕРТИЗА И ТРЕНДЫ
      </p>
      <h2 className="text-center w-[60%] mx-auto">Наши статьи</h2>
      <div className="categories mt-[20px] flex justify-between gap-[15px] overflow-x-scroll">
        {categories.map((category) => (
          <div
            style={{ background: colors.background, color: colors.text }}
            className="py-2 px-4 rounded-full "
            key={category}
          >
            <h4>{t(category)}</h4>
          </div>
        ))}
      </div>
      <div className="mt-[50px] flex gap-[30px] overflow-x-scroll">
        {articles.map((article) => (
          <article
            style={{ background: colors.primary }}
            key={article.id}
            className="p-[30px] flex gap-[30px] rounded-[30px] max-w-[650px]"
          >
            <Image
              width={151}
              height={262}
              className="min-w-[151px]"
              src={article.image}
              alt="article image"
            />
            <div className="flex flex-col justify-between items-start">
              <p className="text-white text-[30px] leading-tight">{article.message}</p>
              <button style={{ background: 'white' }} className="py-2 px-4 rounded-full">
                {t(article.category)}
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
