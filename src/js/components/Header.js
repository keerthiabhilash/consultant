import React from "react";



export default class Header extends React.Component {

    render() {
        return (
            <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

                <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div class="container">
                        <div class="navbar-header page-scroll">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="page-scroll " href="#page-top">
                           <div class="navbar-brand">
                            <h1 class="navbarHeadingTextColor"><span class="glyphicon glyphicon-globe"></span>&nbsp;TechVision-US <label class="navbarlinksColor400"><span class="glyphicon glyphicon-option-vertical"></span> Consulting Co.</label></h1>
                           
                            
                            </div>
                            </a>
                        </div>

                        <div class="collapse navbar-collapse navbar-ex1-collapse pull-right">
                            <ul class="nav navbar-nav">
                                <li class="hidden">
                                    <a class="page-scroll" href="#page-top"></a>
                                </li>
                                <li>
                                    <a class="page-scroll" href="#ourMission">
                                    <label class="customeFontSans500 navbarlinksColor"><span class="glyphicon glyphicon-user orangeColour"></span> About US</label></a>
                                </li>
                                <li>
                                <a class="page-scroll" href="#services">
                                    <label class="customeFontSans500 navbarlinksColor"><span class="glyphicon glyphicon-bullhorn orangeColour"></span> Services</label></a>
                                </li>
                                <li>
                                <a class="page-scroll" href="#services">
                                    <label class="customeFontSans500 navbarlinksColor"><span class="glyphicon glyphicon-road orangeColour"></span> Careers</label></a>
                                </li>
                                <li>
                                    <a class="page-scroll" href="#contactUs">
                                    <label class="customeFontSans500 navbarlinksColor">
                                    <span class="glyphicon glyphicon-envelope orangeColour"></span> Contact</label></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
