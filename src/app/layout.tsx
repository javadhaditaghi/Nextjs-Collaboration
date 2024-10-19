"use client"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; 
import { Container, Typography } from '@mui/material';
import FeaturedCollections from '../components/modules/website/home/featuredCollections/FeaturedCollections';
import { Hind } from 'next/font/google';
import { collections } from '../data/data'; 


const hind = Hind({
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={hind.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Container>
              <Typography variant="h4" component="h1" gutterBottom>
                Featured Collections
              </Typography>
              <FeaturedCollections collections={collections} />
              {children}  
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
