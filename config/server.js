module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
   admin: {
    autoOpen: false,
    init: {
      enabled: true,
    },
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'your-admin-jwt-secret'),
    },
  },
});
