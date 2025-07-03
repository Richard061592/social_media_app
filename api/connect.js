import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"RrclneaeiehdsRvrj0$",
    database:"social"
})