const db = require('../../common/common-db');
const http = require('../../common/common-http');

// Calls survey_pd_write on client credentials in env
// Returns Promise of resolution
// Sends HTTP
function call_survey_pd_write(env, responses) {
  // Stored Procedure: survey_pd_write
  return db.call(env,
    'survey_pd_write',
    [
      env.auth.client.id,
      env.auth.client.auth_code,
      responses.address.street_1,
      responses.address.street_2,
      responses.address.city,
      responses.address.state,
      responses.address.zip,
      responses.birthdate,
      responses.income,
      responses.marital
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

module.exports = call_survey_pd_write;
