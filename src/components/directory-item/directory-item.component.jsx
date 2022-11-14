import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ categroy }) => {
  const { title, imageUrl ,route } = categroy;
  const navigate = useNavigate();
  return (
    <DirectoryItemContainer onClick={() => navigate(route)}>
      <BackgroundImage
       imgurl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>ShopNow</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;