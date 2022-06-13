type IGetLocationResponseLocationMap = {
  imageUrl: string;
  pins: any[];
}

type IGetLocationResponseLocation = {
  content: string;
  description: string;
  id: string;
  map: IGetLocationResponseLocationMap;
  name: string;
  sigilUrl: string;
}

type IGetLocationResponse  = {
  location: IGetLocationResponseLocation;
};

const getLocation = (id: string): Promise<IGetLocationResponse> => {
  return fetch(`/locations/${id}.json`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export {
  getLocation,
  IGetLocationResponse
};
