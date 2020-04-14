import React, { Component } from "react";
import { Button, Card, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ".././styles/product.css";

export class Product extends Component {
  render() {
    const { id, title, img, price, inCart, company } = this.props.product;
    return (
      <Grid.Column style={{ marginBottom: "20px" }}>
        <Card>
          <Card.Content>
            <Link to={`/products/${id}`}>
              <Image
                onClick={() => this.props.handleDetail(id)}
                floated='right'
                size='mini'
                src={`${window.location.origin}/${img}`}
              />
            </Link>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>Price:{price}</Card.Meta>
            <Card.Description>{company}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Link to='/products/details'>
                <Button
                  onClick={() => this.props.handleDetail(id)}
                  basic
                  color='blue'
                >
                  View
                </Button>
              </Link>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

Product.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCard: PropTypes.bool
  }).isRequired
};

export default Product;
