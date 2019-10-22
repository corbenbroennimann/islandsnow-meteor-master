import React from 'react';
import { Container, Menu, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless align='center' className="ui boarderless centered middlemenu menu">
          <Container textAlign='center'>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>Tank tops</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>empty</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>KIDS</Menu.Item>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>empty</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SEARCH</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
