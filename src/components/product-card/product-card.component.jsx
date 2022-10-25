import Button from "../button/button.component";
import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const {name ,price} = product;
    return( 
<div className="product-card-container">
    <img/>
    <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <Button buttonType='inverted'>Add To Cart</Button>
</div>

    );
}
export default ProductCard;