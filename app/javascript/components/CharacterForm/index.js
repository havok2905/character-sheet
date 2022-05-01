const addAttack = () => {
};

const addFeature = () => {
  const button = document.querySelector('[name="character-form-add-feature-button"]');

  if (!button) return;

  button.addEventListener('click', () => {
    const items = document.querySelector('#character-form-features');
    const fieldsets = document.querySelectorAll('#character-form-features fieldset');
    const newFieldset = document.createElement('fieldset');
    const index = fieldsets.length;

    newFieldset.innerHTML = `
      <label for="character_character_features_attributes_${index}_name">Name</label>
      <input type="text" value="" name="character[character_features_attributes][${index}][name]" id="character_character_features_attributes_${index}_name">
      <label for="character_character_features_attributes_${index}_source">Source</label>
      <input type="text" value="" name="character[character_features_attributes][${index}][source]" id="character_character_features_attributes_${index}_source">
      <label for="character_character_features_attributes_${index}_feature_type">Feature type</label>
      <input type="text" value="" name="character[character_features_attributes][${index}][feature_type]" id="character_character_features_attributes_${index}_feature_type">
      <label for="character_character_features_attributes_${index}_description">Description</label>
      <textarea name="character[character_features_attributes][${index}][description]" id="character_character_features_attributes_${index}_description"></textarea>
    `;

    items.append(newFieldset);
  });
};

const addFeatureResource = () => {
  const button = document.querySelector('[name="character-form-add-feature-resource-button"]');

  if (!button) return;

  button.addEventListener('click', () => {
    const features = document.querySelector('#character-form-feature-resources');
    const featureFieldsets = document.querySelectorAll('#character-form-feature-resources fieldset');
    const newFeatureFieldset = document.createElement('fieldset');
    const index = featureFieldsets.length;

    newFeatureFieldset.innerHTML = `
      <label for="character_character_feature_resources_attributes_${index}_name">Name</label>
      <input type="text" value="" name="character[character_feature_resources_attributes][${index}][name]" id="character_character_feature_resources_attributes_${index}_name">
      <label for="character_character_feature_resources_attributes_${index}_total">Total</label>
      <input type="number" value="" name="character[character_feature_resources_attributes][${index}][total]" id="character_character_feature_resources_attributes_${index}_total">
    `;

    features.append(newFeatureFieldset);
  });
};

const addItem = () => {
};

const addSpell = () => {
};

const CharacterForm = {
  run() {
    addAttack();
    addFeature();
    addFeatureResource();
    addItem();
    addSpell();
  }
};

export { CharacterForm };
