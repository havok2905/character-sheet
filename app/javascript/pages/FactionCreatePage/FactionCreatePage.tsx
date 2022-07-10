import React, { ReactElement } from "react";
import { createFaction } from '../../utilities/Api/Factions';
import { FactionForm } from '../../components/FactionForm';
import { IFaction } from "../../types/models";
import { Layout } from "../../layouts/Layout";

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
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>New Faction</h1>
          <a href="/factions">
            Back
          </a>
          <FactionForm
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Create Faction"/>
        </div>
      </div>
    </Layout>
  );
};

export { FactionCreatePage };
