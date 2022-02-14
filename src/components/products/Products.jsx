import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import useStyles from "./styles";

// const products_array = [
//   {
//     id: 1,
//     name: "shoes",
//     description: "Running shoes",
//     price: "$5",
//     image:
//       "https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   },
//   {
//     id: 2,
//     name: "macbook",
//     description: "Apple Macbook",
//     price: "$10",
//     image:
//       "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   },
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
