import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mahmudul Hasan — CSE Student & Web Developer',

  description:
    'Mahmudul Hasan is a CSE student and web developer building modern web applications, APIs, and practical software projects.',

  keywords: [
    'Mahmudul Hasan',
    'CSE student',
    'Web Developer',
    'Software Developer',
    'React Developer',
    'TypeScript Developer',
    'Python Developer',
    'PHP Developer',
    'Web Development',
    'Portfolio',
  ],

  authors: [{ name: 'Mahmudul Hasan' }],

  openGraph: {
    title: 'Mahmudul Hasan — CSE Student & Web Developer',
    description:
      'Personal portfolio of Mahmudul Hasan, a CSE student and web developer building modern web applications and useful software.',
    type: 'website',
    siteName: 'Mahmudul Hasan',
  },

icons: {
  icon: [
    {
      url: 'https://i.ibb.co/xV9g0R1/0a1d6d5558.jpg',
      type: 'image/jpeg',
    },
  ],
  apple: 'https://i.ibb.co/xV9g0R1/0a1d6d5558.jpg',
},
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: 'white',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: 'black',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}