import React from "react";

export default class Career extends React.Component {

    render() {
        return (

            <div id="career" class="carrerLayOut">
                <div class="cd-fixed-bg cd-bg-1">
                    <div class="careerContent">
                        <div class="container careerInfo">
                            <div class="row contactHeading text-center">
                                <h1 class="robotoSlabHeading700 text-center">Want to Join Us</h1>
                            </div>
                            <div class="row">
                                <div class="col-lg-7 col-md-12 col-sm-12">
                                    <div class="panel panel-default panel-danger borderOrange">
                                        <div class="panel-heading headingLayout text-center">Our Partners</div>
                                        <div class="panel-body">

                                            <div class="row padding15px ">
                                                <p class="paraLines">We have many years of industry experience in software designing and developing leading edge business solutions using development tools, technologies, platforms and architectures.With a majority of our clients spread across many domains</p>
                                            </div>
                                            <div class="row padding5px ">
                                                <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                    <img class="imagenIconsize" src="../../../icons/cart.svg" alt="..."/>
                                                    <label> 	&nbsp; Retail</label>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                    <img class="imagenIconsize" src="../../../icons/worldwide.svg" alt="..."/>
                                                    <label>	&nbsp; Logistics</label>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-6 text-center">
                                                    <img class="imagenIconsize" src="../../../icons/smartphone.svg" alt="..."/>
                                                    <label>	&nbsp; Telecommunications</label>
                                                </div>

                                            </div>
                                            <div class="row padding5px ">
                                                <div class="col-lg-4 col-md-6 col-sm-6 text-center">
                                                    <img class="imagenIconsize" src="../../../icons/insurance.svg" alt="..."/>
                                                    <label> 	&nbsp; Insurance</label>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-6 text-center">
                                                    <img class="imagenIconsize" src="../../../icons/prescription.svg" alt="..."/>
                                                    <label>	&nbsp; Healthcare</label>
                                                </div>

                                                <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                    <img class="imagenIconsize" src="../../../icons/finace.svg" alt="..."/>
                                                    <label>	&nbsp; Finance</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="panel panel-default panel-danger borderOrange">
                                        <div class="panel-heading headingLayout text-center">Job Openings</div>
                                        <div class="panel-body">

                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-12 col-sm-12">
                                    <div class="form-area">
                                        <form role="form">
                                            <h3 class="robotoSlabHeading700 text-center">Contact Form</h3>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="name" name="name" placeholder="Last , First Name  " required/>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="email" name="email" placeholder="Email" required/>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required/>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required/>
                                            </div>
                                            <div class="form-group">
                                                <textarea class="form-control" type="textarea" id="message" placeholder="Message" maxlength="140" rows="7"></textarea>
                                                <span class="help-block"><p id="characterLeft" class="help-block ">You have reached the limit</p></span>
                                            </div>
                                            <div class="text-center">
                                                <button type="button" id="submit" name="submit" class="btn btn-primary hvr-grow-shadow paraLines">Submit Form</button>
                                            </div>
                                        </form>
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