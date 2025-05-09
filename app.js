const express = require('express')
const app = express()
const bookRoutes = require("./routes/bookRoutes.js")
app.use(express.json())


/*app.get("/books", fetchBooks)

app.post("/books", addBooks)

app.delete("/books/:id", deleteBooks)

app.patch("/books/:id", updateBooks)*/

app.use("/api", bookRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})