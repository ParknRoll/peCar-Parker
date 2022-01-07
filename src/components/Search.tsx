import { all_vehicles_types } from "./Interfaces/InterfaceSearch";

const Search = () => {
  return (
    <div>
      {all_vehicles_types.map((vehicle_type, index) => (
        <h1 key={index}>{vehicle_type}</h1>
      ))}
    </div>
  );
};

export default Search;
