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

interface mapel extends RowDataPacket{
  id: number
  materi: string
  status: string
  summary: string
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

app.get('/rpl', ({ set }) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM `rpl`', (err: QueryError | null, results: User[]) => {
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

app.get('/rpl/:id', async ({ params, set }) => {
  const { id } = params;

  try {
    // Query SQL untuk select data berdasarkan ID
    const [rows] = await connection.promise().query<mapel[]>('SELECT * FROM rpl WHERE id = ?', [id]);

    if (rows.length > 0) {
      // Output data dari setiap baris
      const data = rows[0];
      set.status = 200;
      return {
        message: 'Data berhasil diambil',
        data: data
      };
    } else {
      set.status = 404;
      return { message: 'Data tidak ditemukan' };
    }
  } catch (error) {
    console.error('Error:', error);
    set.status = 500;
    return { error: 'Terjadi kesalahan dalam server' };
  }
});

app.get('/matematika', ({ set }) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM `matematika`', (err: QueryError | null, results: User[]) => {
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

app.get('/matematika/:id', async ({ params, set }) => {
  const { id } = params;

  try {
    // Query SQL untuk select data berdasarkan ID
    const [rows] = await connection.promise().query<mapel[]>('SELECT * FROM matematika WHERE id = ?', [id]);

    if (rows.length > 0) {
      // Output data dari setiap baris
      const data = rows[0];
      set.status = 200;
      return {
        message: 'Data berhasil diambil',
        data: data
      };
    } else {
      set.status = 404;
      return { message: 'Data tidak ditemukan' };
    }
  } catch (error) {
    console.error('Error:', error);
    set.status = 500;
    return { error: 'Terjadi kesalahan dalam server' };
  }
});

app.get('/agama', ({ set }) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM `pendidikan_agama`', (err: QueryError | null, results: User[]) => {
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

app.get('/agama/:id', async ({ params, set }) => {
  const { id } = params;

  try {
    // Query SQL untuk select data berdasarkan ID
    const [rows] = await connection.promise().query<mapel[]>('SELECT * FROM pendidikan_agama WHERE id = ?', [id]);

    if (rows.length > 0) {
      // Output data dari setiap baris
      const data = rows[0];
      set.status = 200;
      return {
        message: 'Data berhasil diambil',
        data: data
      };
    } else {
      set.status = 404;
      return { message: 'Data tidak ditemukan' };
    }
  } catch (error) {
    console.error('Error:', error);
    set.status = 500;
    return { error: 'Terjadi kesalahan dalam server' };
  }
});

app.get('/ipa', ({ set }) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM `ipa`', (err: QueryError | null, results: User[]) => {
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

app.get('/ipa/:id', async ({ params, set }) => {
  const { id } = params;

  try {
    // Query SQL untuk select data berdasarkan ID
    const [rows] = await connection.promise().query<mapel[]>('SELECT * FROM ipa WHERE id = ?', [id]);

    if (rows.length > 0) {
      // Output data dari setiap baris
      const data = rows[0];
      set.status = 200;
      return {
        message: 'Data berhasil diambil',
        data: data
      };
    } else {
      set.status = 404;
      return { message: 'Data tidak ditemukan' };
    }
  } catch (error) {
    console.error('Error:', error);
    set.status = 500;
    return { error: 'Terjadi kesalahan dalam server' };
  }
});

app.get('/pkk', ({ set }) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM `bahasa_inggris`', (err: QueryError | null, results: User[]) => {
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

app.get('/pkk/:id', async ({ params, set }) => {
  const { id } = params;

  try {
    // Query SQL untuk select data berdasarkan ID
    const [rows] = await connection.promise().query<mapel[]>('SELECT * FROM pkk WHERE id = ?', [id]);

    if (rows.length > 0) {
      // Output data dari setiap baris
      const data = rows[0];
      set.status = 200;
      return {
        message: 'Data berhasil diambil',
        data: data
      };
    } else {
      set.status = 404;
      return { message: 'Data tidak ditemukan' };
    }
  } catch (error) {
    console.error('Error:', error);
    set.status = 500;
    return { error: 'Terjadi kesalahan dalam server' };
  }
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
  const { username, password, nama } = body as { username: string, password: string, nama: string };

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

            


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
