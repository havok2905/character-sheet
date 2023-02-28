import React, { ReactElement, useEffect, useState } from 'react';
import { AlignmentTypes, CreatureCategoryTypes } from '../../utilities/GameSystem/enums';
import { CR_LIST, EXP, NONE, PROF } from '../../utilities/GameSystem/constants';
import { ICreature } from '../../types/models';

const getFormCopy = (formModel: ICreature) => {
  return {
    ...formModel,
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
  handleSubmit: (creature: ICreature) => void;
  handleSubmitButtonLabel: string;
}

const CreatureForm = ({
  creature,
  handleSubmit,
  handleSubmitButtonLabel
}: ICreatureFormProps): ReactElement => {
  const [form, setForm] = useState<ICreature>({
    ac: 0,
    acrobaticsProf: '',
    alignment: AlignmentTypes.CHAOTIC_GOOD,
    animalHandlingProf: '',
    arcanaProf: '',
    athleticsProf: '',
    armor: '',
    backstory: '',
    bonds: '',
    charismaProf: '',
    charismaScore: 0,
    conditionImmunities: '',
    conditionResistances: '',
    conditionVulnerabilities: '',
    constitutionProf: '',
    constitutionScore: 0,
    cr: '',
    creatureCategory: CreatureCategoryTypes.UNKNOWN,
    creatureType: '',
    damageImmunities: '',
    damageResistances: '',
    damageVulnerabilities: '',
    deceptionProf: '',
    description: '',
    dexterityProf: '',
    dexterityScore: 0,
    flaws: '',
    historyProf: '',
    hp: 0,
    ideals: '',
    insightProf: '',
    intelligenceProf: '',
    intelligenceScore: 0,
    intimidationProf: '',
    investigationProf: '',
    jackOfAllTrades: false,
    languages: '',
    magicItems: [],
    medicineProf: '',
    name: '',
    natureProf: '',
    perceptionProf: '',
    performanceProf: '',
    personalityTraits: '',
    persuasionProf: '',
    religionProf: '',
    senses: '',
    size: '',
    sleightOfHandProf: '',
    speed: '',
    spells: [],
    spellcastingAbility: '',
    spellcastingLevel: 0,
    stealthProf: '',
    strengthProf: '',
    strengthScore: 0,
    survivalProf: '',
    wisdomProf: '',
    wisdomScore: 0
  });

  useEffect(() => {
    if (creature) setForm(getFormCopy(creature));
  }, []);

  const {
    ac,
    acrobaticsProf,
    alignment,
    animalHandlingProf,
    arcanaProf,
    armor,
    athleticsProf,
    backstory,
    bonds,
    charismaProf,
    charismaScore,
    conditionImmunities,
    conditionResistances,
    conditionVulnerabilities,
    constitutionProf,
    constitutionScore,
    cr,
    creatureCategory,
    creatureType,
    damageImmunities,
    damageResistances,
    damageVulnerabilities,
    deceptionProf,
    description,
    dexterityProf,
    dexterityScore,
    flaws,
    historyProf,
    hp,
    ideals,
    insightProf,
    intelligenceProf,
    intelligenceScore,
    intimidationProf,
    investigationProf,
    jackOfAllTrades,
    languages,
    medicineProf,
    name,
    natureProf,
    perceptionProf,
    performanceProf,
    personalityTraits,
    persuasionProf,
    religionProf,
    senses,
    size,
    sleightOfHandProf,
    speed,
    spellcastingAbility,
    spellcastingLevel,
    stealthProf,
    strengthProf,
    strengthScore,
    survivalProf,
    wisdomProf,
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
          <option value={AlignmentTypes.UNALIGNED}>{AlignmentTypes.UNALIGNED}</option>
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
        <label>Jack of all Trades</label>
        <input onChange={(e => handleFormChange('jackOfAllTrades', e.target.checked))} type="checkbox" checked={jackOfAllTrades}/>
      </fieldset>
      <h2>Ability Stats</h2>
      <fieldset>
        <table>
          <thead>
            <tr>
              <th>Ability</th>
              <th>Score</th>
              <th>Prof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strength</td>
              <td>
                <input onChange={e => handleFormChange('strengthScore', parseInt(e.target.value))} type="number" value={strengthScore}/>
              </td>
              <td>
                <select onChange={e => handleFormChange('strengthProf', e.target.value)} value={strengthProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Dexterity</td>
              <td>
                <input onChange={e => handleFormChange('dexterityScore', parseInt(e.target.value))} type="number" value={dexterityScore}/>
              </td>
              <td>
                <select onChange={e => handleFormChange('dexterityProf', e.target.value)} value={dexterityProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Constitution</td>
              <td>
                <input onChange={e => handleFormChange('constitutionScore', parseInt(e.target.value))} type="number" value={constitutionScore}/>
              </td>
              <td>
                <select onChange={e => handleFormChange('constitutionProf', e.target.value)} value={constitutionProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Intelligence</td>
              <td>
                <input onChange={e => handleFormChange('intelligenceScore', parseInt(e.target.value))} type="number" value={intelligenceScore}/>
              </td>
              <td>
                <select onChange={e => handleFormChange('intelligenceProf', e.target.value)} value={intelligenceProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Wisdom</td>
              <td>
                <input onChange={e => handleFormChange('wisdomScore', parseInt(e.target.value))} type="number" value={wisdomScore}/>
              </td>
              <td>
                <select onChange={e => handleFormChange('wisdomProf', e.target.value)} value={wisdomProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Charisma</td>
              <td>
                <input onChange={e => handleFormChange('charismaScore', parseInt(e.target.value))} type="number" value={charismaScore}/>
              </td>
              <td>
                <select onChange={e => handleFormChange('charismaProf', e.target.value)} value={charismaProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <h2>Skill Stats</h2>
      <fieldset>
        <table>
          <thead>
            <tr>
              <th>Ability</th>
              <th>Prof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Acrobatics</td>
              <td>
                <select onChange={e => handleFormChange('acrobaticsProf', e.target.value)} value={acrobaticsProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Animal Handling</td>
              <td>
                <select onChange={e => handleFormChange('animalHandlingProf', e.target.value)} value={animalHandlingProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Arcana</td>
              <td>
                <select onChange={e => handleFormChange('arcanaProf', e.target.value)} value={arcanaProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Athletics</td>
              <td>
                <select onChange={e => handleFormChange('athleticsProf', e.target.value)} value={athleticsProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Deception</td>
              <td>
                <select onChange={e => handleFormChange('deceptionProf', e.target.value)} value={deceptionProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>History</td>
              <td>
                <select onChange={e => handleFormChange('historyProf', e.target.value)} value={historyProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Insight</td>
              <td>
                <select onChange={e => handleFormChange('insightProf', e.target.value)} value={insightProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Intimidation</td>
              <td>
                <select onChange={e => handleFormChange('intimidationProf', e.target.value)} value={intimidationProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Investigation</td>
              <td>
                <select onChange={e => handleFormChange('investigationProf', e.target.value)} value={investigationProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Medicine</td>
              <td>
                <select onChange={e => handleFormChange('medicineProf', e.target.value)} value={medicineProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Nature</td>
              <td>
                <select onChange={e => handleFormChange('natureProf', e.target.value)} value={natureProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Perception</td>
              <td>
                <select onChange={e => handleFormChange('perceptionProf', e.target.value)} value={perceptionProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Performance</td>
              <td>
                <select onChange={e => handleFormChange('performanceProf', e.target.value)} value={performanceProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Persuasion</td>
              <td>
                <select onChange={e => handleFormChange('persuasionProf', e.target.value)} value={persuasionProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>
                <select onChange={e => handleFormChange('religionProf', e.target.value)} value={religionProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Sleight of Hand</td>
              <td>
                <select onChange={e => handleFormChange('sleightOfHandProf', e.target.value)} value={sleightOfHandProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Stealth</td>
              <td>
                <select onChange={e => handleFormChange('stealthProf', e.target.value)} value={stealthProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Survival</td>
              <td>
                <select onChange={e => handleFormChange('survivalProf', e.target.value)} value={survivalProf}>
                  <option value={NONE}>None</option>
                  <option value={PROF}>Proficient</option>
                  <option value={EXP}>Expertise</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
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
        <button className="button button-green">
          {handleSubmitButtonLabel}
        </button>
      </fieldset>
    </form>
  );
};

export { CreatureForm };
