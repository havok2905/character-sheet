import React, {
  ReactElement,
  useEffect,
  useState
} from 'react';
import { getLocations } from '../../utilities/Api/Locations';
import { ILocation } from '../../types/models';
import { Layout } from '../../layouts/Layout';

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
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>Locations</h1>
          <a href="/locations/new">Create</a>
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
    </Layout>
  );
};

export { LocationsPage };
