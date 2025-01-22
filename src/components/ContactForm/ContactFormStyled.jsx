import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background-color: #f4f7f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 40px auto;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  margin: 0 auto;
  padding: 12px 20px;
  background-color: #ccc;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: gray;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ErrorText = styled.span`
  color: red;
  margin-left: 5px;
  font-size: 12px;
  margin-top: 4px;
  font-weight: bold;
`;
