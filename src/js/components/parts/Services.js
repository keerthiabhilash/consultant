import React from "react";



export default class Services extends React.Component {

  render() {
    return (

      <div id="services" class="container-fluid serviceLayout">
        <h2 class="orangeColour text-center">Services</h2>
        <br/>
        <br/>
        <br/>
        <div class="row">
          <article class="service col-md-4 col-sm-6 col-xs-12">
            <img class="icon" src="../../../icons/cloud-computing-colour.svg" alt="Icon"></img>
            <h3 class="text-center">Cloud Computing</h3>
            <p>We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
          </article>
          <article class="service col-md-4 col-sm-6 col-xs-12">
            <img class="icon " src="../../../icons/database.svg" alt="Icon"></img>
            <h3 class="text-center">Data Base</h3>
            <p>We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
          </article>
          <article class="service col-md-4 col-sm-6 col-xs-12">
            <img class="icon" src="../../../icons/java-orange.svg" alt="Icon"></img>
            <h3 class="text-center">Programming</h3>
            <p>We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
          </article>
        </div>

        <div class="row">
          <article class="service col-md-4 col-sm-6 col-xs-12">
            <img class="icon" src="../../../icons/javascript.svg" alt="Icon"></img>
            <h3 class="text-center">User Interface</h3>
            <p>We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
          </article>
          <article class="service col-md-4 col-sm-6 col-xs-12">
            <img class="icon" src="../../../icons/server.svg" alt="Icon"></img>
            <h3 class="text-center">Server Admins</h3>
            <p>We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
          </article>
          <article class="service col-md-4 col-sm-6 col-xs-12">
            <img class="icon  orangeColour" src="../../../icons/graph.svg" alt="Icon"></img>
            <h3 class="text-center">Business solutions</h3>
            <p>We offer specialized care for reptiles, rodents, birds, and other exotic pets.</p>
          </article>

        </div>


      </div>








    );
  }


}