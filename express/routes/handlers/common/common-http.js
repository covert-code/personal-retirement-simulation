const http_status = require('http-status-codes');
const env_lib = require('./environment.js');

/* Init and Destroy */
function env_destroy_http_handler(env) {
  if (!env.http.res.headersSent) {
    env.http.res.status(http_status.NO_CONTENT).end();
  }
}

function init_http(env, req, res) {
  env.http = { req: req, res: res };
}

module.exports.init_env = async (env, req, res) => {
  if (env.active) {
    env.http = {};
    init_http(env, req, res);
    env_lib.on_destroy_call(env, env_destroy_http_handler);
  }
}

/* Additional exported functions */
// Status codes
module.exports.status = http_status;

// Body data reading
module.exports.req_body = (env) => {
  return env.http.req.body;
}

// Generalized sending
module.exports.send = (env, status, body) => {
  if (!env.http.res.headersSent) {
    env.http.res.status(status).send(body);
  }
}

module.exports.ok = (env) => {
  if (!env.http.res.headersSent) {
    env.http.res.status(http_status.OK).end();
  }
}

