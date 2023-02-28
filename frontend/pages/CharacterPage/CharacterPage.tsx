import React, { ReactElement, useEffect, useState } from 'react';
import { AbilitySkills } from '../../components/AbilitySkills';
import { AssociateWithTokenLink } from '../../components/AssociateWithTokenLink';
import { calculateAbilityModifier } from '../../utilities/GameSystem/calculateAbilityModifier';
import { calculateSpellcastingModifier } from '../../utilities/GameSystem/calculateSpellcastingModifier';
import { calculateSpellcastingSaveDc } from '../../utilities/GameSystem/calculateSpellcastingSaveDc';
import { Card } from '../../components/Card';
import {
  CHARACTER_EDIT_ROUTE,
  CREATURE_ROUTE,
  MAGIC_ITEM_ROUTE
} from '../../app';
import { characterClassRow } from '../../utilities/UiHelpers/characterClassRow';
import { characterMulticlassRow } from '../../utilities/UiHelpers/characterMulticlassRow';
import { GearIcon } from '../../components/Icons';
import { generatePath, Link, useParams } from 'react-router-dom';
import { getCharacter } from '../../utilities/Api/Characters';
import { calculateSpellslots } from '../../utilities/GameSystem/calculateSpellslots';
import { ICharacter } from '../../types/models';
import { Navbar } from '../../components/Navbar/Navbar';
import { NewLineText } from '../../components/NewLineText';
import { PROFICIENCY_BONUS_BY_LEVEL } from '../../utilities/GameSystem/constants';
import { SpellListByLevel } from '../../components/SpellListByLevel';
import { StatBlock } from '../../components/StatBlock';
import { ToggleItem } from '../../components/ToggleItem';
import { Token } from '../../components/Token';
import { useAuth } from '../hooks/useAuth';

const CharacterPage = (): ReactElement | null => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const params = useParams();

  const {authenticated} = useAuth(() => {});

  useEffect(() => {
    if (params.id) {
      getCharacter(params.id).then(data => setCharacter(data.character));
    }
  }, []);

  if (!character) return null;

  const {
    ac,
    age,
    alignment,
    armorProficiencies,
    background,
    backstory,
    bonds,
    characterClass,
    characterClassHitDice,
    characterClassLevel = 0,
    characterSubClass,
    characterAttacks = [],
    characterFeatures = [],
    characterFeatureResources = [],
    characterItems = [],
    charismaScore,
    conditionImmunities,
    conditionResistances,
    conditionVulnerabilities,
    constitutionScore,
    copperPieces,
    creatures = [],
    damageImmunities,
    damageResistances,
    damageVulnerabilities,
    dexterityScore,
    electrumPieces,
    eyes,
    flaws,
    goldPieces,
    hair,
    height,
    hp,
    id,
    ideals,
    imageUrl,
    initiative,
    intelligenceScore,
    languages,
    magicItems = [],
    multiclassClass,
    multiclassClassHitDice,
    multiclassClassLevel = 0,
    multiclassSubClass,
    name,
    passivePerception,
    personalityTraits,
    platinumPieces,
    race,
    senses,
    silverPieces,
    skin,
    speed,
    spells = [],
    spellcastingAbility,
    strengthScore,
    subRace,
    toolProficiencies,
    weaponProficiencies,
    weight,
    wisdomScore
  } = character;

  const totalLevel = characterClassLevel + multiclassClassLevel;
  const proficiencyBonus = PROFICIENCY_BONUS_BY_LEVEL[totalLevel] ?? 0;

  const getAssociatedCreaturesCard = (): ReactElement | null => {
    if (!creatures?.length) return null;

    return (
      <Card>
        <h2>Creatures</h2>
        {
          creatures.map(creature => {
            const { id, imageUrl, name } = creature;

            return (
              <AssociateWithTokenLink
                associationUrl={generatePath(CREATURE_ROUTE, { id: id as string })}
                imageAltText={`${name} token`}
                imageUrl={imageUrl}
                linkText={name}
              />
            )
          })
        }
      </Card>
    );
  };

  const getAssociatedMagicItemsCard = (): ReactElement | null => {
    if (!magicItems?.length) return null;

    return (
      <Card>
        <h2>Magic Items</h2>
        {
          magicItems.map(item => {
            const {
              id,
              imageUrl,
              name
            } = item;
            
            return (
              <AssociateWithTokenLink
                associationUrl={generatePath(MAGIC_ITEM_ROUTE, { id: id as string })}
                imageAltText={`${name} token`}
                imageUrl={imageUrl}
                linkText={name}
              />
            );
          })
        }
      </Card>
    );
  };

  const getCharacterAttacks = (): ReactElement | null => {
    if (!characterAttacks?.length) return null;

    return (
      <Card>
        <h2>Attacks</h2>
        {
          characterAttacks.map(attack => {
            const {
              attackBonus,
              critRange,
              damageDiceRoll,
              damageTwoDiceRoll,
              damageTwoType,
              damageType,
              description,
              isSavingThrow,
              name,
              range,
              savingThrowDescription,
              savingThrowThreshold,
              savingThrowType
            } = attack;

            return (
              <ToggleItem heading={name}>
                {getOptionalProperty('Atatck Bonus', attackBonus)}
                {getOptionalProperty('Crit Range', critRange)}
                {getOptionalProperty('Damage Dice Roll', damageDiceRoll)}
                {getOptionalProperty('Damage Two Dice Roll', damageTwoDiceRoll)}
                {getOptionalProperty('Damage Two Type', damageTwoType)}
                {getOptionalProperty('Damage Type', damageType)}
                {
                  description && (
                    <>
                      <p><strong>Description:</strong></p>
                      <NewLineText text={description}/>
                    </>
                  )
                }
                {getOptionalProperty('Is Saving Throw', isSavingThrow ? 'Yes' : 'No')}
                {getOptionalProperty('Range', range)}
                {
                  savingThrowDescription && (
                    <>
                      <p><strong>Saving Throw Description:</strong></p>
                      <NewLineText text={savingThrowDescription}/>
                    </>
                  )
                }
                {getOptionalProperty('Saving Throw Threshold', savingThrowThreshold)}
                {getOptionalProperty('Saving Throw Type', savingThrowType)}
              </ToggleItem>
            );
          })
        }
      </Card>
    )
  };

  const getCharacterBackstory = (): ReactElement | null => {
    if (!backstory) return null;

    return (
      <Card>
        <h2>Backstory</h2>
        <NewLineText text={backstory} />
      </Card>
    );
  };

  const getCharacterFeatures = (): ReactElement | null => {
    if (!characterFeatures?.length) return null;

    return (
      <Card>
        <h2>Features</h2>
        {
          characterFeatures.map(feature => {
            const { description, name, source } = feature;

            return (
              <ToggleItem heading={name}>
                <p><strong>Source:</strong> {source}</p>
                <p><strong>Description:</strong></p>
                <NewLineText text={description} />
              </ToggleItem>
            );
          })
        }
      </Card>
    )
  };

  const getCharacterInventory = (): ReactElement => {
    return (
      <>
        {
          !!characterItems?.length && (
            <Card>
              <h2>Inventory</h2>
              {
                characterItems.map(item => {
                  const { name, total } = item;

                  return (
                    <div className="item">
                      <p>
                        <strong>
                          {name}: {total}
                        </strong>
                      </p>
                    </div>
                  )
                })
              }
            </Card>
          )
        }
        <table>
          <thead>
            <tr>
              <th>Copper</th>
              <th>Silver</th>
              <th>Electrum</th>
              <th>Gold</th>
              <th>Platinum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{copperPieces}</td>
              <td>{silverPieces}</td>
              <td>{electrumPieces}</td>
              <td>{goldPieces}</td>
              <td>{platinumPieces}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  const getCharacterMiscStats = (): ReactElement => {
    return (
      <table>
        <thead>
          <tr>
            <th>AC</th>
            <th>HP</th>
            <th>Hit Dice</th>
            <th>M Hit Dice</th>
            <th>Initiative</th>
            <th>Speed</th>
            <th>Prof Bonus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ac}</td>
            <td>{hp}</td>
            <td>{characterClassLevel}d{characterClassHitDice}</td>
            <td>{multiclassClassLevel}d{multiclassClassHitDice}</td>
            <td>{initiative}</td>
            <td>{speed}</td>
            <td>{proficiencyBonus}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const getCharacterResources = (): ReactElement | null => {
    if (!characterFeatureResources?.length) return null;

    return (
      <Card>
        <h2>Resources</h2>
        {
          characterFeatureResources.map(resource => {
            const { name, total } = resource;
            return <p>{name}: {total}</p>;
          })
        }
      </Card>
    );
  };

  const getCharacterSenses = () => {
    if (!senses) return null;
    
    return (
      <>
        <h2>Senses</h2>
        {senses}
      </>
    );
  };

  const getOptionalProperty = (label: string, value: string | number): ReactElement | null => {
    if (value === null || value === undefined || value === '') return null;
    return <p><strong>{label}</strong> {value}</p>;
  };

  const getSpellbook = () => {
    if (!spellcastingAbility) return null;

    let abilityScore = 0;

    if (spellcastingAbility === 'Strength') abilityScore = strengthScore;
    if (spellcastingAbility === 'Dexterity') abilityScore = dexterityScore;
    if (spellcastingAbility === 'Constitution') abilityScore = constitutionScore;
    if (spellcastingAbility === 'Intelligence') abilityScore = intelligenceScore;
    if (spellcastingAbility === 'Wisdom') abilityScore = wisdomScore;
    if (spellcastingAbility === 'Charisma') abilityScore = charismaScore;

    const abilityMod = calculateAbilityModifier({abilityScore, bonus: 0});

    const spellslots = calculateSpellslots([
      {
        classLevel: characterClassLevel,
        className: characterClass,
        subclassName: characterSubClass
      },
      {
        classLevel: multiclassClassLevel,
        className: multiclassClass,
        subclassName: multiclassSubClass
      }
    ]);

    return (
      <Card>
        <h2>Spellbook</h2>
        {getOptionalProperty('Ability', spellcastingAbility)}
        {getOptionalProperty('Bonus', calculateSpellcastingModifier(abilityMod, proficiencyBonus))}
        {getOptionalProperty('Save DC', calculateSpellcastingSaveDc(abilityMod, proficiencyBonus))}
        {
          !!spells?.length && (
            <>
              <SpellListByLevel label="Cantrips" spellLevel={0} spellSlots={0} spells={spells} />
              <SpellListByLevel label="1st Level" spellLevel={1} spellSlots={spellslots[0] ?? 0} spells={spells} />
              <SpellListByLevel label="2nd Level" spellLevel={2} spellSlots={spellslots[1] ?? 0} spells={spells} />
              <SpellListByLevel label="3rd Level" spellLevel={3} spellSlots={spellslots[2] ?? 0} spells={spells} />
              <SpellListByLevel label="4th Level" spellLevel={4} spellSlots={spellslots[3] ?? 0} spells={spells} />
              <SpellListByLevel label="5th Level" spellLevel={5} spellSlots={spellslots[4] ?? 0} spells={spells} />
              <SpellListByLevel label="6th Level" spellLevel={6} spellSlots={spellslots[5] ?? 0} spells={spells} />
              <SpellListByLevel label="7th Level" spellLevel={7} spellSlots={spellslots[6] ?? 0} spells={spells} />
              <SpellListByLevel label="8th Level" spellLevel={8} spellSlots={spellslots[7] ?? 0} spells={spells} />
              <SpellListByLevel label="9th Level" spellLevel={9} spellSlots={spellslots[8] ?? 0} spells={spells} />
              <SpellListByLevel label="10th Level" spellLevel={10} spellSlots={0} spells={spells} />
            </>
          )
        }
      </Card>
    );
  };

  return (
    <>
      <Navbar authenticated={authenticated}/>
      <div className="layout">
        <div className="full">
          <div className="page-header">
            <div className="page-header-settings">
              {
                authenticated && (
                  <Link to={generatePath(CHARACTER_EDIT_ROUTE, { id: id as string })}>
                    <GearIcon/>
                  </Link>
                )
              }
            </div>
            <Token imageAltText="character portrait" imageUrl={imageUrl}/>
            <div>
              <h1>{name}</h1>
              <p>{characterClassRow(character)}</p>
              {multiclassClass && <p>{characterMulticlassRow(character)}</p>}
              <p>{race} ( {subRace} ), {background}, {alignment}</p>
            </div>
          </div>
        </div>
        <div className="column">
          {getCharacterMiscStats()}
          <StatBlock entity={character} />
          <AbilitySkills entity={character} />
          {getAssociatedMagicItemsCard()}
          {getCharacterInventory()}
          <Card>
            <h2>Biography</h2>
            {getOptionalProperty('Age', age)}
            {getOptionalProperty('Height', height)}
            {getOptionalProperty('Weight', weight)}
            {getOptionalProperty('Hair', hair)}
            {getOptionalProperty('Skin', skin)}
            {getOptionalProperty('Eyes', eyes)}
            {getOptionalProperty('Personality Traits', personalityTraits)}
            {getOptionalProperty('Ideals', ideals)}
            {getOptionalProperty('Bonds', bonds)}
            {getOptionalProperty('Flaws', flaws)}
          </Card>
          {getCharacterBackstory()}
        </div>
        <div className="column">
          {getAssociatedCreaturesCard()}
          {getCharacterResources()}
          {getCharacterAttacks()}
          {getCharacterFeatures()}
          <Card>
            {getCharacterSenses()}
            {getOptionalProperty('Passive Perception', passivePerception)}
            <h2>Proficinencies</h2>
            {getOptionalProperty('Armor Proficiencies', armorProficiencies)}
            {getOptionalProperty('Condition Immunities', conditionImmunities)}
            {getOptionalProperty('Condition Resistences', conditionResistances)}
            {getOptionalProperty('Condition Vulnerabilities', conditionVulnerabilities)}
            {getOptionalProperty('Damage Immunities', damageImmunities)}
            {getOptionalProperty('Damage Resistences', damageResistances)}
            {getOptionalProperty('Damage Vulnerabilities', damageVulnerabilities)}
            {getOptionalProperty('Languages', languages)}
            {getOptionalProperty('Tool Proficiencies', toolProficiencies)}
            {getOptionalProperty('Weapon Proficiencies', weaponProficiencies)}
          </Card>
          {getSpellbook()}
        </div>
      </div>
    </>
  );
};

export { CharacterPage };
