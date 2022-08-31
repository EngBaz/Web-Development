// get the client
import mysql from 'mysql2/promise';
const host = "127.0.0.1";
const dbUser = "root";
const dbPassword = "MyRootPassword";
const database = "my_store";

export async function getInventory(){
    const connection = await mysql.createConnection({host:host, user: dbUser, password: dbPassword, database: database});
    const [rows, fields] = await connection.execute('SELECT i1.quantity, i2.* FROM `inventory` i1 JOIN `items` i2 on i1.item_id = i2.item_id', []);
    return rows;
}