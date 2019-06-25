module.exports = {
  init_env: () => {
    var env = {
      active: true,
      handlers: {
        destroy: new Set()
      }
    }
    return env;
  },

  check_prereqs: (env, prereqs) => {
    prereqs.forEach((name) => {
      if (!(name in env)) {
        throw new Error('Environment prerequisite ' + name + ' not met');
      }
    });
  },

  on_destroy_call: (env, handler) => {
    env.handlers.destroy.add(handler);
  },

  end_env: (env) => {
    env.handlers.destroy.forEach(
      (value, key, set) => {
        // each handler is a function to apply to env
        value(env);
      }
    );
    env.active = false;
  }
}