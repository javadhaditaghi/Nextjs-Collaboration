'use client'
import { Container } from '@mui/material';
import FeaturedCollections from '@/components/modules/website/home/featuredCollections/FeaturedCollections';
import { collections } from '@/data/data';

export default function Page() {
  return (
    <Container>
      <FeaturedCollections collections={collections} />
    </Container>
  );
}
