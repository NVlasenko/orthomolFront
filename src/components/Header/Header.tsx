import React, { useRef  } from "react";
import "./Header.scss";
import classNames from "classnames";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { DropDownCatalog } from "../DropDownCatalog";
import "./../../styles/container.scss";
import { useBasket } from "../../context/BasketContextType";

export const Header: React.FC = () => {
  const { basketItems } = useBasket();
  // const [isCatalogHovered, setCatalogHovered] = useState(false);
  const catalogRef = useRef<HTMLDivElement | null>(null);
  // const dropDownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames("header__link", {
      "is-active": isActive,
    });

  // const handleMouseEnterCatalog = () => setCatalogHovered(true);
  // const handleMouseLeaveCatalog = () => setCatalogHovered(false);

  // const handleMouseEnterDropdown = () => setCatalogHovered(true);
  // const handleMouseLeaveDropdown = () => setCatalogHovered(false);

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (
  //     catalogRef.current &&
  //     !catalogRef.current.contains(event.target as Node) &&
  //     dropDownRef.current &&
  //     !dropDownRef.current.contains(event.target as Node)
  //   ) {
  //     setCatalogHovered(false);
  //   }
  // };

  

  const handleNavigation = (sectionId: string) => {
    navigate(`/#${sectionId}`); // Переход на HomePage с хешем
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Даем время на переход
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="header">
      <div className="header__content container">
        <div className="header__section ">
          <div>
            <Link to="/" className="logo">
              <img
                className="logo__img"
                src={`${process.env.PUBLIC_URL}/images/logo/logoOrthomol.svg`}
                alt="logo"
              />
              <p className="logo__text">Orthomol</p>
            </Link>
          </div>

          <nav className="header__list">
            <div
              className="header__catalog--wrapper"
              ref={catalogRef}
              // onMouseEnter={handleMouseEnterCatalog}
              // onMouseLeave={handleMouseLeaveCatalog}
            >
              <NavLink to="/catalog" className={getLinkClass}>
                Каталог
              </NavLink>
              {/* {isCatalogHovered && (
                <div
                  ref={dropDownRef}
                  onMouseEnter={handleMouseEnterDropdown}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  <DropDownCatalog />
                </div>
              )} */}
            </div>
            <div>
              <a
                href="#"
                className="header__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("popular"); // Переход на HomePage и прокрутка
                }}
              >
                Популярні товари
              </a>
            </div>

            <div>
              <a
                href="#"
                className="header__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("partners"); // Переход на HomePage и прокрутка
                }}
              >
                Наші партнери
              </a>
            </div>

            <div>
              <a
                href="#"
                className="header__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("faq"); // Переход на HomePage и прокрутка
                }}
              >
                FAQ
              </a>
            </div>
          </nav>
        </div>

        <div className="contact">
          <div className="contact__info">
            <div className="contact__info--phone">
              <img
                className="contact__info--img"
                src={`${process.env.PUBLIC_URL}/images/icons/phone.svg`}
                alt="phone"
              />
              <a className="contact__info--number" href="tel:+380969196366">
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
                href="https://t.me/Everythingpasses"
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
            <NavLink to="/basket">
              <img
                src={`${process.env.PUBLIC_URL}/images/icons/basket.svg`}
                alt="Basket"
                className="basket__icon"
              />
              <span className="basket__count">{basketItems.length}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
