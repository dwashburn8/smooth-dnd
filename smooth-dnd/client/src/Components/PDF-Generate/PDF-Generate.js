import React from "react"
import jsPDF from 'jspdf'
// import API from "../../utils/API"
// import { useAuth0 } from '@auth0/auth0-react';
import Axios from "axios";

class PDFGenerate extends React.Component {
    // const { user } = useAuth0();    
    // const [values, setValues] = useState({ userName: props.userName, email: props.userEmail, projects: [] });
    // const [errors, setErrors] = useState({});
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }

 blobToFile = (theBlob, fileName) => {
        //A Blob() is almost a File() - it's just missing the two properties below which we will add
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
    }

    passPdf = () => {
        const dataForm = new FormData()
        dataForm.append('file', this.state.selectedFile)

        Axios.post("http://localhost:3001/pdfUpload", dataForm, {
            // receive two    parameter endpoint url ,form data

          })
    }



    generatePDF = () => {

        var data1 = [];
        var dataFromContainer1 = this.props.dataFromContainer1
        console.log(dataFromContainer1);
        dataFromContainer1.map((element) => {
            console.log(element.data);
            data1.push(element.data)
            return data1
        })
        var data2 = [];
        var dataFromContainer2 = this.props.dataFromContainer2
        console.log(dataFromContainer2);
        dataFromContainer2.map((element) => {
            console.log(element.data);
            data2.push(element.data)

        })
        var data3 = [];
        var dataFromContainer3 = this.props.dataFromContainer3
        console.log(dataFromContainer3);
        dataFromContainer3.map((element) => {
            console.log(element.data);
            data3.push(element.data)

        })
        var data4 = [];
        var dataFromContainer4 = this.props.dataFromContainer4
        console.log(dataFromContainer4);
        dataFromContainer4.map((element) => {
            console.log(element.data);
            data4.push(element.data)

        })
        var data5 = [];
        var dataFromContainer5 = this.props.dataFromContainer5
        console.log(dataFromContainer5);
        dataFromContainer5.map((element) => {
            console.log(element.data);
            data5.push(element.data)

        })
        var data6 = [];
        var dataFromContainer6 = this.props.dataFromContainer6
        console.log(dataFromContainer6);
        dataFromContainer6.map((element) => {
            console.log(element.data);
            data6.push(element.data)

        })
        var data7 = [];
        var dataFromContainer7 = this.props.dataFromContainer7
        console.log(dataFromContainer7);
        dataFromContainer7.map((element) => {
            console.log(element.data);
            data7.push(element.data);
        })

        var doc = new jsPDF('p', 'pt');
        doc.text(20, 20, data1);
        if (data2.length > 0) {
            doc.addPage();
            doc.text(20, 20, data2);
        }
        if (data3.length > 0) {
            doc.addPage();
            doc.text(20, 20, data3);
        }
        if (data4.length > 0) {
            doc.addPage();
            doc.text(20, 20, data4);
        }
        if (data5.length > 0) {
            doc.addPage();
            doc.text(20, 20, data5);
        }
        if (data6.length > 0) {
            doc.addPage();
            doc.text(20, 20, data6);
        }
        if (data7.length > 0) {
            doc.addPage();
            doc.text(20, 20, data7);
        }
        doc.save('demo.pdf');
        var res = btoa(doc.output())
        console.log(res);
        
        Axios.post("http://localhost:3001/pdfUpload", res).then((res) => {
            if(res.status === 'ok') console.log("Yeah!");
            else console.log(":(");
        })


        // API.saveUser(values)
        // .then(() => {
        //     console.log(values);

        // })
        // .catch(err => console.log(err)
        // )

    }

    render() {
        return (
            <div className="btn-container">
                <button id="pdfBtn" className="btn capital long" onClick={this.generatePDF} type="primary">Download PDF</button>
            </div>
        );

    }
}
export default PDFGenerate;



// var title1 = this.props.pageTitles;
// console.log(title1);
// // data1.push(title1)
// dataFromContainer1.map((element) => {
//     let elem = document.getElementById(element.data)
//     let ht = window.getComputedStyle(elem, null).getPropertyValue("background-image")
//     console.log(ht);
//     var mySubString = ht.substring(
//         ht.lastIndexOf('(') + 1,
//         ht.lastIndexOf(")")
//     );
//     var withoutQuotes = mySubString.replace(/^"(.+(?="$))"$/, '$1');
//     data1.push(withoutQuotes)

//     console.log(data1);




// var img = new Image()
// for (let i = 0; i < data1.length; i++) {
//     const picture = data1[i];

//     img.src=picture
//     doc.addImage(img, "png", 10,78,580,300);
//     doc.text(20,20," vcxvxcv")
// }