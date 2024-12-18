import { FC } from "react";
import { Link } from "react-router-dom";

import { DirectoryCategory } from "../directory.component";

import "./category-item.styles.scss";

const COMPONENT = "category-item";

type CategoryItemProps = {
  category: DirectoryCategory;
};

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;

  return (
    <Link className={COMPONENT} to={route}>
      <img alt={title} src={imageUrl} className={`${COMPONENT}__image`} />

      <div className={`${COMPONENT}__body`}>
        <h2 className={`${COMPONENT}__title`}>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
