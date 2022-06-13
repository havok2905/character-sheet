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
import {
  MarkdownEditor
} from '../../components/MarkdownEditor';
import {
  MarkdownPreview
} from '../../components/MarkdownPreview';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const LocationEditPage = (): ReactElement => {
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');
  const [mapUrl, setMapUrl] = useState('');
  const [name, setName] = useState('');
  const [sigilUrl, setSigilUrl] = useState('');

  const mapFileUploadRef = useRef(null);
  const sigilFileUploadRef = useRef(null);

  useEffect(() => {
    const id = getIdFromUrl();

    getLocation(id)
      .then(data => {
        console.log(data);
        setContent(data.location.content);
        setDescription(data.location.description);
        setId(data.location.id);
        setMapUrl(data.location.map.imageUrl);
        setName(data.location.name);
        setSigilUrl(data.location.sigilUrl);
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

    data.append('location-map-file-upload', mapFileUploadRef.current.files[0]);

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

    data.append('location-sigil-file-upload', sigilFileUploadRef.current.files[0]);

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
        content,
        description,
        name
      }
    })
      .then(data => {
        window.location.href = `/locations/${data.location.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>
          Edit Location
        </h1>
        <a className="button" href={`/locations/${id}`}>
          Back
        </a>
        <button className='button button-destructive' onClick={handleDelete}>
          Delete
        </button>
        <h2>Map Settings</h2>
        {
          mapUrl && (
            <>
              <h2>Map</h2>
              <img src={mapUrl} alt={`${name} map`} width="1000px"/>
            </>
          )
        }
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
            <button className="button button-constructive">
              Update Map
            </button>
          </fieldset>
        </form>
        <h2>Sigil Settings</h2>
        {
          sigilUrl && (
            <>
              <h2>Sigil</h2>
              <img src={sigilUrl} alt={`${name} sigil`}/>
            </>
          )
        }
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
            <button className="button button-constructive">
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
              onChange={(e) => setName(e.target.value) }
              type="text"
              value={name}>  
            </input>
            <label htmlFor="location-description">
              Description
            </label>
            <textarea
              id="location-description"
              name="location-description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}>
            </textarea>
          </fieldset>
          <fieldset>
            <label htmlFor="location-content">
              Content
            </label>
            <MarkdownEditor
              onChange={(e) => {setContent(e.target.value)}}
              value={content}
            />
            <MarkdownPreview value={content}/>
          </fieldset>
          <fieldset>
            <button className="button button-constructive">
              Update Location
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export { LocationEditPage };
