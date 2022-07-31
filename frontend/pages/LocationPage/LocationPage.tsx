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
import { PinViewModal } from '../../components/MapWithPinsEditor/PinViewModal';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const LocationPage = (): ReactElement | null => {
  const [location, setLocation] = useState<ILocation | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [displayedPinId, setDisplayedPinId] = useState(''); 

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

  const getViewModal = (): ReactElement | null => {
    if (!modalOpen) return null;

    const pin = location.map.pins.find(item => item.id === displayedPinId);

    return pin ? (
      <PinViewModal
        onCloseModal={()=> { setModalOpen(false) }}
        onCloseModalOverlay={()=> { setModalOpen(false) }}
        pin={pin} />
    ) : null;
  };

  const {
    content,
    description,
    heroImageUrl,
    id,
    map: {
      imageUrl,
      pins = []
    } = {},
    name,
    sigilUrl
  } = location;

  return (
    <>
      <Layout>
        <div className="layout">
          <div className="full">
            <div className="page-header">
              <div className="page-header-settings">
                <a href={`/locations/${id}/edit`}>
                  <GearIcon/>
                </a>
              </div>
            </div>
            {
              imageUrl && (
                <>
                  <h2>Map</h2>
                  <div className="map-with-pins-editor">
                    <img src={imageUrl} alt={`${name} map`} width="1000px"/>
                    {
                      pins.map(pin => {
                        return (
                          <Pin
                            onClick={(id) => {
                              setDisplayedPinId(id);
                              setModalOpen(true);
                            }}
                            pin={pin}/>
                        );
                      })
                    }
                  </div> 
                </>
              )
            }
            <h1>{name}</h1>
            {
              sigilUrl && (
                <>
                  <h2>Sigil</h2>
                  <img src={sigilUrl} alt={`${name} sigil`}/>
                </>
              )
            }
            {heroImageUrl && <img src={heroImageUrl} alt={`${name} hero image`}/>}
            {
              description && (
                <div className="card">
                  {description}
                </div>
              )
            }
            <MarkdownPreview value={content}/>
          </div>
        </div>
      </Layout>
      {getViewModal()}
    </>
  );
};

export { LocationPage };
