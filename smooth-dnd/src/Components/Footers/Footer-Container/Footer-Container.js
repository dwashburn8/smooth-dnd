import React, { Component } from "react"
import FooterButton from "../Footer-Button/Footer-Button"
import FooterMenu from "../Footer-Menu/Footer-Menu"


class FooterContainer extends Component {
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
        <FooterButton handleMouseDown={this.handleMouseDown}/>
        <FooterMenu onArrow={this.props.onArrow} handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
        
        </div>
    )
}
}
export default FooterContainer




