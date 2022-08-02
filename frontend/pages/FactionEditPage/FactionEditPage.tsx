import React, { ReactElement, useEffect, useState } from 'react';
import { DeleteButton } from '../../components/DeleteButton';
import {
  destroyFaction,
  getFaction,
  updateFaction,
  uploadFactionImage
} from '../../utilities/Api/Factions';
import { FactionForm } from '../../components/FactionForm';
import { IFaction } from '../../types/models';
import { ImageForm } from '../../components/ImageForm';
import { useParams } from "react-router-dom";

const FactionEditPage = (): ReactElement | null => {
  const [faction, setFaction] = useState<IFaction | null>(null);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getFaction(params.id).then(data => setFaction(data.faction));
    }
  }, []);

  if (!faction) return null;

  const { id, imageUrl } = faction;

  const handleDelete = () => {
    if (!id) return;

    destroyFaction(id)
      .then(() => {
        window.location.href = '/factions/';
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/factions/${id}/edit/`;
      });
  };

  const handleSubmit = (faction: IFaction) => {
    if (!id) return;

    updateFaction(id, { faction })
      .then(() => {
        window.location.href = `/factions/${id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/factions/${id}`;
      });
  };

  const handleImageUpload = (data: FormData | undefined) => {
    if (!data || !id) return;
              
    uploadFactionImage(id, data)
      .then(data => {
        window.location.href = `/factions/${data.faction.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>Edit Faction</h1>
        <a href="/factions">
          Back
        </a>
        <ImageForm
          buttonLabel="Upload Image"
          imageUrl={imageUrl}
          inputName="faction-image-file-upload"
          handleSubmit={handleImageUpload}
        />
        <FactionForm
          faction={faction}
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Update Faction"/>
        <DeleteButton
          buttonText="Delete Faction"
          handleDelete={handleDelete}/>
      </div>
    </div>
  );
};

export { FactionEditPage };
