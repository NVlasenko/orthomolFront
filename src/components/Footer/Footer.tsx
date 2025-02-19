import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__wrapper">
          <div>
            <Link to="/" className="footer__logo">
              <img
                className="footer__logo--img"
                src={`${process.env.PUBLIC_URL}/images/footerIcon/logo.svg`}
                alt="logo"
              />
              <h2 className="footer__logo--title">Orthomol</h2>
            </Link>
          </div>

          <div className="footer__contacts">
            <p className="footer__contacts--address">
              мiсто Київ, <br /> вул. Кирилівська, 152
            </p>
            <img
              className="footer__contacts--img"
              src={`${process.env.PUBLIC_URL}/images/footerIcon/mastercard.svg`}
              alt="mastercard"
            />
            <p className="footer__contacts--rights">All rights reserved</p>
          </div>
        </div>

        <div className="footer__wrapper">
          <nav className="footer__nav">
            <ul className="footer__nav--list">
              <li className="footer__nav--item">
                <NavLink to="#" className="footer__nav--link">
                  Каталог
                </NavLink>
              </li>
              <li className="footer__nav--item">
                <a
                  href="#"
                  className="footer__nav--link"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("popular")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Популярні товари
                </a>
              </li>
              <li className="footer__nav--item">
                <a
                  href="#"
                  className="footer__nav--link"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("partners")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Наші партнери
                </a>
              </li>
              <li className="footer__nav--item">
                <a
                  href="#"
                  className="footer__nav--link"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("faq")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="actions">
            <div className="actions__info">
              <div className="actions__info--phone">
                <img
                  className="actions__info--img"
                  src={`${process.env.PUBLIC_URL}/images/footerIcon/phone.svg`}
                  alt="phone"
                />
                <a className="actions__info--number" href="tel:+380969196366">
                  +38 (067) 109 71 93
                </a>
              </div>

              <div className="actions__messenger">
                <a
                  href="https://t.me/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="actions__messenger--icon"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/footerIcon/viber.svg`}
                    alt="Viber"
                  />
                </a>

                <a
                  href="https://t.me/Everythingpasses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="actions__messenger--icon"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/footerIcon/telegram.svg`}
                    alt="Telegram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
