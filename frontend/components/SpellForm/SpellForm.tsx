import React, { ReactElement, useEffect, useState } from 'react';
import { ISpell } from '../../types/models';
import { SpellSchoolsTypes } from '../../types/rules';

interface ISpellFormProps {
  handleSubmit: (spell: ISpell) => any;
  handleSubmitButtonLabel: string;
  spell?: ISpell;
}

const SpellForm = ({
  handleSubmit,
  handleSubmitButtonLabel,
  spell
}: ISpellFormProps): ReactElement => {
  const [castingTimeField, setCastingTimeField] = useState('');
  const [componentsField, setComponentsField] = useState('');
  const [concentrationField, setConcentrationField] = useState(false);
  const [descriptionField, setDescriptionField] = useState('');
  const [descriptionHigherLevelsField, setDescriptionHigherLevelsField] = useState('');
  const [durationField, setDurationField] = useState('');
  const [levelField, setLevelField] = useState('0');
  const [materialComponentsField, setMaterialComponentsField] = useState(false);
  const [nameField, setNameField] = useState('');
  const [rangeField, setRangeField] = useState('');
  const [ritualField, setRitualField] = useState(false);
  const [schoolField, setSchoolField] = useState<SpellSchoolsTypes>(SpellSchoolsTypes.ABJURATION);
  const [somaticComponentsField, setSomaticComponentsField] = useState(false);
  const [targetField, setTargetField] = useState('');
  const [verbalComponentsField, setVerbalComponentsField] = useState(false);

  useEffect(() => {
    if (spell) {
      const {
        castingTime,
        components,
        concentration,
        description,
        descriptionHigherLevels,
        duration,
        level,
        materialComponents,
        name,
        range,
        ritual,
        school,
        somaticComponents,
        target,
        verbalComponents
      } = spell;

      setCastingTimeField(castingTime);
      setComponentsField(components);
      setConcentrationField(concentration);
      setDescriptionField(description);
      setDescriptionHigherLevelsField(descriptionHigherLevels);
      setDurationField(duration);
      setLevelField(String(level));
      setMaterialComponentsField(materialComponents);
      setNameField(name);
      setRangeField(range);
      setRitualField(ritual);
      setSchoolField(school);
      setSomaticComponentsField(somaticComponents);
      setTargetField(target);
      setVerbalComponentsField(verbalComponents);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const spell: ISpell = {
      castingTime: castingTimeField,
      components: componentsField,
      concentration: concentrationField,
      description: descriptionField,
      descriptionHigherLevels: descriptionHigherLevelsField,
      duration: durationField,
      level: parseInt(levelField),
      materialComponents: materialComponentsField,
      name: nameField,
      range: rangeField,
      ritual: ritualField,
      school: schoolField,
      somaticComponents: somaticComponentsField,
      target: targetField,
      verbalComponents: verbalComponentsField,
    };

    handleSubmit(spell);
  }

  return ( 
    <form onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="spell-name">
          Name
        </label>
        <input 
          id="spell-name" 
          name="spell-name" 
          onChange={e => setNameField(e.target.value)} 
          type="text" 
          value={nameField}/>
        <label htmlFor="spell-level">
          Level
        </label>
        <input 
          id="spell-level"
          name="spell-level"
          onChange={e => setLevelField(e.target.value)}
          type="number"
          value={levelField}/>
        <label htmlFor="spell-school">
          School
        </label>
        <select
          id="spell-school"
          name="spell-school"
          onChange={e => setSchoolField(e.target.value as SpellSchoolsTypes)}
          value={schoolField}>
          <option></option>
          <option value={SpellSchoolsTypes.ABJURATION}>{SpellSchoolsTypes.ABJURATION}</option>
          <option value={SpellSchoolsTypes.CONJURATION}>{SpellSchoolsTypes.CONJURATION}</option>
          <option value={SpellSchoolsTypes.DIVINATION}>{SpellSchoolsTypes.DIVINATION}</option>
          <option value={SpellSchoolsTypes.ENCHANTMENT}>{SpellSchoolsTypes.ENCHANTMENT}</option>
          <option value={SpellSchoolsTypes.EVOCATION}>{SpellSchoolsTypes.EVOCATION}</option>
          <option value={SpellSchoolsTypes.ILLUSION}>{SpellSchoolsTypes.ILLUSION}</option>
          <option value={SpellSchoolsTypes.NECROMANCY}>{SpellSchoolsTypes.NECROMANCY}</option>
          <option value={SpellSchoolsTypes.TRANSMUTATION}>{SpellSchoolsTypes.TRANSMUTATION}</option>
        </select>
        <label htmlFor="spell-casting-time">
          Casting Time
        </label>
        <input
          id="spell-casting-time"
          name="spell-casting-time"
          onChange={e => setCastingTimeField(e.target.value)}
          type="text"
          value={castingTimeField}/>
        <label htmlFor="spell-duration">
          Duration
        </label>
        <input
          id="spell-duration"
          name="spell-duration"
          onChange={e => setDurationField(e.target.value)}
          type="text"
          value={durationField}/>
        <label htmlFor="spell-range">
          Range
        </label>
        <input
          id="spell-range"
          name="spell-range"
          onChange={e => setRangeField(e.target.value)}
          type="text"
          value={rangeField}/>
        <label htmlFor="spell-target">
          Target
        </label>
        <input
          id="spell-target"
          name="spell-target"
          onChange={e => setTargetField(e.target.value)}
          type="text"
          value={targetField}/>
        <label htmlFor="spell-components">
          Components
        </label>
        <input 
          id="spell-components" 
          name="spell-components" 
          onChange={e => setComponentsField(e.target.value)} 
          type="text" 
          value={componentsField}/>
        <label htmlFor="spell-concentration">
          Concentration
        </label>
        <input
          checked={concentrationField}
          id="spell-concentration"
          name="spell-concentration"
          onChange={e => setConcentrationField(e.target.checked)} 
          type="checkbox" />
        <label htmlFor="spell-material-components">
          Material Components
        </label>
        <input 
          checked={materialComponentsField}
          id="spell-material-components"
          name="spell-material-components" 
          onChange={e => setMaterialComponentsField(e.target.checked)} 
          type="checkbox" />
        <label htmlFor="spell-somatic-components">
          Somatic Components
        </label>
        <input
          checked={somaticComponentsField}
          id="spell-somatic-components" 
          name="spell-somatic-components" 
          onChange={e => setSomaticComponentsField(e.target.checked)} 
          type="checkbox" />
        <label htmlFor="spell-verbal-components">
          Verbal Components
        </label>
        <input 
          checked={verbalComponentsField}
          id="spell-verbal-components" 
          name="spell-verbal-components" 
          onChange={e => setVerbalComponentsField(e.target.checked)} 
          type="checkbox" />
        <label htmlFor="spell-ritual">
          Ritual
        </label>
        <input
          checked={ritualField}
          id="spell-ritual"
          name="spell-ritual"
          onChange={e => setRitualField(e.target.checked)} 
          type="checkbox" />
        <label htmlFor="spell-description">
          Description
        </label>
        <textarea 
          id="spell-description" 
          name="spell-description" 
          onChange={e => setDescriptionField(e.target.value)} 
          value={descriptionField}>  
        </textarea>
        <label htmlFor="spell-description-higher-levels">
          Description Higher Levels
        </label>
        <textarea
          id="spell-description-higher-levels"
          name="spell-description-higher-levels" 
          onChange={e => setDescriptionHigherLevelsField(e.target.value)} 
          value={descriptionHigherLevelsField}>  
        </textarea>
      </fieldset>
      <fieldset>
        <button className="button button-green">
          {handleSubmitButtonLabel}
        </button>
      </fieldset>
    </form>
  );
};

export { SpellForm };
