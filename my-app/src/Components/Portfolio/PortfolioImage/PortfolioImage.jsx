import { useParams } from "react-router-dom";
import portfolioData from "../../../../public/photos.json";
import styles from "./PortfolioImage.module.css";
import { ThemeContext } from "../../../providers/theme.tsx";
import { useContext } from "react";
import classnames from "classnames";

export const PortfolioImage = () => {
  const { imageId } = useParams();
  const photo = portfolioData.photos.find((el) => el.id === parseInt(imageId));
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={classnames(styles["portfolio-image__content"], styles[theme])}
    >
      <img src={photo.url} className={styles["portfolio-image__image"]} />
      <div className={styles["portfolio-image__info"]}>
        <h2>{photo.author}</h2>
        <p>
          {photo.height} x {photo.width}
        </p>
        <h3>Price: {photo.price}$</h3>
      </div>
    </div>
  );
};
