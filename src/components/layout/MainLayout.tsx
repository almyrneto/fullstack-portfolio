import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="page">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
