import React, { ReactElement } from 'react';
import './_imagePanelLink.scss';

interface IImagePanelLinkProps {
  path: string;
  imagePath: string;
  title: string;
}

const ImagePanelLink = ({
  path,
  imagePath,
  title
}: IImagePanelLinkProps): ReactElement => {
  return (
    <a className="image-panel" href={path}>
      <img height={200} src={imagePath} />
      <div className="image-panel-content">
        <h2>{title}</h2>
      </div>
    </a>
  );
};

export { ImagePanelLink };
