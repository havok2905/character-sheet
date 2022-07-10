import React, { ReactElement } from "react";
import { createCharacter } from "../../utilities/Api/Characters";
import { CharacterForm } from "../../components/CharacterForm/";
import { ICharacter } from "../../types/models";

const CharacterCreatePage = (): ReactElement => {
  const handleSubmit = (character: ICharacter) => {
    createCharacter({ character })
      .then(data => {
        window.location.href = `/characters/${data.character.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/characters/new`;
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>New Character</h1>
        <a href="/characters">
          Back
        </a>
        <CharacterForm
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Create Character"
        />
      </div>
    </div>
  );
};

export { CharacterCreatePage };
