import { styled } from 'styled-components';

export const Options = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid black;
  font-weight: 600;
  &:hover {
    background-color: #a580d5;
    color: white;
  }
`;
export const List = styled.ul`
  margin-top: 30px;
  margin-left: 20px;
  flex-wrap: wrap;
`;
export const Contact = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const ListItem = styled.li`
  font-size: 18px;
  font-weight: 600;
`;
