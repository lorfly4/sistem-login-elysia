import { Elysia } from 'elysia'
import mysql, { QueryError, RowDataPacket } from 'mysql2'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Create MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testing"
})

// Handle connection error
connection.connect((err: QueryError | null) => {
  if (err) {
    console.error('Error connecting to the database:', err)
    process.exit(1)
  }
  console.log('Connected to the database')
})

const app = new Elysia()

// Type for users
interface User extends RowDataPacket {
  id: number
  username: string
  password: string
}

// Get all users
app.get('/users', ({ set }) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM `users`', (err: QueryError | null, results: User[]) => {
      if (err) {
        set.status = 500;
        reject({ error: err });
      } else {
        set.status = 200;
        resolve({
          message: 'Data berhasil diambil',
          users: results
        });
      }
    });
  });
});

// Login route
app.post('/login', async ({ body, set }) => {
  const { username, password } = body as { username: string, password: string };
  return new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM `users` WHERE `username` = ? AND `password` = ?',
      [username, password],
      (err: QueryError | null, results: User[]) => {
        if (err) {
          set.status = 500;
          reject({ error: err });
        }
        if (results.length === 0) {
          set.status = 400;
          resolve({ message: 'Invalid credentials' });
        } else {
          const user = results[0];
          set.status = 200;
          resolve({ message: 'Login successful', user });
        }
      }
    );
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
