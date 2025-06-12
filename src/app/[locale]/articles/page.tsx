'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ArticlesComponent from '@/features/articles/ui'
import { FeedbackForm } from '@/features/feedbackForm/ui'

export default function ArticlesPage() {
  return (
    <div className="w-full lg:w-[1440px] mx-auto">
      <Header />
      <div className="pt-[150px] w-[88%] mx-auto">
        <ArticlesComponent />
      </div>
      <div className="mt-[100px]">
        <FeedbackForm />
      </div>
      <Footer />
    </div>
  )
}
