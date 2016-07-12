import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/Body"
//import AJAXHelper from 'react-ajax';

class Layout extends React.Component {

    constructor() {
        super();
        this.state = { employees: [] };

    }
    componentDidMount() {
        $.get('../data/pageData.json', function (result) {
            var lastGist = result;
            this.setState(
                lastGist.employees[0]
            )
        }.bind(this));


         console.log(this.state);




    }


    render() {
        return (
            <Body data={this.state}/>
        );
    }
}
const app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);
