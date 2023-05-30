import React, { FC } from 'react';
import { Card } from '../Card';
import { Token } from '../Token';
import './ItemWithToken.scss';

interface IItemWithTokenProps {
  description: string;
  heading: string;
  imageAltText?: string;
  imageUrl?: string;
  itemPath: string;
  subDescription?: string;
}

const ItemWithToken: FC<IItemWithTokenProps> = ({
  description,
  heading,
  imageAltText,
  imageUrl,
  itemPath,
  subDescription
}) => {
  return (
    <Card hasToken path={itemPath}>
      <Token
        imageAltText={imageAltText}
        imageUrl={imageUrl}
        size="small"/>
      <div className="item-with-token">
        <h3>{heading}</h3>
        <p>{description}</p>
        {subDescription && <p>{subDescription}</p>}
      </div>
    </Card>
  );
};

export { ItemWithToken };
