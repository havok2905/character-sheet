import React, { ReactElement, useEffect, useState } from 'react';
import { AssociatedAttacksForm } from '../../components/AssociatedAttacksForm';
import { AssociatedCharacterFeaturesForm } from '../../components/AssociatedCharacterFeaturesForm';
import { AssociatedCreaturesForm } from '../../components/AssociatedCreaturesForm';
import { AssociatedFactionsForm } from '../../components/AssociatedFactionsForm';
import { AssociatedFeatureResourcesForm } from '../../components/AssociatedFeatureResourcesForm';
import { AssociatedInventoryForm } from '../../components/AssociatedInventoryForm';
import { AssociatedMagicItemsForm } from '../../components/AssociatedMagicItemsForm';
import { AssociatedSpellsForm } from '../../components/AssociatedSpellsForm';
import { destroyCharacter, getCharacter, updateCharacter, uploadCharacterImage } from "../../utilities/Api/Characters";
import { getCreatures } from '../../utilities/Api/Creatures';
import { getFactions } from '../../utilities/Api/Factions';
import { getMagicItems } from '../../utilities/Api/MagicItems';
import { getSpells } from '../../utilities/Api/Spells';
import { CharacterForm } from "../../components/CharacterForm/";
import {
  ICharacter,
  ICharacterAttack,
  ICharacterFeature,
  ICharacterFeatureResource,
  ICharacterItem,
  ICreature,
  IFaction,
  IMagicItem,
  ISpell
} from "../../types/models";
import { ImageForm } from '../../components/ImageForm';
import { Layout } from '../../layouts/Layout';
import { Modal } from '../../components/Modal';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

interface ICharacterEditPageContentState {
  character: ICharacter | null;
  creatures: ICreature[];
  factions: IFaction[];
  magicItems: IMagicItem[];
  spells: ISpell[];
}

const CharacterEditPage = (): ReactElement | null => {
  const [attacksModalOpen, setAttacksModalOpen] = useState(false);
  const [creaturesModalOpen, setCreaturesModalOpen] = useState(false);
  const [factionsModalOpen, setFactionsModalOpen] = useState(false);
  const [featuresModalOpen, setFeaturesModalOpen] = useState(false);
  const [featureResourcesModalOpen, setFeatureResourcesModalOpen] = useState(false);
  const [inventoryModalOpen, setInventoryModalOpen] = useState(false);
  const [magicItemsModalOpen, setMagicItemsModalOpen] = useState(false);
  const [spellsModalOpen, setSpellsModalOpen] = useState(false);
  const [state, setState] = useState<ICharacterEditPageContentState>({
    character: null,
    creatures: [] as ICreature[],
    factions: [] as IFaction[],
    magicItems: [] as IMagicItem[],
    spells: [] as ISpell[]
  });

  useEffect(() => {
    const id = getIdFromUrl();

    Promise.all([
      getCharacter(id),
      getCreatures(),
      getFactions(),
      getMagicItems(),
      getSpells()
    ]).then(([
      characterData,
      creatureData,
      factionData,
      magicItemsData,
      spellsData
    ]) => {
      setState({
        character: characterData.character,
        creatures: creatureData.creatures,
        factions: factionData.factions,
        magicItems: magicItemsData.magicItems,
        spells: spellsData.spells
      });
    });
  }, []);

  const { character, creatures, factions, magicItems, spells } = state;

  if (!character) return null;

  const { id, imageUrl, name } = character;

  const handleDelete = e => {
    e.preventDefault();

    if (!id) return;

    destroyCharacter(id)
      .then(() => {
        window.location.href = `/characters/`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/characters/${id}/edit/`;
      });
  };

  const handleSubmit = (character: ICharacter) => {
    if (!id) return;

    updateCharacter(id, { character })
      .then(() => {
        window.location.href = `/characters/${id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/characters/${id}`;
      });
  };

  const handleImageUpload = (data: FormData | undefined) => {
    if (!data || !id) return;
              
    uploadCharacterImage(id, data)
      .then(() => {
        window.location.href = `/characters/${id}/edit`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const getAttacksModal = (): ReactElement | null => {
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

  const getCreaturesModal = (): ReactElement | null => {
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

  const getFactionsModal = (): ReactElement | null => {
    if (!factionsModalOpen || !character) return null;

    return (
      <Modal
        onCloseModal={() => setFactionsModalOpen(false)}
        onCloseModalOverlay={() => setFactionsModalOpen(false)}>
        <AssociatedFactionsForm
          buttonLabel="Update Factions"
          factionIds={(character.factions || []).map(faction => String(faction.id))}
          factions={factions}
          handleSubmit={(factionIds: string[]) => handleSubmit({ ...character, factionIds })}/>
      </Modal>
    );
  };

  const getFeaturesModal = (): ReactElement | null => {
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

  const getFeatureResourcesModal = (): ReactElement | null => {
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

  const getInventoryModal = (): ReactElement | null => {
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

  const getMagicItemsModal = (): ReactElement | null => {
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

  const getSpellsModal = (): ReactElement | null => {
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
    <Layout>
      <div className="layout">
        <div className="full">
          <a href={`/characters/${id}`}>
            Back
          </a>
          <button onClick={handleDelete}>
            Delete
          </button>
          <h1>Character Settings - {name}</h1>
          <h2>Character Image</h2>
          <ImageForm
            buttonLabel="Upload Image"
            imageClassName="token"
            imageUrl={imageUrl}
            inputName="character-image-file-upload"
            handleSubmit={handleImageUpload}
          />
          <div>
            <button onClick={() => setAttacksModalOpen(true)}>Attacks</button>
            <button onClick={() => setFeaturesModalOpen(true)}>Features</button>
            <button onClick={() => setFeatureResourcesModalOpen(true)}>Feature Resources</button>
            <button onClick={() => setInventoryModalOpen(true)}>Inventory</button>
            <button onClick={() => setCreaturesModalOpen(true)}>Creatures</button>
            <button onClick={() => setSpellsModalOpen(true)}>Spells</button>
            <button onClick={() => setMagicItemsModalOpen(true)}>Magic Items</button>
            <button onClick={() => setFactionsModalOpen(true)}>Factions</button>
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
      {getFactionsModal()}
      {getFeaturesModal()}
      {getFeatureResourcesModal()}
      {getInventoryModal()}
      {getMagicItemsModal()}
      {getSpellsModal()}
    </Layout>
  );
};

export { CharacterEditPage };
