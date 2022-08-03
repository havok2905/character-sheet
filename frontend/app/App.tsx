import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  CHARACTER_ROUTE,
  CHARACTER_CREATE_ROUTE,
  CHARACTER_EDIT_ROUTE,
  CHARACTERS_ROUTE,
  CREATURE_ROUTE,
  CREATURE_CREATE_ROUTE,
  CREATURE_EDIT_ROUTE,
  CREATURES_ROUTE,
  FACTION_ROUTE,
  FACTION_CREATE_ROUTE,
  FACTION_EDIT_ROUTE,
  FACTIONS_ROUTE,
  LOCATION_ROUTE,
  LOCATION_CREATE_ROUTE,
  LOCATION_EDIT_ROUTE,
  LOCATIONS_ROUTE,
  MAGIC_ITEM_ROUTE,
  MAGIC_ITEM_CREATE_ROUTE,
  MAGIC_ITEM_EDIT_ROUTE,
  MAGIC_ITEMS_ROUTE,
  ROOT_ROUTE,
  SPELL_ROUTE,
  SPELL_CREATE_ROUTE,
  SPELL_EDIT_ROUTE,
  SPELLS_ROUTE,
  WIKI_ITEM_ROUTE,
  WIKI_CREATE_ROUTE,
  WIKI_EDIT_ROUTE,
  WIKI_ROUTE
} from './routes';
import { CharacterPage } from '../pages/CharacterPage';
import { CharacterCreatePage } from '../pages/CharacterCreatePage';
import { CharacterEditPage } from '../pages/CharacterEditPage';
import { CharactersPage } from '../pages/CharactersPage';
import { CreaturePage } from '../pages/CreaturePage';
import { CreatureCreatePage } from '../pages/CreatureCreatePage';
import { CreatureEditPage } from '../pages/CreatureEditPage';
import { CreaturesPage } from '../pages/CreaturesPage';
import { FactionPage } from '../pages/FactionPage';
import { FactionCreatePage } from '../pages/FactionCreatePage';
import { FactionEditPage } from '../pages/FactionEditPage';
import { FactionsPage } from '../pages/FactionsPage';
import { HomePage } from '../pages/HomePage';
import { Layout } from '../layouts/Layout';
import { LocationPage } from '../pages/LocationPage';
import { LocationCreatePage } from '../pages/LocationCreatePage';
import { LocationEditPage } from '../pages/LocationEditPage';
import { LocationsPage } from '../pages/LocationsPage';
import { MagicItemPage } from '../pages/MagicItemPage';
import { MagicItemCreatePage } from '../pages/MagicItemCreatePage';
import { MagicItemEditPage } from '../pages/MagicItemEditPage';
import { MagicItemsPage } from '../pages/MagicItemsPage';
import { SpellPage } from '../pages/SpellPage';
import { SpellCreatePage } from '../pages/SpellCreatePage';
import { SpellEditPage } from '../pages/SpellEditPage';
import { SpellsPage } from '../pages/SpellsPage';
import { WikiArticlePage } from '../pages/WikiArticlePage';
import { WikiCreatePage } from '../pages/WikiCreatePage';
import { WikiEditPage } from '../pages/WikiEditPage';
import { WikiPage } from '../pages/WikiPage';

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROOT_ROUTE} element={<HomePage/>} />
          <Route path={CHARACTER_ROUTE} element={<CharacterPage/>} />
          <Route path={CHARACTER_CREATE_ROUTE} element={<CharacterCreatePage/>} />
          <Route path={CHARACTER_EDIT_ROUTE} element={<CharacterEditPage/>} />
          <Route path={CHARACTERS_ROUTE} element={<CharactersPage/>} />
          <Route path={CREATURE_ROUTE} element={<CreaturePage/>} />
          <Route path={CREATURE_CREATE_ROUTE} element={<CreatureCreatePage/>} />
          <Route path={CREATURE_EDIT_ROUTE} element={<CreatureEditPage/>} />
          <Route path={CREATURES_ROUTE} element={<CreaturesPage/>} />
          <Route path={FACTION_ROUTE} element={<FactionPage/>} />
          <Route path={FACTION_CREATE_ROUTE} element={<FactionCreatePage/>} />
          <Route path={FACTION_EDIT_ROUTE} element={<FactionEditPage/>} />
          <Route path={FACTIONS_ROUTE} element={<FactionsPage/>} />
          <Route path={LOCATION_ROUTE} element={<LocationPage/>} />
          <Route path={LOCATION_CREATE_ROUTE} element={<LocationCreatePage/>} />
          <Route path={LOCATION_EDIT_ROUTE} element={<LocationEditPage/>} />
          <Route path={LOCATIONS_ROUTE} element={<LocationsPage/>} />
          <Route path={MAGIC_ITEM_ROUTE} element={<MagicItemPage/>} />
          <Route path={MAGIC_ITEM_CREATE_ROUTE} element={<MagicItemCreatePage/>} />
          <Route path={MAGIC_ITEM_EDIT_ROUTE} element={<MagicItemEditPage/>} />
          <Route path={MAGIC_ITEMS_ROUTE} element={<MagicItemsPage/>} />
          <Route path={SPELL_ROUTE} element={<SpellPage/>} />
          <Route path={SPELL_CREATE_ROUTE} element={<SpellCreatePage/>} />
          <Route path={SPELL_EDIT_ROUTE} element={<SpellEditPage/>} />
          <Route path={SPELLS_ROUTE} element={<SpellsPage/>} />
          <Route path={WIKI_ITEM_ROUTE} element={<WikiArticlePage/>} />
          <Route path={WIKI_CREATE_ROUTE} element={<WikiCreatePage/>} />
          <Route path={WIKI_EDIT_ROUTE} element={<WikiEditPage/>} />
          <Route path={WIKI_ROUTE} element={<WikiPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
