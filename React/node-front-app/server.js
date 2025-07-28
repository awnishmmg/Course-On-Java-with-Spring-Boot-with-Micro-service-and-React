const express = require("express"); //external package
const path = require("node:path"); //node pre-installed

const app = express();
const PORT = 3000; //React Port : 3000

//make public,src part of static app
const public_path = express.static(path.join(__dirname, "public"));
const src_path = express.static(path.join(__dirname, "src"));

app.use(public_path);
app.use("/src", src_path);

//End Point
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function () {
  console.log("App Running in http://localhost:" + PORT);
});
