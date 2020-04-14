// import React, { Component } from "react";
// import { storeProducts, detailProduct } from "./data";

// const ProductContext = React.createContext();
// const ProductConsumer = ProductContext.Consumer;

// class ContextProductProvider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       storeProducts: [],
//       detailProduct: detailProduct
//     };
//   }
//   componentDidMount() {
//     this.SetStoreProducts();
//   }
//   SetStoreProducts = () => {
//     let tempProducts = [];
//     storeProducts.forEach(item => {
//       const singleItem = { ...item };
//       tempProducts = [...tempProducts, singleItem];
//     });
//     this.setState(() => {
//       return { storeProducts: tempProducts };
//     });
//   };

//   getItem = id => {
//     const product = this.state.storeProducts.find(item => {
//       return item.id === id;
//     });
//     return product;
//   };
//   handleDetail = id => {
//     const product = this.getItem(id);
//     this.setState(() => {
//       return { detailProduct: product };
//     });
//   };
//   addToCart = id => {
//     console.log(`hello from add to cart ${id}`);
//   };

//   render() {
//     return (
//       <ProductContext.Provider
//         value={{
//           ...this.state,
//           handleDetail: this.handleDetail,
//           addToCart: this.addToCart
//         }}
//       >
//         {this.props.children}
//       </ProductContext.Provider>
//     );
//   }
// }

// export { ContextProductProvider, ProductConsumer };
