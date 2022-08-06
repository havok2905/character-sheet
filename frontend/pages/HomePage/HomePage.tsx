import React, { ReactElement } from 'react';
import { ImagePanelGrid } from '../../components/ImagePanelGrid';
import {
  CHARACTERS_ROUTE,
  CREATURES_ROUTE,
  FACTIONS_ROUTE,
  LOCATIONS_ROUTE,
  MAGIC_ITEMS_ROUTE,
  SPELLS_ROUTE,
  WIKI_ROUTE,
} from '../../app';
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
      path: CHARACTERS_ROUTE,
      title: 'Characters'
    },
    {
      imagePath: CreaturesImage,
      path: CREATURES_ROUTE,
      title: 'Creatures'
    },
    {
      imagePath: FactionsImage,
      path: FACTIONS_ROUTE,
      title: 'Factions'
    },
    {
      imagePath: MagicItemsImage,
      path: MAGIC_ITEMS_ROUTE,
      title: 'Magic Items'
    },
    {
      imagePath: LocationsImage,
      path: LOCATIONS_ROUTE,
      title: 'Locations'
    },
    {
      imagePath: SpellsImage,
      path: SPELLS_ROUTE,
      title: 'Spells'
    },
    {
      imagePath: WikiImage,
      path: WIKI_ROUTE,
      title: 'Wiki'
    }
  ];

  return (
    <div className="layout">
      <div className="full">
        <h1>The D&D Compendium</h1>
        <ImagePanelGrid panels={panels} />
      </div>
    </div>
  );
};

export { HomePage };
