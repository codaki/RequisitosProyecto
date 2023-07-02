import mysql from "mysql"

export const db = mysql.createPool({
    host: 'sql10.freesqldatabase.com',
    user: 'sql10630077',
    password: 'PLxe5fCgQd',
    database: 'sql10630077',
  });
  
  // // Test the database connection
  // db.getConnection((err, connection) => {
  //   if (err) {
  //     console.error('Error connecting to the database: ', err);
  //   } else {
  //     console.log('Connected to the database.');
  //     connection.release();
  //   }
  // });