import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
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
      <a className="card-link" href={path}>
        <div className={classNames(classList)}>
          {children}
        </div>
      </a>
    );
  }

  return (
    <div className={classNames(classList)}>
      {children}
    </div>
  );
};

export { Card };
