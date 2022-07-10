import React, { ReactElement, useEffect, useState } from 'react';
import { AlignmentTypes } from '../../types/rules';
import { ICharacter } from '../../types/models';

const getFormCopy = (formModel: ICharacter) => {
  return {
    ...formModel,
    creatures: [
      ...(formModel.creatures || []).map(creature => {
        return { ...creature }
      })
    ],
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

interface ICharacterFormProps {
  character?: ICharacter;
  handleSubmit: (character: ICharacter) => void;
  handleSubmitButtonLabel: string,
}

const CharacterForm = ({
  character,
  handleSubmit,
  handleSubmitButtonLabel
}: ICharacterFormProps): ReactElement => {
  const [form, setForm] = useState<ICharacter>({
    ac: 0,
    acrobaticsMod: 0,
    acrobaticsProf: '',
    age: 0,
    alignment: '',
    animalHandlingMod: 0,
    animalHandlingProf: '',
    arcanaMod: 0,
    arcanaProf: '',
    athleticsMod: 0,
    athleticsProf: '',
    armorProficiencies: '',
    background: '',
    backstory: '',
    bonds: '',
    characterClass: '',
    characterClassHitDice: 0,
    characterClassLevel: 0,
    characterSubClass: '',
    charismaMod: 0,
    charismaProf: '',
    charismaSave: 0,
    charismaScore: 0,
    conditionImmunities: '',
    conditionResistances: '',
    conditionVulnerabilities: '',
    constitutionMod: 0,
    constitutionProf: '',
    constitutionSave: 0,
    constitutionScore: 0,
    copperPieces: 0,
    damageImmunities: '',
    damageResistances: '',
    damageVulnerabilities: '',
    deceptionMod: 0,
    deceptionProf: '',
    dexterityMod: 0,
    dexterityProf: '',
    dexteritySave: 0,
    dexterityScore: 0,
    electrumPieces: 0,
    eyes: '',
    flaws: '',
    goldPieces: 0,
    hair: '',
    height: '',
    historyMod: 0,
    historyProf: '',
    hp: 0,
    ideals: '',
    initiative: 0,
    insightMod: 0,
    insightProf: '',
    intelligenceMod: 0,
    intelligenceProf: '',
    intelligenceSave: 0,
    intelligenceScore: 0,
    intimidationMod: 0,
    intimidationProf: '',
    investigationMod: 0,
    investigationProf: '',
    languages: '',
    medicineMod: 0,
    medicineProf: '',
    multiclassClass: '',
    multiclassClassHitDice: 0,
    multiclassClassLevel: 0,
    multiclassSubClass: '',
    name: '',
    natureMod: 0,
    natureProf: '',
    passivePerception: 0,
    perceptionMod: 0,
    perceptionProf: '',
    performanceMod: 0,
    performanceProf: '',
    personalityTraits: '',
    persuasionMod: 0,
    persuasionProf: '',
    platinumPieces: 0,
    proficiencyBonus: 0,
    race: '',
    religionMod: 0,
    religionProf: '',
    senses: '',
    silverPieces: 0,
    skin: '',
    sleightOfHandMod: 0,
    sleightOfHandProf: '',
    speed: 0,
    spellSlotsEighth: 0,
    spellSlotsFifth: 0,
    spellSlotsFirst: 0,
    spellSlotsFourth: 0,
    spellSlotsNinth: 0,
    spellSlotsSecond: 0,
    spellSlotsSeventh: 0,
    spellSlotsSixth: 0,
    spellSlotsThird: 0,
    spellcastingAbility: '',
    spellcastingModifier: 0,
    spellcastingSaveDc: 0,
    stealthMod: 0,
    stealthProf: '',
    strengthMod: 0,
    strengthProf: '',
    strengthSave: 0,
    strengthScore: 0,
    subRace: '',
    survivalMod: 0,
    survivalProf: '',
    toolProficiencies: '',
    weaponProficiencies: '',
    weight: '',
    wisdomMod: 0,
    wisdomProf: '',
    wisdomSave: 0,
    wisdomScore: 0,
  });

  useEffect(() => {
    if (character) setForm(getFormCopy(character));
  }, []);

  const {
    ac,
    acrobaticsMod,
    acrobaticsProf,
    age,
    alignment,
    animalHandlingMod,
    animalHandlingProf,
    arcanaMod,
    arcanaProf,
    athleticsMod,
    athleticsProf,
    armorProficiencies,
    background,
    backstory,
    bonds,
    characterClass,
    characterClassHitDice,
    characterClassLevel,
    characterSubClass,
    charismaMod,
    charismaProf,
    charismaSave,
    charismaScore,
    conditionImmunities,
    conditionResistances,
    conditionVulnerabilities,
    constitutionMod,
    constitutionProf,
    constitutionSave,
    constitutionScore,
    copperPieces,
    damageImmunities,
    damageResistances,
    damageVulnerabilities,
    deceptionMod,
    deceptionProf,
    dexterityMod,
    dexterityProf,
    dexteritySave,
    dexterityScore,
    electrumPieces,
    eyes,
    flaws,
    goldPieces,
    hair,
    height,
    historyMod,
    historyProf,
    hp,
    ideals,
    initiative,
    insightMod,
    insightProf,
    intelligenceMod,
    intelligenceProf,
    intelligenceSave,
    intelligenceScore,
    intimidationMod,
    intimidationProf,
    investigationMod,
    investigationProf,
    languages,
    medicineMod,
    medicineProf,
    multiclassClass,
    multiclassClassHitDice,
    multiclassClassLevel,
    multiclassSubClass,
    name,
    natureMod,
    natureProf,
    passivePerception,
    platinumPieces,
    perceptionMod,
    perceptionProf,
    performanceMod,
    performanceProf,
    personalityTraits,
    persuasionMod,
    persuasionProf,
    proficiencyBonus,
    race,
    religionMod,
    religionProf,
    senses,
    silverPieces,
    skin,
    sleightOfHandMod,
    sleightOfHandProf,
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
    spellcastingModifier,
    spellcastingSaveDc,
    stealthMod,
    stealthProf,
    strengthMod,
    strengthProf,
    strengthSave,
    strengthScore,
    subRace,
    survivalMod,
    survivalProf,
    toolProficiencies,
    weaponProficiencies,
    weight,
    wisdomMod,
    wisdomProf,
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
          </fieldset>
        </div>
        <div className="column">
          <h2>Character Class</h2>
          <fieldset>
            <label>Class</label>
            <input onChange={e => handleFormChange('characterClass', e.target.value)} type="text" value={characterClass}/>
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
            <input onChange={e => handleFormChange('multiclassClass', e.target.value)} type="text" value={multiclassClass}/>
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
        <h2>Character Stats</h2>
        <fieldset>
          <label>HP</label>
          <input onChange={e => handleFormChange('hp', e.target.value)} type="number" value={hp}/>
          <label>AC</label>
          <input onChange={e => handleFormChange('ac', e.target.value)} type="number" value={ac}/>
          <label>Initiative</label>
          <input onChange={e => handleFormChange('initiative', e.target.value)} type="number" value={initiative}/>
          <label>Speed</label>
          <input onChange={e => handleFormChange('speed', e.target.value)} type="number" value={speed}/>
          <label>Proficiency Bonus</label>
          <input onChange={e => handleFormChange('proficiencyBonus', e.target.value)} type="number" value={proficiencyBonus}/>
        </fieldset>
        <fieldset>
          <table>
            <thead>
              <tr>
                <th>Ability</th>
                <th>Score</th>
                <th>Mod</th>
                <th>Save</th>
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
                  <input onChange={e => handleFormChange('strengthMod', parseInt(e.target.value))} type="number" value={strengthMod}/>
                </td>
                <td>
                  <input onChange={e => handleFormChange('strengthSave', parseInt(e.target.value))} type="number" value={strengthSave}/>
                </td>
                <td>
                  <select onChange={e => handleFormChange('strengthProf', e.target.value)} value={strengthProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
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
                <td>
                  <select onChange={e => handleFormChange('dexterityProf', e.target.value)} value={dexterityProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
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
                <td>
                  <select onChange={e => handleFormChange('constitutionProf', e.target.value)} value={constitutionProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
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
                <td>
                  <select onChange={e => handleFormChange('intelligenceProf', e.target.value)} value={intelligenceProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
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
                <td>
                  <select onChange={e => handleFormChange('wisdomProf', e.target.value)} value={wisdomProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
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
                <td>
                  <select onChange={e => handleFormChange('charismaProf', e.target.value)} value={charismaProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <h2>Character Stats</h2>
        <fieldset>
          <table>
            <thead>
              <tr>
                <th>Ability</th>
                <th>Mod</th>
                <th>Prof</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acrobatics</td>
                <td><input onChange={e => handleFormChange('acrobaticsMod', e.target.value)} type="number" value={acrobaticsMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('acrobaticsProf', e.target.value)} value={acrobaticsProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Animal Handling</td>
                <td><input onChange={e => handleFormChange('animalHandlingMod', e.target.value)} type="number" value={animalHandlingMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('animalHandlingProf', e.target.value)} value={animalHandlingProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Arcana</td>
                <td><input onChange={e => handleFormChange('arcanaMod', e.target.value)} type="number" value={arcanaMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('arcanaProf', e.target.value)} value={arcanaProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Athletics</td>
                <td><input onChange={e => handleFormChange('athleticsMod', e.target.value)} type="number" value={athleticsMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('athleticsProf', e.target.value)} value={athleticsProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Deception</td>
                <td><input onChange={e => handleFormChange('deceptionMod', e.target.value)} type="number" value={deceptionMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('deceptionProf', e.target.value)} value={deceptionProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>History</td>
                <td><input onChange={e => handleFormChange('historyMod', e.target.value)} type="number" value={historyMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('historyProf', e.target.value)} value={historyProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Insight</td>
                <td><input onChange={e => handleFormChange('insightMod', e.target.value)} type="number" value={insightMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('insightProf', e.target.value)} value={insightProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Intimidation</td>
                <td><input onChange={e => handleFormChange('intimidationMod', e.target.value)} type="number" value={intimidationMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('intimidationProf', e.target.value)} value={intimidationProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Investigation</td>
                <td><input onChange={e => handleFormChange('investigationMod', e.target.value)} type="number" value={investigationMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('investigationProf', e.target.value)} value={investigationProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Medicine</td>
                <td><input onChange={e => handleFormChange('medicineMod', e.target.value)} type="number" value={medicineMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('medicineProf', e.target.value)} value={medicineProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Nature</td>
                <td><input onChange={e => handleFormChange('natureMod', e.target.value)} type="number" value={natureMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('natureProf', e.target.value)} value={natureProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Perception</td>
                <td><input onChange={e => handleFormChange('perceptionMod', e.target.value)} type="number" value={perceptionMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('perceptionProf', e.target.value)} value={perceptionProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Performance</td>
                <td><input onChange={e => handleFormChange('performanceMod', e.target.value)} type="number" value={performanceMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('performanceProf', e.target.value)} value={performanceProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Persuasion</td>
                <td><input onChange={e => handleFormChange('persuasionMod', e.target.value)} type="number" value={persuasionMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('persuasionProf', e.target.value)} value={persuasionProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Religion</td>
                <td><input onChange={e => handleFormChange('religionMod', e.target.value)} type="number" value={religionMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('religionProf', e.target.value)} value={religionProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Sleight of Hand</td>
                <td><input onChange={e => handleFormChange('sleightOfHandMod', e.target.value)} type="number" value={sleightOfHandMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('sleightOfHandProf', e.target.value)} value={sleightOfHandProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Stealth</td>
                <td><input onChange={e => handleFormChange('stealthMod', e.target.value)} type="number" value={stealthMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('stealthProf', e.target.value)} value={stealthProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Survival</td>
                <td><input onChange={e => handleFormChange('survivalMod', e.target.value)} type="number" value={survivalMod}/></td>
                <td>
                  <select onChange={e => handleFormChange('survivalProf', e.target.value)} value={survivalProf}>
                    <option value="none">None</option>
                    <option value="prof">Proficient</option>
                    <option value="exp">Expertise</option>
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
            <button>
              {handleSubmitButtonLabel}
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export { CharacterForm };
