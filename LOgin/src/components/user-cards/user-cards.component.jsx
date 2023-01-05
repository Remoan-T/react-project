import './user-cards.styles.scss';

import Button ,{BUTTON_TYPE_CLASSES} from '../button/button.component';

const UserCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className='user-card-container'>
    {/* <img src={imageUrl} alt={`${name}`} /> */}
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
    <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Button</Button>
  </div>
  );
};

export default UserCard;