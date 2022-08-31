// get the client
import mysql from 'mysql2/promise';
const host = "127.0.0.1";
const dbUser = "root";
const dbPassword = "MyRootPassword";
const database = "my_store";

export async function getUsername(username){
    const connection = await mysql.createConnection({host:host, user: dbUser, password: dbPassword, database: database});
    const [rows, fields] = await connection.execute('SELECT * FROM `users` WHERE `username` = ?', [username]);
    return rows;
}

export async function comparePassword(username, password){
    const connection = await mysql.createConnection({host:host, user: dbUser, password: dbPassword, database: database});
    const [rows, fields] = await connection.execute('SELECT * FROM `users` WHERE `username` = ? AND `password_hash` = ?', [username,password]);
    return rows;
}