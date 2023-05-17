import React, { ReactNode } from 'react';
import { AbilitySkills } from '../../components/AbilitySkills';
import { AssociateWithTokenLink } from '../../components/AssociateWithTokenLink';
import { calculateAbilityModifier } from '../../utilities/GameSystem/calculateAbilityModifier';
import { calculateSpellcastingModifier } from '../../utilities/GameSystem/calculateSpellcastingModifier';
import { calculateSpellcastingSaveDc } from '../../utilities/GameSystem/calculateSpellcastingSaveDc';
import { Card } from '../../components/Card';
import {
  CREATURE_EDIT_ROUTE,
  MAGIC_ITEM_ROUTE
} from '../../app';
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

const CreaturePage = (): ReactNode => {

  const params = useParams();

  const {authenticated} = useAuth(() => {});

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
  const getOptionalProperty = (label: string, value: string | number): ReactNode => {
    if (value === null || value === undefined || value === '') return null;
    return <p><strong>{label}</strong> {value}</p>;
  };

  const getAssociatedMagicItemsCard = (): ReactNode => {
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
  
  const getCreatureAbout = (): ReactNode => {
    if (!personalityTraits && !ideals && !bonds && !flaws && !description) return null;

    return (
      <Card>
        <h2>About</h2>
        {getOptionalProperty('Personality Traits', personalityTraits)}
        {getOptionalProperty('Ideals', ideals)}
        {getOptionalProperty('Bonds', bonds)}
        {getOptionalProperty('Flaws', flaws)}
        {description && <NewLineText text={description}/>}
      </Card>
    );
  };

  const getCreatureActions = (): ReactNode => {
    if (!creatureActions?.length) return null;

    return (
      <Card>
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
      </Card>
    );
  };

  const getCreatureBackstory = (): ReactNode => {
    if (!backstory) return null;

    return (
      <Card>
        <h2>Backstory</h2>
        <NewLineText text={backstory} />
      </Card>
    );
  };

  const getCreatureFeatures = (): ReactNode => {
    if (!creatureFeatures?.length) return null;

    return (
      <Card>
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
      </Card>
    )
  };

  const getCreatureLairActions = (): ReactNode => {
    if (!creatureLairActions?.length) return null;

    return (
      <Card>
        <h2>Lair Actions</h2>
        <p>{lairActionsText}</p>
        <ul>
          {creatureLairActions.map(action => (
            <li>
              <NewLineText text={action.description}/>
            </li>
          ))}
        </ul>
      </Card>
    );
  };

  const getCreatureLegendaryActions = (): ReactNode => {
    if (!creatureLegendaryActions?.length) return null;

    return (
      <Card>
        <h2>Legendary Actions</h2>
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
      </Card>
    );
  };

  const getCreatureMiscStats = (): ReactNode => {
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
            <td>{ac} {armor && ` ( ${armor} )`}</td>
            <td>{hp}</td>
            <td>{speed}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const getCreatureRegionalEffects = (): ReactNode => {
    if (!creatureRegionalEffects?.length) return null;

    return (
      <Card>
        <h2>Regional Effects</h2>
        <p>{regionalEffectsText}</p>
        <ul>
          {creatureRegionalEffects.map(effect => (
            <li>
              <NewLineText text={effect.description}/>
            </li>
          ))}
        </ul>
      </Card>
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
        <h2>Spellbook</h2>
        {getOptionalProperty('Level', spellcastingLevel)}
        {getOptionalProperty('Ability', spellcastingAbility)}
        {getOptionalProperty('Bonus', calculateSpellcastingModifier(abilityMod, proficiencyBonus))}
        {getOptionalProperty('Save DC', calculateSpellcastingSaveDc(abilityMod, proficiencyBonus))}
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
      <Navbar authenticated={authenticated}/>
      <div className="layout">
        <div className="full">
          <div className="page-header">
            <div className="page-header-settings">
              {
                authenticated && (
                  <Link to={generatePath(CREATURE_EDIT_ROUTE, { id: id as string })}>
                    <GearIcon/>
                  </Link>
                )
              }
            </div>
            <Token imageAltText="creature portrait" imageUrl={imageUrl}/>
            <div>
              <h1>{name}</h1>
              <p>{size} {creatureType}, {alignment}</p>
            </div>
          </div>
        </div>
        <div className="column">
          {getCreatureMiscStats()}
          <StatBlock entity={creature} />
          <AbilitySkills entity={creature}/>
          <Card>
            {getCreatureSenses()}
            <h2>Proficiencies</h2>
            {getOptionalProperty('Condition Immunities', conditionImmunities)}
            {getOptionalProperty('Condition Resistences', conditionResistances)}
            {getOptionalProperty('Condition Vulnerabilities', conditionVulnerabilities)}
            {getOptionalProperty('Damage Immunities', damageImmunities)}
            {getOptionalProperty('Damage Resistences', damageResistances)}
            {getOptionalProperty('Damage Vulnerabilities', damageVulnerabilities)}
            {getOptionalProperty('Languages', languages)}
          </Card>
          {getCreatureAbout()}
          {getCreatureBackstory()}
          {getCreatureLairActions()}
          {getCreatureRegionalEffects()}
        </div>
        <div className="column">
          {getCreatureFeatures()}
          {getCreatureActions()}
          {getCreatureLegendaryActions()}
          {getAssociatedMagicItemsCard()} 
          {getSpellbook()}
        </div>
      </div>
    </>
  );
};

export { CreaturePage };
