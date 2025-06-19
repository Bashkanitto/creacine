import Paper from '@/components/Paper'
import { colors } from '@/shared/constants/colors'
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
    messageKey: string
    category: string
  }
  const articles: ArticleType[] = [
    {
      id: 0,
      image: '/images/article1.png',
      messageKey: 'articleMessage1',
      category: 'branding',
    },
    {
      id: 1,
      image: '/images/article2.png',
      messageKey: 'articleMessage2',
      category: 'collections',
    },
  ]

  return (
    <>
      <p className="text-center text-sm" style={{ color: colors.text }}>
        {t('subtitle')}
      </p>
      <h2 className="text-center w-full lg:w-[60%] mx-auto text-[42px] lg:text-[58px]">
        {t('title')}
      </h2>
      <div className="categories mt-[20px] lg:mt-[50px] flex justify-between gap-[15px] overflow-x-scroll">
        {categories.map((category) => (
          <Paper style={{ color: colors.text }} className="py-2 px-4 rounded-full " key={category}>
            <h4>{t(category)}</h4>
          </Paper>
        ))}
      </div>
      <div className="mt-[50px] flex flex-col lg:flex-row gap-[30px]">
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
              <p className="text-white text-[18px] lg:text-[30px] leading-tight">
                {t(article.messageKey)}
              </p>
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
