import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';
import ContactContainer from "./Components/Contact-Container/Contact-Container"



class Copy extends Component {
    constructor() {
        super();

        this.state = {
            items1: generateItems(5, (i) => ({ id: '1' + i, data: `Source Draggable - ${i}` })),
            items2: generateItems(1, (i) => ({ id: '2' + i, data: `Draggable 2 - ${i}` })),

        }
    }
    render() {
        return (
            <div id="wrapper" >
                <ContactContainer/>
                <div id="container2">
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
                                        <div className="draggable-item">
                                            {p.data}
                                        </div>
                                    </Draggable>
                                );
                            })
                        }
                    </Container>
                </div>
            </div>
        );
    }
}

Copy.propTypes = {

};

export default Copy;