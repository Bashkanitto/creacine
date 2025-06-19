import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'DVASOROKSEM',
  description:
    'Мы создаем маркетинг, который работает. Увеличьте продажи и узнаваемость вместе с нами.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="font-loose">{children}</body>
    </html>
  )
}
