import { NextIntlClientProvider } from 'next-intl';
import "./globals.css"
import { Inter, Roboto_Mono,Cairo } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})


const cairo = Cairo({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',

})


export default async function RootLayout({ children }) {

  return (
    <html >
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}