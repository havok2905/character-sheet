import React, { ReactElement, useEffect, useState } from 'react';
import { AbilitySkills } from '../../components/AbilitySkills';
import { AssociateWithTokenLink } from '../../components/AssociateWithTokenLink';
import { Card } from '../../components/Card';
import {
  CHARACTER_EDIT_ROUTE,
  CREATURE_ROUTE,
  FACTION_ROUTE,
  MAGIC_ITEM_ROUTE
} from '../../app';
import { characterClassRow } from '../../utilities/UiHelpers/characterClassRow';
import { characterMulticlassRow } from '../../utilities/UiHelpers/characterMulticlassRow';
import { GearIcon } from '../../components/Icons';
import { generatePath, Link, useParams } from 'react-router-dom';
import { getCharacter } from '../../utilities/Api/Characters';
import { ICharacter } from '../../types/models';
import { NewLineText } from '../../components/NewLineText';
import { SpellListByLevel } from '../../components/SpellListByLevel';
import { StatBlock } from '../../components/StatBlock';
import { ToggleItem } from '../../components/ToggleItem';
import { Token } from '../../components/Token';

const CharacterPage = (): ReactElement | null => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const params = useParams();

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
    characterClassHitDice,
    characterClassLevel,
    characterAttacks = [],
    characterFeatures = [],
    characterFeatureResources = [],
    characterItems = [],
    conditionImmunities,
    conditionResistances,
    conditionVulnerabilities,
    copperPieces,
    creatures = [],
    damageImmunities,
    damageResistances,
    damageVulnerabilities,
    electrumPieces,
    eyes,
    factions = [],
    flaws,
    goldPieces,
    hair,
    height,
    hp,
    id,
    ideals,
    imageUrl,
    initiative,
    languages,
    magicItems = [],
    multiclassClass,
    multiclassClassHitDice,
    multiclassClassLevel,
    name,
    passivePerception,
    personalityTraits,
    platinumPieces,
    proficiencyBonus,
    race,
    senses,
    silverPieces,
    skin,
    speed,
    spells = [],
    spellSlotsEighth,
    spellSlotsFifth,
    spellSlotsFirst,
    spellSlotsFourth,
    spellSlotsNinth,
    spellSlotsSecond,
    spellSlotsSeventh,
    spellSlotsSixth,
    spellSlotsThird,
    spellcastingAbility,
    spellcastingSaveDc,
    spellcastingModifier,
    subRace,
    toolProficiencies,
    weaponProficiencies,
    weight,
  } = character;

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
                associationUrl={generatePath(CREATURE_ROUTE, { id })}
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

  const getAssociatedFactionsCard = (): ReactElement | null => {
    if (!factions?.length) return null;

    return (
      <Card>
        <h2>Factions</h2>
        {
          factions.map(faction => {
            const { id, imageUrl, name } = faction;

            return (
              <AssociateWithTokenLink
                associationUrl={generatePath(FACTION_ROUTE, { id })}
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
                associationUrl={generatePath(MAGIC_ITEM_ROUTE, { id })}
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
                  description && (
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

  return (
    <div className="layout">
      <div className="full">
        <div className="page-header">
          <div className="page-header-settings">
            <Link to={generatePath(CHARACTER_EDIT_ROUTE, { id })}>
              <GearIcon/>
            </Link>
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
        {getAssociatedFactionsCard()}
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
        <Card>
          <h2>Spellbook</h2>
          {getOptionalProperty('Ability', spellcastingAbility)}
          {getOptionalProperty('Bonus', spellcastingModifier)}
          {getOptionalProperty('Save DC', spellcastingSaveDc)}
          {
            !!spells?.length && (
              <>
                <SpellListByLevel label="Cantrips" spellLevel={0} spellSlots={0} spells={spells} />
                <SpellListByLevel label="1st Level" spellLevel={1} spellSlots={spellSlotsFirst} spells={spells} />
                <SpellListByLevel label="2nd Level" spellLevel={2} spellSlots={spellSlotsSecond} spells={spells} />
                <SpellListByLevel label="3rd Level" spellLevel={3} spellSlots={spellSlotsThird} spells={spells} />
                <SpellListByLevel label="4th Level" spellLevel={4} spellSlots={spellSlotsFourth} spells={spells} />
                <SpellListByLevel label="5th Level" spellLevel={5} spellSlots={spellSlotsFifth} spells={spells} />
                <SpellListByLevel label="6th Level" spellLevel={6} spellSlots={spellSlotsSixth} spells={spells} />
                <SpellListByLevel label="7th Level" spellLevel={7} spellSlots={spellSlotsSeventh} spells={spells} />
                <SpellListByLevel label="8th Level" spellLevel={9} spellSlots={spellSlotsEighth} spells={spells} />
                <SpellListByLevel label="9th Level" spellLevel={9} spellSlots={spellSlotsNinth} spells={spells} />
                <SpellListByLevel label="10th Level" spellLevel={10} spellSlots={0} spells={spells} />
              </>
            )
          }
        </Card>
      </div>
    </div>
  );
};

export { CharacterPage };
