const db = require('../../common/common-db');
const http = require('../../common/common-http');

// Calls survey_rt_write on client credentials in env
// Returns Promise of resolution
function call_survey_rt_write(env, responses) {
  // Stored Procedure: survey_rt_write
  return db.call(env,
    'survey_rt_write',
    [
      env.auth.client.id,
      env.auth.client.auth_code,
      responses.goal.age,
      responses.goal.amount,
      responses.current_savings,
      responses.employer_deposit,
      responses.concerns.lifetime,
      responses.concerns.social_security
    ]
  ).then(
    // query success handling
    (result) => {
      if (result.affectedRows == 0) {
        http.send(env,
          http.status.BAD_REQUEST,
          { desc: 'Bad or expired client credentials' }
        );
      }
    }
  ).catch(
    // query failure handling
    (e) => {
      http.send(env,
        http.status.INTERNAL_SERVER_ERROR,
        {
          desc: 'Unable to write user survey',
          error: { code: e.code, msg: e.sqlMessage, stack: e.stack }
        }
      );
    }
  );
}

module.exports = call_survey_rt_write;
