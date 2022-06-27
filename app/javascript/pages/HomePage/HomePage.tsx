import React, { ReactElement } from 'react';
import { ImagePanelLink } from '../../components/ImagePanelLink';

const HomePage = (): ReactElement => {
  return (
    <div className="layout">
      <div className="full">
        <h1>The D&D Compendium</h1>
        <div className="image-panel-grid">
          <ImagePanelLink
            imagePath="/home-page-characters-tile.png"
            path="/characters"
            title="Characters"
          />
          <ImagePanelLink
            imagePath="/home-page-creatures-tile.png"
            path="/creatures"
            title="Creatures"
          />
          <ImagePanelLink
            imagePath="/home-page-factions-tile.png"
            path="/factions"
            title="Factions"
          />
          <ImagePanelLink
            imagePath="/home-page-magic-items-tile.png"
            path="/magic_items"
            title="Magic Items"
          />
          <ImagePanelLink
            imagePath="/home-page-locations-tile.png"
            path="/locations"
            title="Locations"
          />
          <ImagePanelLink
            imagePath="/home-page-spells-tile.png"
            path="/spells"
            title="Spells"
          />
        </div>
      </div>
    </div>
  );
};

export { HomePage };
