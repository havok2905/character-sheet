import React, { ReactElement } from "react";
import { createCreature } from "../../utilities/Api/Creatures";
import { CreatureForm } from "../../components/CreatureForm/CreatureForm";
import { ICreature } from "../../types/models";

const CreatureCreatePage = (): ReactElement => {
  const handleSubmit = (creature: ICreature) => {
    createCreature({ creature })
      .then(data => {
        window.location.href = `/creatures/${data.creature.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/creatures/new`;
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>New Creature</h1>
        <a className="button" href="/creatures">
          Back
        </a>
        <CreatureForm
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Create Creature"
        />
      </div>
    </div>
  );
};

export { CreatureCreatePage };
