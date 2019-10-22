import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class Item extends Component {
  render() {
    const { id, title, img, price, inCard } = this.props.products;
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Link to="/details">
              <Image floated="right" size="mini" src={img} />
            </Link>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>Price:{price}</Card.Meta>
            <Card.Description>
              welcome to the swipe buy
              <strong>good phone from Mohamed ALi Lafiteh</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Add to card
              </Button>
              <Button basic color="red">
                Cancel
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default Item;
