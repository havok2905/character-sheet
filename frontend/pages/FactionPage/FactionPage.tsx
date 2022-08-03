import React, { ReactElement, useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { creatureRow } from '../../utilities/UiHelpers/creatureRow';
import { GearIcon } from '../../components/Icons';
import { getFaction } from '../../utilities/Api/Factions';
import { ICharacter, IFaction } from '../../types/models';
import { ItemWithToken } from '../../components/ItemWithToken';
import { NewLineText } from '../../components/NewLineText/NewLineText';
import { Token } from '../../components/Token';
import { useParams } from 'react-router-dom';

const FactionPage = (): ReactElement | null => {
  const [faction, setFaction] = useState<IFaction | null>(null);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getFaction(params.id).then(data => setFaction(data.faction));
    }
  }, []);

  if (!faction) return null;

  const {
    alignment,
    allies,
    characters = [],
    creatures = [],
    description,
    goals,
    id,
    ideals,
    imageUrl,
    name,
    rivals
  } = faction;

  const characterClassRow = (character: ICharacter): string => {
    const {
      characterClass,
      characterClassLevel,
      characterSubClass
    } = character;

    const subclassText = characterSubClass ? `, ${characterSubClass}` : '';

    return `${characterClass}${subclassText} (${characterClassLevel})`;
  };

  const characterMulticlassRow = (character: ICharacter): string => {
    const {
      multiclassClass,
      multiclassClassLevel,
      multiclassSubClass
    } = character;

    if (!multiclassClass) return '';

    const subclassText = multiclassSubClass ? `, ${multiclassSubClass}` : '';

    return `${multiclassClass}${subclassText} (${multiclassClassLevel})`;
  };

  return (
    <div className="layout">
      <div className="full">
        <div className="page-header">
          <div className="page-header-settings">
            <a href={`/factions/${id}/edit`}>
              <GearIcon/>
            </a>
          </div>
        </div>
      </div>
      <div className="full">
        <Token imageAltText={`${name} - token`} imageUrl={imageUrl}/>
        <h1>{name}</h1>
        <Card>
          <p><strong>Alignment: </strong>{alignment}</p>
          <p><strong>Goals: </strong>{goals}</p>
          <p><strong>Ideals: </strong>{ideals}</p>
          <p><strong>Allies: </strong>{allies}</p>
          <p><strong>Rivals: </strong>{rivals}</p>
          <NewLineText text={description}/>
        </Card>
        <h2>Member NPCs</h2>
        <ul className="bulletless-list">
          {
            creatures.map(creature => {
              const {
                id,
                imageUrl,
                name
              } = creature;

              return (
                <li>
                  <ItemWithToken
                    description={creatureRow(creature)}
                    heading={name}
                    imageAltText={`${name} token`}
                    imageUrl={imageUrl}
                    itemPath={`/creatures/${id}`}
                  />
                </li>
              );
            })
          }
        </ul>
        <h2>Member Characters</h2>
        <ul className="bulletless-list">
          {
            characters.map(character => {
              const {
                id,
                imageUrl,
                name
              } = character;

              return (
                <li>
                  <ItemWithToken
                    description={characterClassRow(character)}
                    heading={name}
                    imageAltText={`${name} token`}
                    imageUrl={imageUrl}
                    itemPath={`/characters/${id}`}
                    subDescription={characterMulticlassRow(character)}
                  />
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export { FactionPage };
