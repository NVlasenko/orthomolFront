import React from "react";
import { VitaminPromoBlock } from "../../components/VitaminPromoBlock";
import { InfoStrip } from "../../components/InfoStrip";

export const HomePage: React.FC = () => {
  return (
    <div>
      <VitaminPromoBlock />
      <InfoStrip />
    </div>
  );
};
