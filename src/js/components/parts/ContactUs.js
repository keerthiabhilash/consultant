import React from "react";



export default class ContactUs extends React.Component {

    render() {
        return (

            <div id="contactUs" class="newcontactUsLayout">
                <div class="row">
                    <div class="col-lg-12 contactLayOut">
                        <div class="text-center">
                            <h1 class="robotoSlabHeading700">
                                <span class="glyphicon glyphicon-map-marker onHoverGreen"></span>
                                <strong class="onHoverwhite"> Our Contacts</strong>
                            </h1>
                        </div>
                        <br />

                       
                            <div class="row">
                             <div class="contactInfo">
                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h4 class="text-center whiteColor"><span class="glyphicon glyphicon-road orangeColour"></span> : 3034 129th Avenue NE Blaine, Minnesota 55449</h4>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h4 class="text-center whiteColor"> <span class="glyphicon glyphicon-send orangeColour"></span> <a href="mailto:info@octahedron.us" class="onHoverwhite"> : info @octahedron.us</a></h4>
                                </div>

                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h4 class="text-center whiteColor"><span class="glyphicon glyphicon-earphone orangeColour"></span> : (703) 1234 1234</h4>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div class="row paddingTop5vh">
                    <div id="map" class="mapLayOut">
                    </div>

                </div>





            </div>
        );
    }
}


            // <div id="contactUs" class="contactUsLayout">
            //     <div class="mapLayout">
            //         <div class="container-fluid padding20px">
            //             <div class="col-lg-12">
            //                 <div class="col-lg-6">
            //                     <div class="panel panel-default blackTransperentColor addressInMap">
            //                         <div class="panel-body  addressInMap">
            //                             <div class="text-center">
            //                                 <h1 class="robotoSlabHeading700">
            //                                     <span class="glyphicon glyphicon-map-marker onHoverGreen"></span>
            //                                     <strong class="onHoverwhite"> Our Office </strong>
            //                                 </h1>
            //                             </div>
            //                             <br />
            //                             <br />
            //                             <br />
            //                             <div class="panel AddressDesign">
            //                                 <ul class="list-group trasperentcOLOR noborders padding20px blackTransperentColor">
            //                                     <li class="list-group-item list-group-item-text noborders padding20px  robotoSlabHeading400 trasperentcOLOR"><span class="glyphicon glyphicon-road orangeColour"></span>: 3034 129th Avenue NE Blaine, Minnesota 55449</li>
            //                                     <li class="list-group-item robotoSlabHeading400 noborders padding20px trasperentcOLOR"> <span class="glyphicon glyphicon-earphone orangeColour"></span>: (703) 1234 1234</li>
            //                                     <li class="list-group-item robotoSlabHeading400 noborders padding20px trasperentcOLOR "><span class="glyphicon glyphicon-send orangeColour"></span> <a href="mailto:info@octahedron.us" class="onHoverwhite">: info @octahedron.us</a></li>
            //                                 </ul>
            //                             </div>

            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div class="col-lg-6">
            //                     <div class="panel panel-default blackTransperentColor">
            //                         <div class="panel-body text-center">
            //                             <div id="map" class="map panel-body">
            //                             </div>

            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>