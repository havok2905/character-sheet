import React, {
  ReactElement,
  useEffect,
  useState
} from 'react';
import { GearIcon } from '../../components/Icons';
import { getLocation } from '../../utilities/Api/Locations';
import { ILocation } from '../../types/models';
import { Layout } from '../../layouts/Layout';
import { MarkdownPreview } from '../../components/MarkdownPreview';
import { Pin } from '../../components/Pin';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const LocationPage = (): ReactElement | null => {
  const [location, setLocation] = useState<ILocation | null>(null);

  useEffect(() => {
    const id = getIdFromUrl();

    getLocation(id)
      .then(data => {
        setLocation(data.location);
      })
      .catch((error) => {
        console.error('Error:', error);
      });    
  }, []);

  if (!location) return null;

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <div className="sheet-header">
            <div className="sheet-header-settings">
              <a href={`/locations/${location.id}/edit`}>
                <GearIcon/>
              </a>
            </div>
          </div>
          {
            location.map.imageUrl && (
              <>
                <h2>Map</h2>
                <div className="map-with-pins-editor">
                  <img src={location.map.imageUrl} alt={`${location.name} map`} width="1000px"/>
                  { location.map.pins.map(pin => <Pin pin={pin}/>) }
                </div> 
              </>
            )
          }
          <h1>{location.name}</h1>
          {
            location.sigilUrl && (
              <>
                <h2>Sigil</h2>
                <img src={location.sigilUrl} alt={`${location.name} sigil`}/>
              </>
            )
          }
          <div className="card">
            {location.description}
          </div>
          <h2>Article</h2>
          <MarkdownPreview value={location.content}/>
        </div>
      </div>
    </Layout>
  );
};

export { LocationPage };