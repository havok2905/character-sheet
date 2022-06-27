import { IEventRegistration } from '../types/IEventRegistration';

class CharacterAttackForm implements IEventRegistration {
  run() {
    const button = document.querySelector('[name="character-form-add-attack-button"]');

    if (!button) return;
  
    button.addEventListener('click', () => {
      const items = document.querySelector('#character-attacks-form');
      const fieldsets = document.querySelectorAll('#character-attacks-form fieldset');
      const newFieldset = document.createElement('fieldset');
      const index = fieldsets.length;
  
      newFieldset.innerHTML = `
        <label for="character_character_attacks_attributes_${index}_name">Name</label>
        <input type="text" value=" " name="character[character_attacks_attributes][${index}][name]" id="character_character_attacks_attributes_${index}_name" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
        <label for="character_character_attacks_attributes_${index}_attack_bonus">Attack bonus</label>
        <input type="number" value="" name="character[character_attacks_attributes][${index}][attack_bonus]" id="character_character_attacks_attributes_${index}_attack_bonus">
        <label for="character_character_attacks_attributes_${index}_crit_range">Crit range</label>
        <input type="number" value="" name="character[character_attacks_attributes][${index}][crit_range]" id="character_character_attacks_attributes_${index}_crit_range">
        <label for="character_character_attacks_attributes_${index}_damage_dice_roll">Damage dice roll</label>
        <input type="text" value="" name="character[character_attacks_attributes][${index}][damage_dice_roll]" id="character_character_attacks_attributes_${index}_damage_dice_roll">
        <label for="character_character_attacks_attributes_${index}_damage_two_dice_roll">Damage two dice roll</label>
        <input type="text" value="" name="character[character_attacks_attributes][${index}][damage_two_dice_roll]" id="character_character_attacks_attributes_${index}_damage_two_dice_roll">
        <label for="character_character_attacks_attributes_${index}_damage_two_type">Damage two type</label>
        <input type="text" value="" name="character[character_attacks_attributes][${index}][damage_two_type]" id="character_character_attacks_attributes_${index}_damage_two_type">
        <label for="character_character_attacks_attributes_${index}_damage_type">Damage type</label>
        <input type="text" value="" name="character[character_attacks_attributes][${index}][damage_type]" id="character_character_attacks_attributes_${index}_damage_type">
        <label for="character_character_attacks_attributes_${index}_description">Description</label>
        <textarea name="character[character_attacks_attributes][${index}][description]" id="character_character_attacks_attributes_${index}_description"></textarea>
        <label for="character_character_attacks_attributes_${index}_is_saving_throw">Is saving throw</label>
        <input name="character[character_attacks_attributes][${index}][is_saving_throw]" type="hidden" value="0" autocomplete="off"><input type="checkbox" value="1" name="character[character_attacks_attributes][${index}][is_saving_throw]" id="character_character_attacks_attributes_${index}_is_saving_throw">
        <label for="character_character_attacks_attributes_${index}_range">Range</label>
        <input type="text" value="" name="character[character_attacks_attributes][${index}][range]" id="character_character_attacks_attributes_${index}_range">
        <label for="character_character_attacks_attributes_${index}_saving_throw_description">Saving throw description</label>
        <textarea name="character[character_attacks_attributes][${index}][saving_throw_description]" id="character_character_attacks_attributes_${index}_saving_throw_description"></textarea>
        <label for="character_character_attacks_attributes_${index}_saving_throw_threshold">Saving throw threshold</label>
        <input type="number" value="" name="character[character_attacks_attributes][${index}][saving_throw_threshold]" id="character_character_attacks_attributes_${index}_saving_throw_threshold">
        <label for="character_character_attacks_attributes_${index}_saving_throw_type">Saving throw type</label>
        <input type="text" value="" name="character[character_attacks_attributes][${index}][saving_throw_type]" id="character_character_attacks_attributes_${index}_saving_throw_type">
      `;
  
      items.append(newFieldset);
    });
  }
}

class CharacterFeatureForm implements IEventRegistration {
  run() {
    const button = document.querySelector('[name="character-form-add-feature-button"]');

    if (!button) return;
  
    button.addEventListener('click', () => {
      const items = document.querySelector('#character-features-form');
      const fieldsets = document.querySelectorAll('#character-features-form fieldset');
      const newFieldset = document.createElement('fieldset');
      const index = fieldsets.length;
  
      newFieldset.innerHTML = `
        <label for="character_character_features_attributes_${index}_name">Name</label>
        <input type="text" value="" name="character[character_features_attributes][${index}][name]" id="character_character_features_attributes_${index}_name">
        <label for="character_character_features_attributes_${index}_source">Source</label>
        <input type="text" value="" name="character[character_features_attributes][${index}][source]" id="character_character_features_attributes_${index}_source">
        <label for="character_character_features_attributes_${index}_description">Description</label>
        <textarea name="character[character_features_attributes][${index}][description]" id="character_character_features_attributes_${index}_description"></textarea>
      `;
  
      items.append(newFieldset);
    });
  }
}

class CharacterItemForm implements IEventRegistration {
  run() {
    const button = document.querySelector('[name="character-form-add-item-button"]');

    if (!button) return;

    button.addEventListener('click', () => {
      const items = document.querySelector('#character-items-form');
      const fieldsets = document.querySelectorAll('#character-items-form fieldset');
      const newFieldset = document.createElement('fieldset');
      const index = fieldsets.length;

      newFieldset.innerHTML = `
        <label for="character_character_items_attributes_${index}_name">Name</label>
        <input type="text" value="" name="character[character_items_attributes][${index}][name]" id="character_character_items_attributes_${index}_name">
        <label for="character_character_items_attributes_${index}_total">Total</label>
        <input type="number" value="" name="character[character_items_attributes][${index}][total]" id="character_character_items_attributes_${index}_total">       
      `;

      items.append(newFieldset);
    });
  }
}

class CharacterResourceForm implements IEventRegistration {
  run() {
    const button = document.querySelector('[name="character-form-add-resource-button"]');

    if (!button) return;

    button.addEventListener('click', () => {
      const items = document.querySelector('#character-resources-form');
      const fieldsets = document.querySelectorAll('#character-resources-form fieldset');
      const newFieldset = document.createElement('fieldset');
      const index = fieldsets.length;

      newFieldset.innerHTML = `
        <label for="character_character_feature_resources_attributes_${index}_name">Name</label>
        <input type="text" value="" name="character[character_feature_resources_attributes][${index}][name]" id="character_character_feature_resources_attributes_${index}_name">
        <label for="character_character_feature_resources_attributes_${index}_total">Total</label>
        <input type="number" value="" name="character[character_feature_resources_attributes][${index}][total]" id="character_character_feature_resources_attributes_${index}_total">
      `;

      items.append(newFieldset);
    });
  }
}

export {
  CharacterAttackForm,
  CharacterFeatureForm,
  CharacterItemForm,
  CharacterResourceForm
};
