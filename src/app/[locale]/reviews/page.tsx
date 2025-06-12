'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FeedbackForm } from '@/features/feedbackForm/ui'
import ReviewsComponent from '@/features/reviews/ui'

export default function ReviewPage() {
  return (
    <div className="w-full lg:w-[1440px] mx-auto">
      <Header />
      <div className="pt-[200px] w-[88%] mx-auto">
        <ReviewsComponent />
      </div>
      <div className="mt-[100px]">
        <FeedbackForm />
      </div>
      <Footer />
    </div>
  )
}
