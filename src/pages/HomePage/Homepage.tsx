// import React, { useEffect } from "react";
// import { VitaminPromoBlock } from "../../components/VitaminPromoBlock";
// import { InfoStrip } from "../../components/InfoStrip";
// import { PopularProducts } from "../../components/PopularProducts";
// import { Categories } from "../../components/Categories";
// import { Partners } from "../../components/Partners";
// import { FAQ } from "../../components/FAQ";
// import { Consultation } from "../../components/Consultation";
// import "../../styles/container.scss";
// import { useLocation } from "react-router-dom";

// export const HomePage: React.FC = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.getElementById(location.hash.replace("#", ""));
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//       }
//     }
//   }, [location]);

//   return (
//     <div>
//       <div className="container">
//         <VitaminPromoBlock />
//         <InfoStrip />
//         <PopularProducts />
//         <Categories />
//         <Partners />
//         <FAQ />
//       </div>
//       <div>
//         <Consultation />
//       </div>
//     </div>
//   );
// };
import React, { useEffect } from "react";
import { VitaminPromoBlock } from "../../components/VitaminPromoBlock";
import { InfoStrip } from "../../components/InfoStrip";
import { PopularProducts } from "../../components/PopularProducts";
import { Categories } from "../../components/Categories";
import { Partners } from "../../components/Partners";
import { FAQ } from "../../components/FAQ";
import { Consultation } from "../../components/Consultation";
// import "../../styles/container.scss";
import "./HomePage.scss";
import { useLocation } from "react-router-dom";

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <div className="container">
        <div className="fade-in"><VitaminPromoBlock /></div>   
        <div className="fade-in">  <InfoStrip /></div> 
        <div className="fade-in"> <PopularProducts /></div>  
        <div className="fade-in"><Categories /></div>   
        <div className="fade-in"> <Partners /></div>  
        <div className="fade-in"> <FAQ /></div>  
      </div>
      <div>
        <div className="fade-in"> <Consultation /></div>  
      </div>
    </div>
  );
};
