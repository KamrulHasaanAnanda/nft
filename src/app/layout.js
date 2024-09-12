import localFont from "next/font/local";
import { DM_Sans } from 'next/font/google'
import "./globals.css";

const integralCF = localFont({
  src: [

    {

      path: '../../public/fonts/Fontspring-DEMO-integralcf-regular.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-integralcf-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-integralcf-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-integralcf-extrabold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-integral-cf',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${integralCF.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
