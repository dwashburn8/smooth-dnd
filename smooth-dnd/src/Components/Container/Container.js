import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import XButton from "../XButton/XButton"




class Container1 extends Component {

    handleXButton(event, id) {
        event.stopPropagation();
        event.preventDefault();

        const noScroll = () => {
            window.scrollTo(0, 0);
        }

        window.addEventListener("scroll", noScroll)
        const selectedDiv = event.target.parentElement;
        let parentDiv = selectedDiv.parentElement;
        console.log(parentDiv.id);
        parentDiv.remove();
        window.removeEventListener('scroll', noScroll);
    }



    render() {
        return (
            <> 
                <Container dragClass="opacity-ghost" dropClass="opacity-ghost-drop" id="dropZone" groupName="1" getChildPayload={this.props.getChildPayload} onDrop={this.props.onDrop}
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}>
                    {
                        this.props.generateItems.map((p, i) => {
                            return (
                                <Draggable key={i}>
                                    <div id={p.data} className="draggable-item">
                                        <XButton removeElement={this.props.removeElement1} handleXButton={this.handleXButton} />
                                    </div>
                                </Draggable>
                            );
                        })
                    }
                </Container>
            </>


        );
    }
}


export default Container1;