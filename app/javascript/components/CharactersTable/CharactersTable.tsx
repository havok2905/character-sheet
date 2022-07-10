import React, { ReactElement } from 'react';
import { characterClassRow } from '../../utilities/UiHelpers/characterClassRow';
import { characterMulticlassRow } from '../../utilities/UiHelpers/characterMulticlassRow';
import { ICharacter } from '../../types/models';
import { ItemWithToken } from '../../components/ItemWithToken';

interface ICharactersTableProps {
  characters: ICharacter[]
}

const CharactersTable = ({
  characters
}): ReactElement => {
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
                  itemPath={`/characters/${id}`}
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
