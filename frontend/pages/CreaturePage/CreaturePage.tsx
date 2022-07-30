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
          <StatBlock entity={creature} />
          <div className="card">
            <h2>Skills</h2>
            {skills}
            <h2>Senses</h2>
            {senses}
            <h2>Proficiencies</h2>
            <p><strong>Condition Immunities:</strong> {conditionImmunities}</p>
            <p><strong>Condition Resistences:</strong> {conditionResistances}</p>
            <p><strong>Condition Vulnerabilities:</strong> {conditionVulnerabilities}</p>
            <p><strong>Damage Immunities:</strong> {damageImmunities}</p>
            <p><strong>Damage Resistences:</strong> {damageResistances}</p>
            <p><strong>Damage Vulnerabilities:</strong> {damageVulnerabilities}</p>
            <p><strong>Languages:</strong> {languages}</p>
          </div>
          {
            !!( personalityTraits || ideals || bonds || flaws || description ) && (
              <div className="card">
                <h2>About</h2>
                <p><strong>Personality Traits:</strong> {personalityTraits}</p>
                <p><strong>Ideals:</strong> {ideals}</p>
                <p><strong>Bonds:</strong> {bonds}</p>
                <p><strong>Flaws:</strong> {flaws}</p>
                <NewLineText text={description}/>
              </div>
            )
          }
          {
            !!backstory && (
              <div className="card">
                <h2>Backstory</h2>
                <NewLineText text={backstory}/>
              </div>
            )
          }
          {
            !!creatureLairActions?.length && (
              <div className="card">
                <h2>Lair Actions</h2>
                <p>{lairActionsText}</p>
                <ul className="bulletless-list">
                  {creatureLairActions.map(action => <li>{action.description}</li>)}
                </ul>
              </div>
            )
          }
          {
            !!creatureRegionalEffects?.length && (
              <div className="card">
                <h2>Regional Effects</h2>
                <p>{regionalEffectsText}</p>
                <ul className="bulletless-list">
                  {creatureRegionalEffects.map(effect => <li>{effect.description}</li>)}
                </ul>
              </div>
            )
          }
        </div>
        <div className="column">
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
          {
            !!creatureFeatures?.length && (
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
          }
          {
            !!creatureActions?.length && (
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
                        <p>{actionCombatType}</p>
                        <p>To Hit: {attackBonus}</p>
                        <p>Damage {damageDiceRoll} {damageType}</p>
                        <p>Damage Two {damageTwoDiceRoll} {damageTwoType}</p>
                        <p>Range: {range}</p>
                        <p>Save DC: DC{savingThrowDc} {savingThrowType}</p>
                        {description}
                      </ToggleItem>
                    );
                  })
                }
              </div>
            )
          }
          {
            !!creatureLegendaryActions?.length && (
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
            )
          }
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
          {
            !!spells?.length && (
              <div className="card">
                <h2>Spellcasting</h2>
                <p><strong>Level:</strong> {spellcastingLevel}</p>
                <p><strong>Ability:</strong> {spellcastingAbility}</p>
                <p><strong>Bonus:</strong> {spellcastingModifier}</p>
                <p><strong>Save DC:</strong> {spellcastingSaveDc}</p>
              </div>
            )
          }
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
    </Layout>
  );
};

export { CreaturePage };
