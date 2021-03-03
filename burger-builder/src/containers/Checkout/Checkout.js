import React, { Component } from "react";
import { Route } from 'react-router-dom';

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from './ContactData/ContactData';
class Checkout extends Component {
  state = {
    ingredients: {},
  };

  componentDidMount(){
    console.log('Checkout DidMount')
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()){
      ingredients[param[0]] = +param[1]
    }
    this.setState({ingredients: ingredients});
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContiunedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContiuned={this.checkoutContiunedHandler}
        />
        <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
      </div>
    );
  }
}

export default Checkout;
