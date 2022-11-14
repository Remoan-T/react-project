import { CategoryPreviewContainer , PreviewContainer ,CategoryTitle} from "./category-preview.styles";
 import ProductCard from "../product-card/product-card.component";
 import { useNavigate } from 'react-router-dom';

 

const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate();
    const goTo = () => navigate(`${title}`);
    return (
  <CategoryPreviewContainer>
    <h2>
      <CategoryTitle onClick={()=> goTo()} className='title'>{title.toUpperCase()}</CategoryTitle>
    </h2>
    <PreviewContainer>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }
    </PreviewContainer>
  </CategoryPreviewContainer>
);}

 export default CategoryPreview