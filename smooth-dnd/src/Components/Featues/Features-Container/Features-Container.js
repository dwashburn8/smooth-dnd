import React, { Component } from "react"
import FeaturesButton from "../Features-Button/Features-Button"
import FeaturesMenu from "../Features-Menu/Features-Menu"


class FeaturesContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this);
        
    }

    handleMouseDown(event){
        this.toggleMenu();

        console.log("clicked");
        event.stopPropagation();
        
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });

    }
render() {
    return (
        <div>
        <FeaturesButton handleMouseDown={this.handleMouseDown}/>
        <FeaturesMenu onArrow={this.props.onArrow} handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
        
        </div>
    )
}
}
export default FeaturesContainer




