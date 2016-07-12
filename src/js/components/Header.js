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
                            <a class="navbar-brand page-scroll " href="#page-top">
                            <label class="customeFontSans500 navbarTextColor">Tech Vision
                            </label></a>
                        </div>

                        <div class="collapse navbar-collapse navbar-ex1-collapse pull-right">
                            <ul class="nav navbar-nav">
                                <li class="hidden">
                                    <a class="page-scroll" href="#page-top"></a>
                                </li>
                                <li>
                                    <a class="page-scroll" href="#about">
                                    <label class="customeFontSans500 navbarlinksColor">About</label></a>
                                </li>
                                <li>
                                    <a class="page-scroll" href="#services">
                                    <label class="customeFontSans500 navbarlinksColor">Services</label></a>
                                </li>
                                <li>
                                    <a class="page-scroll" href="#contact">
                                    <label class="customeFontSans500 navbarlinksColor">Contact</label></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


   

            </div>
        );
    }
}
