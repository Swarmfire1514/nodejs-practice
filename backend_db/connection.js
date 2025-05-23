const { Sequelize, DataTypes } = require("sequelize");

const bookModel = require("./models/book.model.js")

const sequelize = new Sequelize("postgres", "postgres.zwavmabkwlcebcxqfbvz", "nEyYPXkXsg5G1Vet", {
  host: "aws-0-ap-south-1.pooler.supabase.com",
  port: 6543,
  dialect: "postgres",
});


sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.books=bookModel(sequelize,DataTypes)

sequelize.sync({ alter: false}) // Use { force: true } to drop and recreate tables (Risk for data loss)
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Error creating database & tables:", err);
  });

module.exports = db;