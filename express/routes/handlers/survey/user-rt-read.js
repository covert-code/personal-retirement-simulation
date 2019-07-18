const common = require('../common/common');
const auth = require('../common/common-auth');

const call_survey_rt_read = require('./queries/survey_rt_read_query');

async function user_rt_read_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Get client credentials from request
  auth.req_read_client_auth(env);

  // Call status
  await call_survey_rt_read(env);

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_rt_read_handler;
