import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import './globals.css';
import type { Metadata } from "next";
import { Hind } from 'next/font/google';
import Footer from '@/components/modules/website/footer/Footer';

const hind = Hind({
  weight: ["300", "400", "500", "600", "700"], // Verify that '100' is available; otherwise use '400' or another valid weight
  subsets: ["latin"],
  display: 'swap',
  // adjustFontFallback: false
});

export const metadata: Metadata = {
  title: {
    default:"TraliShop",
    template:"TraliShop|%s"
  },
  description: "Modern stylist wear store!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hind.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
            <Footer/>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
