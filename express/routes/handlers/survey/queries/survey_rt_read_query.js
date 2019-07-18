const db = require('../../common/common-db');
const http = require('../../common/common-http');

// Calls survey_rt_read on client credentials in env
// Returns Promise of resolution
// Sends HTTP
function call_survey_rt_read(env) {
  // Stored Procedure: survey_rt_read
  return db.call(env,
    'survey_rt_read',
    [
      env.auth.client.id,
      env.auth.client.auth_code
    ]
  ).then(
    // query success handling
    (result) => {
      var row = result[0];

      // Body result initialization
      var body = { survey_rt: null }

      if (row.length > 0) {
        body.survey_rt = row[0];
      }

      // Reply
      http.send(env,
        http.status.OK,
        body
      );
    }
  ).catch(
    // query failure handling
    (e) => {
      http.send(env,
        http.status.INTERNAL_SERVER_ERROR,
        {
          desc: 'Unable to read user survey',
          error: { code: e.code, msg: e.sqlMessage, stack: e.stack }
        }
      );
    }
  );
}

module.exports = call_survey_rt_read;
