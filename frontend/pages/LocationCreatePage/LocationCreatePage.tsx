import React, { ReactElement, useState } from 'react';
import { createLocation } from '../../utilities/Api/Locations';
import {
  generatePath,
  Link,
  useNavigate
} from 'react-router-dom';
import { LOCATION_ROUTE, LOCATIONS_ROUTE } from '../../app';
import { MarkdownEditor } from '../../components/MarkdownEditor';
import { MarkdownPreview } from '../../components/MarkdownPreview';

const LocationCreatePage = (): ReactElement => {
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    createLocation({
      location: {
        content,
        description,
        name
      }
    })
      .then(data => {
        const id = data.location.id;
        navigate(generatePath(LOCATION_ROUTE, { id }))
        window.location.href = `/locations/${data.location.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.reload();
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>New Location</h1>
        <Link to={LOCATIONS_ROUTE}>
          Back
        </Link>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="location-name">
              Name
            </label>
            <input
              id="location-name"
              name="location-name"
              onChange={(e) => setName(e.target.value) }
              type="text">  
            </input>
            <label htmlFor="location-description">
              Description
            </label>
            <textarea
              id="location-description"
              name="location-description"
              onChange={(e) => setDescription(e.target.value)}>
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
            <button>
              Create Location
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export { LocationCreatePage };
