module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: "*",
    },
    logger: {
      level: "info",
    },
    custom: {
      disableRegisterIfNotLoggedIn: {
        enabled: true,
        resolve: "./middlewares/disableRegisterIfNotLoggedIn",
      },
    },
  },
};
