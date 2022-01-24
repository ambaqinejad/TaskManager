const { Sequelize } = require("sequelize");
require("dotenv").config();

console.log(process.env.DB_NAME,
    process.env.DB_USERNAME,process.env.DB_PASSWORD);

const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: "localhost",
        dialect: "mysql",
    },
);

(async () => {
    try {
        await connection.authenticate();
        console.log("Database connection was established successfully.");
    } catch (error) {
        console.log(error.message);
        console.log("Could not connect to the database.");
        process.exit(1);
    }
})();
