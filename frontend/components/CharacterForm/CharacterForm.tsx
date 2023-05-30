import React, { FC, useEffect, useState } from 'react';
import { AlignmentTypes } from '../../utilities/GameSystem/enums';
import { CLASSES } from '../../utilities/GameSystem/constants';
import { ICharacter } from '../../types/models';
import { EXP, NONE, PROF } from '../../utilities/GameSystem/constants';

const getFormCopy = (formModel: ICharacter) => {
  return {
    ...formModel,
    creatures: [
      ...(formModel.creatures || []).map(creature => {
        return { ...creature }
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

interface ICharacterFormProps {
  character?: ICharacter;
  handleSubmit: (character: ICharacter) => void;
  handleSubmitButtonLabel: string,
}

const CharacterForm: FC<ICharacterFormProps> = ({
  character,
  handleSubmit,
  handleSubmitButtonLabel
}) => {
  const [form, setForm] = useState<ICharacter>({
    ac: 0,
    acrobaticsProf: '',
    age: 0,
    alignment: '',
    animalHandlingProf: '',
    arcanaProf: '',
    athleticsProf: '',
    armorProficiencies: '',
    background: '',
    backstory: '',
    bonds: '',
    characterClass: '',
    characterClassHitDice: 0,
    characterClassLevel: 0,
    characterSubClass: '',
    charismaProf: '',
    charismaScore: 0,
    conditionImmunities: '',
    conditionResistances: '',
    conditionVulnerabilities: '',
    constitutionProf: '',
    constitutionScore: 0,
    copperPieces: 0,
    damageImmunities: '',
    damageResistances: '',
    damageVulnerabilities: '',
    deceptionProf: '',
    dexterityProf: '',
    dexterityScore: 0,
    electrumPieces: 0,
    eyes: '',
    flaws: '',
    goldPieces: 0,
    hair: '',
    height: '',
    historyProf: '',
    hp: 0,
    ideals: '',
    initiative: 0,
    insightProf: '',
    intelligenceProf: '',
    intelligenceScore: 0,
    intimidationProf: '',
    investigationProf: '',
    jackOfAllTrades: false,
    languages: '',
    medicineProf: '',
    multiclassClass: '',
    multiclassClassHitDice: 0,
    multiclassClassLevel: 0,
    multiclassSubClass: '',
    name: '',
    natureProf: '',
    passivePerception: 0,
    perceptionProf: '',
    performanceProf: '',
    personalityTraits: '',
    persuasionProf: '',
    platinumPieces: 0,
    race: '',
    religionProf: '',
    senses: '',
    silverPieces: 0,
    skin: '',
    sleightOfHandProf: '',
    speed: 0,
    spellcastingAbility: '',
    stealthProf: '',
    strengthProf: '',
    strengthScore: 0,
    subRace: '',
    survivalProf: '',
    toolProficiencies: '',
    weaponProficiencies: '',
    weight: '',
    wisdomProf: '',
    wisdomScore: 0,
  });

  useEffect(() => {
    if (character) setForm(getFormCopy(character));
  }, []);

  const {
    ac,
    acrobaticsProf,
    age,
    alignment,
    animalHandlingProf,
    arcanaProf,
    athleticsProf,
    armorProficiencies,
    background,
    backstory,
    bonds,
    characterClass,
    characterClassHitDice,
    characterClassLevel,
    characterSubClass,
    charismaProf,
    charismaScore,
    conditionImmunities,
    conditionResistances,
    conditionVulnerabilities,
    constitutionProf,
    constitutionScore,
    copperPieces,
    damageImmunities,
    damageResistances,
    damageVulnerabilities,
    deceptionProf,
    dexterityProf,
    dexterityScore,
    electrumPieces,
    eyes,
    flaws,
    goldPieces,
    hair,
    height,
    historyProf,
    hp,
    ideals,
    initiative,
    insightProf,
    intelligenceProf,
    intelligenceScore,
    intimidationProf,
    investigationProf,
    jackOfAllTrades,
    languages,
    medicineProf,
    multiclassClass,
    multiclassClassHitDice,
    multiclassClassLevel,
    multiclassSubClass,
    name,
    natureProf,
    passivePerception,
    platinumPieces,
    perceptionProf,
    performanceProf,
    personalityTraits,
    persuasionProf,
    race,
    religionProf,
    senses,
    silverPieces,
    skin,
    sleightOfHandProf,
    speed,
    spellcastingAbility,
    stealthProf,
    strengthProf,
    strengthScore,
    subRace,
    survivalProf,
    toolProficiencies,
    weaponProficiencies,
    weight,
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
      <div className="layout">
        <div className="full">
          <h2>Character Details</h2>
          <fieldset>
            <label>Name</label>
            <input onChange={e => handleFormChange('name', e.target.value)} type="text" value={name}/>
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
            <label>Background</label>
            <input onChange={e => handleFormChange('background', e.target.value)} type="text" value={background}/>
            <label>Race</label>
            <input onChange={e => handleFormChange('race', e.target.value)} type="text" value={race}/>
            <label>Sub Race</label>
            <input onChange={e => handleFormChange('subRace', e.target.value)} type="text" value={subRace}/>
            <label>Jack of all Trades</label>
            <input onChange={(e => handleFormChange('jackOfAllTrades', e.target.checked))} type="checkbox" checked={jackOfAllTrades}/>
          </fieldset>
        </div>
        <div className="column">
          <h2>Character Class</h2>
          <fieldset>
            <label>Class</label>
            <select onChange={e => handleFormChange('characterClass', e.target.value)} value={characterClass}>
              <option value=""></option>
              {
                CLASSES.map(classItem => {
                  return (
                    <option value={classItem}>
                      {classItem}
                    </option>
                  )
                })
              }
            </select>
            <label>Sub Class</label>
            <input onChange={e => handleFormChange('characterSubClass', e.target.value)} type="text" value={characterSubClass}/>
            <label>Hit Dice</label>
            <input onChange={e => handleFormChange('characterClassHitDice', e.target.value)} type="number" value={characterClassHitDice}/>
            <label>Level</label>
            <input onChange={e => handleFormChange('characterClassLevel', e.target.value)} type="number" value={characterClassLevel}/>
          </fieldset>
        </div>
        <div className="column">
          <h2>Character Multiclass</h2>
          <fieldset>
            <label>Multiclass</label>
            <select onChange={e => handleFormChange('multiclassClass', e.target.value)} value={multiclassClass}>
              <option value=""></option>
              {
                CLASSES.map(classItem => {
                  return (
                    <option value={classItem}>
                      {classItem}
                    </option>
                  )
                })
              }
            </select>
            <label>Sub Class</label>
            <input onChange={e => handleFormChange('multiclassSubClass', e.target.value)} type="text" value={multiclassSubClass}/>
            <label>Hit Dice</label>
            <input onChange={e => handleFormChange('multiclassClassHitDice', e.target.value)} type="number" value={multiclassClassHitDice}/>
            <label>Level</label>
            <input onChange={e => handleFormChange('multiclassClassLevel', e.target.value)} type="number" value={multiclassClassLevel}/>
          </fieldset>
        </div>
      </div>
      <div className="full">
        <h2>Ability Stats</h2>
        <fieldset>
          <label>HP</label>
          <input onChange={e => handleFormChange('hp', e.target.value)} type="number" value={hp}/>
          <label>AC</label>
          <input onChange={e => handleFormChange('ac', e.target.value)} type="number" value={ac}/>
          <label>Initiative</label>
          <input onChange={e => handleFormChange('initiative', e.target.value)} type="number" value={initiative}/>
          <label>Speed</label>
          <input onChange={e => handleFormChange('speed', e.target.value)} type="number" value={speed}/>
        </fieldset>
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
              <tr>
                <td>Passive Perception</td>
                <td><input onChange={e => handleFormChange('passivePerception', e.target.value)} type="number" value={passivePerception}/></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <h2>Spellcasting</h2>
        <fieldset>
          <label>Spellcasting Ability</label>
          <input onChange={e => handleFormChange('spellcastingAbility', e.target.value)} type="text" value={spellcastingAbility}/>
        </fieldset>
      </div>
      <div className="layout">
        <div className="full">
          <h2>Biography</h2>
        </div>
        <div className="column">
          <fieldset>
            <label>Personality Traits</label>
            <textarea
              onChange={e => handleFormChange('personalityTraits', e.target.value)}
              value={personalityTraits}>
            </textarea>
            <label>Ideals</label>
            <textarea
              onChange={e => handleFormChange('ideals', e.target.value)}
              value={ideals}>
            </textarea>
            <label>Bonds</label>
            <textarea
              onChange={e => handleFormChange('bonds', e.target.value)}
              value={bonds}>
            </textarea>
            <label>Flaws</label>
            <textarea
              onChange={e => handleFormChange('flaws', e.target.value)}
              value={flaws}>
            </textarea>
          </fieldset>
        </div>
        <div className="column">
          <fieldset>
            <label>Age</label>
            <input onChange={e => handleFormChange('age', e.target.value)} type="number" value={age}/>
            <label>Eyes</label>
            <input onChange={e => handleFormChange('eyes', e.target.value)} type="text" value={eyes}/>
            <label>Hair</label>
            <input onChange={e => handleFormChange('hair', e.target.value)} type="text" value={hair}/>
            <label>Height</label>
            <input onChange={e => handleFormChange('height', e.target.value)} type="text" value={height}/>
            <label>Skin</label>
            <input onChange={e => handleFormChange('skin', e.target.value)} type="text" value={skin}/>
            <label>Weight</label>
            <input onChange={e => handleFormChange('weight', e.target.value)} type="text" value={weight}/>
          </fieldset>
          <fieldset>
            <label>Backstory</label>
            <textarea
              onChange={e => handleFormChange('backstory', e.target.value)}
              rows={15}
              value={backstory}>
            </textarea>
          </fieldset>
        </div>
        <div className="full">
          <h2>Treasure</h2>
          <fieldset>
            <label>Copper Pieces</label>
            <input onChange={e => handleFormChange('copperPieces', e.target.value)} type="number" value={copperPieces}/>
            <label>Silver Pieces</label>
            <input onChange={e => handleFormChange('silverPieces', e.target.value)} type="number" value={silverPieces}/>
            <label>Electrum Pieces</label>
            <input onChange={e => handleFormChange('electrumPieces', e.target.value)} type="number" value={electrumPieces}/>
            <label>Gold Pieces</label>
            <input onChange={e => handleFormChange('goldPieces', e.target.value)} type="number" value={goldPieces}/>
            <label>Platinum Pieces</label>
            <input onChange={e => handleFormChange('platinumPieces', e.target.value)} type="number" value={platinumPieces}/>
          </fieldset>
          <h2>Character Proficiencies</h2>
          <fieldset>
            <label>Armor Proficiencies</label>
            <input onChange={e => handleFormChange('armorProficiencies', e.target.value)} type="text" value={armorProficiencies}/>
            <label>Tool Proficiencies</label>
            <input onChange={e => handleFormChange('toolProficiencies', e.target.value)} type="text" value={toolProficiencies}/>
            <label>Weapon Proficiencies</label>
            <input onChange={e => handleFormChange('weaponProficiencies', e.target.value)} type="text" value={weaponProficiencies}/>
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
          <fieldset>
            <button className="button button-constructive">
              {handleSubmitButtonLabel}
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export { CharacterForm };
