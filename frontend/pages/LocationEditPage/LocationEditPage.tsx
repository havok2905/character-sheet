import React, {
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  destroyLocation,
  getLocation,
  updateLocation,
  uploadLocationHeroImage,
  uploadLocationMap,
  uploadLocationSigil
} from '../../utilities/Api/Locations';
import { getCreatures } from '../../utilities/Api/Creatures';
import { getFactions } from '../../utilities/Api/Factions';
import { getMagicItems } from '../../utilities/Api/MagicItems';
import {
  ICreature,
  IFaction,
  ILocation,
  IMagicItem
} from '../../types/models';
import { Layout } from '../../layouts/Layout';
import { MapWithPinsEditor } from '../../components/MapWithPinsEditor';
import { MarkdownEditor } from '../../components/MarkdownEditor';
import { MarkdownPreview } from '../../components/MarkdownPreview';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

interface ILocationEditPageState {
  creatures: ICreature[];
  factions: IFaction[];
  location: ILocation | null;
  magicItems: IMagicItem[];
}

const LocationEditPage = (): ReactElement => {
  const [contentField, setContentField] = useState('');
  const [descriptionField, setDescriptionField] = useState('');
  const [nameField, setNameField] = useState('');
  const [state, setState] = useState<ILocationEditPageState>({
    creatures: [] as ICreature[],
    factions: [] as IFaction[],
    location: null,
    magicItems: [] as IMagicItem[]
  });

  const heroImageFileUploadRef = useRef<HTMLInputElement | null>(null);
  const mapFileUploadRef = useRef<HTMLInputElement | null>(null);
  const sigilFileUploadRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const id = getIdFromUrl();

    Promise.all([
      getCreatures(),
      getFactions(),
      getLocation(id),
      getMagicItems()
    ]).then(([
      creatureData,
      factionData,
      locationData,
      magicItemData
    ]) => {
      setState({
        creatures: creatureData.creatures,
        factions: factionData.factions,
        location: locationData.location,
        magicItems: magicItemData.magicItems
      });

      setContentField(locationData.location.content);
      setDescriptionField(locationData.location.description);
      setNameField(locationData.location.name);
    });
  }, []);

  const {
    creatures,
    factions,
    location,
    magicItems
  } = state;

  const handleDelete = e => {
    e.preventDefault();
    
    const id = getIdFromUrl();

    destroyLocation(id)
      .then(() => {
        window.location.href = '/locations/';
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/locations/${id}/edit/`;
      });
  }

  const handleMapSubmit = e => {
    e.preventDefault();

    const id = getIdFromUrl();
    const data = new FormData();
    const filesToUpload = mapFileUploadRef?.current?.files;

    if (!filesToUpload?.length) return;

    data.append('location-map-file-upload', filesToUpload[0]);

    uploadLocationMap(id, data)
      .then(data => {
        window.location.href = `/locations/${data.location.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleHeroImageSubmit = e => {
    e.preventDefault();

    const id = getIdFromUrl();
    const data = new FormData();
    const filesToUpload = heroImageFileUploadRef?.current?.files;

    if (!filesToUpload?.length) return;

    data.append('location-hero-image-file-upload', filesToUpload[0]);

    uploadLocationHeroImage(id, data)
      .then(data => {
        window.location.href = `/locations/${data.location.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleSigilSubmit = e => {
    e.preventDefault();

    const id = getIdFromUrl();
    const data = new FormData();
    const filesToUpload = sigilFileUploadRef?.current?.files;

    if (!filesToUpload?.length) return;

    data.append('location-sigil-file-upload', filesToUpload[0]);

    uploadLocationSigil(id, data)
      .then(data => {
        window.location.href = `/locations/${data.location.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const id = getIdFromUrl();

    updateLocation(id, {
      location: {
        content: contentField,
        description: descriptionField,
        name: nameField
      }
    })
      .then(data => {
        window.location.href = `/locations/${data.location.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const {
    heroImageUrl,
    map,
    name = '',
    sigilUrl = ''
  } = location ?? {};

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>Edit Location</h1>
          <button className='button button-destructive' onClick={handleDelete}>
            Delete
          </button>
          <h2>Map</h2>
          <form onSubmit={handleMapSubmit}>
            <fieldset>
              <label htmlFor="location-map">
                Map Image
              </label>
              <input
                name="location-map"
                id="location-map"
                ref={mapFileUploadRef}
                type="file" />
              <button>
                Update Map Image
              </button>
            </fieldset>
          </form>
          {
            location && map && (
              <MapWithPinsEditor
                creatures={creatures}
                factions={factions}
                location={location}
                magicItems={magicItems}
                map={map}
                resourceName={name} />
            )
          }
          <h2>Hero Image</h2>
          {heroImageUrl && <img src={heroImageUrl} alt={`${name} hero image`}/>}
          <form onSubmit={handleHeroImageSubmit}>
            <fieldset>
              <label htmlFor="location-hero-image">
                Hero Image
              </label>
              <input
                name="location-hero-image"
                id="location-hero-image"
                ref={heroImageFileUploadRef}
                type="file" />
              <button>
                Update Hero Image
              </button>
            </fieldset>
          </form>
          <h2>Sigil</h2>
          {sigilUrl && <img src={sigilUrl} alt={`${name} sigil`}/>}
          <form onSubmit={handleSigilSubmit}>
            <fieldset>
              <label htmlFor="location-sigil">
                Sigil Image
              </label>
              <input
                name="location-sigil"
                id="location-sigil"
                ref={sigilFileUploadRef}
                type="file" />
              <button>
                Update Sigil
              </button>
            </fieldset>
          </form>
          <h2>Location Settings</h2>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="location-name">
                Name
              </label>
              <input
                id="location-name"
                name="location-name"
                onChange={(e) => setNameField(e.target.value) }
                type="text"
                value={nameField}>  
              </input>
              <label htmlFor="location-description">
                Description
              </label>
              <textarea
                id="location-description"
                name="location-description"
                onChange={(e) => setDescriptionField(e.target.value)}
                value={descriptionField}>
              </textarea>
            </fieldset>
            <fieldset>
              <label htmlFor="location-content">
                Content
              </label>
              <MarkdownEditor
                onChange={(e) => {setContentField(e.target.value)}}
                value={contentField}
              />
              <MarkdownPreview value={contentField}/>
            </fieldset>
            <fieldset>
              <button>
                Update Location
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export { LocationEditPage };
