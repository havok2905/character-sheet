import React, {
  ReactElement,
  useEffect,
  useState
} from 'react';
import { generatePath, Link } from 'react-router-dom';
import { getLocations } from '../../utilities/Api/Locations';
import { ILocation } from '../../types/models';
import {
  LOCATION_ROUTE,
  LOCATION_CREATE_ROUTE,
  LOCATION_EDIT_ROUTE
} from '../../app';

const LocationsPage = (): ReactElement => {
  const [locations, setLocations] = useState<ILocation[]>([]);

  useEffect(() => {
    getLocations()
      .then(data => {
        setLocations([...data.locations]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="layout">
      <div className="full">
        <h1>Locations</h1>
        <Link to={LOCATION_CREATE_ROUTE}>
          Create
        </Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              locations.map((l, index) => {
                const { id, name } = l;
                return (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>
                      <Link to={generatePath(LOCATION_ROUTE, { id })}>
                        View
                      </Link>
                      <Link to={generatePath(LOCATION_EDIT_ROUTE, { id })}>
                        Edit
                      </Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { LocationsPage };
