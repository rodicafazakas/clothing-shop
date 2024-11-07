import { Link } from 'react-router-dom';
import './category-item.styles.scss';

const COMPONENT = 'category-item'; 

const CategoryItem = ({category}) => {
  const { title, imageUrl, route} = category; 

  return (
    <Link className={COMPONENT} to={route}>
      <img 
        alt={title}
        src={imageUrl} 
        className={`${COMPONENT}__image`}
      />

      <div className={`${COMPONENT}__body`}>
        <h2 className={`${COMPONENT}__title`}>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
 )
}

export default CategoryItem;