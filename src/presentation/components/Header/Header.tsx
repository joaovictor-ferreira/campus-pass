import { HeaderStyles } from './Header.styles';
import { Subheader } from './Subheader/Subheader';

export const Header: React.FC = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Content>
        <h1>Logo</h1>
        <HeaderStyles.SearchBar />
        <button>Login</button>
      </HeaderStyles.Content>
      <Subheader />
    </HeaderStyles.Container>
  );
};
