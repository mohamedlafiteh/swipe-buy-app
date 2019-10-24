import React, { Component } from "react";
import { Button, Form, Grid, Header, Card } from "semantic-ui-react";

export class AddAdvertForm extends Component {
  render() {
    return (
      <Grid padded="horizontally" centered column={16}>
        <Grid.Column largeScreen="6" computer="10" mobile="16" tablet="10">
          <Header as="h1" textAlign="center">
            <Header.Content style={{ marginTop: "20px" }}>
              Add Advert
            </Header.Content>
          </Header>
          <Card style={{ marginTop: "4em", padding: "2em", width: "100%" }}>
            <Form>
              <Form.Field>
                <Form.Input
                  fluid
                  iconPosition="left"
                  label="Picture"
                  placeholder="Picture"
                  name="Picture"
                  required
                />
              </Form.Field>
              <Form.Field inline>
                <Form.Input
                  fluid
                  iconPosition="left"
                  placeholder="Title"
                  name="title"
                  label="Title"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  iconPosition="left"
                  label="Price"
                  placeholder="Price"
                  name="price"
                  required
                />
              </Form.Field>

              <Form.Field inline>
                <Form.Input
                  fluid
                  iconPosition="left"
                  placeholder="Description"
                  label="Description"
                  name="Description"
                  required
                />
              </Form.Field>

              <Button.Group fluid>
                <Button color="red">Cancel</Button>

                <Button color="orange" type="submit">
                  Submit
                </Button>
              </Button.Group>
            </Form>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AddAdvertForm;
