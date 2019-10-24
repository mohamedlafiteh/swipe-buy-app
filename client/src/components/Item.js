import React, { Component } from "react";
import { Button, Card, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "../ContextProductProvider";

export class Item extends Component {
  render() {
    const { id, title, img, price, inCart, company } = this.props.products;
    return (
      <Grid.Column>
        <Card.Group>
          <Card>
            <Card.Content>
              <Link to="/details">
                <Image
                  onClick={() => this.props.handleDetail(id)}
                  floated="right"
                  size="mini"
                  src={img}
                />
              </Link>
              <Card.Header>{title}</Card.Header>
              <Card.Meta>Price:{price}</Card.Meta>
              <Card.Description>{company}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Link to="/details">
                  <Button
                    onClick={() => this.props.handleDetail(id)}
                    basic
                    color="blue"
                  >
                    View
                  </Button>
                </Link>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </Grid.Column>
      // <Card.Group>
      //   <Card>
      //     <Card.Content>
      //       <Link to="/details">
      //         <Image
      //           onClick={() => this.props.handleDetail(id)}
      //           floated="right"
      //           size="mini"
      //           src={img}
      //         />
      //       </Link>
      //       <Card.Header>{title}</Card.Header>
      //       <Card.Meta>Price:{price}</Card.Meta>
      //       <Card.Description>{company}</Card.Description>
      //     </Card.Content>
      //     <Card.Content extra>
      //       <div className="ui two buttons">
      //         <Link to="/details">
      //           <Button
      //             onClick={() => this.props.handleDetail(id)}
      //             basic
      //             color="blue"
      //           >
      //             View
      //           </Button>
      //         </Link>
      //       </div>
      //     </Card.Content>
      //   </Card>
      // </Card.Group>
    );
  }
}

Item.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCard: PropTypes.bool
  }).isRequired
};

export default Item;
