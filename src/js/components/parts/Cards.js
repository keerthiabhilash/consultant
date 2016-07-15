import React from "react";



export default class Body extends React.Component {

  render() {
    return (
      <div class="row">
          <section id="intro" class="intro-section  container">
            <div class=" row">
              <div class=" imageFullResponsiveandCenter">
                <div class="col-lg-12 basicMarginForCards">
                  <h1 class="">Scrolling Nav</h1>
                  <p><strong>Usage Instructions: </strong> Make sure to include the <code>scrolling-nav.js</code>, <code>jquery.easing.min.js</code>, and <code>scrolling-nav.css</code> files.To make a link smooth scroll to another section on the page, give the link the <code>.page-scroll</code> class and set the link target to a corresponding ID on the page.</p>
                  <a class="btn btn-default page-scroll" href="#about">Click Me to Scroll Down!</a>
                </div>
              </div>
            </div>
          </section>

         <section class="container">
         <h1 class="row col-lg-12 basicMarginForCards">Hi there </h1>
         </section>
        </div>




    );
  }
}
