import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchProductsById } from ".././actions/productsActions";

export class Details extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(fetchProductsById(id));
  }
  render() {
    const { product, isLoading } = this.props;
    return isLoading ? (
      "Loading....."
    ) : (
      <div>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={`${window.location.origin}/${product.image}`}
              />

              <Card.Header>{product.title}</Card.Header>
              <Card.Meta>Price:{product.price}</Card.Meta>
              <Card.Description>
                Description: {product.description}
              </Card.Description>
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

Details.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string
  })
};

Details.defaultProps = {
  product: {}
};

const mapStateToProps = store => {
  return {
    product: store.products.selectedProduct,
    isLoading: store.products.isFetching
  };
};

export default connect(mapStateToProps)(Details);
