import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItem = styled(Link)`
  padding: 4px;
  color: rgba(0, 0, 0);
  text-decoration: none;

  &:hover,
  &:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    color: orange;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
