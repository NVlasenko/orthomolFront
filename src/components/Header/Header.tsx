// import React, { useState } from "react";
// import "./Header.scss";
// import classNames from "classnames";
// import { Link, NavLink } from "react-router-dom";
// import { DropDownCatalog } from "../DropDownCatalog";

// export const Header: React.FC = () => {
//   const [isCatalogHovered, setCatalogHovered] = useState(false);

//   const getLinkClass = ({ isActive }: { isActive: boolean }) =>
//     classNames("header__link", {
//       "is-active": isActive,
//     });

//   return (
//     <div className="header">
//       <div className="header__content">
//         <div className="header__section container">
//           <Link to="/" className="logo">
//             <img
//               className="logo__img"
//               src={`${process.env.PUBLIC_URL}/images/logo/logoOrthomol.svg`}
//               alt="logo"
//             />
//             <p className="logo__text">Orthomol</p>
//           </Link>
//           <nav className="header__list">
//             <NavLink to="#" className={getLinkClass}
//             onMouseEnter={() => setCatalogHovered(true)}
//             onMouseLeave={() => setCatalogHovered(false)}
//             >
//               Каталог
//             </NavLink>
//             {isCatalogHovered && <DropDownCatalog />}
//             <NavLink to="/popular" className={getLinkClass}>
//               Популярні товари
//             </NavLink>
//             <NavLink to="#" className={getLinkClass}>
//               Наші бренди
//             </NavLink>
//             <NavLink to="#" className={getLinkClass}>
//               FAQ
//             </NavLink>
//           </nav>
//         </div>

//         <div className="contact">
//           <div className="contact__info">
//             <div className="contact__info--phone">
//               <img
//                 src={`${process.env.PUBLIC_URL}/images/icons/phone.svg`}
//                 alt="phone"
//               />
//               <a className="contact__info--number" href="tel:+380671097193">
//                 +38 (067) 109 71 93
//               </a>
//             </div>

//             <div className="contact__messenger">
//               <a
//                 href="https://t.me/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact__messenger--icon"
//               >
//                 <img
//                   src={`${process.env.PUBLIC_URL}/images/icons/viber.svg`}
//                   alt="Viber"
//                 />
//               </a>

//               <a
//                 href="https://t.me/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact__messenger--icon"
//               >
//                 <img
//                   src={`${process.env.PUBLIC_URL}/images/icons/telegram.svg`}
//                   alt="Telegram"
//                 />
//               </a>
//             </div>
//           </div>
//           <div className="basket">
//             <NavLink to="#">
//               <img
//                 src={`${process.env.PUBLIC_URL}/images/icons/basket.svg`}
//                 alt="Basket"
//                 className="basket__icon"
//               />
//             </NavLink>
//             <span className="basket__count">0</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import "./Header.scss";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { DropDownCatalog } from "../DropDownCatalog";

export const Header: React.FC = () => {
  const [isCatalogHovered, setCatalogHovered] = useState(false);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames("header__link", {
      "is-active": isActive,
    });

  // Обработчики событий для наведения и ухода с области
  const handleMouseEnter = () => setCatalogHovered(true);
  const handleMouseLeave = () => setCatalogHovered(false);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__section container">
          <Link to="/" className="logo">
            <img
              className="logo__img"
              src={`${process.env.PUBLIC_URL}/images/logo/logoOrthomol.svg`}
              alt="logo"
            />
            <p className="logo__text">Orthomol</p>
          </Link>
          <nav className="header__list">
            <div
              className="header__catalog-wrapper"
              onMouseEnter={handleMouseEnter}
              
            >
              <NavLink to="#" className={getLinkClass}>
                Каталог
              </NavLink>
              <div onMouseLeave={handleMouseLeave}>
                   {isCatalogHovered && <DropDownCatalog />}
              </div>
           
            </div>
            <NavLink to="/popular" className={getLinkClass}>
              Популярні товари
            </NavLink>
            <NavLink to="#" className={getLinkClass}>
              Наші бренди
            </NavLink>
            <NavLink to="#" className={getLinkClass}>
              FAQ
            </NavLink>
          </nav>
        </div>

        <div className="contact">
          <div className="contact__info">
            <div className="contact__info--phone">
              <img
                src={`${process.env.PUBLIC_URL}/images/icons/phone.svg`}
                alt="phone"
              />
              <a className="contact__info--number" href="tel:+380671097193">
                +38 (067) 109 71 93
              </a>
            </div>

            <div className="contact__messenger">
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__messenger--icon"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/icons/viber.svg`}
                  alt="Viber"
                />
              </a>

              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__messenger--icon"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/icons/telegram.svg`}
                  alt="Telegram"
                />
              </a>
            </div>
          </div>
          <div className="basket">
            <NavLink to="#">
              <img
                src={`${process.env.PUBLIC_URL}/images/icons/basket.svg`}
                alt="Basket"
                className="basket__icon"
              />
            </NavLink>
            <span className="basket__count">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
