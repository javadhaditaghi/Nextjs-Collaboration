import React from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

interface Collection {
  id: number;
  title: string;
  description?: string;
  image: string;
  price: string;
  shop?: string;
}

interface FeaturedCollectionsProps {
  collections: Collection[];
}

const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ collections }) => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Featured Collections
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {collections.map((collection, index) => (
          <Grid item xs={12} sm={4} key={collection.id} display="flex" justifyContent="center">
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
              <Image src={collection.image} alt={collection.title} width={300} height={300} />
              {index === 0 || index === 5 ? (
                <Box sx={{ position: 'absolute', top: '70%', left: '35%', transform: 'translate(-40%, -40%)', color: 'black', padding: '10px', textAlign: 'left' }}>
                  <Typography variant="h5">{collection.description}</Typography>
                  <Button variant="contained" sx={{ width: '80px', height: '22px', borderRadius: '20px', background: '#05297F' }}>
                    <Typography sx={{ color: 'white', lineHeight: 1, fontSize: 12 }}>
                      {collection.shop}
                    </Typography>
                  </Button>
                </Box>
              ) : (
                <Box sx={{ padding: 2 }}>
                  <Rating value={4} readOnly sx={{ mt: 1, width: '100px', height: '14px' }} />
                  <Typography variant="h6">{collection.title}</Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                    {[...Array(4)].map((_, idx) => (
                      <Box key={idx} sx={{
                        width: '16px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: ['#622060', '#1473A9', '#FBDADA', '#519D04'][idx],
                      }} />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', mt: 2, alignItems: 'center', gap: 3 }}>
                    <Button variant="contained" startIcon={<LocalMallIcon />} sx={{ width: '38px', height: '38px', borderRadius: '50%', background: '#FC9D9D' }} />
                    <Typography variant="h6" sx={{ color: '#05297F', lineHeight: 1 }}>{collection.price}</Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedCollections;
