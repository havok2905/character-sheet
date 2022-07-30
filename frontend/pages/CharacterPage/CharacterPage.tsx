import React, { ReactElement, useEffect, useState } from 'react';
import { AssociateWithTokenLink } from '../../components/AssociateWithTokenLink';
import { characterClassRow } from '../../utilities/UiHelpers/characterClassRow';
import { characterMulticlassRow } from '../../utilities/UiHelpers/characterMulticlassRow';
import { GearIcon } from '../../components/Icons';
import { getCharacter } from '../../utilities/Api/Characters';
import { getSpellsByLevel } from '../../utilities/UiHelpers/getSpellsByLevel';
import { ICharacter } from '../../types/models';
import { SpellCard } from '../../components/SpellCard';
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
    acrobaticsMod,
    acrobaticsProf,
    age,
    alignment,
    animalHandlingMod,
    animalHandlingProf,
    arcanaMod,
    arcanaProf,
    armorProficiencies,
    athleticsMod,
    athleticsProf,
    background,
    backstory,
    bonds,
    characterClassHitDice,
    characterClassLevel,
    characterAttacks = [],
    characterFeatures = [],
    characterFeatureResources = [],
    characterItems = [],
    charismaMod,
    charismaProf,
    charismaSave,
    charismaScore,
    conditionImmunities,
    conditionResistances,
    conditionVulnerabilities,
    constitutionMod,
    constitutionProf,
    constitutionSave,
    constitutionScore,
    copperPieces,
    creatures = [],
    damageImmunities,
    damageResistances,
    damageVulnerabilities,
    deceptionMod,
    deceptionProf,
    dexterityMod,
    dexterityProf,
    dexteritySave,
    dexterityScore,
    electrumPieces,
    eyes,
    factions = [],
    flaws,
    goldPieces,
    hair,
    height,
    historyMod,
    historyProf,
    hp,
    id,
    ideals,
    imageUrl,
    initiative,
    insightMod,
    insightProf,
    intelligenceMod,
    intelligenceProf,
    intelligenceSave,
    intelligenceScore,
    intimidationMod,
    intimidationProf,
    investigationMod,
    investigationProf,
    languages,
    magicItems = [],
    medicineMod,
    medicineProf,
    multiclassClass,
    multiclassClassHitDice,
    multiclassClassLevel,
    name,
    natureMod,
    natureProf,
    passivePerception,
    perceptionMod,
    perceptionProf,
    performanceMod,
    performanceProf,
    personalityTraits,
    persuasionMod,
    persuasionProf,
    platinumPieces,
    proficiencyBonus,
    race,
    religionMod,
    religionProf,
    senses,
    silverPieces,
    skin,
    sleightOfHandMod,
    sleightOfHandProf,
    speed,
    spells = [],
    spellcastingAbility,
    spellcastingSaveDc,
    spellcastingModifier,
    stealthMod,
    stealthProf,
    strengthMod,
    strengthProf,
    strengthSave,
    strengthScore,
    subRace,
    survivalMod,
    survivalProf,
    toolProficiencies,
    weaponProficiencies,
    weight,
    wisdomMod,
    wisdomProf,
    wisdomSave,
    wisdomScore
  } = character;

  const getProficientClass = (prof: string): string | undefined => {
    const profs = ['exp', 'prof'];
    return profs.includes(prof) ? 'sheet-table-data-bolded': undefined
  };

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
          <table>
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
                <td className={getProficientClass(strengthProf)}>{strengthSave}</td>
                <td className={getProficientClass(dexterityProf)}>{dexteritySave}</td>
                <td className={getProficientClass(constitutionProf)}>{constitutionSave}</td>
                <td className={getProficientClass(intelligenceProf)}>{intelligenceSave}</td>
                <td className={getProficientClass(wisdomProf)}>{wisdomSave}</td>
                <td className={getProficientClass(charismaProf)}>{charismaSave}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Prof</th>
                <th>Ability</th>
                <th>Skill</th>
                <th>Mod</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{acrobaticsProf}</td>
                <td>Dex</td>
                <td>Acrobatics</td>
                <td className={getProficientClass(acrobaticsProf)}>{acrobaticsMod}</td>
              </tr>
              <tr>
                <td>{animalHandlingProf}</td>
                <td>Wis</td>
                <td>Animal Handling</td>
                <td className={getProficientClass(animalHandlingProf)}>{animalHandlingMod}</td>
              </tr>
              <tr>
                <td>{arcanaProf}</td>
                <td>Int</td>
                <td>Arcana</td>
                <td className={getProficientClass(arcanaProf)}>{arcanaMod}</td>
              </tr>
              <tr>
                <td>{athleticsProf}</td>
                <td>Str</td>
                <td>Athletics</td>
                <td className={getProficientClass(athleticsProf)}>{athleticsMod}</td>
              </tr>
              <tr>
                <td>{deceptionProf}</td>
                <td>Cha</td>
                <td>Deception</td>
                <td className={getProficientClass(deceptionProf)}>{deceptionMod}</td>
              </tr>
              <tr>
                <td>{historyProf}</td>
                <td>Int</td>
                <td>History</td>
                <td className={getProficientClass(historyProf)}>{historyMod}</td>
              </tr>
              <tr>
                <td>{insightProf}</td>
                <td>Wis</td>
                <td>Insight</td>
                <td className={getProficientClass(insightProf)}>{insightMod}</td>
              </tr>
              <tr>
                <td>{intimidationProf}</td>
                <td>Cha</td>
                <td>Intimidation</td>
                <td className={getProficientClass(intimidationProf)}>{intimidationMod}</td>
              </tr>
              <tr>
                <td>{investigationProf}</td>
                <td>Int</td>
                <td>Investigation</td>
                <td className={getProficientClass(investigationProf)}>{investigationMod}</td>
              </tr>
              <tr>
                <td>{medicineProf}</td>
                <td>Wis</td>
                <td>Medicine</td>
                <td className={getProficientClass(medicineProf)}>{medicineMod}</td>
              </tr>
              <tr>
                <td>{natureProf}</td>
                <td>Int</td>
                <td>Nature</td>
                <td className={getProficientClass(natureProf)}>{natureMod}</td>
              </tr>
              <tr>
                <td>{perceptionProf}</td>
                <td>Wis</td>
                <td>Perception</td>
                <td className={getProficientClass(perceptionProf)}>{perceptionMod}</td>
              </tr>
              <tr>
                <td>{performanceProf}</td>
                <td>Cha</td>
                <td>Performance</td>
                <td className={getProficientClass(performanceProf)}>{performanceMod}</td>
              </tr>
              <tr>
                <td>{perceptionProf}</td>
                <td>Cha</td>
                <td>Persuasion</td>
                <td className={getProficientClass(persuasionProf)}>{persuasionMod}</td>
              </tr>
              <tr>
                <td>{religionProf}</td>
                <td>int</td>
                <td>Religion</td>
                <td className={getProficientClass(religionProf)}>{religionMod}</td>
              </tr>
              <tr>
                <td>{sleightOfHandProf}</td>
                <td>Dex</td>
                <td>Sleight of Hand</td>
                <td className={getProficientClass(sleightOfHandProf)}>{sleightOfHandMod}</td>
              </tr>
              <tr>
                <td>{stealthProf}</td>
                <td>Dex</td>
                <td>Stealth</td>
                <td className={getProficientClass(stealthProf)}>{stealthMod}</td>
              </tr>
              <tr>
                <td>{survivalProf}</td>
                <td>Wis</td>
                <td>Survival</td>
                <td className={getProficientClass(survivalProf)}>{survivalMod}</td>
              </tr>
            </tbody>
          </table>
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
                  <p><strong>10th Level</strong></p>
                  {
                    getSpellsByLevel(10, spells).map(spell => {
                      const {name} = spell;
                      return (
                        <ToggleItem heading={name}>
                          <SpellCard spell={spell}/>
                        </ToggleItem>
                      );
                    })
                  }
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
