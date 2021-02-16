import Container from '@material-ui/core/Container';
import { Column, Item } from '@snapdev-ui/core';
import MenuList from '../components/MenuList';
import CardList from '../components/CardList';

export interface ComponentsProps {}

const Components: React.FunctionComponent<ComponentsProps> = () => {
  return (
    <Container maxWidth="md">
      <div style={{ paddingTop: '8rem' }}>
        <Column spacing={10}>
          <Item>
            <CardList />
          </Item>
          <Item>
            <MenuList />
          </Item>
        </Column>
      </div>
    </Container>
  );
};

export default Components;
