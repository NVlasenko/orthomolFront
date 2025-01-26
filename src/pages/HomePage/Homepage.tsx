import React from "react";
import { VitaminPromoBlock } from "../../components/VitaminPromoBlock";
import { InfoStrip } from "../../components/InfoStrip";

import { PopularProducts } from "../../components/PopularProducts";
import { Categories } from "../../components/Categories";

export const HomePage: React.FC = () => {
  return (
    <div>
      <VitaminPromoBlock />
      <InfoStrip />
      <PopularProducts />
      <Categories />
    </div>
  );
};
