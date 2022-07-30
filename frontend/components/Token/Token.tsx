import React, { ReactElement } from 'react';
import classNames from 'classnames';
import DefaultToken from './token-blank.png';
import './_token.scss';

interface ITokenProps {
  imageAltText?: string;
  imageUrl?: string;
  size?: 'default' | 'small'
}

const Token = ({
  imageAltText,
  imageUrl,
  size = 'default'
}: ITokenProps): ReactElement | null => {
  const classList = {
    'token': size === 'default',
    'token-small': size === 'small'
  };
  
  return (
    <img
      alt={imageAltText}
      className={classNames(classList)}
      src={imageUrl || DefaultToken} />
  );
};

export { Token };
