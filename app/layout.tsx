import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'M. Dzikri Alfarisy – Mobile Developer',
  description: 'Mobile & Web Developer crafting seamless digital experiences. Specialized in React Native, ReactJS & Android (Kotlin).',
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