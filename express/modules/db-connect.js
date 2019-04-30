var mysql = require('mysql');
var db_config = require('../config/db.json');

module.exports = {
  open: () => {
    var connection = mysql.createConnection({
      host: db_config.host,
      port: db_config.port,
      database: db_config.db,
      user: db_config.user,
      password: db_config.pw
    });

    connection.connect(function(err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return null;
      }
      console.log('connected as id ' + connection.threadId);
    });

    return connection;
  },

  stored: (connection, stored_proc, params, res_func) => {
    connection.query(
      'CALL ' + stored_proc + '(?);',
      params,
      (err, results, fields) => {
        if (err) {
          console.error('error executing query: ' + err.stack);
          return null;
        }

        res_func(results, fields);
      }
    );
  };

  close: (connection) => {
    con.end();
  }
}
