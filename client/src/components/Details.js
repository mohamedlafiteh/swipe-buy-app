import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchProductsById } from ".././actions/productsActions";

export class Details extends Component {
  componentWillMount() {
    this.props.dispatch(fetchProductsById());
  }
  render() {
    const {
      id,
      title,
      image,
      price,
      inCart,
      company,
      description
    } = this.props.products;
    return (
      <div>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={`${window.location.origin}/${image}`}
              />

              <Card.Header>{title}</Card.Header>
              <Card.Meta>Price:{price}</Card.Meta>
              <Card.Description>{description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Link to='/cart'>
                  <Button>Add To Cart</Button>
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
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    products: store.products.products
  };
};

export default connect(mapStateToProps)(Details);
