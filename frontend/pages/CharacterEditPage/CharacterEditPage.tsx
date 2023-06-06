import React, { FC, useState } from 'react';
import { AssociatedCreaturesForm } from '../../components/AssociatedCreaturesForm';
import { AssociatedMagicItemsForm } from '../../components/AssociatedMagicItemsForm';
import {
  CHARACTER_ROUTE,
  CHARACTERS_ROUTE,
  LOGIN_ROUTE
} from '../../app';
import { DeleteButton } from '../../components/DeleteButton';
import {
  destroyCharacter,
  getCharacter,
  updateCharacter,
  uploadCharacterImage
} from '../../utilities/Api/Characters';
import {
  generatePath,
  Link,
  Navigate,
  useNavigate,
  useParams
} from 'react-router-dom';
import { getCreatures } from '../../utilities/Api/Creatures';
import { getMagicItems } from '../../utilities/Api/MagicItems';
import { getSpells } from '../../utilities/Api/Spells';
import { CharacterForm } from '../../components/CharacterForm/';
import { ICharacter } from '../../types/models';
import { ImageForm } from '../../components/ImageForm';
import { Modal } from '../../components/Modal';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useMutation, useQueries } from '@tanstack/react-query';

const CharacterEditPage: FC = () => {
  const [creaturesModalOpen, setCreaturesModalOpen] = useState(false);
  const [magicItemsModalOpen, setMagicItemsModalOpen] = useState(false);
  
  const params = useParams();
  const navigate = useNavigate();
  
  const authQuery = useAuth();

  const results = useQueries({
    queries: [
      {
        queryKey: ['character'],
        queryFn: async ()=> getCharacter(params.id ?? '')
      },
      {
        queryKey: ['creatures'],
        queryFn: getCreatures
      },
      {
        queryKey: ['magic-items'],
        queryFn: getMagicItems
      },
      {
        queryKey: ['spells'],
        queryFn: getSpells
      }
    ]
  });

  const destroyCharacterMutation = useMutation({
    mutationFn: async (id: string) => destroyCharacter(id),
    onError: (error) => {
      console.error('Error:', error);
      location.reload();
    },
    onSuccess: () => {
      navigate(CHARACTERS_ROUTE);
    }
  });

  interface UpdateCharacterMutationRequest {
    character: ICharacter;
    id: string;
  }

  const updateCharacterMutation = useMutation({
    mutationFn: async ({character, id}: UpdateCharacterMutationRequest) => updateCharacter(id, { character }),
    onError: (error) => {
      console.error('Error:', error);
      navigate(generatePath(CHARACTER_ROUTE, { id: params.id ?? '' }));
    },
    onSuccess: () => {
      navigate(generatePath(CHARACTER_ROUTE, { id: params.id ?? '' }));
    }
  });

  interface UploadCharacterImageMutationRequest {
    data: FormData;
    id: string;
  }

  const uploadCharacterImageMutation = useMutation({
    mutationFn: async({data, id}: UploadCharacterImageMutationRequest) => uploadCharacterImage(id, data),
    onError(error) {
      console.error('Error:', error);
    },
    onSuccess: () => {
      location.reload();
    }
  });

  const [
    characterResults,
    creaturesResults,
    magicItemsResults,
    spellsResults
  ] = results;

  if (
    authQuery.isLoading ||
    characterResults.isLoading || characterResults.isError ||
    creaturesResults.isLoading || creaturesResults.isError ||
    magicItemsResults.isLoading || magicItemsResults.isError ||
    spellsResults.isLoading || spellsResults.isError
  ) return null;

  const character = characterResults.data.character;
  const creatures = creaturesResults.data.creatures;
  const magicItems = magicItemsResults.data.magicItems;
  const spells = spellsResults.data.spells;

  if (!authQuery.isSuccess) return <Navigate replace to={LOGIN_ROUTE} />;

  const { id, imageUrl, name } = character;

  const handleDelete = () => {
    if (!id) return;
    destroyCharacterMutation.mutate(id);
  }

  const handleSubmit = (character: ICharacter) => {
    if (!id) return;
    updateCharacterMutation.mutate({ character, id });
  }

  const handleImageUpload = (data: FormData | undefined) => {
    if (!data || !id) return;
    uploadCharacterImageMutation.mutate({ data, id });
  };

  const getCreaturesModal = () => {
    if (!creaturesModalOpen || !character) return null;

    return (
      <Modal
        onCloseModal={() => setCreaturesModalOpen(false)}
        onCloseModalOverlay={() => setCreaturesModalOpen(false)}>
        <AssociatedCreaturesForm
          buttonLabel="Update Creatures"
          creatures={creatures}
          creatureIds={(character.creatures || []).map(creature => String(creature.id))}
          handleSubmit={(creatureIds: string[]) => handleSubmit({ ...character, creatureIds })}/>
      </Modal>
    );
  };

  const getMagicItemsModal = () => {
    if (!magicItemsModalOpen || !character) return null;

    return (
      <Modal
        onCloseModal={() => setMagicItemsModalOpen(false)}
        onCloseModalOverlay={() => setMagicItemsModalOpen(false)}>
        <AssociatedMagicItemsForm
          buttonLabel="Update Magic Items"
          handleSubmit={(magicItemIds: string[]) => handleSubmit({ ...character, magicItemIds })}
          magicItemIds={(character.magicItems || []).map(magicItem => String(magicItem.id))}
          magicItems={magicItems}/>
      </Modal>
    );
  };

  return (
    <>
      <Navbar authenticated={authQuery.isSuccess}/>
      <div className="layout">
        <div className="full">
          <Link to={generatePath(CHARACTER_ROUTE, { id: id as string })}>
            Back
          </Link>
          <h2>Character Settings - {name}</h2>
          <DeleteButton
            buttonText="Delete Character"
            handleDelete={handleDelete}/>
          <h3>Character Image</h3>
          <ImageForm
            buttonLabel="Upload Image"
            imageUrl={imageUrl}
            inputName="character-image-file-upload"
            handleSubmit={handleImageUpload}
          />
          <h3>Character Associations</h3>
          <div>
            <button className="button" onClick={() => setCreaturesModalOpen(true)}>Creatures</button>
            <button className="button" onClick={() => setMagicItemsModalOpen(true)}>Magic Items</button>
          </div>
          <CharacterForm
            character={character}
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Update Character"
            spells={spells}
          />
        </div>
      </div>
      {getCreaturesModal()}
      {getMagicItemsModal()}
    </>
  );
};

export { CharacterEditPage };
