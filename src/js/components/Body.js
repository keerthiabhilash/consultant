import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./parts/Cards";


export default class Body extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Cards/>       
        <Footer/>
      </div>
    );
  }
}
