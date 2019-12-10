import React from "react";
import M from "materialize-css";


export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
    this.state ={
        src: this.props.src
    }
    }
    componentDidMount() {
        let elem = document.querySelector('.carousel');
        let instance = M.Carousel.init(elem, { duration: 200 });
      }
    render() {
        return (
            
        <h1 >{this.props.src}</h1>
        
        );
    }
}