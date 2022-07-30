import React, { ReactElement, useEffect, useState } from 'react';
import { AbilitySkills } from '../../components/AbilitySkills';
import { AssociateWithTokenLink } from '../../components/AssociateWithTokenLink';
import { characterClassRow } from '../../utilities/UiHelpers/characterClassRow';
import { characterMulticlassRow } from '../../utilities/UiHelpers/characterMulticlassRow';
import { GearIcon } from '../../components/Icons';
import { getCharacter } from '../../utilities/Api/Characters';
import { ICharacter } from '../../types/models';
import { SpellListByLevel } from '../../components/SpellListByLevel';
import { StatBlock } from '../../components/StatBlock';
import { ToggleItem } from '../../components/ToggleItem';
import { Layout } from '../../layouts/Layout';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const CharacterPage = (): ReactElement | null => {
  const [character, setCharacter] = useState<ICharacter | null>(null);

  useEffect(() => {
    const id = getIdFromUrl();
    getCharacter(id).then(data => setCharacter(data.character));
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

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <div className="sheet-header">
            <div className="sheet-header-settings">
              <a href={`/characters/${id}/edit`}>
                <GearIcon/>
              </a>
            </div>
            {!!imageUrl && <img alt="character portrait" className="token" src={imageUrl}/>}
            <div>
              <h1>{name}</h1>
              <p>{characterClassRow(character)}</p>
              {multiclassClass && <p>{characterMulticlassRow(character)}</p>}
              <p>{race} ( {subRace} ), {background}, {alignment}</p>
            </div>
          </div>
        </div>
        <div className="column">
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
          <StatBlock entity={character} />
          <AbilitySkills entity={character} />
          {
            !!magicItems?.length && (
              <div className="card">
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
                        associationUrl={`/magic_items/${id}`}
                        imageAltText={`${name} token`}
                        imageUrl={imageUrl}
                        linkText={name}
                      />
                    );
                  })
                }
              </div>
            )
          }
          <div className="card">
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
          </div>
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
          <div className="card">
            <h2>Biography</h2>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Height:</strong> {height}</p>
            <p><strong>Weight:</strong> {weight}</p>
            <p><strong>Hair:</strong> {hair}</p>
            <p><strong>Skin:</strong> {skin}</p>
            <p><strong>Eyes:</strong> {eyes}</p>
            <p><strong>Personality Traits:</strong> {personalityTraits}</p>
            <p><strong>Ideals:</strong> {ideals}</p>
            <p><strong>Bonds:</strong> {bonds}</p>
            <p><strong>Flaws:</strong> {flaws}</p>
          </div>
          {
            backstory && (
              <div className="card">
                <h2>Backstory</h2>
                {backstory}
              </div>
            )
          }
        </div>
        <div className="column">
          {
            !!creatures?.length && (
              <div className="card">
                <h2>Pets and NPCs</h2>
                {
                  creatures.map(creature => {
                    const { id, imageUrl, name } = creature;

                    return (
                      <AssociateWithTokenLink
                        associationUrl={`/creatures/${id}`}
                        imageAltText={`${name} token`}
                        imageUrl={imageUrl}
                        linkText={name}
                      />
                    )
                  })
                }
              </div>
            )
          }
          {
            !!factions?.length && (
              <div className="card">
                <h2>Factions</h2>
                {
                  factions.map(faction => {
                    const { id, imageUrl, name } = faction;

                    return (
                      <AssociateWithTokenLink
                        associationUrl={`/factions/${id}`}
                        imageAltText={`${name} token`}
                        imageUrl={imageUrl}
                        linkText={name}
                      />
                    )
                  })
                }
              </div>
            )
          }
          <div className="card">
            <h2>Resources</h2>
            {
              characterFeatureResources.map(resource => {
                const { name, total } = resource;
                return <p>{name}: {total}</p>;
              })
            }
          </div>
          <div className="card">
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
                    <p><strong>Atatck Bonus: </strong>{attackBonus}</p>
                    <p><strong>Crit Range: </strong>{critRange}</p>
                    <p><strong>Damage Dice Roll: </strong>{damageDiceRoll}</p>
                    <p><strong>Damage Two Dice Roll: </strong>{damageTwoDiceRoll}</p>
                    <p><strong>Damage Two Type: </strong>{damageTwoType}</p>
                    <p><strong>Damage Type: </strong>{damageType}</p>
                    <p>
                      <strong>Description: </strong>
                      {description}
                    </p>
                    <p><strong>Is Saving Throw: </strong>{isSavingThrow ? 'Yes' : 'No'}</p>
                    <p><strong>Range: </strong>{range}</p>
                    <p><strong>Saving Throw Description: </strong>{savingThrowDescription}</p>
                    <p><strong>Saving Throw Threshold: </strong>{savingThrowThreshold}</p>
                    <p><strong>Saving Throw Type: </strong>{savingThrowType}</p>
                  </ToggleItem>
                );
              })
            }
          </div>
          <div className="card">
            <h2>Features</h2>
            {
              characterFeatures.map(feature => {
                const { description, name, source } = feature;

                return (
                  <ToggleItem heading={name}>
                    <p><strong>Source:</strong> {source}</p>
                    <p>
                      <strong>Description:</strong>
                      {description}
                    </p>
                  </ToggleItem>
                );
              })
            }
          </div>
          <div className="card">
            <h2>Senses</h2>
            <p>{senses}</p>
            <p><strong>Passive Perception:</strong> {passivePerception}</p>
            <h2>Proficinencies</h2>
            <p><strong>Armor Proficiencies:</strong> {armorProficiencies}</p>
            <p><strong>Condition Immunities:</strong> {conditionImmunities}</p>
            <p><strong>Condition Resistences:</strong> {conditionResistances}</p>
            <p><strong>Condition Vulnerabilities:</strong> {conditionVulnerabilities}</p>
            <p><strong>Damage Immunities:</strong> {damageImmunities}</p>
            <p><strong>Damage Resistences:</strong> {damageResistances}</p>
            <p><strong>Damage Vulnerabilities:</strong> {damageVulnerabilities}</p>
            <p><strong>Languages:</strong> {languages}</p>
            <p><strong>Tool Proficiencies:</strong> {toolProficiencies}</p>
            <p><strong>Weapon Proficiencies:</strong> {weaponProficiencies}</p>
          </div>
          <div className="card">
            <h2>Spellbook</h2>
            <p><strong>Ability:</strong> {spellcastingAbility}</p>
            <p><strong>Bonus:</strong> {spellcastingModifier}</p>
            <p><strong>Save DC:</strong> {spellcastingSaveDc}</p>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { CharacterPage };
