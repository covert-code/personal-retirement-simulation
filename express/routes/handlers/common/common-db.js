const db = require('../../../modules/db/mysql-connect');
const http_status = require('http-status-codes');
const env_lib = require('./environment.js');

/* Init and Destroy */
var prereqs = ['http'];

function env_destroy_db_handler(env) {
  if (env.db.active) {
    env.db.active = false;
    db.close(env.db.con);
  }
}

async function init_db_connection(env) {
  // Attempt DB Connection
  try {
    env.db.con = await db.open();
    env.db.active = true;
  }
  catch (e) {
    env.http.res
    .status(http_status.INTERNAL_SERVER_ERROR)
    .send(
      { desc:'Unable to connect to database', error: e }
    );
  }
}

module.exports.init_env = async (env) => {
  env_lib.check_prereqs(env, prereqs);
  if (env.active) {
    env.db = {};
    await init_db_connection(env);
    env_lib.on_destroy_call(env, env_destroy_db_handler);
  }
}

/* Database Stored Procedure Call */
module.exports.call = (env, stored_proc, params) => {
  if (env.db.active) {
    return db.stored(env.db.con, stored_proc, params);
  } else {
    return Promise.resolve(null);
  }
}
