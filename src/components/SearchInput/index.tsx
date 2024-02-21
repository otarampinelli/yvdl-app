import styled from "styled-components";

const InputField = styled.input`
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  border: none;
  width: 80%;
  &:focus {
    outline: none;
  }
`;

const ButtonSearch = styled.button`
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  height: 100%;
  background: #008ecc;
  color: white;
  border: none;
  width: 20%;
  cursor: pointer;
  &:hover {
    background: #0486bf;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  height: 25px;
  width: 400px;
`;

type SearchInputProps = {
    buttonType?: string
    buttonValue?
}

function SearchInput() {
  return (
    <SearchWrapper>
      <InputField />
      <ButtonSearch>Download</ButtonSearch>
    </SearchWrapper>
  );
}

export default SearchInput;
