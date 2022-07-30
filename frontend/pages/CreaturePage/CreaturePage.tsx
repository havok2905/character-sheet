import React, { ReactElement, useEffect, useState } from 'react';
import { AssociateWithTokenLink } from '../../components/AssociateWithTokenLink';
import { GearIcon } from '../../components/Icons';
import { getCreature } from '../../utilities/Api/Creatures';
import { ICreature } from '../../types/models';
import { Layout } from '../../layouts/Layout';
import { NewLineText } from '../../components/NewLineText';
import { SpellListByLevel } from '../../components/SpellListByLevel';
import { StatBlock } from '../../components/StatBlock';
import { ToggleItem } from '../../components/ToggleItem';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const CreaturePage = (): ReactElement | null => {
  const [creature, setCreature] = useState<ICreature | null>(null);

  useEffect(() => {
    const id = getIdFromUrl();
    getCreature(id).then(data => setCreature(data.creature));
  }, []);

  if (!creature) return null;

  const {
    ac,
    alignment,
    armor,
    backstory,
    bonds,
    conditionImmunities,
    conditionResistances,
    conditionVulnerabilities,
    cr,
    creatureActions,
    creatureFeatures,
    creatureLairActions,
    creatureLegendaryActions,
    creatureRegionalEffects,
    creatureType,
    damageImmunities,
    damageResistances,
    damageVulnerabilities,
    description,
    factions,
    flaws,
    hp,
    id,
    ideals,
    imageUrl,
    lairActionsText,
    languages,
    legendaryActionsText,
    magicItems,
    name,
    personalityTraits,
    regionalEffectsText,
    senses,
    size,
    skills,
    speed,
    spellcastingAbility,
    spellcastingLevel,
    spellcastingModifier,
    spellcastingSaveDc,
    spells,
    spellSlotsEighth,
    spellSlotsFifth,
    spellSlotsFirst,
    spellSlotsFourth,
    spellSlotsNinth,
    spellSlotsSecond,
    spellSlotsSeventh,
    spellSlotsSixth,
    spellSlotsThird,
  } = creature;
  const getOptionalProperty = (label: string, value: string | number): ReactElement | null => {
    if (value === null || value === undefined || value === '') return null;
    return <p><strong>{label}</strong> {value}</p>;
  };

  const getAssociatedFactionsCard = (): ReactElement | null => {
    if (!factions?.length) return null;

    return (
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
    );
  };

  const getAssociatedMagicItemsCard = (): ReactElement | null => {
    if (!magicItems?.length) return null;

    return (
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
    );
  };
  
  const getCreatureAbout = (): ReactElement | null => {
    if (!personalityTraits && !ideals && !bonds && !flaws && !description) return null;

    return (
      <div className="card">
        <h2>About</h2>
        {getOptionalProperty('Personality Traits', personalityTraits)}
        {getOptionalProperty('Ideals', ideals)}
        {getOptionalProperty('Bonds', bonds)}
        {getOptionalProperty('Flaws', flaws)}
        {description && <NewLineText text={description}/>}
      </div>
    );
  };

  const getCreatureActions = (): ReactElement | null => {
    if (!creatureActions?.length) return null;

    return (
      <div className="card">
        <h2>Actions</h2>
        {
          creatureActions.map(action => {
            const {
              actionCombatType,
              actionType,
              attackBonus,
              damageDiceRoll,
              damageTwoDiceRoll,
              damageTwoType,
              damageType,
              description,
              name,
              range,
              savingThrowDc,
              savingThrowType
            } = action;

            return (
              <ToggleItem heading={`${name}: ${actionType}`}>
                {actionCombatType && <p>{actionCombatType}</p>}
                {getOptionalProperty('To Hit', attackBonus)}
                {getOptionalProperty('Damage', damageDiceRoll && damageType ? `${damageDiceRoll} ${damageType}` : '')}
                {getOptionalProperty('Damage Two', damageTwoDiceRoll && damageTwoType ? `${damageTwoDiceRoll} ${damageTwoType}` : '')}
                {getOptionalProperty('Range', range)}
                {getOptionalProperty('Save DC', savingThrowDc && savingThrowType ? `DC${savingThrowDc} ${savingThrowType}` : '')}
                {getOptionalProperty('Description', description)}
              </ToggleItem>
            );
          })
        }
      </div>
    );
  };

  const getCreatureBackstory = (): ReactElement | null => {
    if (!backstory) return null;

    return (
      <div className="card">
        <h2>Backstory</h2>
        {backstory}
      </div>
    );
  };

  const getCreatureFeatures = (): ReactElement | null => {
    if (!creatureFeatures?.length) return null;

    return (
      <div className="card">
        <h2>Features</h2>
        {
          creatureFeatures.map(feature => {
            const { description, name } = feature;
            
            return (
              <ToggleItem heading={name}>
                <NewLineText text={description}/>
              </ToggleItem>
            );
          })
        }
      </div>
    )
  };

  const getCreatureLairActions = (): ReactElement | null => {
    if (!creatureLairActions?.length) return null;

    return (
      <div className="card">
        <h2>Lair Actions</h2>
        <p>{lairActionsText}</p>
        <ul className="bulletless-list">
          {creatureLairActions.map(action => <li>{action.description}</li>)}
        </ul>
      </div>
    );
  };

  const getCreatureLegendaryActions = (): ReactElement | null => {
    if (!creatureLegendaryActions?.length) return null;

    return (
      <div className="card">
        <h2>Legendary Actions</h2>
        <p>{legendaryActionsText}</p>
        {
          creatureLegendaryActions.map(action => {
            const { description, name } = action;

            return (
              <ToggleItem heading={name}>
                {description}
              </ToggleItem>
            );
          })
        }
      </div>
    );
  };

  const getCreatureMiscStats = (): ReactElement => {
    return (
      <table>
        <thead>
          <tr>
            <th>CR</th>
            <th>AC</th>
            <th>HP</th>
            <th>Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cr}</td>
            <td>{ac}, ( {armor} )</td>
            <td>{hp}</td>
            <td>{speed}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const getCreatureRegionalEffects = (): ReactElement | null => {
    if (!creatureRegionalEffects?.length) return null;

    return (
      <div className="card">
        <h2>Regional Effects</h2>
        <p>{regionalEffectsText}</p>
        <ul className="bulletless-list">
          {creatureRegionalEffects.map(effect => <li>{effect.description}</li>)}
        </ul>
      </div>
    );
  };

  const getCreatureSenses = () => {
    if (!senses) return null;
    
    return (
      <>
        <h2>Senses</h2>
        {senses}
      </>
    );
  };

  const getCreatureSkills = () => {
    if (!skills) return null;
    
    return (
      <>
        <h2>Skills</h2>
        {skills}
      </>
    );
  };

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <div className="sheet-header">
            <div className="sheet-header-settings">
              <a href={`/creatures/${id}/edit`}>
                <GearIcon/>
              </a>
            </div>
            {!!imageUrl && <img alt="creature portrait" className="token" src={imageUrl}/>}
            <div>
              <h1>{name}</h1>
              <p>{size} {creatureType}, {alignment}</p>
            </div>
          </div>
        </div>
        <div className="column">
          {getCreatureMiscStats()}
          <StatBlock entity={creature} />
          <div className="card">
            {getCreatureSkills()}
            {getCreatureSenses()}
            <h2>Proficiencies</h2>
            {getOptionalProperty('Condition Immunities', conditionImmunities)}
            {getOptionalProperty('Condition Resistences', conditionResistances)}
            {getOptionalProperty('Condition Vulnerabilities', conditionVulnerabilities)}
            {getOptionalProperty('Damage Immunities', damageImmunities)}
            {getOptionalProperty('Damage Resistences', damageResistances)}
            {getOptionalProperty('Damage Vulnerabilities', damageVulnerabilities)}
            {getOptionalProperty('Languages', languages)}
          </div>
          {getCreatureAbout()}
          {getCreatureBackstory()}
          {getCreatureLairActions()}
          {getCreatureRegionalEffects()}
        </div>
        <div className="column">
          {getAssociatedFactionsCard()}
          {getCreatureFeatures()}
          {getCreatureActions()}
          {getCreatureLegendaryActions()}
          {getAssociatedMagicItemsCard()} 
          <div className="card">
            <h2>Spellbook</h2>
            {getOptionalProperty('Level', spellcastingLevel)}
            {getOptionalProperty('Ability', spellcastingAbility)}
            {getOptionalProperty('Bonus', spellcastingModifier)}
            {getOptionalProperty('Save DC', spellcastingSaveDc)}
            {
              !!spells?.length && (
                <div className='card'>
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
                </div>
              )
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { CreaturePage };
