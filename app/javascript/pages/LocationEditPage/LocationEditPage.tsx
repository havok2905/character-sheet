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
  uploadLocationMap,
  uploadLocationSigil
} from '../../utilities/Api/Locations';
import { ILocation } from '../../types/models';
import { MapWithPinsEditor } from '../../components/MapWithPinsEditor';
import { MarkdownEditor } from '../../components/MarkdownEditor';
import { MarkdownPreview } from '../../components/MarkdownPreview';
import {
  ToastCollection,
  ToastCollectionContextProvider
} from '../../components/ToastCollection';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const LocationEditPage = (): ReactElement => {
  const [contentField, setContentField] = useState('');
  const [descriptionField, setDescriptionField] = useState('');
  const [location, setLocation] = useState<ILocation | null>(null);
  const [nameField, setNameField] = useState('');

  const mapFileUploadRef = useRef<HTMLInputElement | null>(null);
  const sigilFileUploadRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const id = getIdFromUrl();

    getLocation(id)
      .then(data => {
        setContentField(data.location.content);
        setDescriptionField(data.location.description);
        setLocation(data.location);
        setNameField(data.location.name);
      })
      .catch((error) => {
        console.error('Error:', error);
      });    
  }, []);

  const handleDelete = e => {
    e.preventDefault();
    
    const id = getIdFromUrl();

    destroyLocation(id)
      .then(() => {
        window.location.href = `/locations/`;
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
    map,
    name = '',
    sigilUrl = ''
  } = location ?? {};

  return (
    <ToastCollectionContextProvider>
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
          {map && <MapWithPinsEditor map={map} resourceName={name} />}
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
      <ToastCollection/>
    </ToastCollectionContextProvider>
  );
};

export { LocationEditPage };
