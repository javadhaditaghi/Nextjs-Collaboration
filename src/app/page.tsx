
import { Typography, Box, Divider } from "@mui/material";
import { Kanit } from "next/font/google";
import SpecialOffers from "@/components/modules/website/home/specialOffers/SpecialOffers";
import CallToAction from "@/components/modules/website/home/callToAction/CallToAction";
import AboutUs from "@/components/modules/website/home/aboutUs/AboutUs";





export default function Home() {

  return (
    <>

    <SpecialOffers />


    <CallToAction />


    <AboutUs />



    

   </>
    
  );
}
