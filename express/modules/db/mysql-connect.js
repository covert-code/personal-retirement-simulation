const mysql = require('mysql');
const db_config = require('../../config/db.json');

module.exports = {
  open: () => {
    return new Promise((resolve, reject) => {
      var connection = mysql.createConnection({
        host: db_config.host,
        port: db_config.port,
        database: db_config.db,
        user: db_config.user,
        password: db_config.pw
      });

      connection.connect((err) => {
        if (err) {
          reject(err);
        };
        console.log('connected on thread ' + connection.threadId);
      });

      resolve(connection);
    }).catch((e) => {
      console.error('(/modules/db/mysql-connect) error connecting: ' + e.stack);
      throw e;
    })
  },

  stored: (connection, stored_proc, params) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'CALL ' + stored_proc + '(?);', [params],
        (err, rows, fields) => {
          if (err) {
            reject(err);
          };
          resolve(rows);
        }
      )
    }).catch((e) => {
      console.error('(/modules/db/mysql-connect) error executing query: ' + e.stack);
      throw e;
    })
  },

  close: (connection) => {
    connection.end();
  }
}
