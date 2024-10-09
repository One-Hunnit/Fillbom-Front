export interface ICoordinates {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}

export interface ILocationEvent {
  coords: ICoordinates;
  mocked: boolean;
  timestamp: number;
}
