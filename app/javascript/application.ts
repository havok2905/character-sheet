import '@hotwired/turbo-rails';
import '@rails/actiontext';
import 'trix';

import {
  CharacterAttackForm,
  CharacterFeatureForm,
  CharacterItemForm,
  CharacterResourceForm
} from './components/CharacterForm';
import {
  CreatureActionsForm,
  CreatureFeatureForm,
  CreatureLairActionForm,
  CreatureLegendaryActionForm,
  CreatureRegionalEffectsForm
} from './components/CreatureForm';
import {
  DiceRollerComponent
} from './components/DiceRoller';
import {
  ToggleItem
} from './components/ToggleItem';

const characterAttackForm = new CharacterAttackForm();
const characterFeatureForm = new CharacterFeatureForm();
const characterItemForm = new CharacterItemForm();
const characterResourceForm = new CharacterResourceForm();
const creatureActionsForm = new CreatureActionsForm();
const creatureFeatureForm = new CreatureFeatureForm();
const creatureLairActionForm = new CreatureLairActionForm();
const creatureLegendaryActionForm = new CreatureLegendaryActionForm();
const creatureRegionalEffectsForm = new CreatureRegionalEffectsForm();
const diceRollerComponent = new DiceRollerComponent();
const toggleItem = new ToggleItem();

document.addEventListener('turbo:load', ():void => {
  characterAttackForm.run();
  characterFeatureForm.run();
  characterItemForm.run();
  characterResourceForm.run();
  creatureActionsForm.run();
  creatureFeatureForm.run();
  creatureLairActionForm.run();
  creatureLegendaryActionForm.run();
  creatureRegionalEffectsForm.run();
  diceRollerComponent.run();
  toggleItem.run();
});