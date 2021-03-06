const common = require('../common/common');
const auth = require('../common/common-auth');
const http = require('../common/common-http');

const call_survey_rt_write = require('./queries/survey_rt_write_query');

async function user_rt_read_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Get client credentials from request
  auth.req_read_client_auth(env);
  // Get survey responses from request
  var survey_responses = get_survey_rt_responses(env);

  // Call write
  await call_survey_rt_write(env, survey_responses);

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_rt_read_handler;

function get_survey_rt_responses(env) {
  return http.req_body(env).survey_rt;
}
