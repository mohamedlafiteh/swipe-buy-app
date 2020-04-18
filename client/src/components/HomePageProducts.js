import React, { Component } from "react";
import { Button, Card, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ".././styles/HomePageProducts.css";

export class HomePageProducts extends Component {
  render() {
    const {
      id,
      title,
      image,
      price,
      inCart,
      company,
      description
    } = this.props.product;
    return (
      <div className='col-md-4 all-cards'>
        <div className='products__box'>
          <img className='recipe__box-img' src={image} />
          <div className='product__text'>
            <h5 className='products__title'>
              {title.length < 20 ? `${title}` : `${title.substring(0, 25)}...`}
            </h5>
            <p className='products__subtitle'>
              Publisher: <span>{company}</span>
            </p>
          </div>
          <button className='products_buttons'>
            <Link>View Product</Link>
          </button>
        </div>
      </div>
    );
  }
}

HomePageProducts.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCard: PropTypes.bool
  }).isRequired
};

export default HomePageProducts;

// <Grid.Column style={{ marginBottom: "20px" }}>
//   <Card>
//     <Card.Content>
//       <Link to={`/products/${id}`}>
//         <Image
//           floated='right'
//           size='mini'
//           src={`${window.location.origin}/${image}`}
//         />
//       </Link>
//       <Card.Header>{title}</Card.Header>
//       <Card.Meta>Price:{price}</Card.Meta>
//       <Card.Description>{company}</Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <div className='ui two buttons'>
//         <Link to='/products/details'>
//           <Button basic color='blue'>
//             View
//                 </Button>
//         </Link>
//       </div>
//     </Card.Content>
//   </Card>
// </Grid.Column>
