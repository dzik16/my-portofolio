import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'M. Dzikri Alfarisy – Senior Mobile & Full-stack Engineer',
  description: 'Senior Mobile & Full-stack Engineer with 5+ years building production-grade apps in React Native, Android/Kotlin, React/Next.js, and Go — from system design to deployment and production monitoring.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}