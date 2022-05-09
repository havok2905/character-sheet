// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import 'controllers'
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