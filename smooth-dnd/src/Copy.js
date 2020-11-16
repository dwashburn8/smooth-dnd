import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';
import ContactContainer from "./Components/Contact/Contact-Container/Contact-Container"
import ContentContainer from "./Components/Content/Content-Container/Content-Container"
import Features from "./Components/Featues/Features-Container/Features-Container"
import Gallery from "./Components/Gallery/Gallery-Container/Gallery-Container"
import Headers from "./Components/Headers/Header-Container/Header-Container"
import Footers from "./Components/Footers/Footer-Container/Footer-Container"
import XButton from "./Components/XButton/XButton"
import Header from "./Components/Header/Header"



class Copy extends Component {
    constructor() {
        super();

        this.state = {
            items2: generateItems(0, (i) => ({ id: '2' + i, data: `Draggable 2 - ${i}` }))

        }
    }

handleXButton (event, id)  {
    event.stopPropagation();
    event.preventDefault();
    const selectedDiv = event.target.parentElement;
    let parentDiv = selectedDiv.parentElement;
    parentDiv.remove();

} 
    render() {
        return (
            <>
            <Header/>
            <div id="wrapper" >
                <div className="container1 fixed">
                <Headers/>
                <ContentContainer/>
                <Gallery/>
                <Features/>
                <ContactContainer/>
                <Footers/>
                </div>
                <div id="container2">
                <a href={"/"} className="btn capital">Submit to Cybermark</a>
                    <Container dragClass="opacity-ghost" dropClass="opacity-ghost-drop" id="dropZone" groupName="1" getChildPayload={i => this.state.items2[i]} onDrop={e => this.setState({ items2: applyDrag(this.state.items2, e) })}
                        dropPlaceholder={{
                            animationDuration: 150,
                            showOnTop: true,
                            className: 'drop-preview'
                        }}
                        dropPlaceholderAnimationDuration={200}>
                        {
                            this.state.items2.map((p, i) => {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <XButton handleXButton={this.handleXButton}/>
                                        </div>
                                    </Draggable>
                                );
                            })
                        }
                    </Container>
                </div>

                <div>
                    <a href={"/"} className="btn">New Page +</a>
                </div>
            </div>
            </>
        );
    }
}

Copy.propTypes = {

};

export default Copy;