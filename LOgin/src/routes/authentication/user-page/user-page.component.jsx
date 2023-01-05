import { useContext } from 'react';

import UserCard from '../../../components/user-cards/user-cards.component';


import { CardsContext } from '../../../contexts/card.context';

import './user-page.styles.scss';

const Shop = () => {
  const { cards } = useContext(CardsContext);

  return (
    <div className='products-container'>
      {cards.map((card) => (
        <UserCard key={card.id} product={card} />
      ))}
    </div>
  );
};

export default Shop;