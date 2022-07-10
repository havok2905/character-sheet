import React, { ReactElement } from 'react';

interface IAssociateWithTokenLinkProps {
  associationUrl: string;
  imageAltText?: string;
  imageUrl?: string;
  linkText: string;
}

const AssociateWithTokenLink = ({
  associationUrl,
  imageAltText,
  imageUrl,
  linkText
}: IAssociateWithTokenLinkProps): ReactElement => {
  return (
    <a className="pet-and-associate-link" href={associationUrl}>
      <div className="pet-and-associate-link-content">
        {imageUrl && <img alt={imageAltText} className="token" src={imageUrl}/>}
        {linkText}
      </div>
    </a>
  );
};

export { AssociateWithTokenLink };
