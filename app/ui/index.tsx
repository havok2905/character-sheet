import { characterPageBootstrapper } from './pages/CharacterPage';
import { characterCreatePageBootstrapper } from './pages/CharacterCreatePage';
import { characterEditPageBootstrapper } from './pages/CharacterEditPage';
import { charactersPageBootstrapper } from './pages/CharactersPage';
import { creaturePageBootstrapper } from './pages/CreaturePage';
import { creatureCreatePageBootstrapper } from './pages/CreatureCreatePage';
import { creatureEditPageBootstrapper } from './pages/CreatureEditPage';
import { creaturesPageBootstrapper } from './pages/CreaturesPage';
import { factionPageBootstrapper } from './pages/FactionPage';
import { factionCreatePageBootstrapper } from './pages/FactionCreatePage';
import { factionEditPageBootstrapper } from './pages/FactionEditPage';
import { factionsPageBootstrapper } from './pages/FactionsPage';
import { homePageBootstrapper } from './pages/HomePage';
import { locationCreatePageBootstrapper } from './pages/LocationCreatePage';
import { locationEditPageBootstrapper } from './pages/LocationEditPage';
import { locationPageBootstrapper } from './pages/LocationPage';
import { locationsPageBootstrapper } from './pages/LocationsPage';
import { magicItemCreatePageBootstrapper } from './pages/MagicItemCreatePage';
import { magicItemEditPageBootstrapper } from './pages/MagicItemEditPage';
import { magicItemPageBootstrapper } from './pages/MagicItemPage';
import { magicItemsPageBootstrapper } from './pages/MagicItemsPage';
import { spellPageBootstrapper } from './pages/SpellPage';
import { spellCreatePageBootstrapper } from './pages/SpellCreatePage';
import { spellEditPageBootstrapper } from './pages/SpellEditPage';
import { spellsPageBootstrapper } from './pages/SpellsPage';

import './globalstyles/index.scss';

window.onload = ():void => {
  characterPageBootstrapper();
  characterEditPageBootstrapper();
  characterCreatePageBootstrapper();
  charactersPageBootstrapper();

  creaturePageBootstrapper();
  creatureCreatePageBootstrapper();
  creatureEditPageBootstrapper();
  creaturesPageBootstrapper();

  factionPageBootstrapper();
  factionCreatePageBootstrapper();
  factionEditPageBootstrapper();
  factionsPageBootstrapper();

  homePageBootstrapper();

  locationCreatePageBootstrapper();
  locationEditPageBootstrapper();
  locationPageBootstrapper();
  locationsPageBootstrapper();
  
  magicItemCreatePageBootstrapper();
  magicItemEditPageBootstrapper();
  magicItemPageBootstrapper();
  magicItemsPageBootstrapper();

  spellPageBootstrapper();
  spellCreatePageBootstrapper();
  spellEditPageBootstrapper();
  spellsPageBootstrapper();
};
