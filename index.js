const express = require("express")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())


app.use("/api", require("./routes/mail"))

app.get("/", (req, res) => {
    res.send("Home page");
  });


// app.use(express.static(path.join(__dirname, "./client/build")))

// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, './client/build/index.html'))
// })

app.listen(8000, ()=>{
    console.log("Server is running on localhost: 8000" );
})