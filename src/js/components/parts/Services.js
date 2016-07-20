import React from "react";

import LearnMore from "./LearnMore";


export default class Services extends React.Component {

  render() {
    return (

      <div id="ourMission" class="container-fluid serviceLayout">


        <div id="" class="row">
          <div class="col-lg-12">
            <h1 class="robotoSlabHeading700 text-center">About Us</h1>
            <div class="padding15px">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p class="paraLines">TechVisionCo is a consulting and technology services company that thrives on leveraging cutting-edge technology to kindle, strengthen and drive staggering business value.</p>
             
              <p class="paraLines">Catering to all Technical needs of top-notch Fortune 500 companies, mid-size companies and public sector entities across the United States, TechVisionCo's strength lies in its talented IT and consulting professionals. TechVisionCo's' expertise is spread over various technologies encapsulating software and Apllication development, cloud computing, database management, Quality Assurance and UI Development and reporting tools. We have been an integral part of major Application devlopments and IT implementation in U.S, TechVisionCo has made a special mark for itself in a very short span</p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                <p class="paraLines">We leave no stone unturned in nurturing, guiding and supporting our talented consultant pool in making sound career choices. At TechVisionCo we are committed to providing equal opportunities maintaining highest ethical standards in hiring process, in providing sustained growth opportunities to all entities in the organization. We encourage an open, honest and informal way of communication</p>
                <p class="paraLines">Work with us to realize higher returns on investments through the potential of our business systems.</p>               
              </div>
            </div>
          </div>
        </div>


        <div id="services" class="servicespadding20vh">
              <h1 class="robotoSlabHeading700 text-center">Services</h1>
          <br/>
          <div class="row padding15px">

            <article class="service col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
              <img class="icon" src="../../../icons/java-orange.svg" alt="Icon"></img>
              <h3 class="text-center ">Application Development</h3>
              <div class="listToCenter">
                <p class="text-center paraLines">We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
                <p class="alignCenter  text-center paraLines"><a href="#applicationDev" data-toggle="modal" class="btn btn-primary hvr-grow-shadow " role="button">Learn More</a></p>
              </div>
            </article>


            <article class="service col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
              <img class="icon" src="../../../icons/javascript.svg" alt="Icon"></img>
              <h3 class="text-center">Web Design & Support</h3>

              <div class="listToCenter">
                <p class="text-center paraLines">We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
                <p class="text-center paraLines"><a href="#webTech" data-toggle="modal" class="btn btn-primary hvr-grow-shadow" role="button">Learn More</a></p>
              </div>
            </article>
          </div>

          <div class="row padding15px">

            <article class="service col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
              <img class="icon " src="../../../icons/database.svg" alt="Icon"></img>
                    <h3 class="text-center">Data Engineering</h3>
              <div class="listToCenter">       
                <p class="text-center paraLines">We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
                <p class="text-center paraLines"><a href="#database" data-toggle="modal" class="btn btn-primary hvr-grow-shadow" role="button">Learn More</a></p>
              </div>
            </article>


            <article class="service col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
              <img class="icon" src="../../../icons/cloud-computing-colour.svg" alt="Icon"></img>
              <h3 class="text-center">Cloud Computing</h3>
              <div class="listToCenter ">
                <p class="text-center paraLines">We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
                <p class="text-center paraLines"><a href="#cloud" data-toggle="modal" class="btn btn-primary hvr-grow-shadow" role="button">Learn More</a></p>
              </div>
            </article>

            <article class="service col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
              <img class="icon" src="../../../icons/server.svg" alt="Icon"></img>
              <h3 class="text-center">Infrastructure Engineer</h3>
              <div class="listToCenter">
                <p class="text-center paraLines">We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
                <p class="text-center paraLines"><a href="#networkSystemAdmin" data-toggle="modal" class="btn btn-primary hvr-grow-shadow" role="button">Learn More</a></p>
              </div>
            </article>




          </div>
        </div>
        <LearnMore/>
      </div>








    );
  }


}


            // <article class="service col-lg-3 col-md-6 col-sm-12 col-xs-12">
            //   <img class="icon " src="../../../icons/graph.svg" alt="Icon"></img>
            //   <h3 class="text-center">Project Management</h3>
            //   <div class="listToCenter">
            //     <p class="text-center">We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
            //     <p class="text-center"><a href="#projectMang" data-toggle="modal" class="btn btn-primary hvr-grow-shadow" role="button">Learn More</a></p>
            //   </div>
            // </article>






