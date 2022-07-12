import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import "./SearchBar.css";

const SearchBar = ({ userInput, setUserInput }) => {
  return (
    <MDBCol md="6">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input
          className="album-search form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
    </MDBCol>
  );
};

export default SearchBar;
