import React, { FC } from 'react';
import {
  ACROBATICS,
  ANIMAL_HANDLING,
  ARCANA,
  ATHLETICS,
  CHA,
  CON,
  DECEPTION,
  DEX,
  EXP,
  FULL_CASTER_TABLE,
  HISTORY,
  INSIGHT,
  INT,
  INTIMIDATION,
  INVESTIGATION,
  MEDICINE,
  NATURE,
  PERCEPTION,
  PERFORMANCE,
  PERSUASION,
  PROF,
  PROFICIENCY_BONUS_BY_LEVEL,
  RELIGION,
  SLEIGHT_OF_HAND,
  STEALTH,
  STR,
  SURVIVAL,
  WIS
} from '../../utilities/GameSystem/constants';
import { Action } from '../../components/Action';
import { calculateAbilityModifier } from '../../utilities/GameSystem/calculateAbilityModifier';
import { calculateSkillModifier } from '../../utilities/GameSystem/calculateSkillModifier';
import { calculateSpellcastingModifier } from '../../utilities/GameSystem/calculateSpellcastingModifier';
import { calculateSpellcastingSaveDc } from '../../utilities/GameSystem/calculateSpellcastingSaveDc';
import { calculateSavingThrowModifier } from '../../utilities/GameSystem/calculateSavingThrowModifier';
import { Card } from '../../components/Card';
import { CREATURE_EDIT_ROUTE } from '../../app';
import { GearIcon } from '../../components/Icons';
import { generatePath, Link, useParams } from 'react-router-dom';
import { getCreature } from '../../utilities/Api/Creatures';
import { Navbar } from '../../components/Navbar/Navbar';
import { NewLineText } from '../../components/NewLineText';
import { ProficiencyType } from '../../utilities/GameSystem/types';
import { SpellListByLevel } from '../../components/SpellListByLevel';
import { ToggleItem } from '../../components/ToggleItem';
import { Token } from '../../components/Token';
import { useAuth } from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import './CreaturePage.scss';

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
    acrobaticsProf,
    alignment,
    animalHandlingProf,
    arcanaProf,
    armor,
    athleticsProf,
    backstory,
    bonds,
    charismaProf,
    charismaScore,
    conditionImmunities,
    conditionResistances,
    conditionVulnerabilities,
    constitutionProf,
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
    deceptionProf,
    description,
    dexterityProf,
    dexterityScore,
    flaws,
    historyProf,
    hp,
    id,
    ideals,
    imageUrl,
    insightProf,
    intelligenceProf,
    intelligenceScore,
    intimidationProf,
    investigationProf,
    jackOfAllTrades,
    lairActionsText,
    languages,
    legendaryActionsText,
    medicineProf,
    name,
    natureProf,
    perceptionProf,
    performanceProf,
    personalityTraits,
    persuasionProf,
    regionalEffectsText,
    religionProf,
    senses,
    size,
    sleightOfHandProf,
    speed,
    spellcastingAbility,
    spellcastingLevel,
    spells,
    stealthProf,
    strengthProf,
    strengthScore,
    survivalProf,
    wisdomProf,
    wisdomScore
  } = creature;
  const getOptionalProperty = (label: string, value: string | number) => {
    if (value === null || value === undefined || value === '') return null;
    return <p><strong>{label}</strong> {value}</p>;
  };
  
  const getCreatureAbout = () => {
    const hasTraits = personalityTraits && ideals && bonds && flaws;

    if (!hasTraits && !description && !backstory) return null;

    return (
      <Card>
        <h3>About</h3>
        {
          hasTraits && (
            <>
              {getOptionalProperty('Personality Traits', personalityTraits)}
              {getOptionalProperty('Ideals', ideals)}
              {getOptionalProperty('Bonds', bonds)}
              {getOptionalProperty('Flaws', flaws)}
            </>
          )
        }
        {
          description && (
            <>
              <h4>Description</h4>
              <NewLineText text={description}/>
            </>
          )
        }
        {
          backstory && (
            <>
              <h4>Backstory</h4>
              <NewLineText text={backstory}/>
            </>
          )
        }
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
            const { actionType, name } = action;

            return (
              <ToggleItem heading={`${name}: ${actionType}`}>
                <Action action={action}/>
              </ToggleItem>
            );
          })
        }
      </>
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

  const getSave = (
    label: string,
    abilityScore: number,
    proficiency: ProficiencyType
  ): string => {
    const proficiencyBonus = PROFICIENCY_BONUS_BY_LEVEL[cr] ?? 0;

    const mod = calculateSavingThrowModifier({
      abilityScore,
      bonus: 0,
      proficiency,
      proficiencyBonus
    });

    const modSymbol = mod < 0 ? '' : '+';

    return `${label} ${modSymbol}${mod}`;
  }

  const getSaves = (): string => {
    return [
      { label: STR, abilityScore: strengthScore, proficiency: strengthProf },
      { label: DEX, abilityScore: dexterityScore, proficiency: dexterityProf },
      { label: CON, abilityScore: constitutionScore, proficiency: constitutionProf },
      { label: INT, abilityScore: intelligenceScore, proficiency: intelligenceProf },
      { label: WIS, abilityScore: wisdomScore, proficiency: wisdomProf },
      { label: CHA, abilityScore: charismaScore, proficiency: charismaProf }
    ].filter(item => {
      return item.proficiency === PROF || item.proficiency === EXP
    }).map(item => {
      return getSave(
        item.label,
        item.abilityScore,
        item.proficiency
      )
    }).join(', ');
  };

  const getSkill = (
    label: string,
    abilityScore: number,
    proficiency: ProficiencyType): string => {
    const proficiencyBonus = PROFICIENCY_BONUS_BY_LEVEL[cr] ?? 0;

    const mod = calculateSkillModifier({
      abilityScore,
      bonus: 0,
      jackOfAllTrades,
      proficiency,
      proficiencyBonus
    });

    const modSymbol = mod < 0 ? '' : '+';

    return `${label} ${modSymbol}${mod}`;
  };

  const getSkills = (): string => {
    return [
      { label: ACROBATICS, abilityScore: dexterityScore, proficiency: acrobaticsProf },
      { label: ANIMAL_HANDLING, abilityScore: wisdomScore, proficiency: animalHandlingProf },
      { label: ARCANA, abilityScore: intelligenceScore, proficiency: arcanaProf },
      { label: ATHLETICS, abilityScore: strengthScore, proficiency: athleticsProf },
      { label: DECEPTION, abilityScore: charismaScore, proficiency: deceptionProf },
      { label: HISTORY, abilityScore: intelligenceScore, proficiency: historyProf },
      { label: INSIGHT, abilityScore: wisdomScore, proficiency: insightProf },
      { label: INTIMIDATION, abilityScore: charismaScore, proficiency: intimidationProf },
      { label: INVESTIGATION, abilityScore: intelligenceScore, proficiency: investigationProf },
      { label: MEDICINE, abilityScore: wisdomScore, proficiency: medicineProf },
      { label: NATURE, abilityScore: intelligenceScore, proficiency: natureProf },
      { label: PERCEPTION, abilityScore: wisdomScore, proficiency: perceptionProf },
      { label: PERFORMANCE, abilityScore: charismaScore, proficiency: performanceProf },
      { label: PERSUASION, abilityScore: charismaScore, proficiency: persuasionProf },
      { label: RELIGION, abilityScore: intelligenceScore, proficiency: religionProf },
      { label: SLEIGHT_OF_HAND, abilityScore: dexterityScore, proficiency: sleightOfHandProf },
      { label: STEALTH, abilityScore: dexterityScore, proficiency: stealthProf },
      { label: SURVIVAL, abilityScore: wisdomScore, proficiency: survivalProf }
    ].filter(item => {
      return item.proficiency === PROF || item.proficiency === EXP
    }).map(item => {
      return getSkill(
        item.label,
        item.abilityScore,
        item.proficiency
      )
    }).join(', ');
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

  const getStatItem = (
    label: string,
    abilityScore: number
  ) => {
    const mod = calculateAbilityModifier({ abilityScore, bonus: 0 });
    const modSymbol = mod < 0 ? '' : '+';

    return (
      <div>
        <h3>{label}</h3>
        <p>{abilityScore} ( {modSymbol}{mod} )</p>
      </div>
    );
  }

  const getStatBlock = () => {
    return (
      <div className="creature-stat-block">
        {getStatItem(STR, strengthScore)}
        {getStatItem(DEX, dexterityScore)}
        {getStatItem(CON, constitutionScore)}
        {getStatItem(INT, intelligenceScore)}
        {getStatItem(WIS, wisdomScore)}
        {getStatItem(CHA, charismaScore)}
      </div>
    )
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
            <h2 className="creature-title">{name}</h2>
            <p className="creature-sub-title">{size} {creatureType}, {alignment}</p>
            <p><strong>Armor Class: </strong>{ac} {armor && ` ( ${armor} )`}</p>
            <p><strong>Hit Points: </strong>{hp}</p>
            <p><strong>Speed: </strong>{speed}</p>
            {getStatBlock()}
            {getOptionalProperty('Saving Throws: ', getSaves())}
            {getOptionalProperty('Skills: ', getSkills())}
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
          {getSpellbook()}
        </div>
        <div className="column">
          {getCreatureAbout()}
        </div>
      </div>
    </>
  );
};

export { CreaturePage };
