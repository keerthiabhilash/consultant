import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./parts/Cards";
import Carousel from "./parts/Carousel";
import ContactUs from "./parts/ContactUs";


export default class Body extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        
            <Carousel/>
     
            <ContactUs/>
        <Footer/>
      </div>
    );
  }
}
