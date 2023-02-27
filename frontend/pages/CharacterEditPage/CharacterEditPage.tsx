import React, { ReactElement, useState } from 'react';
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
  ICreature,
  IMagicItem,
  ISpell
} from '../../types/models';
import { ImageForm } from '../../components/ImageForm';
import { Modal } from '../../components/Modal';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';

interface ICharacterEditPageContentState {
  character: ICharacter | null;
  creatures: ICreature[];
  magicItems: IMagicItem[];
  spells: ISpell[];
}

const CharacterEditPage = (): ReactElement | null => {
  const [attacksModalOpen, setAttacksModalOpen] = useState(false);
  const [creaturesModalOpen, setCreaturesModalOpen] = useState(false);
  const [featuresModalOpen, setFeaturesModalOpen] = useState(false);
  const [featureResourcesModalOpen, setFeatureResourcesModalOpen] = useState(false);
  const [inventoryModalOpen, setInventoryModalOpen] = useState(false);
  const [magicItemsModalOpen, setMagicItemsModalOpen] = useState(false);
  const [spellsModalOpen, setSpellsModalOpen] = useState(false);
  const [state, setState] = useState<ICharacterEditPageContentState>({
    character: null,
    creatures: [] as ICreature[],
    magicItems: [] as IMagicItem[],
    spells: [] as ISpell[]
  });

  const params = useParams();
  const navigate = useNavigate();
  
  const {authenticated, loading} = useAuth(() => {
    if (params.id) {
      Promise.all([
        getCharacter(params.id),
        getCreatures(),
        getMagicItems(),
        getSpells()
      ]).then(([
        characterData,
        creatureData,
        magicItemsData,
        spellsData
      ]) => {
        setState({
          character: characterData.character,
          creatures: creatureData.creatures,
          magicItems: magicItemsData.magicItems,
          spells: spellsData.spells
        });
      });
    }
  });

  const { character, creatures, magicItems, spells } = state;

  if (loading) return null;
  if (!authenticated) return <Navigate replace to={LOGIN_ROUTE} />;
  if (!character) return null;

  const { id, imageUrl, name } = character;

  const handleDelete = () => {
    if (!id) return;

    destroyCharacter(id)
      .then(() => {
        navigate(CHARACTERS_ROUTE);
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  const handleSubmit = (character: ICharacter) => {
    if (!id) return;

    updateCharacter(id, { character })
      .then(() => {
        navigate(generatePath(CHARACTER_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        navigate(generatePath(CHARACTER_ROUTE, { id }));
      });
  };

  const handleImageUpload = (data: FormData | undefined) => {
    if (!data || !id) return;
              
    uploadCharacterImage(id, data)
      .then(() => {
        location.reload();
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
    <>
      <Navbar authenticated={authenticated}/>
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
