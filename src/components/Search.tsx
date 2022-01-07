import { useState } from "react";
import { fetchCarparkAvailability } from "../Functions/Fetch";
import styled from "styled-components";
import { SearchOutlined } from "@material-ui/icons";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1% 30%;
`;

const Input = styled.input`
  font-size: 20px;
  border: none;
  vertical-align: middle;
  padding: 5px;
  flex: 9;
  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  padding: 1%;
  display: flex;
  justify-content: space-between;
  border: 1px black solid;
`;

const Button = styled.button`
  border: none;
  flex: 1;
  background-color: transparent;
  cursor: pointer;
`;

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
    <SearchContainer>
      <Form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Location..."
          autoFocus
        />
        <Button type="submit">
          <SearchOutlined style={{ verticalAlign: "middle" }} />
        </Button>
      </Form>
    </SearchContainer>
  );
};

export default Search;
