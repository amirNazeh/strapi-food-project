const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  let config = {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'strapi'),
          username: env('DATABASE_USERNAME', 'strapi'),
          password: env('DATABASE_PASSWORD', 'strapi'),
        },
        options: {},
      },
    },
  };

  // Use DATABASE_URL if provided (for production on Render)
  if (env('DATABASE_URL')) {
    const { host, port, database, user, password, ssl } = parse(env('DATABASE_URL'));
    config.connections.default.settings = {
      client: 'postgres',
      host,
      port,
      database,
      username: user,
      password,
      ssl: env.bool('DATABASE_SSL', false) ? {
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
      } : false,
    };
  }

  return {
    ...config,
  };
};
