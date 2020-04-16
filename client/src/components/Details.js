import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";

export class Details extends Component {
  render() {
    return (
      <div>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <Card.Group>
              <Card>
                <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    src={`${window.location.origin}/${img}`}
                  />

                  <Card.Header>{title}</Card.Header>
                  <Card.Meta>Price:{price}</Card.Meta>
                  <Card.Description>{info}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Link to='/cart'>
                      <Button
                        onClick={() => {
                          value.addToCart(id);
                        }}
                        basic
                        color='blue'
                      >
                        Add To Cart
                      </Button>
                    </Link>
                    <Link to='/'>
                      <Button basic color='red'>
                        Cancel
                      </Button>
                    </Link>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          );
        }}
      </div>
    );
  }
}

export default Details;
