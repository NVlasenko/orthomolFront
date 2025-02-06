// import React from "react";
// import "./CatalogPage.scss";
// import { Title } from "../../components/Title";
// import { Sidebar } from "../../components/Sidebar";
// import { ShopItems } from "../../components/ShopItems";

// export const CatalogPage: React.FC = () => {
//   return (
//     <div className="catalog container">
//        <Title title="Каталог" />
//       <div className="catalog__container">
//         <div className="catalog__sidebar">
         
//           <Sidebar />
//         </div>
//         <div className="catalog__shopItems">
//           <ShopItems />
//         </div>
//       </div>
//     </div>
//   );
// };


import React from "react";
import "./CatalogPage.scss";
import { Title } from "../../components/Title";
import { Sidebar } from "../../components/Sidebar";
import { ShopItems } from "../../components/ShopItems";


import { useFilters } from "../../types/useFilters";
export const CatalogPage: React.FC = () => {
  // Состояние фильтров
  // const [filters, setFilters] = useState({
  //   priceRange: { min: 0, max: 10000 },
  //   gender: "all",
  //   ageCategory: "all",
  //   purpose: "all",
  //   taste: "all",
  //   shape: "all",
  //   hit: false,
  // });

  // Функция обновления фильтров
  // const handleFilterChange = (newFilters: typeof filters) => {
  //   setFilters(newFilters);
  // };

 

  // Начальные фильтры берём из URL

  const { filters, updateFilters } = useFilters();
  return (
    <div className="catalog container">
      <Title title="Каталог" />
      <div className="catalog__container">
        <div className="catalog__sidebar">
          {/* Передача фильтров и функции обновления */}
          <Sidebar filters={filters} onFilterChange={updateFilters} />
        </div>
        <div className="catalog__shopItems">
        <ShopItems filters={filters} />
        </div>
      </div>
    </div>
  );
};
