import React, { Component } from "react"
import GalleryButton from "../Gallery-Button/Gallery-Button"
import GalleryMenu from "../Gallery-Menu/Gallery-Menu"


class GalleryContainer extends Component {
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
        <GalleryButton handleMouseDown={this.handleMouseDown}/>
        <GalleryMenu onArrow={this.props.onArrow} handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
        
        </div>
    )
}
}
export default GalleryContainer




