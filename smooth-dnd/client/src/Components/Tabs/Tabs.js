import React, { Component } from 'react';
import { Tabs, TabLink, TabContent } from "react-tabs-redux"
import Container1 from "../Container/Container"
import Container2 from "../Container2/Container2"
import Container3 from "../Container3/Container3"
import Container4 from "../Container4/Container4"
import Container5 from "../Container5/Container5"
import Container6 from "../Container6/Container6"
import Container7 from "../Container7/Container7"
import { applyDrag, generateItems } from '../../utils';
import PDFGenerate from "../PDF-Generate/PDF-Generate"
var pageTitles = []

const styles = {
    activeLinkStyle: {
        backgroundColor: "white",
        color:"teal"
    }
}


class ContainerTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName : this.props.name,
            userEmail: this.props.email,
            items2: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 2 - ${i}` })),
            items3: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 3 - ${i}` })),
            items4: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 4 - ${i}` })),
            items5: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 5 - ${i}` })),
            items6: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 6 - ${i}` })),
            items7: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 7 - ${i}` })),
            items8: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 8 - ${i}` }))
        }
    }

    removeElement1 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items2];
        var elementPosition = array.map(function(x){
            console.log(x.data)
            return x.data }).indexOf(grandparent.id);
            console.log(grandparent.id);
        if(array !== -1){
            array.splice(elementPosition, 1);
            this.setState({items2: array})
        }
    }

    getChildPayload1 = (i) => {
        return (
            this.state.items2[i]
        )
    }

    onDrop1 = (e) => {
        this.setState({ items2: applyDrag(this.state.items2, e) })
    }

    removeElement2 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items3];
        var elementPosition = array.map(function(x){
            console.log(x.data)
            return x.data }).indexOf(grandparent.id);
            console.log(grandparent.id);
        if(array !== -1){
            array.splice(elementPosition, 1);
            this.setState({items3: array})
        }
    }

    getChildPayload2 = (i) => {
        return (
            this.state.items3[i]
        )
    }

    onDrop2 = (e) => {
        this.setState({ items3: applyDrag(this.state.items3, e) })
    }

    removeElement3 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items4];
        var elementPosition = array.map(function(x){
            console.log(x.data)
            return x.data }).indexOf(grandparent.id);
            console.log(grandparent.id);
        if(array !== -1){
            array.splice(elementPosition, 1);
            this.setState({items4: array})
        }
    }

    getChildPayload3 = (i) => {
        return (
            this.state.items4[i]
        )
    }

    onDrop3 = (e) => {
        this.setState({ items4: applyDrag(this.state.items4, e) })
    }

    removeElement4 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items5];
        var elementPosition = array.map(function(x){
            console.log(x.data)
            return x.data }).indexOf(grandparent.id);
            console.log(grandparent.id);
        if(array !== -1){
            array.splice(elementPosition, 1);
            this.setState({items5: array})
        }
    }

    
    getChildPayload4 = (i) => {
        return (
            this.state.items5[i]
        )
    }

    onDrop4 = (e) => {
        this.setState({ items5: applyDrag(this.state.items5, e) })
    }

    removeElement5 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items6];
        var elementPosition = array.map(function(x){
            console.log(x.data)
            return x.data }).indexOf(grandparent.id);
            console.log(grandparent.id);
        if(array !== -1){
            array.splice(elementPosition, 1);
            this.setState({items6: array})
        }
    }
    
    getChildPayload5 = (i) => {
        return (
            this.state.items6[i]
        )
    }

    onDrop5 = (e) => {
        this.setState({ items6: applyDrag(this.state.items6, e) })
    }


    removeElement6 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items7];
        var elementPosition = array.map(function(x){
            console.log(x.data)
            return x.data }).indexOf(grandparent.id);
            console.log(grandparent.id);
        if(array !== -1){
            array.splice(elementPosition, 1);
            this.setState({items7: array})
        }
    }

    getChildPayload6 = (i) => {
        return (
            this.state.items7[i]
        )
    }

    onDrop6 = (e) => {
        this.setState({ items7: applyDrag(this.state.items7, e) })
    }

    removeElement7 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items8];
        var elementPosition = array.map(function(x){
            console.log(x.data)
            return x.data }).indexOf(grandparent.id);
            console.log(grandparent.id);
        if(array !== -1){
            array.splice(elementPosition, 1);
            this.setState({items8: array})
        }
    }

    getChildPayload7 = (i) => {
        return (
            this.state.items8[i]
        )
    }

    onDrop7 = (e) => {
        this.setState({ items8: applyDrag(this.state.items8, e) })
    }

    

    handleNameSwitch(event) {
        event.preventDefault();

        if (event.target.dataset.clicks == 0) {

            var pageTitle = prompt("What would you like to name this page?", "");
            if (pageTitle === null){
                return 
            }
            if (pageTitle.length < 1) {
                pageTitle = "Page"
            }

            var divId = event.target.id;
            // console.log(divId);
            var selectedDiv = document.getElementById(divId)
            selectedDiv.innerHTML = pageTitle;
            
            var element = event.target
            element.setAttribute("data-clicks", 1)
            pageTitles.push(pageTitle)

        }

        if (divId == "tab-tab2" && event.target.dataset.clicks == 1) {
            var link3 = document.getElementById("link-3")
            link3.style.visibility = "visible"
        }

        if (divId == "tab-tab3" && event.target.dataset.clicks == 1) {
            var link4 = document.getElementById("link-4")
            link4.style.visibility = "visible"
        }

        if (divId == "tab-tab4" && event.target.dataset.clicks == 1) {
            var link5 = document.getElementById("link-5")
            link5.style.visibility = "visible"
        }

        if (divId == "tab-tab5" && event.target.dataset.clicks == 1) {
            var link6 = document.getElementById("link-6")
            link6.style.visibility = "visible"
        }

        if (divId == "tab-tab6" && event.target.dataset.clicks == 1) {
            var link7 = document.getElementById("link-7")
            link7.style.visibility = "visible"
        }




    }


    render() {
        return (
            <>
                <PDFGenerate 
                userName={this.state.userName}
                userEmail= {this.state.userEmail}
                dataFromContainer1={this.state.items2}
                dataFromContainer2={this.state.items3}
                dataFromContainer3={this.state.items4}
                dataFromContainer4={this.state.items5}
                dataFromContainer5={this.state.items6}
                dataFromContainer6={this.state.items7}
                dataFromContainer7={this.state.items8}
                pageTitles={this.pageTitles} />
                <br/>
                <Tabs
                activeLinkStyle={styles.activeLinkStyle}
                >
                    <ul id="homePage">
                        <li className="nav-item" >
                            <TabLink to="tab1">Home Page</TabLink>
                        </li>
                        <li className="nav-item" id="link-2">
                            <TabLink data-clicks={0} onClick={this.handleNameSwitch} to="tab2">+</TabLink>
                        </li>
                        <li className="nav-item" id="link-3" >
                            <TabLink data-clicks={0} onClick={this.handleNameSwitch} to="tab3">+</TabLink>
                        </li>
                        <li className="nav-item" id="link-4" >
                            <TabLink data-clicks={0} onClick={this.handleNameSwitch} to="tab4">+</TabLink>
                        </li>
                        <li className="nav-item" id="link-5">
                            <TabLink data-clicks={0} onClick={this.handleNameSwitch} to="tab5">+</TabLink>
                        </li>
                        <li className="nav-item" id="link-6" >
                            <TabLink data-clicks={0} onClick={this.handleNameSwitch} to="tab6">+</TabLink>
                        </li>
                        <li className="nav-item" id="link-7">
                            <TabLink data-clicks={0} onClick={this.handleNameSwitch} to="tab7">+</TabLink>
                        </li>
                    </ul>
                    <TabContent for="tab1">
                        <Container1
                            onDrop={this.onDrop1}
                            getChildPayload={this.getChildPayload1}
                            generateItems={this.state.items2}
                            removeElement={this.removeElement1}
                        />
                    </TabContent>
                    <TabContent for="tab2">
                        <Container2
                            onDrop={this.onDrop2}
                            getChildPayload={this.getChildPayload2}
                            generateItems={this.state.items3}
                            removeElement={this.removeElement2}
                        />
                    </TabContent>
                    <TabContent for="tab3">
                        <Container3
                            onDrop={this.onDrop3}
                            getChildPayload={this.getChildPayload3}
                            generateItems={this.state.items4}
                            removeElement={this.removeElement3}
                        />
                    </TabContent>
                    <TabContent for="tab4">
                        <Container4
                            onDrop={this.onDrop4}
                            getChildPayload={this.getChildPayload4}
                            generateItems={this.state.items5}
                            removeElement={this.removeElement4}
                        />
                    </TabContent>
                    <TabContent for="tab5">
                        <Container5
                            onDrop={this.onDrop5}
                            getChildPayload={this.getChildPayload5}
                            generateItems={this.state.items6}
                            removeElement={this.removeElement5}
                        />
                    </TabContent>
                    <TabContent for="tab6">
                        <Container6
                            onDrop={this.onDrop}
                            getChildPayload={this.getChildPayload6}
                            generateItems={this.state.items7}
                            removeElement={this.removeElement6}
                        />
                    </TabContent>
                    <TabContent for="tab7">
                        <Container7
                            onDrop={this.onDrop7}
                            getChildPayload={this.getChildPayload7}
                            generateItems={this.state.items8}
                            removeElement={this.removeElement7}
                        />
                    </TabContent>
                </Tabs>



            </>
        );
    }
}

export default ContainerTabs;



