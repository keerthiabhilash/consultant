import React from "react";



export default class Footer extends React.Component {



  render() {
    return (
      <div>
        <nav class="navbar marginNone blackColor ">


          <div class="container">
           
              <div class="navbar-header">
                  <h4 class="orangeColour ">&copy; 2016 TechVision-US.</h4>
                  <p class="navbarlinksColor400">All right reserved.</p>
              </div>

              <div class="nav navbar-nav navbar-right socailNetworksLayout">
                <div class="text-center  ">


                  <a href="#"><i id="social-fb" class="fa fa-facebook-square fa-2x social orangeColour padding2px"></i></a>
                  <a href="#"><i id="social-tw" class="fa fa-twitter-square fa-2x social orangeColour padding2px"></i></a>
                  <a href="#"><i id="social-gp" class="fa fa-google-plus-square fa-2x social orangeColour padding2px"></i></a>
                  <a href="#"><i id="social-em" class="fa fa-envelope-square fa-2x social orangeColour padding2px"></i></a>
                </div>
                <p class="text-center navbarlinksColor400">Fallow Us.</p>

              </div>

            </div>
          
        </nav>
      </div>
    );
  }
}
