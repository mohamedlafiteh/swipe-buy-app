import React from "react";
import "../styles/footer.css";

import {
  Container,
  Header,
  List,
  Grid,
  Segment,
  Icon
} from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment inverted color='teal'>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Swipe Buy
              </Header>
              <p>Swipe Buy is for people to buy and sell items. </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
