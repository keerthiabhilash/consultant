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
                                <div class="col-lg-6 col-md-12 col-sm-12">

                                   
                                        <p class="paraLines text-center">We have many years of industry experience in software designing and developing leading edge business solutions using development tools, technologies, platforms and architectures.With a majority of our clients spread across many domains</p>


                                       
                                            <img class="imagenIconsize" src="../../../icons/database.svg" alt="..."/>
                                            <div class="caption">
                                                <h3>Thumbnail label</h3>

                                    

                                       
                                    </div>

                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12">
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

                                            <button type="button" id="submit" name="submit" class="btn btn-primary hvr-grow-shadow paraLines">Submit Form</button>
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