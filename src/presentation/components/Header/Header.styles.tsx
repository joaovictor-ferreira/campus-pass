import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  background: red;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 5rem;
  margin: 0 auto;
  max-width: 80%;
  height: 4rem;
  padding: 1rem 0;
`;

const SearchBar = styled.div`
  width: 40%;
  background: #eaeaea;
  height: 100%;
`;
export const HeaderStyles = {
  Container,
  Content,
  SearchBar,
};
