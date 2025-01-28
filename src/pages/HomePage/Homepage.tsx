import React from "react";
import { VitaminPromoBlock } from "../../components/VitaminPromoBlock";
import { InfoStrip } from "../../components/InfoStrip";
import { PopularProducts } from "../../components/PopularProducts";
import { Categories } from "../../components/Categories";
import { Partners } from "../../components/Partners";
import { FAQ } from "../../components/FAQ";
import { Consultation } from "../../components/Consultation";
import "../../styles/container.scss";
export const HomePage: React.FC = () => {
  return (
    <div>
       <div className="container">
      <VitaminPromoBlock />
      <InfoStrip />
      <PopularProducts />
      <Categories />
      <Partners />
      <FAQ />
    </div>
      <div>
       <Consultation />
    </div>
    </div>
  
   
  );
};
