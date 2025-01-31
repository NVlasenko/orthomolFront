import React from "react";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="footer__content container">
           <div className="footer__wrapper">
        {/* Логотип */}
        <div className="footer__logo">
          <img className="footer__logo--img" src={`${process.env.PUBLIC_URL}/images/footerIcon/logo.svg`} alt="logo" />
          <h2 className="footer__logo--title">Orthomol</h2>
        </div>

        {/* Контакты */}
        <div className="footer__contacts">
          <p className="footer__contacts--address">мiсто Київ, <br /> вул. Кирилівська, 152</p>
          <img className="footer__contacts--img" src={`${process.env.PUBLIC_URL}/images/footerIcon/mastercard.svg`} alt="mastercard" />
          <p className="footer__contacts--rights">All rights reserved</p>
        </div>
      </div>

      <div className="footer__wrapper">

      {/* Навигация */}
        <nav className="footer__nav">
          <ul className="footer__nav--list">
            <li className="footer__nav--item">
              <a href="#" className="footer__nav--link">
                Каталог
              </a>
            </li>
            <li className="footer__nav--item">
              <a href="#" className="footer__nav--link">
                Популярні товари
              </a>
            </li>
            <li className="footer__nav--item">
              <a href="#" className="footer__nav--link">
                Наші бренди
              </a>
            </li>
            <li className="footer__nav--item">
              <a href="#" className="footer__nav--link">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Телефон и иконки */}
        {/* <div className="footer__actions">
          <button className="footer__phone">+38 (067) 109 71 93</button>
          <div className="footer__socials">
            <div className="footer__social-placeholder">Viber</div>
            <div className="footer__social-placeholder">Telegram</div>
          </div>
        </div> */}
        <div className="contact">
          <div className="contact__info">
            <div className="contact__info--phone">
              <img
                className="contact__info--img"
                src={`${process.env.PUBLIC_URL}/images/footerIcon/phone.svg`}
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
                  src={`${process.env.PUBLIC_URL}/images/footerIcon/viber.svg`}
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
