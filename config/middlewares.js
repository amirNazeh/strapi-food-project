// config/middleware.js
module.exports = [
  // Middleware الافتراضية
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",

  // إضافة الـ Middleware المخصصة
  // {
  //   name: "disableRegisterIfNotLoggedIn",
  //   resolve: "./middlewares/disableRegisterIfNotLoggedIn",
  // },
];
