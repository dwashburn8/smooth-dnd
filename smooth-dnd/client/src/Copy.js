import React from 'react';
import ContainerTabs from "./Components/Tabs/Tabs"
import FileUpload from "./Components/File-Upload/File-Upload"
import ContactContainer from "./Components/Contact/Contact-Container/Contact-Container"
import ContentContainer from "./Components/Content/Content-Container/Content-Container"
import Features from "./Components/Featues/Features-Container/Features-Container"
import Gallery from "./Components/Gallery/Gallery-Container/Gallery-Container"
import Headers from "./Components/Headers/Header-Container/Header-Container"
import Footers from "./Components/Footers/Footer-Container/Footer-Container"
import Header from "./Components/Header/Header"

class Copy extends React.Component {
    constructor() {
        super()
        
        this.state={
            images:"images"
        }

    };

    onUpload = (event) => {
        this.setState({images:EventTarget})
    }
    
 render(){
        return (
            <>
                <Header />
                <div id="wrapper" >
                    <div className="container1 fixed">
                        <Headers />
                        <ContentContainer />
                        <Gallery />
                        <Features />
                        <ContactContainer />
                        <Footers />
                    </div>
                    <div id="container2">
                    <ContainerTabs />

                    </div>

                    <div>
                        <FileUpload onUpload={this.onUpload} />
                    </div>
                </div>
            </>
        );
    }

}

export default Copy;



    // handleAddPage() {
    //     var navLink = document.createElement("LI");
    //     var homePage = document.getElementById("homePage");
    //     var pageTitle = prompt("What would you like to name this page?", "Services Page");
    //     navLink.classList.add("nav-item");
    //     navLink.innerHTML = '<button onClick={this.handleClassSwitch} id="tab-tab2" role="tab" aria-selected="true" aria-controls="tabpanel-tab2" class="tab-link" style="">' + pageTitle + '</button>';
    //     navLink.classList.add("new-link")
    //     // navLink.style.padding="8px 0px 0px 10px";
    //     var count = homePage.childNodes.length;
    //     homePage.insertBefore(navLink, homePage.childNodes[count - 1])
    //     console.log(count);
    // }