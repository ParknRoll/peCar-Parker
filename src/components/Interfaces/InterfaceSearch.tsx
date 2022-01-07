export const all_vehicles_types = ["car", "motorcycle", "heavy"];

export default interface ISearch {
  latitude: number;
  longitude: number;
  vehicle_type: typeof all_vehicles_types[number];
}
