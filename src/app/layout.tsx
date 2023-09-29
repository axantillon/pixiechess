import NavBar from '@/components/NavBar';
import ProviderWrapper from '@/lib/providers/ProviderWrapper';
import { cn } from '@/lib/utils/cn';
import type { Metadata } from 'next';
import LocalFont from 'next/font/local';
import '../lib/styles/globals.css';

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
      <body className={cn(font.className, "w-screen h-screen")} style={{
        backgroundImage: `url(/background2.png)`,
      }}>
        <ProviderWrapper>
          <NavBar />
          {children}
        </ProviderWrapper>
      </body>
    </html>
  )
}
