<<<<<<< HEAD
import { Typography, Box, Divider } from "@mui/material";
import { Hind } from 'next/font/google';
import SpecialOffers from "@/components/modules/website/home/specialOffers/SpecialOffers";
import CallToAction from "@/components/modules/website/home/callToAction/CallToAction";
import AboutUs from "@/components/modules/website/home/aboutUs/AboutUs";
import FeaturedCollections from '@/components/modules/website/home/featuredCollections/FeaturedCollections';
import { collections } from '@/data/data';
import { Container } from '@mui/material';





export default function Home() {

  return (
    <>

    <SpecialOffers />
    
    <Container>
      <FeaturedCollections collections={collections} />
    </Container>

    <CallToAction />


    <AboutUs />



    

   </>
    
=======
'use client'
import { Container } from '@mui/material';
import FeaturedCollections from '@/components/modules/website/home/featuredCollections/FeaturedCollections';
import { collections } from '@/data/data';

export default function Page() {
  return (
    <Container>
      <FeaturedCollections collections={collections} />
    </Container>
>>>>>>> 0253f432eb5c9f91de9df10a3c5822c730fdaed9
  );
}
