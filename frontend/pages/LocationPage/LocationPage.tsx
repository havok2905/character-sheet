import React, {
  ReactElement,
  useEffect,
  useState
} from 'react';
import { Card } from '../../components/Card';
import { GearIcon } from '../../components/Icons';
import { generatePath, Link, useParams } from 'react-router-dom';
import { getLocation } from '../../utilities/Api/Locations';
import { ILocation } from '../../types/models';
import { LOCATION_EDIT_ROUTE } from '../../app';
import { MarkdownPreview } from '../../components/MarkdownPreview';
import { Pin } from '../../components/Pin';
import { PinViewModal } from '../../components/MapWithPinsEditor/PinViewModal';

const LocationPage = (): ReactElement | null => {
  const [location, setLocation] = useState<ILocation | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [displayedPinId, setDisplayedPinId] = useState('');

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getLocation(params.id)
        .then(data => {
          setLocation(data.location);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
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
      <div className="layout">
        <div className="full">
          <div className="page-header">
            <div className="page-header-settings">
              <Link to={generatePath(LOCATION_EDIT_ROUTE, { id })}>
                <GearIcon/>
              </Link>
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
              <Card>
                {description}
              </Card>
            )
          }
          <MarkdownPreview value={content}/>
        </div>
      </div>
      {getViewModal()}
    </>
  );
};

export { LocationPage };
