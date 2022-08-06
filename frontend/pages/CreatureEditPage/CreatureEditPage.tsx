import React, { ReactElement, useEffect, useState } from 'react';
import { AssociatedActionsForm } from '../../components/AssociatedActionsForm';
import { AssociatedFactionsForm } from '../../components/AssociatedFactionsForm';
import { AssociatedCreatureFeaturesForm } from '../../components/AssociatedCreatureFeaturesForm';
import { AssociatedLairActionsForm } from '../../components/AssociatedLairActionsForm';
import { AssociatedLegendaryActionsForm } from '../../components/AssociatedLegendaryActionsForm';
import { AssociatedMagicItemsForm } from '../../components/AssociatedMagicItemsForm';
import { AssociatedRegionalEffectsForm } from '../../components/AssociatedRegionalEffectsForm';
import { AssociatedSpellsForm } from '../../components/AssociatedSpellsForm';
import {
  CREATURE_ROUTE,
  CREATURES_ROUTE
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
  useNavigate,
  useParams
} from 'react-router-dom';
import { getFactions } from '../../utilities/Api/Factions';
import { getMagicItems } from '../../utilities/Api/MagicItems';
import { getSpells } from '../../utilities/Api/Spells';
import {
  ICreature,
  ICreatureAction,
  ICreatureFeature,
  ICreatureLairAction,
  ICreatureLegendaryAction,
  ICreatureRegionalEffect,
  IFaction,
  IMagicItem,
  ISpell
} from '../../types/models';
import { ImageForm } from '../../components/ImageForm';
import { Modal } from '../../components/Modal';

interface ICreatureEditPageContentState {
  creature: ICreature | null,
  factions: IFaction[],
  magicItems: IMagicItem[],
  spells: ISpell[]
}

const CreatureEditPage = (): ReactElement | null => {
  const [actionsModalOpen, setActionsModalOpen] = useState(false);
  const [factionsModalOpen, setFactionsModalOpen] = useState(false);
  const [featuresModalOpen, setFeaturesModalOpen] = useState(false);
  const [lairActionsModalOpen, setLairActionsModalOpen] = useState(false);
  const [legendaryActionsModalOpen, setLegendaryActionsModalOpen] = useState(false);
  const [magicItemsModalOpen, setMagicItemsModalOpen] = useState(false);
  const [regionalEffectsModalOpen, setRegionalEffectsModalOpen] = useState(false);
  const [spellsModalOpen, setSpellsModalOpen] = useState(false);
  const [state, setState] = useState<ICreatureEditPageContentState>({
    creature: null,
    factions: [] as IFaction[],
    magicItems: [] as IMagicItem[],
    spells: [] as ISpell[]
  });

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      Promise.all([
        getCreature(params.id),
        getFactions(),
        getMagicItems(),
        getSpells()
      ]).then(([
        creatureData,
        factionData,
        magicItemsData,
        spellsData
      ]) => {
        setState({
          creature: creatureData.creature,
          factions: factionData.factions,
          magicItems: magicItemsData.magicItems,
          spells: spellsData.spells
        });
      });
    }
  }, []);

  const { creature, factions, magicItems, spells } = state;

  if (!creature) return null;

  const { id, imageUrl, name } = creature;

  const handleDelete = () => {
    if (!id) return;

    destroyCreature(id)
      .then(() => {
        navigate(CREATURES_ROUTE);
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  const handleSubmit = (creature: ICreature) => {
    if (!id) return;

    updateCreature(id, { creature })
      .then(() => {
        navigate(generatePath(CREATURE_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        navigate(generatePath(CREATURE_ROUTE, { id }));
      });
  };

  const handleImageUpload = (data: FormData | undefined) => {
    if (!data || !id) return;
              
    uploadCreatureImage(id, data)
      .then(() => {
        location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const getActionsModal = (): ReactElement | null => {
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

  const getFactionsModal = (): ReactElement | null => {
    if (!factionsModalOpen || !creature) return null;

    return (
      <Modal
        onCloseModal={() => setFactionsModalOpen(false)}
        onCloseModalOverlay={() => setFactionsModalOpen(false)}>
        <AssociatedFactionsForm
          buttonLabel="Update Factions"
          factionIds={(creature.factions || []).map(faction => String(faction.id))}
          factions={factions}
          handleSubmit={(factionIds: string[]) => handleSubmit({ ...creature, factionIds })}/>
      </Modal>
    );
  };

  const getFeaturesModal = (): ReactElement | null => {
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

  const getLairActionsModal = (): ReactElement | null => {
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

  const getLegendaryActionsModal = (): ReactElement | null => {
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

  const getMagicItemsModal = (): ReactElement | null => {
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

  const getRegionalEffectsModal = (): ReactElement | null => {
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

  const getSpellsModal = (): ReactElement | null => {
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
      <div className="layout">
        <div className="full">
          <Link to={generatePath(CREATURE_ROUTE, { id })}>
            Back
          </Link>
          <DeleteButton
            buttonText="Delete Creature"
            handleDelete={handleDelete}/>
          <h1>Creature Settings - {name}</h1>
          <h2>Creature Image</h2>
          <ImageForm
            buttonLabel="Upload Image"
            imageUrl={imageUrl}
            inputName="creature-image-file-upload"
            handleSubmit={handleImageUpload}
          />
          <div>
            <button onClick={() => setActionsModalOpen(true)}>Manage Actions</button>
            <button onClick={() => setFeaturesModalOpen(true)}>Manage Features</button>
            <button onClick={() => setLegendaryActionsModalOpen(true)}>Manage Legendary Actions</button>
            <button onClick={() => setLairActionsModalOpen(true)}>Manage Lair Actions</button>
            <button onClick={() => setRegionalEffectsModalOpen(true)}>Manage Regional Effects</button>
            <button onClick={() => setSpellsModalOpen(true)}>Manage Spells</button>
            <button onClick={() => setMagicItemsModalOpen(true)}>Manage Magic Items</button>
            <button onClick={() => setFactionsModalOpen(true)}>Manage Factions</button>
          </div>
          <CreatureForm
            creature={creature}
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Update Creature"
          />
        </div>
      </div>
      {getActionsModal()}
      {getFactionsModal()}
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
