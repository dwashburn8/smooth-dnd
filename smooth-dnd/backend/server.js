const express = require("express");
const path = require("path");
const routes = require("./routes/index");
const PORT = process.env.PORT || 3001;
const app = express();
var multer = require('multer')
var cors = require('cors');
const mongoose = require("mongoose");
const fs = require('fs');
const multipartMiddleware = require('connect-multiparty')();
const publicFolder = "./public"
var count = 1;



// Define middleware here

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, "image" + count++ + ".png")
  }

})

var pdfStorage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, "pdf")
  },
  filename: function (req, file, cb) {
    cb(null,"project.pdf")
  }
})

var upload = multer({ storage: storage }).array('file')
var upload2 = multer({ storage: pdfStorage }).single('file')



  app.post('/upload', function (req, res) {

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)

  })
  // setTimeout(sendEmail, 500)
});


app.post('/pdfUpload', multipartMiddleware, (request, response) => {
  fs.readFile(request.files.pdf_file.path, (err, data) => {
      fs.writeFile(filePath, data, function (err) {
          if (err) throw err;
          response.send('Done')
      });
  })
})


// EMAIL SERVER CODE 



var nodemailer = require('nodemailer');


var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'soldbydw@gmail.com',
      pass: 'Brodie22'
    }
  });



  
  
  
  
  const sendEmail = () => {

    fs.readdir(publicFolder, (err, files) => {
      console.log(files.length);
      var fileLength = files.length;
      var attachments = [{}]
      if (fileLength > 0){
        attachments = [{
          path:"./public/image1.png"
        }]
      }
      if (fileLength > 1){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          }
      ]
      }
      if (fileLength > 2){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          }
      ]
      }
      if (fileLength > 3){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          }
      ]
      }
      if (fileLength > 4){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          }
      ]
      }
      if (fileLength > 5){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          },
          {
            path:"./public/image6.png"
          }
      ]
      }
      if (fileLength > 6){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          },
          {
            path:"./public/image6.png"
          },
          {
            path:"./public/image7.png"
          }
      ]
      }
      if (fileLength > 7){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          },
          {
            path:"./public/image6.png"
          },
          {
            path:"./public/image7.png"
          },
          {
            path:"./public/image8.png"
          }
      ]
      }
      if (fileLength > 8){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          },
          {
            path:"./public/image6.png"
          },
          {
            path:"./public/image7.png"
          },
          {
            path:"./public/image8.png"
          },
          {
            path:"./public/image9.png"
          }
      ]
      }
      if (fileLength > 9){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          },
          {
            path:"./public/image6.png"
          },
          {
            path:"./public/image7.png"
          },
          {
            path:"./public/image8.png"
          },
          {
            path:"./public/image9.png"
          },
          {
            path:"./public/image10.png"
          }
      ]
      }

      var mailOptions = {
        from: 'soldbydw@gmail.com',
        to: 'dallas@cybermark.com',
        subject: 'Sending Email via Node.js',
        text: 'That was easy!',
        attachments: attachments
      };
    
    
      mail.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


    })
  

  }


// Define API routes here

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api/index"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


