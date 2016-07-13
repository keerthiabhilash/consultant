import React from "react";

export default class Carousel extends React.Component{

 render() {
  return (


<div >

  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>

  
    <div class="carousel-inner" role="listbox">

      <div class="item active">
        <img src="../../../images/aboutUs.jpg" alt="Chania" ></img>
        <div class="carousel-caption basicMarginForCards">
          <h3 class="navbarHeadingTextColor">about US</h3>
          <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
        </div>
      </div>
          
      <div class="item">
        <img src="../../../images/start0.jpg" alt="Flower" ></img>
        <div class="carousel-caption basicMarginForCards">
          <h3 class="navbarHeadingTextColor">Flowers</h3>
          <p>Beatiful flowers in Kolymbari, Crete.</p>
        </div>
      </div>

      <div class="item">
        <img src="../../../images/start2.jpg" alt="Flower" ></img>
        <div class="carousel-caption basicMarginForCards">
          <h3 class="navbarHeadingTextColor">Something</h3>
          <p>Beatiful flowers in Kolymbari, Crete.</p>
        </div>
      </div>


  
    </div>

   
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>



  );



 }

}