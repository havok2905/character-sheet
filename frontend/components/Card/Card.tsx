import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './_card.scss';

interface ICardProps {
  children: ReactNode;
  hasToken?: boolean;
  path?: string;
}

const Card = ({
  children,
  hasToken,
  path
}: ICardProps): ReactElement => {
  const classList = {
    'card': true,
    'card-with-token': hasToken
  };

  if (path) {
    return (
      <Link className="card-link" to={path}>
        <div className={classNames(classList)}>
          {children}
        </div>
      </Link>
    );
  }

  return (
    <div className={classNames(classList)}>
      {children}
    </div>
  );
};

export { Card };
