import React from "react";
import "./category-item.styles.scss";

const CategoryItem = ({ categroy }) => {
  const { title, imageUrl } = categroy;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>ShopNow</p>
      </div>
    </div>
  );
};

export default CategoryItem;
