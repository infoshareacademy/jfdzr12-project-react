import styles from "./Header.module.css";
import classnames from "classnames";
import React, { useContext, useState } from "react";
import { BasketModal } from "../BasketModal/BasketModal";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../providers/theme";

export const Header = () => {
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleCartClick = () => {
    setCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <>
      <div className={styles[`header__container ${theme}`]}>
        <div className={styles["header__image-container"]}>
          <NavLink to="/" className={styles["header__image-link"]}>
            <img
              className={styles["header__image"]}
              src="../public/images/logo.png"
            />
          </NavLink>
        </div>
        <div className={styles[`header__links-container ${theme}`]}>
          <ul className={styles["header__links"]}>
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--examples"]
              )}
            >
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--pricing"]
              )}
            >
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--contact"]
              )}
            >
              <NavLink to="/contactform">Contact</NavLink>
            </li>
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--basket"]
              )}
              onClick={handleCartClick}
            >
              Basket
            </li>
            <select
              onChange={toggleTheme}
              defaultValue={theme}
            >
              <option value="light">light</option>
              <option value="dark">dark</option>
            </select>
          </ul>
        </div>
      </div>
      <BasketModal isOpen={isCartModalOpen} onClose={handleCloseCartModal} />
    </>
  );
};
