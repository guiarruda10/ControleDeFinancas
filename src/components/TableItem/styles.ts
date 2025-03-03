import styled from "styled-components";

export const TableLine = styled.tr`

`;

export const TableColumn = styled.td`
  padding: 10px 0; 
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #FFF;
  background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${props => props.color};
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
`;

export const ButtonRemove = styled.button`
  background-color: transparent;
  border: 2px solid transparent; 
  border-radius: 8px; 
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px; 
  
  img {
    width: 18px;
    height: 18px; 
  }

  &:hover {
    background-color: #D84040;
  }

`;
