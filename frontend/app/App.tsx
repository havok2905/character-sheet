import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  CHARACTER_ROUTE,
  CHARACTER_CREATE_ROUTE,
  CHARACTER_EDIT_ROUTE,
  CHARACTERS_ROUTE,
  CREATURE_ROUTE,
  CREATURE_CREATE_ROUTE,
  CREATURE_EDIT_ROUTE,
  CREATURES_ROUTE,
  LOGIN_ROUTE,
  MAGIC_ITEM_ROUTE,
  MAGIC_ITEM_CREATE_ROUTE,
  MAGIC_ITEM_EDIT_ROUTE,
  MAGIC_ITEMS_ROUTE,
  ROOT_ROUTE,
  SPELL_ROUTE,
  SPELL_CREATE_ROUTE,
  SPELL_EDIT_ROUTE,
  SPELLS_ROUTE,
  USERS_ROUTE
} from './routes';
import { CharacterPage } from '../pages/CharacterPage';
import { CharacterCreatePage } from '../pages/CharacterCreatePage';
import { CharacterEditPage } from '../pages/CharacterEditPage';
import { CharactersPage } from '../pages/CharactersPage';
import { CreaturePage } from '../pages/CreaturePage';
import { CreatureCreatePage } from '../pages/CreatureCreatePage';
import { CreatureEditPage } from '../pages/CreatureEditPage';
import { CreaturesPage } from '../pages/CreaturesPage';
import { DiceRoller } from '../components/DiceRoller';
import { DmScreen } from '../components/DmScreen';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MagicItemPage } from '../pages/MagicItemPage';
import { MagicItemCreatePage } from '../pages/MagicItemCreatePage';
import { MagicItemEditPage } from '../pages/MagicItemEditPage';
import { MagicItemsPage } from '../pages/MagicItemsPage';
import { SpellPage } from '../pages/SpellPage';
import { SpellCreatePage } from '../pages/SpellCreatePage';
import { SpellEditPage } from '../pages/SpellEditPage';
import { SpellsPage } from '../pages/SpellsPage';
import { UsersPage } from '../pages/UsersPage';

const App = (): ReactElement => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={ROOT_ROUTE} element={<HomePage/>} />
          <Route path={LOGIN_ROUTE} element={<LoginPage/>} />
          <Route path={CHARACTER_ROUTE} element={<CharacterPage/>} />
          <Route path={CHARACTER_CREATE_ROUTE} element={<CharacterCreatePage/>} />
          <Route path={CHARACTER_EDIT_ROUTE} element={<CharacterEditPage/>} />
          <Route path={CHARACTERS_ROUTE} element={<CharactersPage/>} />
          <Route path={CREATURE_ROUTE} element={<CreaturePage/>} />
          <Route path={CREATURE_CREATE_ROUTE} element={<CreatureCreatePage/>} />
          <Route path={CREATURE_EDIT_ROUTE} element={<CreatureEditPage/>} />
          <Route path={CREATURES_ROUTE} element={<CreaturesPage/>} />
          <Route path={MAGIC_ITEM_ROUTE} element={<MagicItemPage/>} />
          <Route path={MAGIC_ITEM_CREATE_ROUTE} element={<MagicItemCreatePage/>} />
          <Route path={MAGIC_ITEM_EDIT_ROUTE} element={<MagicItemEditPage/>} />
          <Route path={MAGIC_ITEMS_ROUTE} element={<MagicItemsPage/>} />
          <Route path={SPELL_ROUTE} element={<SpellPage/>} />
          <Route path={SPELL_CREATE_ROUTE} element={<SpellCreatePage/>} />
          <Route path={SPELL_EDIT_ROUTE} element={<SpellEditPage/>} />
          <Route path={SPELLS_ROUTE} element={<SpellsPage/>} />
          <Route path={USERS_ROUTE} element={<UsersPage/>} />
        </Routes>
      </BrowserRouter>
      <footer>
        <DmScreen/>
        <DiceRoller/>
      </footer>
      <div id="modal-root"></div>
    </QueryClientProvider>
  );
};

export { App };
