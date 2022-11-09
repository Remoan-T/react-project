import './category.styles.scss';
import { useParams } from "react-router-dom";
import { useState, useEffect ,useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';

const Category = () => {
const {category} = useParams;    
const {categories} = useContext(CategoriesContext);
const [products ,setProducts] = useState(categories[category]);

useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);
console.log(categories[category]);
return (
    <div >
    { products &&
      products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
  </div>
);

}

export default Category;