type ILocationMapPin = {
  x: number;
  y: number;
};

type ILocationMap = {
  imageUrl: string;
  pins: ILocationMapPin[];
};

type ILocation = {
  content: string;
  description: string;
  id: string;
  map: ILocationMap;
  name: string;
  sigilUrl: string;
};

export {
  ILocation,
  ILocationMap,
  ILocationMapPin
};
