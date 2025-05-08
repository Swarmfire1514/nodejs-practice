const express = require('express')
const app = express()

require("./backend(db)/connection.js")

app.get("/books", (req, res) => {
  res.json([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
  ])
})

app.post("/books", (req, res) => {
  const newBook = req.body
  // Here you would typically save the new book to a database
  res.status(201).json(newBook)
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