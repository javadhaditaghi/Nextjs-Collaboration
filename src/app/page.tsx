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
    
  );
}
