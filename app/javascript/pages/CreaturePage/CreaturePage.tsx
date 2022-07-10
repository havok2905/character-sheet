import React, { ReactElement, useEffect, useState } from 'react';
import { AssociateWithTokenLink } from '../../components/AssociateWithTokenLink';
import { GearIcon } from '../../components/Icons';
import { getCreature } from '../../utilities/Api/Creatures';
import { getSpellsByLevel } from '../../utilities/UiHelpers/getSpellsByLevel';
import { ICreature } from '../../types/models';
import { Layout } from "../../layouts/Layout";
import { SpellCard } from '../../components/SpellCard';
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
    charismaMod,
    charismaSave,
    charismaScore,
    conditionImmunities,
    conditionResistances,
    conditionVulnerabilities,
    constitutionMod,
    constitutionSave,
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
    dexterityMod,
    dexteritySave,
    dexterityScore,
    factions,
    flaws,
    hp,
    id,
    ideals,
    imageUrl,
    intelligenceMod,
    intelligenceSave,
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
    skills,
    speed,
    spellcastingAbility,
    spellcastingLevel,
    spellcastingModifier,
    spellcastingSaveDc,
    spells,
    strengthMod,
    strengthSave,
    strengthScore,
    wisdomMod,
    wisdomSave,
    wisdomScore
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
          <table >
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
          <table >
            <thead>
              <tr>
                <th></th>
                <th>STR</th>
                <th>DEX</th>
                <th>CON</th>
                <th>INT</th>
                <th>WIS</th>
                <th>CHA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Score</td>
                <td>{strengthScore}</td>
                <td>{dexterityScore}</td>
                <td>{constitutionScore}</td>
                <td>{intelligenceScore}</td>
                <td>{wisdomScore}</td>
                <td>{charismaScore}</td>
              </tr>
              <tr>
                <td>Mod</td>
                <td>{strengthMod}</td>
                <td>{dexterityMod}</td>
                <td>{constitutionMod}</td>
                <td>{intelligenceMod}</td>
                <td>{wisdomMod}</td>
                <td>{charismaMod}</td>
              </tr>
              <tr>
                <td>Save</td>
                <td>{strengthSave}</td>
                <td>{dexteritySave}</td>
                <td>{constitutionSave}</td>
                <td>{intelligenceSave}</td>
                <td>{wisdomSave}</td>
                <td>{charismaSave}</td>
              </tr>
            </tbody>
          </table>
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
                {description}
              </div>
            )
          }
          {
            !!backstory && (
              <div className="card">
                <h2>Backstory</h2>
                {backstory}
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
                        {description}
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
                <p><strong>Cantrips</strong></p>
                {
                  getSpellsByLevel(0, spells).map(spell => {
                    const {name} = spell;
                    return (
                      <ToggleItem heading={name}>
                        <SpellCard spell={spell}/>
                      </ToggleItem>
                    );
                  })
                }
                <p><strong>1st Level</strong></p>
                {
                  getSpellsByLevel(1, spells).map(spell => {
                    const {name} = spell;
                    return (
                      <ToggleItem heading={name}>
                        <SpellCard spell={spell}/>
                      </ToggleItem>
                    );
                  })
                }
                <p><strong>2nd Level</strong></p>
                {
                  getSpellsByLevel(2, spells).map(spell => {
                    const {name} = spell;
                    return (
                      <ToggleItem heading={name}>
                        <SpellCard spell={spell}/>
                      </ToggleItem>
                    );
                  })
                }
                <p><strong>3rd Level</strong></p>
                {
                  getSpellsByLevel(3, spells).map(spell => {
                    const {name} = spell;
                    return (
                      <ToggleItem heading={name}>
                        <SpellCard spell={spell}/>
                      </ToggleItem>
                    );
                  })
                }
                <p><strong>4th Level</strong></p>
                {
                  getSpellsByLevel(4, spells).map(spell => {
                    const {name} = spell;
                    return (
                      <ToggleItem heading={name}>
                        <SpellCard spell={spell}/>
                      </ToggleItem>
                    );
                  })
                }
                <p><strong>5th Level</strong></p>
                {
                  getSpellsByLevel(5, spells).map(spell => {
                    const {name} = spell;
                    return (
                      <ToggleItem heading={name}>
                        <SpellCard spell={spell}/>
                      </ToggleItem>
                    );
                  })
                }
                <p><strong>6th Level</strong></p>
                {
                  getSpellsByLevel(6, spells).map(spell => {
                    const {name} = spell;
                    return (
                      <ToggleItem heading={name}>
                        <SpellCard spell={spell}/>
                      </ToggleItem>
                    );
                  })
                }
                <p><strong>7th Level</strong></p>
                {
                  getSpellsByLevel(7, spells).map(spell => {
                    const {name} = spell;
                    return (
                      <ToggleItem heading={name}>
                        <SpellCard spell={spell}/>
                      </ToggleItem>
                    );
                  })
                }
                <p><strong>8th Level</strong></p>
                {
                  getSpellsByLevel(8, spells).map(spell => {
                    const {name} = spell;
                    return (
                      <ToggleItem heading={name}>
                        <SpellCard spell={spell}/>
                      </ToggleItem>
                    );
                  })
                }
                <p><strong>9th Level</strong></p>
                {
                  getSpellsByLevel(9, spells).map(spell => {
                    const {name} = spell;
                    return (
                      <ToggleItem heading={name}>
                        <SpellCard spell={spell}/>
                      </ToggleItem>
                    );
                  })
                }
              </div>
            )
          }
        </div>
      </div>
    </Layout>
  );
};

export { CreaturePage };
