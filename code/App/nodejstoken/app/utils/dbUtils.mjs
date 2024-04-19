import mysql from "mysql2/promise";

host='db'
user='root'
password='root'
database='db_authentication'


const fs = require("fs");

fs.readFile("dbMpd.json", "utf-8", (err, data) => {
  let jsonData = JSON.parse(data);
  jsonData.forEach((mdp) => {
    console.log(`${mdp.city} population is ${mdp.population}`);
  });
});

const dbConfig = {
  host: host,
  user: user,
  password: password,
  database: database
};


export const connectToDatabase = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log("Connected to the database");
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};