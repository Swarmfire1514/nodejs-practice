//table name - books
//Columns - bookName, bookPrice, bookAuthor,bookGenre

const bookModel = (Sequelize, DataTypes) => {
    const Book = Sequelize.define("books", {
        bookName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bookPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        bookAuthor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bookGenre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return Book
}

module.exports = bookModel