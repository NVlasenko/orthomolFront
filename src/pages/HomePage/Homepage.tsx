import React from "react";
import { VitaminPromoBlock } from "../../components/VitaminPromoBlock";
import { InfoStrip } from "../../components/InfoStrip";

import { PopularProducts } from "../../components/PopularProducts";

export const HomePage: React.FC = () => {
  return (
    <div>
      <VitaminPromoBlock />
      <InfoStrip />
      <PopularProducts/>
    </div>
  );
};
