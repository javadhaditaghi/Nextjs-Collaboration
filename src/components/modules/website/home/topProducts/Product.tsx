import Image from "next/image";
import Grid from "@mui/material/Grid2";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import topproductscard from "@/data/data";
import {TopProduct} from "@/data/typetopcard"
// topproduct array that contains 8 productct feature, is located in data file

export default function Product() {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Responsive Grid */}
      <Grid container spacing={4}>
        {topproductscard.map((product: TopProduct) => (
          <Grid sx={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
            <Card sx={{ height: "420px" }}>
              {" "}
              {/* Product Image */}
              <Box
                sx={{ position: "relative", height: "250px", width: "100%" }}>
                {" "}
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  style={{
                    borderRadius: "4px 4px 0 0",
                  }}
                />
              </Box>
              <CardContent>
                {/* zara and stars */}
                <Grid container alignItems="center">
                  <Grid>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {[...Array(5)].map((_, index) =>
                        index < 4 ? ( 
                          <StarIcon key={index} sx={{ color: "#FFBD69" }} />//setare por 4
                        ) : (
                          
                          <StarBorderIcon
                            key={index}
                            sx={{ color: "#FFBD69" }}//setare khali 1
                          />
                        )
                      )}
                    </Box>
                  </Grid>
                  <Grid>
                    <Typography
                      variant="h6"
                      sx={{
                        ml: 12,
                        color: "#B1B1B1",
                        fontSize: "14px",
                        fontWeight: 300,
                      }}>
                      {product.brand}
                    </Typography>
                  </Grid>
                </Grid>

                {/* Product Title */}
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 400 }}>
                  {product.title}
                </Typography>

                {/* Colors and Sizes */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}>
                  {/* Available Colors */}
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {product.colors.map((color, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          backgroundColor: color,
                          border: "1px solid #ddd",
                        }}
                      />
                    ))}
                  </Box>

                  {/* Available Sizes */}
                  <Box sx={{ display: "flex" }}>
                    {product.sizes.map((size, index) => (
                      <Chip
                        label={size}
                        key={index}
                        variant="outlined"
                        size="small"
                        sx={{
                          color: size === "S" ? "#05297F" : "initial",
                          border: size === "S" ? "1px solid #05297F" : "none",
                          borderRadius: size === "S" ? "50%" : "0px",
                          "&:hover": {
                            borderRadius: "50%",
                            color: "blue",
                            backgroundColor: "#F1F1F1",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Shopping Cart circle  and Price */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      backgroundColor: "#FC9D9D",
                      borderRadius: "50%",
                      padding: 1,
                    }}>
                    <ShoppingBasketOutlinedIcon />
                  </Box>

                  <Typography variant="h6" sx={{ mt: 0.5, ml: 0.5 }}>
                    ${product.price}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
