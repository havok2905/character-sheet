import React, { ReactElement } from 'react';
import { Card } from '../Card';
import { Token } from '../Token';

interface IItemWithTokenProps {
  description: string;
  heading: string;
  imageAltText?: string;
  imageUrl?: string;
  itemPath: string;
  subDescription?: string;
}

const ItemWithToken = ({
  description,
  heading,
  imageAltText,
  imageUrl,
  itemPath,
  subDescription
}: IItemWithTokenProps): ReactElement => {
  return (
    <Card hasToken path={itemPath}>
      <Token
        imageAltText={imageAltText}
        imageUrl={imageUrl}
        size="small"/>
      <div>
        <h2>{heading}</h2>
        <p>{description}</p>
        {subDescription && <p>{subDescription}</p>}
      </div>
    </Card>
  );
};

export { ItemWithToken };
