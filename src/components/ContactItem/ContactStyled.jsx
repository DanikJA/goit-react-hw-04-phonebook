import styled from 'styled-components';

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ccc;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #e74c3c;
    transform: scale(0.98);
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  gap: 15px;
  font-size: 16px;
  color: #333;

  &:hover {
    background-color: #f4f4f4;
  }
`;
