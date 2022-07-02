import React, { ReactElement } from "react";
import { createFaction } from '../../utilities/Api/Factions';
import { FactionForm } from '../../components/FactionForm';
import { IFaction } from "../../types/models";

const FactionCreatePage = (): ReactElement => {
  const handleSubmit = (faction: IFaction) => {
    createFaction({ faction })
      .then(data => {
        window.location.href = `/factions/${data.faction.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/factions/new`;
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>New Faction</h1>
        <a className="button" href="/factions">
          Back
        </a>
        <FactionForm
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Create Faction"/>
      </div>
    </div>
  );
};

export { FactionCreatePage };
