import React, { useState } from "react";
import SearchModal from "../search-modal";
import { Button, SearchIcon, Label } from "./search-button.styled";

const SearchButton = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        <SearchIcon />
        <Label>Search...</Label>
      </Button>
      {isModalOpen && <SearchModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default SearchButton;
