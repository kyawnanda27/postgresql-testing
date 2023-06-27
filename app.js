/*const { Pool } = require ("pg");

const pool = new Pool({
    host: "localhost",
    port: 5434,
    user: "knd",
    password: "2782001knd",
    database: "studentscores"
});

pool.query("SELECT * FROM student", (error, result) => {
    if(error){
        console.error("error:", error);
    } else {
        console.log(result.rows)
    }
});*/

const express = require("express");
const PORT = 8080;
const app = express();

app.use(express.json());
app.use("/api", require("./api"));

const serverRun = () => {
    const server = app.listen(PORT, () => {
        console.log(`Live on port: ${PORT}`);
    });
};
serverRun();