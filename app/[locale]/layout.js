import { NextIntlClientProvider } from 'next-intl';
import "../globals.css"
import { Inter, Roboto_Mono,Cairo,Sans_serif } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
 

const cairo = Cairo({
  subsets: ['latin'],
  display: 'swap',
})
 
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' },
    { locale: 'tr' },
  ];
}

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.log("notfoud")
  }

  return (
    <html lang={locale}>
      <body  style={{ fontFamily: 'Cairo, sans-serif' }}
       className={cairo.className} >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}