import React, { ReactElement } from 'react';
import { ImagePanelLink } from '../../components/ImagePanelLink';
import { Layout } from '../../layouts/Layout';
import CharactersImage from './home-page-characters-tile.png';
import CreaturesImage from './home-page-creatures-tile.png';
import FactionsImage from './home-page-factions-tile.png';
import LocationsImage from './home-page-locations-tile.png';
import MagicItemsImage from './home-page-magic-items-tile.png';
import SpellsImage from './home-page-spells-tile.png';

const HomePage = (): ReactElement => {
  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>The D&D Compendium</h1>
          <div className="image-panel-grid">
            <ImagePanelLink
              imagePath={CharactersImage}
              path="/characters"
              title="Characters"
            />
            <ImagePanelLink
              imagePath={CreaturesImage}
              path="/creatures"
              title="Creatures"
            />
            <ImagePanelLink
              imagePath={FactionsImage}
              path="/factions"
              title="Factions"
            />
            <ImagePanelLink
              imagePath={MagicItemsImage}
              path="/magic_items"
              title="Magic Items"
            />
            <ImagePanelLink
              imagePath={LocationsImage}
              path="/locations"
              title="Locations"
            />
            <ImagePanelLink
              imagePath={SpellsImage}
              path="/spells"
              title="Spells"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { HomePage };
