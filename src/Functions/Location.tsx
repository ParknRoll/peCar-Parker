import ILocation from "../components/Interfaces/InterfaceLocation";

export const getCurrentLocation = (): ILocation => {
  const result = { found: false, latitude: -1, longitude: -1 };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      result.found = true;
      result.latitude = position.coords.latitude;
      result.longitude = position.coords.longitude;
    });
  }
  return result;
};
