import React, { ReactNode, useState } from 'react';
import { AssociatedActionsForm } from '../../components/AssociatedActionsForm';
import { AssociatedCreatureFeaturesForm } from '../../components/AssociatedCreatureFeaturesForm';
import { AssociatedLairActionsForm } from '../../components/AssociatedLairActionsForm';
import { AssociatedLegendaryActionsForm } from '../../components/AssociatedLegendaryActionsForm';
import { AssociatedMagicItemsForm } from '../../components/AssociatedMagicItemsForm';
import { AssociatedRegionalEffectsForm } from '../../components/AssociatedRegionalEffectsForm';
import { AssociatedSpellsForm } from '../../components/AssociatedSpellsForm';
import {
  CREATURE_ROUTE,
  CREATURES_ROUTE,
  LOGIN_ROUTE
} from '../../app';
import { CreatureForm } from '../../components/CreatureForm/CreatureForm';
import { DeleteButton } from '../../components/DeleteButton';
import {
  destroyCreature,
  getCreature,
  updateCreature,
  uploadCreatureImage
} from '../../utilities/Api/Creatures';
import {
  generatePath,
  Link,
  Navigate,
  useNavigate,
  useParams
} from 'react-router-dom';
import { getMagicItems } from '../../utilities/Api/MagicItems';
import { getSpells } from '../../utilities/Api/Spells';
import {
  ICreature,
  ICreatureAction,
  ICreatureFeature,
  ICreatureLairAction,
  ICreatureLegendaryAction,
  ICreatureRegionalEffect
} from '../../types/models';
import { ImageForm } from '../../components/ImageForm';
import { Modal } from '../../components/Modal';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useMutation, useQueries } from '@tanstack/react-query';

const CreatureEditPage = (): ReactNode => {
  const [actionsModalOpen, setActionsModalOpen] = useState(false);
  const [featuresModalOpen, setFeaturesModalOpen] = useState(false);
  const [lairActionsModalOpen, setLairActionsModalOpen] = useState(false);
  const [legendaryActionsModalOpen, setLegendaryActionsModalOpen] = useState(false);
  const [magicItemsModalOpen, setMagicItemsModalOpen] = useState(false);
  const [regionalEffectsModalOpen, setRegionalEffectsModalOpen] = useState(false);
  const [spellsModalOpen, setSpellsModalOpen] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const authQuery = useAuth();

  const results = useQueries({
    queries: [
      {
        queryKey: ['character'],
        queryFn: async ()=> getCreature(params.id ?? '')
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

  const destroyCreatureMutation = useMutation({
    mutationFn: async (id: string) => destroyCreature(id),
    onError: (error) => {
      console.error('Error:', error);
      location.reload();
    },
    onSuccess: () => {
      navigate(CREATURES_ROUTE);
    }
  });

  interface UpdateCreatureMutationRequest {
    creature: ICreature;
    id: string;
  }

  const updateCreatureMutation = useMutation({
    mutationFn: async ({creature, id}: UpdateCreatureMutationRequest) => updateCreature(id, { creature }),
    onError: (error) => {
      console.error('Error:', error);
      navigate(generatePath(CREATURE_ROUTE, { id: params.id ?? '' }));
    },
    onSuccess: () => {
      navigate(generatePath(CREATURE_ROUTE, { id: params.id ?? '' }));
    }
  });

  interface UploadCreatureImageMutationRequest {
    data: FormData;
    id: string;
  }

  const uploadCreatureImageMutation = useMutation({
    mutationFn: async({data, id}: UploadCreatureImageMutationRequest) => uploadCreatureImage(id, data),
    onError(error) {
      console.error('Error:', error);
    },
    onSuccess: () => {
      location.reload();
    }
  });

  const [
    creatureResults,
    magicItemsResults,
    spellsResults
  ] = results;

  if (
    authQuery.isLoading ||
    creatureResults.isLoading || creatureResults.isError ||
    magicItemsResults.isLoading || magicItemsResults.isError ||
    spellsResults.isLoading || spellsResults.isError
  ) return null;

  const creature = creatureResults.data?.creature;
  const magicItems = magicItemsResults.data?.magicItems ?? [];
  const spells = spellsResults.data?.spells ?? [];

  if (!authQuery.isSuccess) return <Navigate replace to={LOGIN_ROUTE} />;

  if (!creature) return null;

  const { id, imageUrl, name } = creature;

  const handleDelete = () => {
    if (!id) return;
    destroyCreatureMutation.mutate(id);
  };

  const handleSubmit = (creature: ICreature) => {
    if (!id) return;
    updateCreatureMutation.mutate({ creature, id });
  };

  const handleImageUpload = (data: FormData | undefined) => {
    if (!data || !id) return;
    uploadCreatureImageMutation.mutate({ data, id });
  };

  const getActionsModal = (): ReactNode => {
    if (!actionsModalOpen || !creature) return null;

    return (
      <Modal
        onCloseModal={() => setActionsModalOpen(false)}
        onCloseModalOverlay={() => setActionsModalOpen(false)}>
        <AssociatedActionsForm
          buttonLabel="Update Actions"
          creature={creature}
          handleSubmit={(creatureActions: ICreatureAction[]) => {
            handleSubmit({ ...creature, creatureActions });
          }}/>
      </Modal>
    );
  };

  const getFeaturesModal = (): ReactNode => {
    if (!featuresModalOpen || !creature) return null;

    return (
      <Modal
        onCloseModal={() => setFeaturesModalOpen(false)}
        onCloseModalOverlay={() => setFeaturesModalOpen(false)}>
        <AssociatedCreatureFeaturesForm
          buttonLabel="Update Features"
          creature={creature}
          handleSubmit={(creatureFeatures: ICreatureFeature[]) => {
            handleSubmit({ ...creature, creatureFeatures });
          }}/>
      </Modal>
    );
  };

  const getLairActionsModal = (): ReactNode => {
    if (!lairActionsModalOpen || !creature) return null;

    return (
      <Modal
        onCloseModal={() => setLairActionsModalOpen(false)}
        onCloseModalOverlay={() => setLairActionsModalOpen(false)}>
        <AssociatedLairActionsForm
          buttonLabel="Update Lair Actions"
          creature={creature}
          handleSubmit={(lairActionsText: string, creatureLairActions: ICreatureLairAction[]) => {
            handleSubmit({ ...creature, creatureLairActions, lairActionsText });
          }}/>
      </Modal>
    );
  };

  const getLegendaryActionsModal = (): ReactNode => {
    if (!legendaryActionsModalOpen || !creature) return null;

    return (
      <Modal
        onCloseModal={() => setLegendaryActionsModalOpen(false)}
        onCloseModalOverlay={() => setLegendaryActionsModalOpen(false)}>
        <AssociatedLegendaryActionsForm
          buttonLabel="Update Legendary Actions"
          creature={creature}
          handleSubmit={(legendaryActionsText: string, creatureLegendaryActions: ICreatureLegendaryAction[]) => {
            handleSubmit({ ...creature, creatureLegendaryActions, legendaryActionsText });
          }}/>
      </Modal>
    );
  };

  const getMagicItemsModal = (): ReactNode => {
    if (!magicItemsModalOpen || !creature) return null;

    return (
      <Modal
        onCloseModal={() => setMagicItemsModalOpen(false)}
        onCloseModalOverlay={() => setMagicItemsModalOpen(false)}>
        <AssociatedMagicItemsForm
          buttonLabel="Update Magic Items"
          handleSubmit={(magicItemIds: string[]) => handleSubmit({ ...creature, magicItemIds })}
          magicItemIds={(creature.magicItems || []).map(magicItem => String(magicItem.id))}
          magicItems={magicItems}/>
      </Modal>
    );
  };

  const getRegionalEffectsModal = (): ReactNode => {
    if (!regionalEffectsModalOpen || !creature) return null;

    return (
      <Modal
        onCloseModal={() => setRegionalEffectsModalOpen(false)}
        onCloseModalOverlay={() => setRegionalEffectsModalOpen(false)}>
        <AssociatedRegionalEffectsForm
          buttonLabel="Update Regional Effects"
          creature={creature}
          handleSubmit={(regionalEffectsText: string, creatureRegionalEffects: ICreatureRegionalEffect[]) => {
            handleSubmit({ ...creature, creatureRegionalEffects, regionalEffectsText });
          }}/>
      </Modal>
    );
  };

  const getSpellsModal = (): ReactNode => {
    if (!spellsModalOpen || !creature) return null;

    return (
      <Modal
        onCloseModal={() => setSpellsModalOpen(false)}
        onCloseModalOverlay={() => setSpellsModalOpen(false)}>
        <AssociatedSpellsForm
          buttonLabel="Update Spells"
          handleSubmit={(spellIds: string[]) => handleSubmit({ ...creature, spellIds })}
          spellIds={(creature.spells || []).map(spell => String(spell.id))}
          spells={spells}/>
      </Modal>
    );
  };

  return (
    <>
      <Navbar authenticated={authQuery.isSuccess}/>
      <div className="layout">
        <div className="full">
          <Link to={generatePath(CREATURE_ROUTE, { id: id as string })}>
            Back
          </Link>
          <h1>Creature Settings - {name}</h1>
          <DeleteButton
            buttonText="Delete Creature"
            handleDelete={handleDelete}/>
          <h2>Creature Image</h2>
          <ImageForm
            buttonLabel="Upload Image"
            imageUrl={imageUrl}
            inputName="creature-image-file-upload"
            handleSubmit={handleImageUpload}
          />
          <h2>Associations</h2>
          <div>
            <button className="button" onClick={() => setActionsModalOpen(true)}>Actions</button>
            <button className="button" onClick={() => setFeaturesModalOpen(true)}>Features</button>
            <button className="button" onClick={() => setLegendaryActionsModalOpen(true)}>Legendary Actions</button>
            <button className="button" onClick={() => setLairActionsModalOpen(true)}>Lair Actions</button>
            <button className="button" onClick={() => setRegionalEffectsModalOpen(true)}>Regional Effects</button>
            <button className="button" onClick={() => setSpellsModalOpen(true)}>Spells</button>
            <button className="button" onClick={() => setMagicItemsModalOpen(true)}>Magic Items</button>
          </div>
          <CreatureForm
            creature={creature}
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Update Creature"
          />
        </div>
      </div>
      {getActionsModal()}
      {getFeaturesModal()}
      {getLairActionsModal()}
      {getLegendaryActionsModal()}
      {getMagicItemsModal()}
      {getRegionalEffectsModal()}
      {getSpellsModal()}
    </>
  );
};

export { CreatureEditPage };
