const express = require("express");
const app = express();
const port = 3000;
const morgan=require("morgan")
app.use(morgan("combined"))

const path = require("path");
app.use(express.static(path.join(__dirname, 'public')));

// Create default API
app.get("/", (req, res) => {
    res.send('Welcome to <font color="red"><b>K234111E!</b></font>');    
});

app.get("/about", (req, res) => {
    tb1 = "<table border='1'>"
    tb1 += "<tr>"
    tb1 += "<td>Student ID</td><td>K234111389</td>"
    tb1 += "</tr>"
    tb1 += "<tr>"
    tb1 += "<td>STUDENT Name</td><td>Le Thi My Hoa</td>"
    tb1 += "</tr>"
    tb1 += "<tr>"
    tb1 += "<td colspan='2'><img src='images/anhsv.jpg' width='500' height='400'/></td>"
    tb1 += "</tr>"
    tb1 += "</table>"
    res.send(tb1);
});

app.listen(port, () => {
    console.log(`My Server listening on port ${port}`);
});

const cors = require("cors");
app.use(cors());

let database=[
    {"BookId":"b1","BookName":"Kỹ thuật lập trình cơ bản",
    "Price":70,"Image":"b1.png"},
    {"BookId":"b2","BookName":"Kỹ thuật lập trình nâng cao",
    "Price":100,"Image":"b2.png"},
    {"BookId":"b3","BookName":"Máy học cơ bản","Price":200,"Image":"b3.png"},
    {"BookId":"b4","BookName":"Máy học nâng cao","Price":300,"Image":"b4.png"},
    {"BookId":"b5","BookName":"Lập trình Robot cơ bản","Price":250,"Image":"b5.png"},
]
app.get("/books",cors(),(req,res)=>{
    res.send(database)
})