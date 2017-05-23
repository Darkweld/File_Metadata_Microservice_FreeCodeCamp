var express = require("express");
var app = express();
var multer  = require('multer');
var upload = multer();

app.set("view engine", "ejs");
app.use(express.static("css"));


app.get("/",  function(req, res) {
    res.render("index");
});

app.post("/upload",upload.single('upload'), function(req, res) {
    if (req.file === undefined) return res.send("<p style = 'color: red;'>No file submitted, please try again.</p>");
    var obj = {
        filesize:req.file.size
    };
    res.json(obj);
});

app.listen(process.env.PORT || 8080, function() {
    console.log("listening");
});