export const getCurrentLocation = (): {
  found: boolean;
  latitude: number;
  longitude: number;
} => {
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
