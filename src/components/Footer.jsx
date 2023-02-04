import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Logo-2.png";

const footerAboutLinks = [
  {
    display: "Представити",
    path: "/about",
  },
  {
    display: "Kонтакт",
    path: "/about",
  },
  {
    display: "Вербування",
    path: "/about",
  },
  {
    display: "Новини",
    path: "/about",
  },
  {
    display: "Магазинна система",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Політика повернення",
    path: "/about",
  },
  {
    display: "Гарантійна політика",
    path: "/about",
  },
  {
    display: "Політика відшкодування",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Кол-центр підтримки</div>
            <div className="footer__content">
              <p>
                Для замовлення звертайтесь <strong>0123456789</strong>
              </p>
              <p>
                Проблеми з замовленнями <strong>0123456789</strong>
              </p>
              <p>
                Коментарі, скарги <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Про Apple Store</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Обслуговування клієнтів</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              На шляху до мети дарувати мільйонам споживачів нову радість
              оновити телефон щодня. Приєднуйтесь до Apple Store до більш
              активного та позитивного життя.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
