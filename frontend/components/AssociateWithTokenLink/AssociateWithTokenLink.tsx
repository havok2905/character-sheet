import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
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
    <Link className="pet-and-associate-link" to={associationUrl}>
      <div className="pet-and-associate-link-content">
        <Token
          imageAltText={imageAltText}
          imageUrl={imageUrl}
          size="small" />
        {linkText}
      </div>
    </Link>
  );
};

export { AssociateWithTokenLink };
