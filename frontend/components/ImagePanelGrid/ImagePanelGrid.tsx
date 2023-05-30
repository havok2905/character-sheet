import React, { FC } from 'react';
import { ImagePanelLink } from '../ImagePanelLink';
import './_imagePanelGrid.scss';

interface IImagePanelGridItem {
  imagePath: string;
  path: string;
  title: string;
}

interface IImagePanelGridProps {
  panels: IImagePanelGridItem[];
}

const ImagePanelGrid: FC<IImagePanelGridProps> = ({
  panels
}) => {
  if (!panels.length) return null;

  return (
    <div className="image-panel-grid">
      {
        panels.map(panel => {
          const { imagePath, path, title } = panel;

          return (
            <ImagePanelLink
              imagePath={imagePath}
              path={path}
              title={title}
            />
          );
        })
      }
    </div>
  );
};

export { ImagePanelGrid };
