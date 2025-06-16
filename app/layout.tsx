import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Postalized: The Mission',
  description: 'Postal dud plushie',
  generator: 'v0.dev',
  icons: {
    icon: '/Images/pixilart-drawing (3) (1).ico',
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
        <link rel="icon" href="/Images/pixilart-drawing (3) (1).ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
