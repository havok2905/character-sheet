const CreatureActionsForm = {
  run() {
    const button = document.querySelector('[name="creature-form-add-action-button"]');

    if (!button) return;
  
    button.addEventListener('click', () => {
      const items = document.querySelector('#creature-actions-form');
      const fieldsets = document.querySelectorAll('#creature-actions-form fieldset');
      const newFieldset = document.createElement('fieldset');
      const index = fieldsets.length;
  
      newFieldset.innerHTML = `
        <label for="creature_creature_actions_attributes_${index}_name">Name</label>
        <input type="text" value="" name="creature[creature_actions_attributes][${index}][name]" id="creature_creature_actions_attributes_${index}_name" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
        <label for="creature_creature_actions_attributes_${index}_action_type">Action type</label>
        <input type="text" value="" name="creature[creature_actions_attributes][${index}][action_type]" id="creature_creature_actions_attributes_${index}_action_type">
        <label for="creature_creature_actions_attributes_${index}_action_combat_type">Action combat type</label>
        <input type="text" value="" name="creature[creature_actions_attributes][${index}][action_combat_type]" id="creature_creature_actions_attributes_${index}_action_combat_type">
        <label for="creature_creature_actions_attributes_${index}_range">Range</label>
        <input type="text" value="" name="creature[creature_actions_attributes][${index}][range]" id="creature_creature_actions_attributes_${index}_range">
        <label for="creature_creature_actions_attributes_${index}_attack_bonus">Attack bonus</label>
        <input type="number" value="" name="creature[creature_actions_attributes][${index}][attack_bonus]" id="creature_creature_actions_attributes_${index}_attack_bonus">
        <label for="creature_creature_actions_attributes_${index}_damage_dice_roll">Damage dice roll</label>
        <input type="text" value="" name="creature[creature_actions_attributes][${index}][damage_dice_roll]" id="creature_creature_actions_attributes_${index}_damage_dice_roll">
        <label for="creature_creature_actions_attributes_${index}_damage_type">Damage type</label>
        <input type="text" value="" name="creature[creature_actions_attributes][${index}][damage_type]" id="creature_creature_actions_attributes_${index}_damage_type">
        <label for="creature_creature_actions_attributes_${index}_damage_two_dice_roll">Damage two dice roll</label>
        <input type="text" value="" name="creature[creature_actions_attributes][${index}][damage_two_dice_roll]" id="creature_creature_actions_attributes_${index}_damage_two_dice_roll">
        <label for="creature_creature_actions_attributes_${index}_damage_two_type">Damage two type</label>
        <input type="text" value="" name="creature[creature_actions_attributes][${index}][damage_two_type]" id="creature_creature_actions_attributes_${index}_damage_two_type">
        <label for="creature_creature_actions_attributes_${index}_saving_throw_dc">Saving throw dc</label>
        <input type="number" value="" name="creature[creature_actions_attributes][${index}][saving_throw_dc]" id="creature_creature_actions_attributes_${index}_saving_throw_dc">
        <label for="creature_creature_actions_attributes_${index}_saving_throw_type">Saving throw type</label>
        <input type="text" value="" name="creature[creature_actions_attributes][${index}][saving_throw_type]" id="creature_creature_actions_attributes_${index}_saving_throw_type">
        <label for="creature_creature_actions_attributes_${index}_description">Description</label>
        <textarea name="creature[creature_actions_attributes][${index}][description]" id="creature_creature_actions_attributes_${index}_description"></textarea>
      `;
  
      items.append(newFieldset);
    });
  }
};

const CreatureFeatureForm = {
  run() {
    const button = document.querySelector('[name="creature-form-add-feature-button"]');

    if (!button) return;
  
    button.addEventListener('click', () => {
      const items = document.querySelector('#creature-features-form');
      const fieldsets = document.querySelectorAll('#creature-features-form fieldset');
      const newFieldset = document.createElement('fieldset');
      const index = fieldsets.length;
  
      newFieldset.innerHTML = `
        <label for="creature_creature_features_attributes_${index}_name">Name</label>
        <input type="text" value="" name="creature[creature_features_attributes][${index}][name]" id="creature_creature_features_attributes_${index}_name">
        <label for="creature_creature_features_attributes_${index}_feature_type">Feature type</label>
        <input type="text" value="" name="creature[creature_features_attributes][${index}][feature_type]" id="creature_creature_features_attributes_${index}_feature_type">
        <label for="creature_creature_features_attributes_${index}_description">Description</label>
        <textarea name="creature[creature_features_attributes][${index}][description]" id="creature_creature_features_attributes_${index}_description"></textarea>
      `;
  
      items.append(newFieldset);
    });
  }
};

const CreatureLairActionForm = {
  run() {
    const button = document.querySelector('[name="creature-form-add-lair-action-button"]');

    if (!button) return;
  
    button.addEventListener('click', () => {
      const items = document.querySelector('#creature-lair-actions-form');
      const fieldsets = document.querySelectorAll('#creature-lair-actions-form fieldset');
      const newFieldset = document.createElement('fieldset');
      const index = fieldsets.length;
  
      newFieldset.innerHTML = `
        <label for="creature_creature_lair_actions_attributes_${index}_description">Description</label>
        <textarea name="creature[creature_lair_actions_attributes][${index}][description]" id="creature_creature_lair_actions_attributes_${index}_description"></textarea>
      `;
  
      items.append(newFieldset);
    });
  }
};

const CreatureLegendaryActionForm = {
  run() {
    const button = document.querySelector('[name="creature-form-add-legendary-action-button"]');

    if (!button) return;
  
    button.addEventListener('click', () => {
      const items = document.querySelector('#creature-legendary-actions-form');
      const fieldsets = document.querySelectorAll('#creature-legendary-actions-form fieldset');
      const newFieldset = document.createElement('fieldset');
      const index = fieldsets.length;
  
      newFieldset.innerHTML = `
        <label for="creature_creature_legendary_actions_attributes_${index}_name">Name</label>
        <input type="text" value="" name="creature[creature_legendary_actions_attributes][${index}][name]" id="creature_creature_legendary_actions_attributes_${index}_name" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
        <label for="creature_creature_legendary_actions_attributes_${index}_description">Description</label>
        <textarea name="creature[creature_legendary_actions_attributes][${index}][description]" id="creature_creature_legendary_actions_attributes_${index}_description"></textarea>
      `;
  
      items.append(newFieldset);
    });
  }
};

const CreatureRegionalEffectsForm = {
  run() {
    const button = document.querySelector('[name="creature-form-add-regional-effect-button"]');

    if (!button) return;
  
    button.addEventListener('click', () => {
      const items = document.querySelector('#creature-regional-effects-form');
      const fieldsets = document.querySelectorAll('#creature-regional-effects-form fieldset');
      const newFieldset = document.createElement('fieldset');
      const index = fieldsets.length;
  
      newFieldset.innerHTML = `
        <label for="creature_creature_regional_effects_attributes_${index}_description">Description</label>
        <textarea name="creature[creature_regional_effects_attributes][${index}][description]" id="creature_creature_regional_effects_attributes_${index}_description"></textarea>
      `;
  
      items.append(newFieldset);
    });
  }
};

export {
  CreatureActionsForm,
  CreatureFeatureForm,
  CreatureLairActionForm,
  CreatureLegendaryActionForm,
  CreatureRegionalEffectsForm
};
