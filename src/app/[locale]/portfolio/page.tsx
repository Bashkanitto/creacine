'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FeedbackForm } from '@/features/feedbackForm/ui'
import PortfolioComponent from 'features/portfolio/ui'

export default function PortfolioPage() {
  return (
    <div className="w-[1440px] mx-auto">
      <Header />
      <div className="pt-[200px] w-[88%] mx-auto">
        <PortfolioComponent />
      </div>
      <div className="mt-[100px]">
        <FeedbackForm />
      </div>
      <Footer />
    </div>
  )
}
