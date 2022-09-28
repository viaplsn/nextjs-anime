import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button, SearchIcon, Label } from "./search-button.styled";

const SearchButton = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const SearchModal = dynamic(() => import("../search-modal"), {
    ssr: false,
  });

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
