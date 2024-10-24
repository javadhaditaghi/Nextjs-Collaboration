import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import './globals.css';
import type { Metadata } from "next";
import { Hind } from 'next/font/google';

const hind = Hind({
<<<<<<< HEAD
  weight: "400",
=======
  weight: ["300", "400", "500", "600", "700"],
>>>>>>> 0253f432eb5c9f91de9df10a3c5822c730fdaed9
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "TraliShop",
    template: "TraliShop|%s"
  },
  description: "Modern stylist wear store!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hind.className}>  {/* اصلاح: hind.className */}
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
