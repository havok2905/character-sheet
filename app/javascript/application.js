// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import 'controllers'
import { CharacterForm } from './components/CharacterForm';
import { ToggleItem } from './components/ToggleItem';

document.addEventListener('turbo:load', function() {
  CharacterForm.run();
  ToggleItem.run();
});