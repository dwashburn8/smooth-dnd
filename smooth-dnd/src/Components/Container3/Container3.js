import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from '../../utils';
import XButton from "../XButton/XButton"
import PDFGenerate from "../PDF-Generate/PDF-Generate"



class Container3 extends Component {
    constructor(props) {
        super(props);

    }



    handleXButton(event, id) {
        event.stopPropagation();
        event.preventDefault();

        const noScroll = () => {
            window.scrollTo(0, 0);
        }

        window.addEventListener("scroll", noScroll)
        const selectedDiv = event.target.parentElement;
        let parentDiv = selectedDiv.parentElement;
        let grandparent = parentDiv.parentElement
        grandparent.remove();
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
                                        <XButton handleXButton={this.handleXButton} />
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


export default Container3;