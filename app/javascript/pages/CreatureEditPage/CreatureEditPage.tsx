import React, { ReactElement, useContext, useEffect, useReducer } from 'react';
import { AssociatedFactionsForm } from '../../components/AssociatedFactionsForm';
import { AssociatedMagicItemsForm } from '../../components/AssociatedMagicItemsForm';
import { AssociatedRegionalEffectsForm } from '../../components/AssociatedRegionalEffectsForm';
import classNames from 'classnames';
import { CreatureForm } from "../../components/CreatureForm/CreatureForm";
import { destroyCreature, getCreature, updateCreature, uploadCreatureImage } from "../../utilities/Api/Creatures";
import { getFactions } from '../../utilities/Api/Factions';
import { getMagicItems } from '../../utilities/Api/MagicItems';
import { getSpells } from '../../utilities/Api/Spells';
import { ICreature, IFaction, IMagicItem, ISpell } from "../../types/models";
import { ImageForm } from '../../components/ImageForm';
import { KnownSpellsForm } from '../../components/KnownSpellsForm/KnownSpellsForm';
import { ToastCollection, ToastCollectionContext, ToastCollectionContextProvider } from '../../components/ToastCollection';
import { ToastCollectionErrorTypes } from '../../types/toasts';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

enum CreatureEditPageContentTab {
  DEATILS = 'details',
  FACTIONS = 'factions',
  MAGIC_ITEMS = 'magic-items',
  REGIONAL_EFFECTS = 'regional-effects',
  SPELLS = 'spells'
}

enum CreatureEditPageContentActionType {
  INIT = 'init',
  SET_CREATURE = 'set-creature',
  SET_FACTIONS = 'set-factions',
  SET_MAGIC_ITEMS = 'set-magic-items',
  SET_SPELLS = 'set-spells',
  SET_TAB = 'set-tab'
}

type ICreatureEditPageContentAction = 
  | { type: CreatureEditPageContentActionType.INIT, payload: { creature: ICreature, factions: IFaction[], magicItems: IMagicItem[], spells: ISpell[] } }
  | { type: CreatureEditPageContentActionType.SET_CREATURE, payload: { creature: ICreature } }
  | { type: CreatureEditPageContentActionType.SET_FACTIONS, payload: { factions: IFaction[] } }
  | { type: CreatureEditPageContentActionType.SET_MAGIC_ITEMS, payload: { magicItems: IMagicItem[] } }
  | { type: CreatureEditPageContentActionType.SET_SPELLS, payload: { spells: ISpell[] } }
  | { type: CreatureEditPageContentActionType.SET_TAB, payload: { tab: CreatureEditPageContentTab } }

type ICreatureEditPageContentReducerState = {
  creature: ICreature | null;
  factions: IFaction[];
  magicItems: IMagicItem[];
  spells: ISpell[];
  tab: CreatureEditPageContentTab;
}

const reducer = (state: ICreatureEditPageContentReducerState, action: ICreatureEditPageContentAction) => {
  switch(action.type) {
    case CreatureEditPageContentActionType.INIT:
      return {
        ...state,
        creature: action.payload.creature,
        factions: action.payload.factions,
        magicItems: action.payload.magicItems,
        spells: action.payload.spells
      };
    case CreatureEditPageContentActionType.SET_CREATURE:
      return {
        ...state,
        creature: action.payload.creature
      };
    case CreatureEditPageContentActionType.SET_FACTIONS:
      return {
        ...state,
        factions: action.payload.factions
      };
    case CreatureEditPageContentActionType.SET_MAGIC_ITEMS:
      return {
        ...state,
        magicItems: action.payload.magicItems
      };
    case CreatureEditPageContentActionType.SET_SPELLS:
      return {
        ...state,
        spells: action.payload.spells
      };
    case CreatureEditPageContentActionType.SET_TAB:
      return {
        ...state,
        tab: action.payload.tab
      };
    default:
      return {
        ...state
      };
  }
};

const initialState: ICreatureEditPageContentReducerState = {
  creature: null,
  factions: [],
  magicItems: [],
  spells: [],
  tab: CreatureEditPageContentTab.DEATILS
};

const CreatureEditPageContent = (): ReactElement | null => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { add } = useContext(ToastCollectionContext);

  useEffect(() => {
    const id = getIdFromUrl();

    Promise.all([
      getCreature(id),
      getFactions(),
      getMagicItems(),
      getSpells()
    ]).then(([
      creatureData,
      factionData,
      magicItemsData,
      spellsData
    ]) => {
      dispatch({
        type: CreatureEditPageContentActionType.INIT,
        payload: {
          creature: creatureData.creature,
          factions: factionData.factions,
          magicItems: magicItemsData.magicItems,
          spells: spellsData.spells
        }
      });
    });
  }, []);

  const {
    creature,
    factions,
    magicItems,
    spells,
    tab
  } = state;

  const handleDelete = e => {
    e.preventDefault();

    if (!id) return;

    destroyCreature(id)
      .then(() => {
        window.location.href = `/creatures/`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/creatures/${id}/edit/`;
      });
  };

  const handleSubmit = (creature: ICreature) => {
    if (!id) return;

    updateCreature(id, { creature })
      .then(() => {
        window.location.href = `/creatures/${id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/creatures/${id}`;
      });
  };

  const handleImageUpload = (data: FormData | undefined) => {
    if (!data || !id) return;
              
    uploadCreatureImage(id, data)
      .then(data => {
        window.location.href = `/creatures/${data.creature.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleSpellsSubmit = (spellIds: string[]) => {
    if (!id || !creature) return;

    const updatedCreature = { ...creature, spellIds };

    updateCreature(id, { creature: updatedCreature })
      .then(data => {
        dispatch({
          type: CreatureEditPageContentActionType.SET_CREATURE,
          payload: { creature: data.creature }
        });
        add(ToastCollectionErrorTypes.INFO, "Successfully saved spells");
      })
      .catch(() => {
        add(ToastCollectionErrorTypes.ERROR, "There was in issue saving spells");
      });
  };

  const handleFactionsSubmit = (factionIds: string[]) => {
    if (!id || !creature) return;

    const updatedCreature = { ...creature, factionIds };

    updateCreature(id, { creature: updatedCreature })
      .then(data => {
        dispatch({
          type: CreatureEditPageContentActionType.SET_CREATURE,
          payload: { creature: data.creature }
        });
        add(ToastCollectionErrorTypes.INFO, "Successfully saved factions");
      })
      .catch(() => {
        add(ToastCollectionErrorTypes.ERROR, "There was in issue saving factions");
      });
  };

  const handleMagicItemsSubmit = (magicItemIds: string[]) => {
    if (!id || !creature) return;

    const updatedCreature = { ...creature, magicItemIds };

    updateCreature(id, { creature: updatedCreature })
      .then(data => {
        dispatch({
          type: CreatureEditPageContentActionType.SET_CREATURE,
          payload: { creature: data.creature }
        });
        add(ToastCollectionErrorTypes.INFO, "Successfully saved magic items");
      })
      .catch(() => {
        add(ToastCollectionErrorTypes.ERROR, "There was in issue saving magic items");
      });
  };

  if (!creature) return null;

  const { id, imageUrl, name } = creature;

  const getDetailsTabContent = (): ReactElement | null => {    
    return (
      <div style={{ display: tab === CreatureEditPageContentTab.DEATILS ? 'block': 'none'}}>
        <h2>Creature Details</h2>
        <CreatureForm
          creature={creature}
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Update Creature"
        />
      </div>
    );
  };

  const getFactionsTabContent = () => {
    const entityFactions = creature.factions ?? [];

    return (
      <div style={{ display: tab === CreatureEditPageContentTab.FACTIONS ? 'block': 'none'}}>
        <h2>Factions</h2>
        <AssociatedFactionsForm
          entityFactions={entityFactions}
          factions={factions}
          handleSubmit={handleFactionsSubmit}/>
      </div>
    );
  };

  const getMagicItemsTabContent = () => {
    const entityMagicItems = creature.magicItems ?? [];

    return (
      <div style={{ display: tab === CreatureEditPageContentTab.MAGIC_ITEMS ? 'block': 'none'}}>
        <h2>Magic Items</h2>
        <AssociatedMagicItemsForm
          entityMagicItems={entityMagicItems}
          handleSubmit={handleMagicItemsSubmit}
          magicItems={magicItems}/>
      </div>
    );
  };

  const getRegionalEffectsTabContent = () => {
    return (
      <div style={{ display: tab === CreatureEditPageContentTab.REGIONAL_EFFECTS ? 'block': 'none'}}>
        <h2>Regional Effects</h2>
        <AssociatedRegionalEffectsForm creature={creature} />
      </div>
    );
  };

  const getSpellsTabContent = () => {
    const entitySpells = creature.spells ?? [];

    return (
      <div style={{ display: tab === CreatureEditPageContentTab.SPELLS ? 'block': 'none'}}>
        <h2>Spells</h2>
        <KnownSpellsForm
          entitySpells={entitySpells}
          handleSubmit={handleSpellsSubmit}
          spells={spells}/>
      </div>
    );
  };

  const getTab = (tabItem: CreatureEditPageContentTab, label: string): ReactElement => {
    const classList = {
      'tab': true,
      'tab-selected': tabItem === tab
    };

    return (
      <a 
        className={classNames(classList)}
        onClick={() => {
          dispatch({
            type: CreatureEditPageContentActionType.SET_TAB,
            payload: { tab: tabItem }
          })
        }}
      >
        {label}
      </a>
    );
  };

  return (
    <>
      <div className="layout">
        <div className="full">
          <a className="button" href={`/creatures/${id}`}>
            Back
          </a>
          <button
            className="button button-destructive"
            onClick={handleDelete}>
            Delete
          </button>
          <h1>Creature Settings - {name}</h1>
          <h2>Creature Image</h2>
          <ImageForm
            buttonLabel="Upload Image"
            imageUrl={imageUrl}
            inputName="creature-image-file-upload"
            handleSubmit={handleImageUpload}
            labelText="Token Image"
          />
          <div className="tabs">
            {getTab(CreatureEditPageContentTab.DEATILS, 'Details')}
            <a className="tab">Features</a>
            <a className="tab">Actions</a>
            <a className="tab">Legendary Actions</a>
            <a className="tab">Lair Actions</a>
            {getTab(CreatureEditPageContentTab.REGIONAL_EFFECTS, 'Regional Effects')}
            {getTab(CreatureEditPageContentTab.MAGIC_ITEMS, 'Magic Items')}
            {getTab(CreatureEditPageContentTab.SPELLS, 'Spells')}
            {getTab(CreatureEditPageContentTab.FACTIONS, 'Factions')}
          </div>
          {getDetailsTabContent()}
          {getFactionsTabContent()}
          {getMagicItemsTabContent()}
          {getRegionalEffectsTabContent()}
          {getSpellsTabContent()}
        </div>
      </div>
      <ToastCollection/>
    </>
  );
};

const CreatureEditPage = (): ReactElement => {
  return (
    <ToastCollectionContextProvider>
      <CreatureEditPageContent/>
    </ToastCollectionContextProvider>
  );
};

export { CreatureEditPage };
