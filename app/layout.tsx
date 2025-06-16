import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Postalized: The Mission',
  description: 'Game challange by rws to get Postal dud plushie',
  generator: 'v0.dev',
  icons: {
    icon: 'https://danykas30.github.io/Danykas3/milk.ico',
  },
   other: {
    'google-site-verification': 'VAtw_swlB0JSU-hGt9CsIYpc5bsoCLR5gzNkswwlNGo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://danykas30.github.io/Danykas3/milk.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
