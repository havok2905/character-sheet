import React, { ReactElement, useEffect, useState } from 'react';
import { AlignmentTypes, CreatureCategoryTypes, CR_LIST } from '../../types/rules';
import { ICreature, IFaction, IMagicItem, ISpell } from '../../types/models';

const getFormCopy = (formModel: ICreature) => {
  return {
    ...formModel,
    factions: [
      ...(formModel.factions || []).map(faction => {
        return { ...faction }
      })
    ],
    magicItems: [
      ...(formModel.magicItems || []).map(magicItem => {
        return { ...magicItem }
      })
    ],
    spells: [
      ...(formModel.spells || []).map(spell => {
        return { ...spell }
      })
    ]
  };
};

interface ICreatureFormProps {
  creature?: ICreature;
  factions: IFaction[];
  handleSubmit: (creature: ICreature) => void;
  handleSubmitButtonLabel: string;
  magicItems: IMagicItem[];
  spells: ISpell[];
}

const CreatureForm = ({
  creature,
  handleSubmit,
  handleSubmitButtonLabel
}: ICreatureFormProps): ReactElement => {
  const [form, setForm] = useState<ICreature>({
    ac: 0,
    alignment: AlignmentTypes.CHAOTIC_GOOD,
    armor: '',
    backstory: '',
    bonds: '',
    charismaMod: 0,
    charismaSave: 0,
    charismaScore: 0,
    conditionImmunities: '',
    conditionResistances: '',
    conditionVulnerabilities: '',
    constitutionMod: 0,
    constitutionSave: 0,
    constitutionScore: 0,
    cr: '',
    creatureCategory: CreatureCategoryTypes.UNKNOWN,
    creatureType: '',
    damageImmunities: '',
    damageResistances: '',
    damageVulnerabilities: '',
    description: '',
    dexterityMod: 0,
    dexteritySave: 0,
    dexterityScore: 0,
    factions: [],
    flaws: '',
    hp: 0,
    ideals: '',
    intelligenceMod: 0,
    intelligenceSave: 0,
    intelligenceScore: 0,
    languages: '',
    magicItems: [],
    name: '',
    personalityTraits: '',
    senses: '',
    size: '',
    skills: '',
    speed: '',
    spells: [],
    spellSlotsFirst: 0,
    spellSlotsSecond: 0,
    spellSlotsThird: 0,
    spellSlotsFourth: 0,
    spellSlotsFifth: 0,
    spellSlotsSixth: 0,
    spellSlotsSeventh: 0,
    spellSlotsEighth: 0,
    spellSlotsNinth: 0,
    spellcastingAbility: '',
    spellcastingLevel: 0,
    spellcastingModifier: 0,
    spellcastingSaveDc: 0,
    strengthMod: 0,
    strengthSave: 0,
    strengthScore: 0,
    wisdomMod: 0,
    wisdomSave: 0,
    wisdomScore: 0
  });

  useEffect(() => {
    if (creature) setForm(getFormCopy(creature));
  }, []);

  const {
    ac,
    alignment,
    armor,
    backstory,
    bonds,
    charismaMod,
    charismaSave,
    charismaScore,
    conditionImmunities,
    conditionResistances,
    conditionVulnerabilities,
    constitutionMod,
    constitutionSave,
    constitutionScore,
    cr,
    creatureCategory,
    creatureType,
    damageImmunities,
    damageResistances,
    damageVulnerabilities,
    description,
    dexterityMod,
    dexteritySave,
    dexterityScore,
    flaws,
    hp,
    ideals,
    intelligenceMod,
    intelligenceSave,
    intelligenceScore,
    languages,
    name,
    personalityTraits,
    senses,
    size,
    skills,
    speed,
    spellSlotsFirst,
    spellSlotsSecond,
    spellSlotsThird,
    spellSlotsFourth,
    spellSlotsFifth,
    spellSlotsSixth,
    spellSlotsSeventh,
    spellSlotsEighth,
    spellSlotsNinth,
    spellcastingAbility,
    spellcastingLevel,
    spellcastingModifier,
    spellcastingSaveDc,
    strengthMod,
    strengthSave,
    strengthScore,
    wisdomMod,
    wisdomSave,
    wisdomScore
  } = form;

  const handleFormChange = (key: string, value: any) => {
    const updatedForm = getFormCopy(form);
    updatedForm[key] = value;
    setForm(updatedForm);
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <h2>Character Details</h2>
        <label>Category</label>
        <select
          onChange={e => handleFormChange('creatureCategory', e.target.value as CreatureCategoryTypes)}
          value={creatureCategory}>
          <option value=""></option>
          <option value={CreatureCategoryTypes.MONSTER}>{CreatureCategoryTypes.MONSTER}</option>
          <option value={CreatureCategoryTypes.NPC}>{CreatureCategoryTypes.NPC}</option>
        </select>
        <label>Name</label>
        <input onChange={e => handleFormChange('name', e.target.value)} type="text" value={name}/>
        <label>Size</label>
        <input onChange={e => handleFormChange('size', e.target.value)} type="text" value={size}/>
        <label>Creature Type</label>
        <input onChange={e => handleFormChange('creatureType', e.target.value)} type="text" value={creatureType}/>
        <label>Alignment</label>
        <select onChange={e => handleFormChange('alignment', e.target.value as AlignmentTypes)} value={alignment}>
          <option value={AlignmentTypes.CHAOTIC_GOOD}>{AlignmentTypes.CHAOTIC_GOOD}</option>
          <option value={AlignmentTypes.NEUTRAL_GOOD}>{AlignmentTypes.NEUTRAL_GOOD}</option>
          <option value={AlignmentTypes.LAWFUL_GOOD}>{AlignmentTypes.LAWFUL_GOOD}</option>
          <option value={AlignmentTypes.CHAOTIC_NEUTRAL}>{AlignmentTypes.CHAOTIC_NEUTRAL}</option>
          <option value={AlignmentTypes.NEUTRAL}>{AlignmentTypes.NEUTRAL}</option>
          <option value={AlignmentTypes.LAWFUL_NEUTRAL}>{AlignmentTypes.LAWFUL_NEUTRAL}</option>
          <option value={AlignmentTypes.CHAOTIC_EVIL}>{AlignmentTypes.CHAOTIC_EVIL}</option>
          <option value={AlignmentTypes.NEUTRAL_EVIL}>{AlignmentTypes.NEUTRAL_EVIL}</option>
          <option value={AlignmentTypes.LAWFUL_EVIL}>{AlignmentTypes.LAWFUL_EVIL}</option>
        </select>
        <label>CR</label>
        <select onChange={e => handleFormChange('cr', e.target.value)} value={cr}>
          <option value=""></option>
          {
            CR_LIST.map(crListItem => {
              return <option value={crListItem}>{crListItem}</option>
            })
          }
        </select>
        <label>AC</label>
        <input onChange={e => handleFormChange('ac', parseInt(e.target.value))} type="number" value={ac}/>
        <label>Armor</label>
        <input onChange={e => handleFormChange('armor', e.target.value)} type="text" value={armor}/>
        <label>HP</label>
        <input onChange={e => handleFormChange('hp', parseInt(e.target.value))} type="number" value={hp}/>
        <label>Speed</label>
        <input onChange={e => handleFormChange('speed', e.target.value)} type="text" value={speed}/>
      </fieldset>
      <h2>Character Stats</h2>
      <fieldset>
        <table>
          <thead>
            <tr>
              <th>Ability</th>
              <th>Score</th>
              <th>Mod</th>
              <th>Save</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strength</td>
              <td>
                <input onChange={e => handleFormChange('strengthScore', parseInt(e.target.value))} type="number" value={strengthScore}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('strengthMod', parseInt(e.target.value))} type="number" value={strengthMod}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('strengthSave', parseInt(e.target.value))} type="number" value={strengthSave}/>
              </td>
            </tr>
            <tr>
              <td>Dexterity</td>
              <td>
                <input onChange={e => handleFormChange('dexterityScore', parseInt(e.target.value))} type="number" value={dexterityScore}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('dexterityMod', parseInt(e.target.value))} type="number" value={dexterityMod}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('dexteritySave', parseInt(e.target.value))} type="number" value={dexteritySave}/>
              </td>
            </tr>
            <tr>
              <td>Constitution</td>
              <td>
                <input onChange={e => handleFormChange('constitutionScore', parseInt(e.target.value))} type="number" value={constitutionScore}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('constitutionMod', parseInt(e.target.value))} type="number" value={constitutionMod}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('constitutionSave', parseInt(e.target.value))} type="number" value={constitutionSave}/>
              </td>
            </tr>
            <tr>
              <td>Intelligence</td>
              <td>
                <input onChange={e => handleFormChange('intelligenceScore', parseInt(e.target.value))} type="number" value={intelligenceScore}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('intelligenceMod', parseInt(e.target.value))} type="number" value={intelligenceMod}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('intelligenceSave', parseInt(e.target.value))} type="number" value={intelligenceSave}/>
              </td>
            </tr>
            <tr>
              <td>Wisdom</td>
              <td>
                <input onChange={e => handleFormChange('wisdomScore', parseInt(e.target.value))} type="number" value={wisdomScore}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('wisdomMod', parseInt(e.target.value))} type="number" value={wisdomMod}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('wisdomSave', parseInt(e.target.value))} type="number" value={wisdomSave}/>
              </td>
            </tr>
            <tr>
              <td>Charisma</td>
              <td>
                <input onChange={e => handleFormChange('charismaScore', parseInt(e.target.value))} type="number" value={charismaScore}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('charismaMod', parseInt(e.target.value))} type="number" value={charismaMod}/>
              </td>
              <td>
                <input onChange={e => handleFormChange('charismaSave', parseInt(e.target.value))} type="number" value={charismaSave}/>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <fieldset>
        <label>Skills</label>
        <input onChange={e => handleFormChange('skills', e.target.value)} type="text" value={skills}/>
      </fieldset>
      <h2>Creature Proficiencies</h2>
      <fieldset>
        <label>Condition Immunities</label>
        <input onChange={e => handleFormChange('conditionImmunities', e.target.value)} type="text" value={conditionImmunities}/>
        <label>Condition Resistances</label>
        <input onChange={e => handleFormChange('conditionResistances', e.target.value)} type="text" value={conditionResistances}/>
        <label>Condition Vulnerabilities</label>
        <input onChange={e => handleFormChange('conditionVulnerabilities', e.target.value)} type="text" value={conditionVulnerabilities}/>
        <label>Damage Immunities</label>
        <input onChange={e => handleFormChange('damageImmunities', e.target.value)} type="text" value={damageImmunities}/>
        <label>Damage Resistances</label>
        <input onChange={e => handleFormChange('damageResistances', e.target.value)} type="text" value={damageResistances}/>
        <label>Damage Vulnerabilities</label>
        <input onChange={e => handleFormChange('damageVulnerabilities', e.target.value)} type="text" value={damageVulnerabilities}/>
        <label>Senses</label>
        <input onChange={e => handleFormChange('senses', e.target.value)} type="text" value={senses}/>
        <label>Languages</label>
        <input onChange={e => handleFormChange('languages', e.target.value)} type="text" value={languages}/>
      </fieldset>
      <h2>Spellcasting</h2>
      <fieldset>
        <label>Spellcasting Level</label>
        <input onChange={e => handleFormChange('spellcastingLevel', parseInt(e.target.value))} type="number" value={spellcastingLevel}/>
        <label>Spellcasting Ability</label>
        <input onChange={e => handleFormChange('spellcastingAbility', e.target.value)} type="text" value={spellcastingAbility}/>
        <label>Spellcasting Modifier</label>
        <input onChange={e => handleFormChange('spellcastingModifier', parseInt(e.target.value))} type="number" value={spellcastingModifier}/>
        <label>Spellcasting Save DC</label>
        <input onChange={e => handleFormChange('spellcastingSaveDc', parseInt(e.target.value))} type="number" value={spellcastingSaveDc}/>
      </fieldset>
      <fieldset>
        <label>1st Level Spell Slots</label>
        <input onChange={e => handleFormChange('spellSlotsFirst', parseInt(e.target.value))} type="number" value={spellSlotsFirst}/>
        <label>2nd Level Spell Slots</label>
        <input onChange={e => handleFormChange('spellSlotsSecond', parseInt(e.target.value))} type="number" value={spellSlotsSecond}/>
        <label>3rd Level Spell Slots</label>
        <input onChange={e => handleFormChange('spellSlotsThird', parseInt(e.target.value))} type="number" value={spellSlotsThird}/>
        <label>4th Level Spell Slots</label>
        <input onChange={e => handleFormChange('spellSlotsFourth', parseInt(e.target.value))} type="number" value={spellSlotsFourth}/>
        <label>5th Level Spell Slots</label>
        <input onChange={e => handleFormChange('spellSlotsFifth', parseInt(e.target.value))} type="number" value={spellSlotsFifth}/>
        <label>6th Level Spell Slots</label>
        <input onChange={e => handleFormChange('spellSlotsSixth', parseInt(e.target.value))} type="number" value={spellSlotsSixth}/>
        <label>7th Level Spell Slots</label>
        <input onChange={e => handleFormChange('spellSlotsSeventh', parseInt(e.target.value))} type="number" value={spellSlotsSeventh}/>
        <label>8th Level Spell Slots</label>
        <input onChange={e => handleFormChange('spellSlotsEighth', parseInt(e.target.value))} type="number" value={spellSlotsEighth}/>
        <label>9th Level Spell Slots</label>
        <input onChange={e => handleFormChange('spellSlotsNinth', parseInt(e.target.value))} type="number" value={spellSlotsNinth}/>
      </fieldset>
      <h2>About</h2>
      <fieldset>
        <label>Personality Traits</label>
        <textarea onChange={e => handleFormChange('personalityTraits', e.target.value)} value={personalityTraits}>
        </textarea>
        <label>Ideals</label>
        <textarea onChange={e => handleFormChange('ideals', e.target.value)} value={ideals}>
        </textarea>
        <label>Bonds</label>
        <textarea onChange={e => handleFormChange('bonds', e.target.value)} value={bonds}>
        </textarea>
        <label>Flaws</label>
        <textarea onChange={e => handleFormChange('flaws', e.target.value)} value={flaws}>
        </textarea>
        <label>Description</label>
        <textarea onChange={e => handleFormChange('description', e.target.value)} value={description}>
        </textarea>
        <label>Backstory</label>
        <textarea onChange={e => handleFormChange('backstory', e.target.value)} value={backstory}>
        </textarea>
      </fieldset>
      <fieldset>
        <button>
          {handleSubmitButtonLabel}
        </button>
      </fieldset>
    </form>
  );
};

export { CreatureForm };
