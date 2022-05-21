import '@hotwired/turbo-rails';

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
  ToggleItem
} from './components/ToggleItem';

document.addEventListener('turbo:load', function() {
  CharacterAttackForm.run();
  CharacterFeatureForm.run();
  CharacterItemForm.run();
  CharacterResourceForm.run();
  CreatureActionsForm.run();
  CreatureFeatureForm.run();
  CreatureLairActionForm.run();
  CreatureLegendaryActionForm.run();
  CreatureRegionalEffectsForm.run();
  ToggleItem.run();
});