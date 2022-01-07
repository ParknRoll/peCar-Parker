import { useState } from "react";
import { fetchCarparkAvailability } from "../Functions/Fetch";

const Search = ({
  setFilteredCarparks,
}: {
  setFilteredCarparks: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const [location, setLocation] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    fetchCarparkAvailability(location, setFilteredCarparks);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Where are you?"
          autoFocus
        />
        <button type="submit">Find me a carpark!</button>
      </form>
    </div>
  );
};

export default Search;
