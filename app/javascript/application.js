// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import 'controllers'
import {
  CharacterAttackForm,
  CharacterFeatureForm,
  CharacterItemForm,
  CharacterResourceForm,
  CharacterSpellForm
} from './components/CharacterForm';
import {
  ToggleItem
} from './components/ToggleItem';

document.addEventListener('turbo:load', function() {
  CharacterAttackForm.run();
  CharacterFeatureForm.run();
  CharacterItemForm.run();
  CharacterResourceForm.run();
  CharacterSpellForm.run();
  ToggleItem.run();
});