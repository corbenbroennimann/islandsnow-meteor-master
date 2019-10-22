import React from 'react';
import { Container, Grid, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Container className="footer-background">
          <Grid columns='three'>
            <Grid.Row>
              <Grid.Column>
                <header>NAVIGATION</header>
                <hr/>
                <p>About Us</p>
                <p>Videos</p>
                <p>Store Locations</p>
              </Grid.Column>
              <Grid.Column>
                <header>MAIN MENU</header>
                <hr/>
                <p>Men</p>
                <p>Women</p>
                <p>Kids</p>
              </Grid.Column>
              <Grid.Column>
                <header>CONNECT</header>
                <hr/>
                <p>Sign up for the latest Updates</p>
                <Input action="Join" icon placeholder="Enter Email Address" className="emailbox">
                </Input>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
