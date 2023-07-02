import  express  from "express";
import legacyRoutes from "./routes/legacy.js"
import cookieParser from "cookie-parser"
import cors from "cors";
import mysql from "mysql2/promise";
const app = express()
app.use(cors());
app.use(express.json())
app.use(cookieParser())

app.use("/api/legacy",legacyRoutes)
app.use("/",(req,res)=>{
    res.send('Conexion al API')
})


app.listen(8801,()=>{
    console.log("Conectado puerto 8801!")
})

// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Create MySQL connection pool
// const pool = mysql.createPool({
//     host: 'sql10.freesqldatabase.com',
//     user: 'sql10630077',
//     password: 'PLxe5fCgQd',
//     database: 'sql10630077',
//     connectTimeout: 20000,
// });

// // Test the database connection
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to the database: ', err);
//   } else {
//     console.log('Connected to the database.');
//     connection.release();
//   }
// });

// // Define API routes
// app.get('/api/data', (req, res) => {
//   // Execute MySQL query
//   pool.query('SELECT * FROM genero', (err, results) => {
//     if (err) {
//       console.error('Error executing query: ', err);
//       res.status(500).send('Error executing query');
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// // Start the server
// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });

// const insertInotDB = async() =>{
//     const connection = await mysql.createConnection({
//         host: 'sql10.freesqldatabase.com',
//         user:'sql10630077',
//         password:'PLxe5fCgQd',
//         database:'sql10630077',
//         port: 3306,
//     })
//     try {
//         await connection.query(
//             "select * from genero;"
            
//         )
//         onsole.log("se conecta")
//     } catch (e) {
//         console.log(e);
//     }
// };
// insertInotDB();