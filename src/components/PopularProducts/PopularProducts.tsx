import React from "react";
import "./PopularProducts";
import { Cards } from "../Cards";
type Props = {
  
};
export const PopularProducts: React.FC<Props> = ({  }) => {
  return (
    <div id="popular" className="popularProducts">
      <Cards/>
    </div>
  )
}