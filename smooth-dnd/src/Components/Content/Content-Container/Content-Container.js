import React, { Component } from "react"
import ContentButton from "../Content-Button/Content-Button"
import ContentMenu from "../Content-Menu/Content-Menu"


class ContentContainer extends Component {
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
        <ContentButton handleMouseDown={this.handleMouseDown}/>
        <ContentMenu onArrow={this.props.onArrow}  handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
        </div>
    )
}
}
export default ContentContainer




