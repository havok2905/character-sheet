import React, { FC, useEffect, useState } from 'react';
import { AlignmentTypes } from '../../utilities/GameSystem/enums';
import {
  ArrowsCollapseIcon,
  ArrowsExpandIcon
} from '../../components/Icons';
import {
  CHA,
  CHARISMA,
  CONSTITUTION,
  DEX,
  DEXTERITY,
  EXP,
  INT,
  INTELLIGENCE,
  NONE,
  PROF,
  STR,
  STRENGTH,
  WIS,
  WISDOM
} from '../../utilities/GameSystem/constants';
import { CLASSES } from '../../utilities/GameSystem/constants';
import { CollectionField } from '../CollectionField';
import { CreatureSearch } from '../CreatureSearch';
import { ICharacter, ICreature, ISpell } from '../../types/models';
import { SpellSearch } from '../SpellSearch';

const getFormCopy = (formModel: ICharacter) => {
  return {
    ...formModel,
    characterAttacks: [
      ...(formModel.characterAttacks || []).map(attack => {
        return { ...attack }
      })
    ],
    characterFeatureResources: [
      ...(formModel.characterFeatureResources || []).map(resource => {
        return { ...resource }
      })
    ],
    characterFeatures: [
      ...(formModel.characterFeatures || []).map(feature => {
        return { ...feature }
      })
    ],
    characterItems: [
      ...(formModel.characterItems || []).map(item => {
        return { ...item }
      })
    ],
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
  creatures: ICreature[];
  handleSubmit: (character: ICharacter) => void;
  handleSubmitButtonLabel: string;
  spells: ISpell[];
}

const CharacterForm: FC<ICharacterFormProps> = ({
  character,
  creatures,
  handleSubmit,
  handleSubmitButtonLabel,
  spells
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
    characterAttacks: [],
    characterClass: '',
    characterClassHitDice: 0,
    characterClassLevel: 0,
    characterFeatureResources: [],
    characterFeatures: [],
    characterItems: [],
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

  const [isDisplayedAttacks, setIsDisplayedAttacks] = useState<boolean>(true);
  const [isDisplayedCreatures, setIsDisplayedCreatures] = useState<boolean>(true);
  const [isDisplayedFeatureResources, setIsDisplayedFeatureResources] = useState<boolean>(true);
  const [isDisplayedFeatures, setIsDisplayedFeatures] = useState<boolean>(true);
  const [isDisplayedItems, setIsDisplayedItems] = useState<boolean>(true);
  const [isDisplayedSpellcasting, setIsDisplayedSpellcasting] = useState<boolean>(true);

  useEffect(() => {
    if (character) {
      const formCopy = getFormCopy(character);
      formCopy.creatureIds = formCopy.creatures.map(creature => String(creature.id));
      formCopy.spellIds = formCopy.spells.map(spell => String(spell.id));
      setForm(formCopy);
    }
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
    characterAttacks = [],
    characterClass,
    characterClassHitDice,
    characterClassLevel,
    characterFeatureResources = [],
    characterFeatures = [],
    characterItems = [],
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

  const characterCreatureIds = form.creatureIds ?? [];
  const characterSpellIds = form.spellIds ?? [];

  const handleFormChange = (key: string, value: any) => {
    const updatedForm = getFormCopy(form);
    updatedForm[key] = value;
    setForm(updatedForm);
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(form);
  };

  const handleCreatureIdsUpdate = (newCreatureIds: string[]) => {
    handleFormChange('creatureIds', newCreatureIds);
  };

  const handleSpellIdsUpdate = (newSpellIds: string[]) => {
    handleFormChange('spellIds', newSpellIds);
  };

  const toggleIsDisplayedAttacks = e => {
    e.preventDefault();
    setIsDisplayedAttacks(!isDisplayedAttacks);
  };

  const toggleIsDisplayedFeatureResources = e => {
    e.preventDefault();
    setIsDisplayedFeatureResources(!isDisplayedFeatureResources);
  };

  const toggleIsDisplayedFeatures = e => {
    e.preventDefault();
    setIsDisplayedFeatures(!isDisplayedFeatures);
  };

  const toggleIsDisplayedItems = e => {
    e.preventDefault();
    setIsDisplayedItems(!isDisplayedItems);
  };

  const getAttacks = () => {
    if (!isDisplayedAttacks) return null;

    return (
      <CollectionField
        collection={characterAttacks}
        formModel={[
          { fieldKey: 'name', label: 'Name', type: 'text' },
          { fieldKey: 'attackBonus', label: 'Attack Bonus', type: 'number' },
          { fieldKey: 'critRange', label: 'Crit Range', type: 'number' },
          { fieldKey: 'damageDiceRoll', label: 'Damage Dice Roll', type: 'text' },
          { fieldKey: 'damageType', label: 'Damage Type', type: 'text' },
          { fieldKey: 'damageTwoDiceRoll', label: 'Damage Two Dice Roll', type: 'text' },
          { fieldKey: 'damageTwoType', label: 'Damage Two Type', type: 'text' },
          { fieldKey: 'isSavingThrow', label: 'Is Saving Throw', type: 'checkbox' },
          { fieldKey: 'range', label: 'Range', type: 'text' },
          { fieldKey: 'savingThrowDescription', label: 'Saving Throw Description', type: 'textarea' },
          { fieldKey: 'savingThrowThreshold', label: 'Saving Throw Threshold', type: 'text' },
          {
            fieldKey: 'savingThrowType',
            label: 'Saving Throw Type',
            options: [
              {
                label: '',
                value: '',
              },
              {
                label: STRENGTH,
                value: STRENGTH
              },
              {
                label: DEXTERITY,
                value: DEXTERITY
              },
              {
                label: CONSTITUTION,
                value: CONSTITUTION
              },
              {
                label: INTELLIGENCE,
                value: INTELLIGENCE
              },
              {
                label: WISDOM,
                value: WISDOM
              },
              {
                label: CHARISMA,
                value: CHARISMA
              }
            ],
            type: 'select'
          },
          { fieldKey: '_destroy', label: 'Destroy', type: 'destroy' }
        ]}
        onChange={(items) => handleFormChange('characterAttacks', items)}
      />
    );
  };

  const getFeatureResources = () => {
    if (!isDisplayedFeatureResources) return null;

    return (
      <CollectionField
        collection={characterFeatureResources}
        formModel={[
          { fieldKey: 'name', label: 'Name', type: 'text' },
          { fieldKey: 'total', label: 'Total', type: 'number' },
          { fieldKey: '_destroy', label: 'Destroy', type: 'destroy' }
        ]}
        onChange={(items) => handleFormChange('creatureFeatureResources', items)}
      />
    );
  };

  const getCreatures = () => {
    if (!isDisplayedCreatures) return null;

    return (
      <CreatureSearch
        creatureIds={characterCreatureIds}
        creatures={creatures}
        handleCreatureIdsUpdate={handleCreatureIdsUpdate}
      />
    );
  };

  const getFeatures = () => {
    if (!isDisplayedFeatures) return null;

    return (
      <CollectionField
        collection={characterFeatures}
        formModel={[
          { fieldKey: 'name', label: 'Name', type: 'text' },
          { fieldKey: 'source', label: 'Source', type: 'text' },
          { fieldKey: 'description', label: 'Description', type: 'textarea' },
          { fieldKey: '_destroy', label: 'Destroy', type: 'destroy' }
        ]}
        onChange={(items) => handleFormChange('creatureFeatures', items)}
      />
    );
  };

  const getItems = () => {
    if (!isDisplayedItems) return null;

    return (
      <CollectionField
        collection={characterItems}
        formModel={[
          { fieldKey: 'name', label: 'Name', type: 'text' },
          { fieldKey: 'total', label: 'Total', type: 'number' },
          { fieldKey: '_destroy', label: 'Destroy', type: 'destroy' }
        ]}
        onChange={(items) => handleFormChange('characterItems', items)}
      />
    );
  };

  const getSpellcasting = () => {
    if (!isDisplayedSpellcasting) return null;

    return (
      <>
        <fieldset>
          <label>Spellcasting Ability</label>
          <select onChange={e => handleFormChange('spellcastingAbility', e.target.value)} value={spellcastingAbility}>
            <option></option>
            <option value={STRENGTH}>{STRENGTH}</option>
            <option value={DEXTERITY}>{DEXTERITY}</option>
            <option value={CONSTITUTION}>{CONSTITUTION}</option>
            <option value={INTELLIGENCE}>{INTELLIGENCE}</option>
            <option value={WISDOM}>{WISDOM}</option>
            <option value={CHARISMA}>{CHARISMA}</option>
          </select>
        </fieldset>
        <SpellSearch
          handleSpellIdsUpdate={handleSpellIdsUpdate}
          spellIds={characterSpellIds}
          spells={spells}
        />
      </>
    );
  };

  const getToggleButton = (isDisplayed: boolean, onClick: (e) => void) => {
    const icon = isDisplayed ? <ArrowsCollapseIcon/> : <ArrowsExpandIcon/>;

    return (
      <button onClick={onClick}>
        {icon}  
      </button>
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="layout">
        <div className="column">
          <h3>Character Details</h3>
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
          <h3>Character Class</h3>
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
          <h3>Character Multiclass</h3>
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
          <h3>Ability Stats</h3>
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
          <h3>Skill Stats</h3>
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
                  <td>Acrobatics ( {DEX} )</td>
                  <td>
                    <select onChange={e => handleFormChange('acrobaticsProf', e.target.value)} value={acrobaticsProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Animal Handling ( {WIS} )</td>
                  <td>
                    <select onChange={e => handleFormChange('animalHandlingProf', e.target.value)} value={animalHandlingProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Arcana ( {INT} )</td>
                  <td>
                    <select onChange={e => handleFormChange('arcanaProf', e.target.value)} value={arcanaProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Athletics ( {STR} )</td>
                  <td>
                    <select onChange={e => handleFormChange('athleticsProf', e.target.value)} value={athleticsProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Deception  ( {CHA} )</td>
                  <td>
                    <select onChange={e => handleFormChange('deceptionProf', e.target.value)} value={deceptionProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>History  ( {INT} )</td>
                  <td>
                    <select onChange={e => handleFormChange('historyProf', e.target.value)} value={historyProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Insight ( {WIS} )</td>
                  <td>
                    <select onChange={e => handleFormChange('insightProf', e.target.value)} value={insightProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Intimidation ( {CHA} )</td>
                  <td>
                    <select onChange={e => handleFormChange('intimidationProf', e.target.value)} value={intimidationProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Investigation ( {INT} )</td>
                  <td>
                    <select onChange={e => handleFormChange('investigationProf', e.target.value)} value={investigationProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Medicine ( {WIS} )</td>
                  <td>
                    <select onChange={e => handleFormChange('medicineProf', e.target.value)} value={medicineProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Nature ( {INT} )</td>
                  <td>
                    <select onChange={e => handleFormChange('natureProf', e.target.value)} value={natureProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Perception ( {WIS} )</td>
                  <td>
                    <select onChange={e => handleFormChange('perceptionProf', e.target.value)} value={perceptionProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Performance ( {CHA} )</td>
                  <td>
                    <select onChange={e => handleFormChange('performanceProf', e.target.value)} value={performanceProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Persuasion ( {WIS} )</td>
                  <td>
                    <select onChange={e => handleFormChange('persuasionProf', e.target.value)} value={persuasionProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Religion ( {INT} )</td>
                  <td>
                    <select onChange={e => handleFormChange('religionProf', e.target.value)} value={religionProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Sleight of Hand ( {DEX} )</td>
                  <td>
                    <select onChange={e => handleFormChange('sleightOfHandProf', e.target.value)} value={sleightOfHandProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Stealth ( {DEX} )</td>
                  <td>
                    <select onChange={e => handleFormChange('stealthProf', e.target.value)} value={stealthProf}>
                      <option value={NONE}>None</option>
                      <option value={PROF}>Proficient</option>
                      <option value={EXP}>Expertise</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Survival ( {WIS} )</td>
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
          <h3>Character Proficiencies</h3>
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
          <h3>Biography</h3>
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
          <h3>Treasure</h3>
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
          <h3>Inventory</h3>
          {getToggleButton(isDisplayedItems, toggleIsDisplayedItems)}
          {getItems()}
        </div>
        <div className="column">
          <h3>Resources</h3>
          {getToggleButton(isDisplayedFeatureResources, toggleIsDisplayedFeatureResources)}
          {getFeatureResources()}
          <h3>Attacks</h3>
          {getToggleButton(isDisplayedAttacks, toggleIsDisplayedAttacks)}
          {getAttacks()}
          <h3>Features</h3>
          {getToggleButton(isDisplayedFeatures, toggleIsDisplayedFeatures)}
          {getFeatures()}
          <h3>Spellcasting</h3>
          {getToggleButton(isDisplayedSpellcasting, setIsDisplayedSpellcasting)}
          {getSpellcasting()}
          <h3>Creatures</h3>
          {getToggleButton(isDisplayedCreatures, setIsDisplayedCreatures)}
          {getCreatures()}
        </div>
        <div className="full">
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
