import React, { useMemo } from "react";
import "./PopularProducts";
import { Cards } from "../Cards";

import { useProducts } from "../../api/useProducts";


type Props = {
  
};
export const PopularProducts: React.FC<Props> = ({  }) => {

    const { products, isLoading, error } = useProducts();
     const filteredProducts = useMemo(
        () => products.filter((product) => product.category === "immune"),
        [products]
      );
      if (isLoading) return <p>Loading...</p>;

      if (error) {
        return (
          <div className="error">
            <h2>Error loading products</h2>
            <p>{error}</p>
          </div>
        );
      }
  return (
    <div id="popular" className="popularProducts">
      <Cards  filteredProducts={filteredProducts} title={"Популярні товари"}/>
    </div>
  )
}