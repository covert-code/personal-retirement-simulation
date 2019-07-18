const common = require('../common/common');
const auth = require('../common/common-auth');

const call_survey_pd_write = require('./queries/survey_pd_write_query');

async function user_pd_read_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Get client credentials from request
  auth.req_read_client_auth(env);
  // Get survey responses from request
  populate_survey_pd_responses(env);

  // Call write
  await call_survey_pd_write(env);

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_pd_read_handler;

async function populate_survey_pd_responses(env) {
  // todo
}
