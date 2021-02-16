import Container from '@material-ui/core/Container';
import { Column, Item, Row, Text } from '@snapdev-ui/core';
import MenuList from '../components/MenuList';
import CardList from '../components/CardList';

export interface ComponentsProps {}

const Components: React.FunctionComponent<ComponentsProps> = () => {
  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* <Row stretch heightOffset="8.1rem" style={{ backgroundColor: 'yellow' }}>
        <Item xs={12} sm={6} md={2} style={{ backgroundColor: 'green' }}>
          
          <Column spacing={10}>
            <Item>
              <CardList />
            </Item>
            <Item>
              <MenuList />
            </Item>
          </Column>
         
        </Item>
        <Item xs={12} sm={6} md={2} style={{ backgroundColor: 'grey' }}></Item>
        <Item xs={12} sm={12} md={8} style={{ backgroundColor: 'red' }}></Item>
      </Row> */}

      <Column
        stretch
        heightOffset="8.1rem"
        style={{ backgroundColor: 'yellow', height: 300 }}
      >
        <Item stretch style={{ backgroundColor: 'green' }}>
          <Text variant="body1">Item1</Text>
        </Item>
        <Item stretch style={{ backgroundColor: 'grey' }}>
          <Text variant="body1">Item2</Text>
        </Item>
        <Item stretch style={{ backgroundColor: 'red' }}>
          <Text variant="body1">Item3</Text>
        </Item>
      </Column>
    </div>
  );
};

export default Components;
