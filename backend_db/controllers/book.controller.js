const { books } = require("../connection")


exports.fetchBooks = async (req, res) => {
  
  const datas = await books.findAll()
    res.json({
      message : "Books fetched successfully",
      datas
    })
}

exports.addBooks = async (req, res) => {
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

}

exports.deleteBooks = async (req, res) => {
  const bookId = req.params.id
  await books.destroy({
    where: {
      id: bookId
    }
  })
  res.json({
    message : "Book deleted successfully",
    bookId
  })
}

exports.updateBooks = async (req, res) => {
  const bookId = req.params.id
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body

  books.update({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre
  }, {
    where: {
      id: bookId
    }
  }).then(() => {
    console.log("Book updated successfully")
  }).catch((err) => {
    console.log(err)
  })

  res.json({
    data : req.body,
  })
}


exports.fetchSingleBook = async (req, res) => {
  const bookId = req.params.id
  const book = await books.findByPk(bookId)
  if (!book) {
    return res.status(404).json({
      message : "Book not found",
      bookId
    })
  }
  res.json({
    message : "Book fetched successfully",
    book
  })
}