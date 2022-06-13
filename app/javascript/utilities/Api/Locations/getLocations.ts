type IGetLocationsResponseLocationMap = {
  imageUrl: string;
  pins: any[];
}

type IGetLocationsResponseLocation = {
  content: string;
  description: string;
  id: string;
  map: IGetLocationsResponseLocationMap;
  name: string;
  sigilUrl: string;
}

type IGetLocationsResponse  = {
  locations: IGetLocationsResponseLocation[];
};

const getLocations = (): Promise<IGetLocationsResponse> => {
  return fetch('/locations.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export {
  getLocations,
  IGetLocationsResponse
};
