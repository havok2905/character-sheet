import React, { ReactElement } from 'react';
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

const ImagePanelGrid = ({
  panels
}: IImagePanelGridProps): ReactElement | null => {
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
