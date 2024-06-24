import { Elysia } from 'elysia'
import mysql, { QueryError, RowDataPacket } from 'mysql2'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Create MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "bagusbim_root",
  password: "Akugataumales1@",
  database: "bagusbim_testing",
  port: "3306"
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

interface mapel extends RowDataPacket{
  id: number
  materi: string
  status: string
  summary: string
}

interface absen extends RowDataPacket{
  id: number
  nama: string
  status: string
  keterangan: string
}

//absen
app.post('/absen', ({ body, set }) => {
  const { nama, status, keterangan } = body as { nama: string, status: string, keterangan: string };

  return new Promise((resolve, reject) => {
        connection.query(
          'INSERT INTO `absen` (`nama`, `status`, `keterangan`) VALUES (?, ?, ?)',
          [nama, status, keterangan],
          (err) => {
            if (err) {
              set.status = 500;
              reject({ error: err });
              return;
            }

            set.status = 201;
            resolve({ message: 'input berhasil' });
          }
        );
      }
    );
  });

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


app.post('/register', ({ body, set }) => {
  const { username, password, nama, } = body as { username: string, password: string, nama: string, };

  return new Promise((resolve, reject) => {
    // Periksa apakah username sudah digunakan
    connection.query(
      'SELECT * FROM `users` WHERE `username` = ?',
      [username],
      (err, results: User[]) => {
        if (err) {
          set.status = 500;
          reject({ error: err });
          return;
        }

        if (results.length > 0) {
          set.status = 400;
          resolve({ message: 'Username already exists' });
          return;
        }

        // Jika username belum digunakan, lakukan registrasi
        connection.query(
          'INSERT INTO `users` (`username`, `password`, `nama`) VALUES (?, ?, ?)',
          [username, password, nama],
          (err) => {
            if (err) {
              set.status = 500;
              reject({ error: err });
              return;
            }

            set.status = 201;
            resolve({ message: 'Registration successful' });
          }
        );
      }
    );
  });
});


app.post('/inggris', ({ body, set }) => {
  const { materi, status, summary } = body as { materi: string, status: string, summary: string };

  return new Promise((resolve, reject) => {
        connection.query(
          'INSERT INTO `bahasa_inggris` (`materi`, `status`, `summary`) VALUES (?, ?, ?)',
          [materi, status, summary],
          (err) => {
            if (err) {
              set.status = 500;
              reject({ error: err });
              return;
            }

            set.status = 201;
            resolve({ message: 'input berhasil' });
          }
        );
      }
    );
  });


  app.post('/rpl', ({ body, set }) => {
    const { materi, status, summary } = body as { materi: string, status: string, summary: string };
  
    return new Promise((resolve, reject) => {
          connection.query(
            'INSERT INTO `rpl` (`materi`, `status`, `summary`) VALUES (?, ?, ?)',
            [materi, status, summary],
            (err) => {
              if (err) {
                set.status = 500;
                reject({ error: err });
                return;
              }
  
              set.status = 201;
              resolve({ message: 'input berhasil' });
            }
          );
        }
      );
    });


    app.post('/ipa', ({ body, set }) => {
      const { materi, status, summary } = body as { materi: string, status: string, summary: string };
    
      return new Promise((resolve, reject) => {
            connection.query(
              'INSERT INTO `ipa` (`materi`, `status`, `summary`) VALUES (?, ?, ?)',
              [materi, status, summary],
              (err) => {
                if (err) {
                  set.status = 500;
                  reject({ error: err });
                  return;
                }
    
                set.status = 201;
                resolve({ message: 'input berhasil' });
              }
            );
          }
        );
      });


      app.post('/pkk', ({ body, set }) => {
        const { materi, status, summary } = body as { materi: string, status: string, summary: string };
      
        return new Promise((resolve, reject) => {
              connection.query(
                'INSERT INTO `pkk` (`materi`, `status`, `summary`) VALUES (?, ?, ?)',
                [materi, status, summary],
                (err) => {
                  if (err) {
                    set.status = 500;
                    reject({ error: err });
                    return;
                  }
      
                  set.status = 201;
                  resolve({ message: 'input berhasil' });
                }
              );
            }
          );
        });


        app.post('/pendidikan_agama', ({ body, set }) => {
          const { materi, status, summary } = body as { materi: string, status: string, summary: string };
        
          return new Promise((resolve, reject) => {
                connection.query(
                  'INSERT INTO `pendidikan_agama` (`materi`, `status`, `summary`) VALUES (?, ?, ?)',
                  [materi, status, summary],
                  (err) => {
                    if (err) {
                      set.status = 500;
                      reject({ error: err });
                      return;
                    }
        
                    set.status = 201;
                    resolve({ message: 'input berhasil' });
                  }
                );
              }
            );
          });


          app.post('/matematika', ({ body, set }) => {
            const { materi, status, summary } = body as { materi: string, status: string, summary: string };
          
            return new Promise((resolve, reject) => {
                  connection.query(
                    'INSERT INTO `matematika` (`materi`, `status`, `summary`) VALUES (?, ?, ?)',
                    [materi, status, summary],
                    (err) => {
                      if (err) {
                        set.status = 500;
                        reject({ error: err });
                        return;
                      }
          
                      set.status = 201;
                      resolve({ message: 'input berhasil' });
                    }
                  );
                }
              );
            });

            


app.listen();
