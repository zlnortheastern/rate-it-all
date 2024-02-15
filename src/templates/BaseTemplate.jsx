import React, { Component } from "react";
import NavBar from "../fragments/NavBar";
import PropTypes from "prop-types";
import Footer from "../fragments/Footer";

export default class BaseTemplate extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};