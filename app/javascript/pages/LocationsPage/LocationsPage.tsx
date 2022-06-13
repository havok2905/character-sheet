import React, {
  ReactElement,
  useEffect,
  useState
} from 'react';
import { getLocations } from '../../utilities/Api/Locations';

const LocationsPage = (): ReactElement => {
  const [locations, setLocations] = useState([]);

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
        <a className="button" href="/locations/new">Create</a>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              locations.map((l, index) => {
                return (
                  <tr key={index}>
                    <td>{l.id}</td>
                    <td>{l.name}</td>
                    <td>
                      <a href={`/locations/${l.id}`}>View</a>
                      <a className="button" href={`/locations/${l.id}/edit`}>Edit</a>
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
