import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { Toaster } from '@/components/ui/sonner'
import { AppStateProvider } from '@/lib/utils/app-state'
import { AuthProvider } from '@/components/auth-provider' // Import AuthProvider
import { useRouter } from 'next/navigation'; // Import useRouter
import { useEffect } from 'react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const title = 'Morphic'
const description =
  'A fully open-source AI-powered answer engine with a generative UI.'

export const metadata: Metadata = {
  metadataBase: new URL('https://morphic.sh'),
  title,
  description,
  openGraph: {
    title,
    description
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@miiura'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
    const router = useRouter();

    useEffect(() => {
        // Check if the current route is the landing page
        const isLandingPage = router.pathname === '/';

        // If it's the landing page, redirect to /home
        if (isLandingPage) {
            router.push('/home');
        }
    }, [router]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppStateProvider>
            <AuthProvider> {/* Wrap with AuthProvider */}
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Sidebar />
              <Footer />
              <Toaster />
            </AuthProvider>
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
