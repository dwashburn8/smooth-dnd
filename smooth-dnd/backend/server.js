const express = require("express");
const path = require("path");
const routes = require("./routes/index");
const PORT = process.env.PORT || 3001;
const app = express();
var multer = require('multer')
var cors = require('cors');
const mongoose = require("mongoose");


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
    cb(null, Date.now() + '-' + file.originalname)
  }
})


var upload = multer({ storage: storage }).array('file')


app.post('/upload', function (req, res) {

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)

  })

});
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


