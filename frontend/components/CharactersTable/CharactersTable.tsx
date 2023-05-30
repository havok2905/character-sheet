import React, { FC } from 'react';
import { CHARACTER_ROUTE } from '../../app';
import { characterClassRow } from '../../utilities/UiHelpers/characterClassRow';
import { characterMulticlassRow } from '../../utilities/UiHelpers/characterMulticlassRow';
import { generatePath } from 'react-router-dom';
import { ICharacter } from '../../types/models';
import { ItemWithToken } from '../../components/ItemWithToken';

interface ICharactersTableProps {
  characters: ICharacter[]
}

const CharactersTable: FC<ICharactersTableProps> = ({
  characters
}) => {
  return (
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
              {
                <ItemWithToken
                  description={characterClassRow(character)}
                  heading={name}
                  imageAltText={`${name} token`}
                  imageUrl={imageUrl}
                  itemPath={generatePath(CHARACTER_ROUTE, { id })}
                  subDescription={characterMulticlassRow(character)}
                />
              }
            </li>
          );
        })
      }
    </ul>
  );
};

export { CharactersTable };
