import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./parts/Cards";
import Carousel from "./parts/Carousel";
import ContactUs from "./parts/ContactUs";
import Services from "./parts/Services";
import Career from "./parts/Career";


export default class Body extends React.Component {

  render() {
    return (
      <div>
        <Header/>       
            <Carousel/>
            <Services/>
            <Career/>
            <ContactUs/>
        <Footer/>
      </div>
    );
  }
}
