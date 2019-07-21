const db = require('../../common/common-db');
const http = require('../../common/common-http');

// Calls survey_pd_read on client credentials in env
// Returns Promise of resolution
// Sends HTTP
function call_survey_pd_read(env) {
  // Stored Procedure: survey_pd_read
  return db.call(env,
    'survey_pd_read',
    [
      env.auth.client.id,
      env.auth.client.auth_code
    ]
  ).then(
    // query success handling
    (result) => {
      var row = result[0];

      // Body result initialization
      var body = { survey_pd: null }

      if (row.length > 0) {
        var data = row[0];
        // construct response body
        body.survey_pd = {
          preseed: data.survey_pd_preseed[0] == 1, // convert bit buffer to bool
          address: {
            street_1: data.survey_pd_address_1,
            street_2: data.survey_pd_address_2,
            city: data.survey_pd_addr_city,
            state: data.survey_pd_addr_state,
            zip: data.survey_pd_addr_zip
          },
          birthdate: data.survey_pd_birthdate,
          income: data.survey_pd_income,
          marital: data.survey_pd_marital
        }
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

module.exports = call_survey_pd_read;
