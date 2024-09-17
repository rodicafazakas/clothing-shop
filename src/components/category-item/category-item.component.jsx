import './category-item.styles.scss';

const COMPONENT = 'category-container'; 

const CategoryItem = ({category}) => {
 return (
  <div className={COMPONENT}>
    <img 
      alt={category.title}
      src={category.imageUrl} 
      className={`${COMPONENT}__image`} 
    />

    <div className={`${COMPONENT}__body`}>
      <h2 className={`${COMPONENT}__title`}>{category.title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
 )
}

export default CategoryItem;