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
<<<<<<< HEAD
  brand: string;
  size: string[];
=======
>>>>>>> 0253f432eb5c9f91de9df10a3c5822c730fdaed9
}

interface FeaturedCollectionsProps {
  collections: Collection[];
}

const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ collections }) => {
  return (
<<<<<<< HEAD
    <Box sx={{ flexGrow: 1, padding:2 }}>

      {/* Section Title */}
      <Typography variant="h4" component="h2" gutterBottom>
        Featured Collections
      </Typography>

      <Grid container spacing={2} justifyContent="center">

        {collections.map((collection, index) => (

          <Grid item xs={12} sm={4} key={collection.id} display="flex" justifyContent="center">
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>

              {/* Product Image */}
              <Image
                src={collection.image}
                alt={collection.title}
                width={458}
                height={index === 0 || index === 5 ? 665 : 500}  // Conditional height for images 1 and 6
                />

              {/* Special styling for the first and sixth images */}
              {index === 0 || index === 5 ? (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '70%',
                    left: '35%',
                    transform: 'translate(-40%, -40%)',
                    color: 'black',
                    padding: '10px',
                    textAlign: 'left',
                  }}
                >
                  {/* Custom text for first and sixth images */}
                  <Typography variant="h5">
                    {index === 0 ? 'Woman 2020 Summer Collection' : 'Men 2020 Summer Collection'}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ 
                      width: '80px', 
                      height: '22px', 
                      borderRadius: '20px', 
                      background: index === 0 ? '#05297F' : '#FC9D9D' /* Blue button for first, pink for sixth */
                    }}
                  >
=======
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
>>>>>>> 0253f432eb5c9f91de9df10a3c5822c730fdaed9
                    <Typography sx={{ color: 'white', lineHeight: 1, fontSize: 12 }}>
                      {collection.shop}
                    </Typography>
                  </Button>
                </Box>
              ) : (
<<<<<<< HEAD

                <Box>
                  {/* Star rating section */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 1,
                    }}
                  >

                    {/* Star Rating */}
                    <Rating value={4} readOnly sx={{ width: '100px', height: '14px' }} />
                    <Typography variant="body2" sx={{ color: 'gray', fontWeight: 'light' }}>
                      {collection.brand}
                    </Typography>
                  </Box>

                  {/* Product title */}
                  <Typography variant="h6" sx={{ mt: 2 }}>{collection.title}</Typography>


                  {/* Color options (color circles) */}
                  <Box sx={{ display: 'flex', mt: 1, alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {[...Array(4)].map((_, idx) => (
                        <Box key={idx} sx={{
                          width: '16px',
                          height: '15px',
                          borderRadius: '50%',
                          backgroundColor: ['#622060', '#1473A9', '#FBDADA', '#519D04'][idx],
                        }} />
                      ))}
                    </Box>

                    {/* Size buttons */}
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                      {collection.size.map((size, idx) => (
                        <Button
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '4px',
                            borderRadius: '50%',
                            transition: 'all 0.2s ease-in-out',
                            backgroundColor: 'transparent',
                            color: 'gray',
                            fontWeight: 'light',
                            '&:hover': {
                              width: '20px',
                              height: '20px',
                              backgroundColor: '#F1F1F1',
                              border: '2px solid #C4C4C4',
                              color: '#05297F',
                            },
                          }}
                        >
                          <Typography variant="body2">
                            {size} {/* Size text */}
                          </Typography>
                        </Button>
                      ))}
                    </Box>
                  </Box>

                  {/* Price and shopping cart button */}
                  <Box sx={{ display: 'flex', mt: 1, alignItems: 'center', gap: 2 }}>
                    {/* Cart icon button */}
                    <Button variant="contained" startIcon={<LocalMallIcon />} sx={{ width: '38px', height: '38px', borderRadius: '50%', background: '#FC9D9D' }} />
                    {/* Price */}
                    <Typography variant="h6" sx={{ color: '#05297F' }}>{collection.price}</Typography>
=======
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
>>>>>>> 0253f432eb5c9f91de9df10a3c5822c730fdaed9
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
