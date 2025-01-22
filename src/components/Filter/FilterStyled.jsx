import styled from 'styled-components';

export const SearchLabel = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 10px;
  margin-top: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;
