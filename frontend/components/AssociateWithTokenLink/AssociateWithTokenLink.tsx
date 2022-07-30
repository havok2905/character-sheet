import React, { ReactElement } from 'react';
import { Token } from '../Token';
import './_associateWithTokenLink.scss';

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
        <Token
          imageAltText={imageAltText}
          imageUrl={imageUrl}
          size="small" />
        {linkText}
      </div>
    </a>
  );
};

export { AssociateWithTokenLink };
