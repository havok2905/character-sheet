import React, { FC, useState } from 'react';
import { AssociatedActionsForm } from '../../components/AssociatedActionsForm';
import { AssociatedCreatureFeaturesForm } from '../../components/AssociatedCreatureFeaturesForm';
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
import { getSpells } from '../../utilities/Api/Spells';
import {
  ICreature,
  ICreatureAction,
  ICreatureFeature,
  ICreatureLegendaryAction,
} from '../../types/models';
import { ImageForm } from '../../components/ImageForm';
import { Modal } from '../../components/Modal';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import {
  useMutation,
  useQueries,
  useQueryClient
} from '@tanstack/react-query';

const CreatureEditPage: FC = () => {
  const [actionsModalOpen, setActionsModalOpen] = useState(false);
  const [featuresModalOpen, setFeaturesModalOpen] = useState(false);
  const [spellsModalOpen, setSpellsModalOpen] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const authQuery = useAuth();

  const queryClient = useQueryClient();

  const results = useQueries({
    queries: [
      {
        queryKey: ['creature'],
        queryFn: async ()=> getCreature(params.id ?? '')
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
      queryClient.invalidateQueries({ queryKey: ['creature'] })
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
    spellsResults
  ] = results;

  if (
    authQuery.isLoading ||
    creatureResults.isLoading || creatureResults.isError ||
    spellsResults.isLoading || spellsResults.isError
  ) return null;

  const creature = creatureResults.data?.creature;
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

  const getActionsModal = () => {
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

  const getFeaturesModal = () => {
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

  const getSpellsModal = () => {
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
          <h2>Creature Settings - {name}</h2>
          <DeleteButton
            buttonText="Delete Creature"
            handleDelete={handleDelete}/>
          <h3>Creature Image</h3>
          <ImageForm
            buttonLabel="Upload Image"
            imageUrl={imageUrl}
            inputName="creature-image-file-upload"
            handleSubmit={handleImageUpload}
          />
          <h3>Associations</h3>
          <div>
            <button className="button" onClick={() => setActionsModalOpen(true)}>Actions</button>
            <button className="button" onClick={() => setFeaturesModalOpen(true)}>Features</button>
            <button className="button" onClick={() => setSpellsModalOpen(true)}>Spells</button>
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
      {getSpellsModal()}
    </>
  );
};

export { CreatureEditPage };
