'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FeedbackForm } from '@/features/feedbackForm/ui'

export default function FormPage() {
  return (
    <div className="bg-[url('/images/formBackground.png')] bg-no-repeat bg-cover">
      <Header />
      <div className="pt-[100px]">
        <FeedbackForm noBackground />
      </div>
      <Footer />
    </div>
  )
}
