import React, { ReactNode, useState } from 'react';
import { AssociatedAttacksForm } from '../../components/AssociatedAttacksForm';
import { AssociatedCharacterFeaturesForm } from '../../components/AssociatedCharacterFeaturesForm';
import { AssociatedCreaturesForm } from '../../components/AssociatedCreaturesForm';
import { AssociatedFeatureResourcesForm } from '../../components/AssociatedFeatureResourcesForm';
import { AssociatedInventoryForm } from '../../components/AssociatedInventoryForm';
import { AssociatedMagicItemsForm } from '../../components/AssociatedMagicItemsForm';
import { AssociatedSpellsForm } from '../../components/AssociatedSpellsForm';
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
import {
  ICharacter,
  ICharacterAttack,
  ICharacterFeature,
  ICharacterFeatureResource,
  ICharacterItem,
} from '../../types/models';
import { ImageForm } from '../../components/ImageForm';
import { Modal } from '../../components/Modal';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useMutation, useQueries } from '@tanstack/react-query';

const CharacterEditPage = (): ReactNode => {
  const [attacksModalOpen, setAttacksModalOpen] = useState(false);
  const [creaturesModalOpen, setCreaturesModalOpen] = useState(false);
  const [featuresModalOpen, setFeaturesModalOpen] = useState(false);
  const [featureResourcesModalOpen, setFeatureResourcesModalOpen] = useState(false);
  const [inventoryModalOpen, setInventoryModalOpen] = useState(false);
  const [magicItemsModalOpen, setMagicItemsModalOpen] = useState(false);
  const [spellsModalOpen, setSpellsModalOpen] = useState(false);
  
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

  const getAttacksModal = (): ReactNode => {
    if (!attacksModalOpen || !character) return null;

    return (
      <Modal
        onCloseModal={() => setAttacksModalOpen(false)}
        onCloseModalOverlay={() => setAttacksModalOpen(false)}>
        <AssociatedAttacksForm
          buttonLabel="Update Attacks"
          character={character}
          handleSubmit={(characterAttacks: ICharacterAttack[]) => handleSubmit({ ...character, characterAttacks })}/>
      </Modal>
    );
  };

  const getCreaturesModal = (): ReactNode => {
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

  const getFeaturesModal = (): ReactNode => {
    if (!featuresModalOpen || !character) return null;

    return (
      <Modal
        onCloseModal={() => setFeaturesModalOpen(false)}
        onCloseModalOverlay={() => setFeaturesModalOpen(false)}>
        <AssociatedCharacterFeaturesForm
          buttonLabel="Update Features"
          character={character}
          handleSubmit={(characterFeatures: ICharacterFeature[]) => handleSubmit({ ...character, characterFeatures })}/>
      </Modal>
    );
  };

  const getFeatureResourcesModal = (): ReactNode => {
    if (!featureResourcesModalOpen || !character) return null;

    return (
      <Modal
        onCloseModal={() => setFeatureResourcesModalOpen(false)}
        onCloseModalOverlay={() => setFeatureResourcesModalOpen(false)}>
        <AssociatedFeatureResourcesForm
          buttonLabel="Update Feature Resources"
          character={character}
          handleSubmit={(characterFeatureResources: ICharacterFeatureResource[]) => handleSubmit({ ...character, characterFeatureResources })}/>
      </Modal>
    );
  };

  const getInventoryModal = (): ReactNode => {
    if (!inventoryModalOpen || !character) return null;

    return (
      <Modal
        onCloseModal={() => setInventoryModalOpen(false)}
        onCloseModalOverlay={() => setInventoryModalOpen(false)}>
        <AssociatedInventoryForm
          buttonLabel="Update Inventory"
          character={character}
          handleSubmit={(characterItems: ICharacterItem[]) => handleSubmit({ ...character, characterItems })}/>
      </Modal>
    );
  };

  const getMagicItemsModal = (): ReactNode => {
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

  const getSpellsModal = (): ReactNode => {
    if (!spellsModalOpen || !character) return null;

    return (
      <Modal
        onCloseModal={() => setSpellsModalOpen(false)}
        onCloseModalOverlay={() => setSpellsModalOpen(false)}>
        <AssociatedSpellsForm
          buttonLabel="Update Spells"
          handleSubmit={(spellIds: string[]) => handleSubmit({ ...character, spellIds })}
          spellIds={(character.spells || []).map(spell => String(spell.id))}
          spells={spells}/>
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
          <h1>Character Settings - {name}</h1>
          <DeleteButton
            buttonText="Delete Character"
            handleDelete={handleDelete}/>
          <h2>Character Image</h2>
          <ImageForm
            buttonLabel="Upload Image"
            imageUrl={imageUrl}
            inputName="character-image-file-upload"
            handleSubmit={handleImageUpload}
          />
          <h2>Character Associations</h2>
          <div>
            <button className="button" onClick={() => setAttacksModalOpen(true)}>Attacks</button>
            <button className="button" onClick={() => setFeaturesModalOpen(true)}>Features</button>
            <button className="button" onClick={() => setFeatureResourcesModalOpen(true)}>Feature Resources</button>
            <button className="button" onClick={() => setInventoryModalOpen(true)}>Inventory</button>
            <button className="button" onClick={() => setCreaturesModalOpen(true)}>Creatures</button>
            <button className="button" onClick={() => setSpellsModalOpen(true)}>Spells</button>
            <button className="button" onClick={() => setMagicItemsModalOpen(true)}>Magic Items</button>
          </div>
          <CharacterForm
            character={character}
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Update Character"
          />
        </div>
      </div>
      {getAttacksModal()}
      {getCreaturesModal()}
      {getFeaturesModal()}
      {getFeatureResourcesModal()}
      {getInventoryModal()}
      {getMagicItemsModal()}
      {getSpellsModal()}
    </>
  );
};

export { CharacterEditPage };
