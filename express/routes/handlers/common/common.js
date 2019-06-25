const env_lib = require('./environment.js');

module.exports = {
  get_env: async (req, res) => {
    var env = env_lib.init_env();

    await Promise.all([
      require('./common-http').init_env(env, req, res)
        .then(require('./common-db').init_env(env)),
      require('./common-auth').init_env(env)
    ])

    return env;
  },

  end_env: (env) => {
    env_lib.end_env(env);
  }
}
