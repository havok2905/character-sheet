import React, {
  ReactElement,
  useEffect,
  useState
} from 'react';
import { getLocations } from '../../utilities/Api/Locations';
import { ILocation } from '../../types/models';

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
        <a href="/locations/new">Create</a>
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
                return (
                  <tr key={index}>
                    <td>{l.name}</td>
                    <td>
                      <a href={`/locations/${l.id}`}>View</a>
                      <a href={`/locations/${l.id}/edit`}>Edit</a>
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
