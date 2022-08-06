import React, { ReactElement, useEffect, useState } from 'react';
import { DeleteButton } from '../../components/DeleteButton';
import {
  destroyFaction,
  getFaction,
  updateFaction,
  uploadFactionImage
} from '../../utilities/Api/Factions';
import {
  FACTION_ROUTE,
  FACTIONS_ROUTE
} from '../../app';
import { FactionForm } from '../../components/FactionForm';
import {
  generatePath,
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';
import { IFaction } from '../../types/models';
import { ImageForm } from '../../components/ImageForm';

const FactionEditPage = (): ReactElement | null => {
  const [faction, setFaction] = useState<IFaction | null>(null);

  const navigate = useNavigate();
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
        navigate(FACTIONS_ROUTE);
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  const handleSubmit = (faction: IFaction) => {
    if (!id) return;

    updateFaction(id, { faction })
      .then(() => {
        navigate(generatePath(FACTION_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        navigate(generatePath(FACTION_ROUTE, { id }));
      });
  };

  const handleImageUpload = (data: FormData | undefined) => {
    if (!data || !id) return;
              
    uploadFactionImage(id, data)
      .then(() => {
        navigate(generatePath(FACTION_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>Edit Faction</h1>
        <Link to={generatePath(FACTION_ROUTE, { id })}>
          Back
        </Link>
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
