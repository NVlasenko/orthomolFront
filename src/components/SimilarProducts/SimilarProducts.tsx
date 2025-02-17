import React, { useMemo } from "react";
import "./SimilarProducts.scss";
import { Cards } from "../Cards";

import { useProducts } from "../../api/useProducts";


type Props = {
  productId: number;
  category: string;
};
export const SimilarProducts: React.FC<Props> = ({ productId, category }) => {

    const { products, isLoading, error } = useProducts();
    const filteredProducts = useMemo(
      () => products.filter((product) => product.category === category && product.id !== productId),
      [products, category, productId]
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
    {filteredProducts.length > 0 && (
      <Cards filteredProducts={filteredProducts} title={"Схожі товари"} />
    ) }
  </div>
  )
}