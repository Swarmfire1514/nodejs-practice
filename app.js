const express = require('express')
const { books } = require('./backend(db)/connection.js')
const app = express()
app.use(express.json())

app.get("/books", async (req, res) => {
  
  const datas = await books.findAll()
    res.json({
      message : "Books fetched successfully",
      datas
    })
})

app.post("/books", async (req, res) => {
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body
    console.log(bookAuthor)
    await books.create({
      bookName,
      bookPrice,
      bookAuthor,
      bookGenre
    })
    res.json({
      message : "Book added successfully",
      data : req.body
    })

})

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id
  // Here you would typically delete the book from a database
  res.status(204).send()
})

app.patch("/books/:id", (req, res) => {
  const bookId = req.params.id
  const updatedBook = req.body
  // Here you would typically update the book in a database
  res.status(200).json(updatedBook)
})

DATABASE_URL="postgresql://postgres.zwavmabkwlcebcxqfbvz:nEyYPXkXsg5G1Vet@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})