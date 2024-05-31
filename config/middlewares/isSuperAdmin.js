// module.exports = async (ctx, next) => {
//   const { user } = ctx.state;

//   if (!user) {
//     return ctx.unauthorized(`You're not logged in!`);
//   }

//   const userRole = await strapi
//     .query("plugin::users-permissions.role")
//     .findOne({ where: { id: user.role } });

//   if (userRole && userRole.name !== "Super Admin") {
//     return ctx.forbidden(
//       `You don't have the permissions to perform this action!`
//     );
//   }

//   await next();
// };
