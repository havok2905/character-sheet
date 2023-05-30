import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './_imagePanelLink.scss';

interface IImagePanelLinkProps {
  path: string;
  imagePath: string;
  title: string;
}

const ImagePanelLink: FC<IImagePanelLinkProps> = ({
  path,
  imagePath,
  title
}) => {
  return (
    <Link className="image-panel" to={path}>
      <img height={200} src={imagePath} />
      <div className="image-panel-content">
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export { ImagePanelLink };
