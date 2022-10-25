import React ,{useContext} from 'react';
import { ProductContext } from '../../contexts/shop.context';
import ProductCard from '../../components/product-card/product-card.component';


const Shop = () => {

const {products} = useContext(ProductContext);

  return( <div>{products.map((product) => {
   const {id}=product;
return <ProductCard key={id} product={product} />

   })

}

</div> 


)}

export default Shop;