const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres.zwavmabkwlcebcxqfbvz", "nEyYPXkXsg5G1Vet", {
  host: "aws-0-ap-south-1.pooler.supabase.com",
  port: 6543,
  dialect: "postgres",
  logging: false,
});
//DATABASE_URL="postgresql://postgres.zwavmabkwlcebcxqfbvz:nEyYPXkXsg5G1Vet@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"

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

module.exports = db;