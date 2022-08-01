import React, { ReactElement } from 'react';
import { ImagePanelGrid } from '../../components/ImagePanelGrid';
import { Layout } from '../../layouts/Layout';
import CharactersImage from './home-page-characters-tile.png';
import CreaturesImage from './home-page-creatures-tile.png';
import FactionsImage from './home-page-factions-tile.png';
import LocationsImage from './home-page-locations-tile.png';
import MagicItemsImage from './home-page-magic-items-tile.png';
import SpellsImage from './home-page-spells-tile.png';
import WikiImage from './home-page-wiki-tile.png';

const HomePage = (): ReactElement => {
  const panels = [
    {
      imagePath: CharactersImage,
      path: '/characters',
      title: 'Characters'
    },
    {
      imagePath: CreaturesImage,
      path: '/creatures',
      title: 'Creatures'
    },
    {
      imagePath: FactionsImage,
      path: '/factions',
      title: 'Factions'
    },
    {
      imagePath: MagicItemsImage,
      path: '/magic_items',
      title: 'Magic Items'
    },
    {
      imagePath: LocationsImage,
      path: '/locations',
      title: 'Locations'
    },
    {
      imagePath: SpellsImage,
      path: '/spells',
      title: 'Spells'
    },
    {
      imagePath: WikiImage,
      path: '/wiki',
      title: 'Wiki'
    }
  ];

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>The D&D Compendium</h1>
          <ImagePanelGrid panels={panels} />
        </div>
      </div>
    </Layout>
  );
};

export { HomePage };
