import React from "react";



export default class ContactUs extends React.Component {

    render() {
        return (
            <div class="mapLayout">
                <div class="container-fluid padding20px">

                    <div class="col-lg-12">
                        <div class="col-lg-6">
                            <div class="panel panel-default blackTransperentColor addressInMap">                   
                                <div class="panel-body  addressInMap">
                                          <div class="text-center">
                                    <h1 class="robotoSlabHeading700">
                                    <span class="glyphicon glyphicon-map-marker onHoverGreen"></span>
                                    <strong class="onHoverwhite"> Our Office </strong>
                                    </h1>
                                 </div>
                                    <br />
                                    <br />
                                    <br />
                                <div class="panel AddressDesign">
                                    <ul class="list-group trasperentcOLOR noborders padding20px blackTransperentColor">
                                        <li class="list-group-item list-group-item-text noborders padding20px  robotoSlabHeading400 trasperentcOLOR"><span class="glyphicon glyphicon-road orangeColour"></span> :  3034 129th Avenue NE Blaine, Minnesota 55449</li>
                                        <li class="list-group-item robotoSlabHeading400 noborders padding20px trasperentcOLOR"> <span class="glyphicon glyphicon-earphone orangeColour"></span> :  (703) 1234 1234</li>
                                        <li class="list-group-item robotoSlabHeading400 noborders padding20px trasperentcOLOR "><span class="glyphicon glyphicon-send orangeColour"></span> <a href="mailto:info@octahedron.us" class="onHoverwhite"> :  info@octahedron.us</a></li>
                                    </ul>                    
                                </div>
                                  
                                </div>
                            </div>
                            </div>
                        <div class="col-lg-6">
                             <div class="panel panel-default blackTransperentColor"> 
                                <div class="panel-body text-center">
                                  <div id="map" class="map panel-body">
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        </div>

                </div>
            </div>

        );
    }
}



            // <div class="row mapLayout">
            // <div class="">
            //     <div class="col-lg-4 col-lg-offset-2 col-md-12 col-sm-10 col-sm-offset-2 center">
            //         <div id="map" class=""></div>
            //     </div>
            //     <div class="col-lg-4 col-lg-offset-2 col-md-12 col-sm-10 col-sm-offset-2">
            //         <h1>Hi there </h1>
            //         <h2>Rapol dipol</h2>
            //     </div>
            //     </div>
            // </div>

                        //   <div class="robotoSlabHeading400">
                        //                 "2217 Washington Blvd<br />
                        //                 Washington DC<br />
                        //                 <span class="glyphicon glyphicon-earphone orangeColour"></span> (703) 1234 1234<br />
                        //                  <br />
                        //             </div>