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

// let database=[
//     {"BookId":"b1","BookName":"Kỹ thuật lập trình cơ bản",
//     "Price":70,"Image":"b1.png"},
//     {"BookId":"b2","BookName":"Kỹ thuật lập trình nâng cao",
//     {"BookId":"b2","BookName":"Kỹ thuật lập trình nâng cao",
//     "Price":100,"Image":"b2.png"},
//     {"BookId":"b3","BookName":"Máy học cơ bản","Price":200,"Image":"b3.png"},
//     {"BookId":"b4","BookName":"Máy học nâng cao","Price":300,"Image":"b4.png"},
//     {"BookId":"b5","BookName":"Lập trình Robot cơ bản","Price":250,"Image":"b5.png"},
// ]

// app.get("/books",cors(),(req,res)=>{
//     res.send(database)
// })
// app.get("/books/:id",cors(),(req,res)=>{
//     id=req.params["id"]
//     let p=database.find(x=>x.BookId==id)
//     res.send(p)
// })
// app.post("/books",(req,res)=>{
//     database.push(req.body)
//     res.send(database)
// })

let database = [
  {
    BookId: "b1",
    BookName: "Giáo trình Tin Học Cơ Bản Windows XP gồm có 7 chương",
    Price: 26000.0,
    Description:
      "Nội dung của cuốn: Tin Học Cơ Bản Windows XP gồm có 7 chương: Chương 1: Một số vấn đề cơ bản. Chương 2: Sử dụng nhanh thanh công cụ và thanh thực đơn trong My Computer và Windows Explorer. Chương 3: Các thao tác trong windows XP. Chương 4: Các thiết lập trong Windows XP. Chương 5: Bảo trì máy tính. Chương 6: Các phím tắt Chương 7: Hỏi và đáp về Windows. Xin trân trọng giới thiệu cùng các bạn.",
    Image: "THCB.jpg",
    DayUpdated: "2014-10-25T12:00:00",
    StockQuantity: 120,
    CategoryId: "7",
    NXBId: "1",
  },
  {
    BookId: "b2",
    BookName: "Giáo trình Cơ Sở Dữ Liệu Với Visual Basic 2005 Và ADO.NET 2.0",
    Price: 12000.0,
    Description:
      "Cuốn sách này gồm 3 phần sau: Phần 1: Xử lý các bản trong Microsoft thiếu các nội dung sau: Chương 1: Căn bản về cơ sở dữ liệu. Chương 2: Các bộ kết nối và tương tác dữ liệu. Chương 3: Bộ chứa dữ liệu DataSet. Chương 4: Bộ đều hợp dữ liệu DataAdapter. Chương 5: Sử dụng các điều khiển ràng buộc dữ liệu. Chương 6: Tạo báo cáo với Crystal Report. Chương 7: ADO.NET và XML. Xin trân trọng giới thiệu cùng các bạn.",
    Image: "TH004.jpg",
    DayUpdated: "2013-10-23T12:00:00",
    StockQuantity: 25,
    CategoryId: "3",
    NXBId: "2",
  },
  {
    BookId: "b3",
    BookName:
      "Visual Basic 2005 Tập 3, Quyển 2: Lập Trình Web Với Cơ Sở Dữ Liệu",
    Price: 20000.0,
    Description:
      '"Visual Basic 2005 Tập 3, Quyển 2: Lập Trình Web Với Cơ Sở Dữ Liệu" sẽ cung cấp kỹ thuật và hướng dẫn ban: Tự học xây dựng ứng dụng Web quản lý CSDL toàn diện với ADO.NET 2.0 và ASP.NET. Khai thác các đối tượng và nguồn dữ liệu dành cho WebForm. Sử dụng các điều khiển dữ liệu đặc thù dành riêng cho ASP.NET và Web. Làm quen với những khái niệm về ý định liệu hoàn toàn mới. Ràng buộc dữ liệu với các thành phần giao diện Web Forms. Thiết kế dựng Web "Quản lý CD Shop" trực quan và thực tế. Cung cấp một kiến thức hoàn chỉnh về Web cho các bạn yêu thích ngôn ngữ Visual Basic và .NET FrameWork. Sách có kèm theo CD-ROM bài tập.',
    Image: "LTWeb2005.jpg",
    DayUpdated: "2014-09-16T12:00:00",
    StockQuantity: 240,
    CategoryId: "8",
    NXBId: "4",
  },
];

// GET all books
app.get("/books", (req, res) => {
  res.json(database);
});

// GET book by ID
app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const book = database.find((b) => b.BookId === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// POST create new book
app.post("/books", cors(), (req, res) => {
  console.log("Creating new book:", req.body);
  const newBook = {
    BookId: "b" + (database.length + 1),
    ...req.body,
    DayUpdated: new Date().toISOString(),
  };
  database.push(newBook);
  res.status(201).json({ message: "Book created successfully", book: newBook });
});

// PUT update book
app.put("/books/:id", cors(), (req, res) => {
  const bookId = req.params.id;
  const bookIndex = database.findIndex((b) => b.BookId === bookId);

  if (bookIndex !== -1) {
    database[bookIndex] = {
      ...database[bookIndex],
      ...req.body,
      BookId: bookId, // Ensure ID doesn't change
      DayUpdated: new Date().toISOString(),
    };
    res.json({
      message: "Book updated successfully",
      book: database[bookIndex],
    });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// DELETE book
app.delete("/books/:id", cors(), (req, res) => {
  const bookId = req.params.id;
  const bookIndex = database.findIndex((b) => b.BookId === bookId);

  if (bookIndex !== -1) {
    const deletedBook = database.splice(bookIndex, 1)[0];
    res.json({ message: "Book deleted successfully", book: deletedBook });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});