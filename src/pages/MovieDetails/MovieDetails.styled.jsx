import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Wrapper = styled.div`
  padding: 20px;
`;

export const MovieCard = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  margin-right: 20px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const MovieInfo = styled.div`
  flex-grow: 1;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
`;

export const InfoItem = styled.li`
  margin-bottom: 10px;
  p {
    margin: 0;
  }
`;

export const InfoLink = styled(Link)`
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

export const BackButton = styled.button`
  display: block;
  width: fit-content;
  background-color: aquamarine;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid tomato;
  cursor: pointer;
`;

export const ExtraInfoSection = styled.section`
  background-color: #212121;
  color: #fff;
  padding: 10px;
  margin-top: 10px;
`;

export const ExtraInfoTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;
