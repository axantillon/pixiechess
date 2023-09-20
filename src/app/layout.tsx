import Background from '@/lib/assets/background.png';
import ProviderWrapper from '@/lib/providers/ProviderWrapper';
import { cn } from '@/lib/utils/cn';
import type { Metadata } from 'next';
import LocalFont from 'next/font/local';
import Image from 'next/image';
import '../lib/styles/globals.css';
import NavBar from '@/components/layout/NavBar';

const font = LocalFont({
  src: '../lib/font/font.woff2'
})

export const metadata: Metadata = {
  title: 'PixieChess',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "min-h-screen w-screen")}>
        <Image alt="background" src={Background} quality={100} fill sizes='100vw' style={{ objectFit: 'cover', zIndex: "-1" }} />
        <ProviderWrapper>
          <NavBar />
          {children}
        </ProviderWrapper>
      </body>
    </html>
  )
}
