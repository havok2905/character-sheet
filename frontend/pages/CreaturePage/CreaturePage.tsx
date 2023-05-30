import React, { FC } from 'react';
import { calculateAbilityModifier } from '../../utilities/GameSystem/calculateAbilityModifier';
import { calculateSpellcastingModifier } from '../../utilities/GameSystem/calculateSpellcastingModifier';
import { calculateSpellcastingSaveDc } from '../../utilities/GameSystem/calculateSpellcastingSaveDc';
import { Card } from '../../components/Card';
import { CREATURE_EDIT_ROUTE } from '../../app';
import { GearIcon } from '../../components/Icons';
import { generatePath, Link, useParams } from 'react-router-dom';
import { getCreature } from '../../utilities/Api/Creatures';
import { Navbar } from '../../components/Navbar/Navbar';
import { NewLineText } from '../../components/NewLineText';
import {
  PROFICIENCY_BONUS_BY_LEVEL,
  FULL_CASTER_TABLE
} from '../../utilities/GameSystem/constants';
import { SpellListByLevel } from '../../components/SpellListByLevel';
import { StatBlock } from '../../components/StatBlock';
import { ToggleItem } from '../../components/ToggleItem';
import { Token } from '../../components/Token';
import { useAuth } from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const CreaturePage: FC = () => {

  const params = useParams();

  const authQuery = useAuth();

  const {
    data,
    isError,
    isLoading
  } = useQuery({
    queryFn: async () => getCreature(params.id ?? ''),
    queryKey: ['creature']
  });

  if (isLoading || isError) return null;

  const creature = data.creature;

  const {
    ac,
    alignment,
    armor,
    backstory,
    bonds,
    charismaScore,
    conditionImmunities,
    conditionResistances,
    conditionVulnerabilities,
    constitutionScore,
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
    dexterityScore,
    flaws,
    hp,
    id,
    ideals,
    imageUrl,
    intelligenceScore,
    lairActionsText,
    languages,
    legendaryActionsText,
    magicItems,
    name,
    personalityTraits,
    regionalEffectsText,
    senses,
    size,
    speed,
    spellcastingAbility,
    spellcastingLevel,
    spells,
    strengthScore,
    wisdomScore
  } = creature;
  const getOptionalProperty = (label: string, value: string | number) => {
    if (value === null || value === undefined || value === '') return null;
    return <p><strong>{label}</strong> {value}</p>;
  };
  
  const getCreatureAbout = () => {
    if (!personalityTraits && !ideals && !bonds && !flaws && !description) return null;

    return (
      <Card>
        <h3>About</h3>
        {getOptionalProperty('Personality Traits', personalityTraits)}
        {getOptionalProperty('Ideals', ideals)}
        {getOptionalProperty('Bonds', bonds)}
        {getOptionalProperty('Flaws', flaws)}
        {description && <NewLineText text={description}/>}
      </Card>
    );
  };

  const getCreatureActions = () => {
    if (!creatureActions?.length) return null;

    return (
      <>
        <h3>Actions</h3>
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
                {
                  description && (
                    <>
                      <p><strong>Description:</strong></p>
                      <NewLineText text={description}/>
                    </>
                  )
                }
              </ToggleItem>
            );
          })
        }
      </>
    );
  };

  const getCreatureBackstory = () => {
    if (!backstory) return null;

    return (
      <Card>
        <h3>Backstory</h3>
        <NewLineText text={backstory} />
      </Card>
    );
  };

  const getCreatureFeatures = () => {
    if (!creatureFeatures?.length) return null;

    return (
      <>
        <h3>Features</h3>
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
      </>
    )
  };

  const getCreatureLairActions = () => {
    if (!creatureLairActions?.length) return null;

    return (
      <>
        <h3>Lair Actions</h3>
        <p>{lairActionsText}</p>
        <ul>
          {creatureLairActions.map(action => (
            <li>
              <NewLineText text={action.description}/>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const getCreatureLegendaryActions = () => {
    if (!creatureLegendaryActions?.length) return null;

    return (
      <>
        <h3>Legendary Actions</h3>
        <p>{legendaryActionsText}</p>
        {
          creatureLegendaryActions.map(action => {
            const { description, name } = action;

            return (
              <ToggleItem heading={name}>
                <NewLineText text={description} />
              </ToggleItem>
            );
          })
        }
      </>
    );
  };

  const getCreatureRegionalEffects = () => {
    if (!creatureRegionalEffects?.length) return null;

    return (
      <>
        <h3>Regional Effects</h3>
        <p>{regionalEffectsText}</p>
        <ul>
          {creatureRegionalEffects.map(effect => (
            <li>
              <NewLineText text={effect.description}/>
            </li>
          ))}
        </ul>
      </>
    );
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
    const proficiencyBonus = PROFICIENCY_BONUS_BY_LEVEL[cr] ?? 0;

    const spellslots = FULL_CASTER_TABLE[spellcastingLevel];

    return (
      <Card>
        <h3>Spellbook</h3>
        {getOptionalProperty('Spellcasting Level: ', spellcastingLevel)}
        {getOptionalProperty('Spellcasting Ability: ', spellcastingAbility)}
        {getOptionalProperty('Spellcasting Bonus: ', calculateSpellcastingModifier(abilityMod, proficiencyBonus))}
        {getOptionalProperty('Spellcasting Save DC: ', calculateSpellcastingSaveDc(abilityMod, proficiencyBonus))}
        {
          !!spells?.length && (
            <>
              <SpellListByLevel label="Cantrips" spellLevel={0} spellSlots={0} spells={spells} />
              <SpellListByLevel label="1st Level" spellLevel={1} spellSlots={spellslots[0]} spells={spells} />
              <SpellListByLevel label="2nd Level" spellLevel={2} spellSlots={spellslots[1]} spells={spells} />
              <SpellListByLevel label="3rd Level" spellLevel={3} spellSlots={spellslots[2]} spells={spells} />
              <SpellListByLevel label="4th Level" spellLevel={4} spellSlots={spellslots[3]} spells={spells} />
              <SpellListByLevel label="5th Level" spellLevel={5} spellSlots={spellslots[4]} spells={spells} />
              <SpellListByLevel label="6th Level" spellLevel={6} spellSlots={spellslots[5]} spells={spells} />
              <SpellListByLevel label="7th Level" spellLevel={7} spellSlots={spellslots[6]} spells={spells} />
              <SpellListByLevel label="8th Level" spellLevel={8} spellSlots={spellslots[7]} spells={spells} />
              <SpellListByLevel label="9th Level" spellLevel={9} spellSlots={spellslots[8]} spells={spells} />
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
                  <Link to={generatePath(CREATURE_EDIT_ROUTE, { id: id as string })}>
                    <GearIcon/>
                  </Link>
                )
              }
            </div>
            <Token imageAltText="creature portrait" imageUrl={imageUrl}/>
          </div>
        </div>
        <div className="column">
          <Card>
            <h2>{name}</h2>
            <p>{size} {creatureType}, {alignment}</p>
            <p><strong>Armor Class: </strong>{ac} {armor && ` ( ${armor} )`}</p>
            <p><strong>Hit Points: </strong>{hp}</p>
            <p><strong>Speed: </strong>{speed}</p>
            <p><strong>Saving Throws: </strong></p>
            <p><strong>Skills: </strong></p>
            {getOptionalProperty('Condition Immunities', conditionImmunities)}
            {getOptionalProperty('Condition Resistences', conditionResistances)}
            {getOptionalProperty('Condition Vulnerabilities', conditionVulnerabilities)}
            {getOptionalProperty('Damage Immunities', damageImmunities)}
            {getOptionalProperty('Damage Resistences', damageResistances)}
            {getOptionalProperty('Damage Vulnerabilities', damageVulnerabilities)}
            {getOptionalProperty('Senses', senses)}
            {getOptionalProperty('Languages', languages)}
            <p><strong>Challenge: </strong>{cr}</p>
            {getCreatureFeatures()}
            {getCreatureActions()}
            {getCreatureLegendaryActions()}
            {getCreatureLairActions()}
            {getCreatureRegionalEffects()}
          </Card>
          <StatBlock entity={creature} />
          {getSpellbook()}
        </div>
        <div className="column">
          {getCreatureAbout()}
          {getCreatureBackstory()}
        </div>
      </div>
    </>
  );
};

export { CreaturePage };
