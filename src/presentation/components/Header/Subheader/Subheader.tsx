import { SubheaderStyles } from './Subheader.styles';
import { getItems } from './Items/Items';

export const Subheader: React.FC = () => {
  return (
    <SubheaderStyles.Container>
      <SubheaderStyles.Content>{getItems()}</SubheaderStyles.Content>
    </SubheaderStyles.Container>
  );
};
