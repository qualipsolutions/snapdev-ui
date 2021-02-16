import Container from '@material-ui/core/Container';
import { Column, Item } from '@snapdev-ui/core';
import Text from '../components/Text';
import Panel from '../components/Panel';
import DataTable from '../components/DataTable';
import Center from '../components/Center';
import Buttons from '../components/Buttons';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import MenuList from '../components/MenuList';
import CardList from '../components/CardList';

export interface ComponentsProps {}

const Components: React.FunctionComponent<ComponentsProps> = () => {
  return (
    <Container maxWidth="md">
      <div style={{ paddingTop: '8rem' }}>
        <Column spacing={10}>
          <Item>
            <SignIn />
          </Item>
          <Item>
            <SignUp />
          </Item>
          <Item>
            <CardList />
          </Item>
          <Item>
            <MenuList />
          </Item>
          <Item>
            <Buttons />
          </Item>
          <Item>
            <Panel />
          </Item>
          <Item>
            <Text />
          </Item>
          <Item>
            <DataTable />
          </Item>
          <Item>
            <Center />
          </Item>
        </Column>
      </div>
    </Container>
  );
};

export default Components;
