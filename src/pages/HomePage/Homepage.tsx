import React from "react";
import { VitaminPromoBlock } from "../../components/VitaminPromoBlock";
import { InfoStrip } from "../../components/InfoStrip";

import { PopularProducts } from "../../components/PopularProducts";
import { Categories } from "../../components/Categories";
import { Partners } from "../../components/Partners";

export const HomePage: React.FC = () => {
  return (
    <div>
      <VitaminPromoBlock />
      <InfoStrip />
      <PopularProducts />
      <Categories />
      <Partners />
    </div>
  );
};
