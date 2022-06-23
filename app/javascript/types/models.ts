interface IPin {
  id?: string;
  map_id: string;
  name: string;
  x: number;
  y: number;
}

interface IMap {
  imageUrl: string;
  pins: IPin[];
}

interface ILocation {
  content: string;
  description: string;
  id?: string;
  map: IMap;
  name: string;
  sigilUrl: string;
}

export {
  ILocation,
  IMap,
  IPin
};
