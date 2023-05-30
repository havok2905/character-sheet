import React, { FC } from 'react';
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
import { useQuery } from '@tanstack/react-query';
import './CharacterPage.scss';

const CharacterPage: FC = () => {
  const params = useParams();

  const authQuery = useAuth();

  const {
    data, 
    isError,
    isLoading
  } = useQuery<{character: ICharacter}>({
    queryKey: ['character'],
    queryFn: async () => getCharacter(params.id ?? ''),
    retry: 3
  });

  if(isLoading || isError) return null;

  const character = data.character;

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

  const getAssociatedCreaturesCard = () => {
    if (!creatures?.length) return null;

    return (
      <Card>
        <h3>Creatures</h3>
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

  const getAssociatedMagicItemsCard = () => {
    if (!magicItems?.length) return null;

    return (
      <Card>
        <h3>Magic Items</h3>
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

  const getCharacterAttacks = () => {
    if (!characterAttacks?.length) return null;

    return (
      <Card>
        <h3>Attacks</h3>
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

  const getCharacterBackstory = () => {
    if (!backstory) return null;

    return (
      <Card>
        <h3>Backstory</h3>
        <NewLineText text={backstory} />
      </Card>
    );
  };

  const getCharacterFeatures = () => {
    if (!characterFeatures?.length) return null;

    return (
      <Card>
        <h3>Features</h3>
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

  const getCharacterInventory = () => {
    return (
      <>
        {
          !!characterItems?.length && (
            <Card>
              <h3>Inventory</h3>
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
              <td>{copperPieces || 0}</td>
              <td>{silverPieces || 0}</td>
              <td>{electrumPieces || 0}</td>
              <td>{goldPieces || 0}</td>
              <td>{platinumPieces || 0}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  const getCharacterResources = () => {
    if (!characterFeatureResources?.length) return null;

    return (
      <Card>
        <h3>Resources</h3>
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
        <h3>Senses</h3>
        {senses}
      </>
    );
  };

  const getOptionalProperty = (label: string, value: string | number) => {
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
        <h3>Spellbook</h3>
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
      <Navbar authenticated={authQuery.isSuccess}/>
      <div className="layout">
        <div className="full">
          <div className="page-header">
            <div className="page-header-settings">
              {
                authQuery.isSuccess && (
                  <Link to={generatePath(CHARACTER_EDIT_ROUTE, { id: id as string })}>
                    <GearIcon/>
                  </Link>
                )
              }
            </div>
            <Token imageAltText="character portrait" imageUrl={imageUrl}/>
          </div>
        </div>
        <div className="column">
          <Card>
            <h2 className="character-title">{name}</h2>
            <div className="character-sub-title">
              <p>{characterClassRow(character)}</p>
              {multiclassClass && <p>{characterMulticlassRow(character)}</p>}
              <p>{race} ( {subRace} ), {background}, {alignment}</p>
            </div>
            <p><strong>Armor Class: </strong>{ac}</p>
            <p><strong>Hit Points: </strong>{hp}</p>
            <p><strong>Hit Dice: </strong>{characterClassLevel}d{characterClassHitDice}</p>
            <p><strong>Multiclass Hit Dice: </strong>{multiclassClassLevel}d{multiclassClassHitDice}</p>
            <p><strong>Initiative: </strong>{initiative}</p>
            <p><strong>Speed: </strong>{speed}</p>
            <p><strong>Proficiency Bonus: </strong>{proficiencyBonus}</p>
          </Card>
          <StatBlock entity={character} />
          <AbilitySkills entity={character} />
          {getAssociatedMagicItemsCard()}
          {getCharacterInventory()}
          <Card>
            <h3>Biography</h3>
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
            <h3>Proficinencies</h3>
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
