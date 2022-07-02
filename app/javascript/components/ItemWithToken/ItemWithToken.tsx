import React, { ReactElement } from 'react';

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
    <a className="card-link" href={itemPath}>
      <div className="card card-with-icon">
        {imageUrl && <img alt={imageAltText} className="token" src={imageUrl} />}
        <div>
          <h2>{heading}</h2>
          <p>{description}</p>
          {subDescription && <p>{subDescription}</p>}
        </div>
      </div>
    </a>
  );
};

export { ItemWithToken };
