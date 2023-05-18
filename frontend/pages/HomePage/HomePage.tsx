import React, { ReactElement } from 'react';
import { ImagePanelGrid } from '../../components/ImagePanelGrid';
import {
  CHARACTERS_ROUTE,
  CREATURES_ROUTE,
  MAGIC_ITEMS_ROUTE,
  SPELLS_ROUTE,
} from '../../app';
import CharactersImage from './home-page-characters-tile.png';
import CreaturesImage from './home-page-creatures-tile.png';
import MagicItemsImage from './home-page-magic-items-tile.png';
import { Navbar } from '../../components/Navbar/Navbar';
import SpellsImage from './home-page-spells-tile.png';
import { useAuth } from '../hooks/useAuth';

const HomePage = (): ReactElement => {
  const { isSuccess } = useAuth();

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
      imagePath: MagicItemsImage,
      path: MAGIC_ITEMS_ROUTE,
      title: 'Magic Items'
    },
    {
      imagePath: SpellsImage,
      path: SPELLS_ROUTE,
      title: 'Spells'
    }
  ];

  return (
    <>
      <Navbar authenticated={isSuccess}/>
      <div className="layout">
        <div className="full">
          <h1>The D&D Compendium</h1>
          <ImagePanelGrid panels={panels} />
        </div>
      </div>
    </>
  );
};

export { HomePage };
