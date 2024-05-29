module.exports = async (ctx, next) => {
  if (ctx.request.path === "/admin/auth/register" && !ctx.state.admin) {
    ctx.status = 403;
    ctx.body = "Register route is disabled unless logged in";
  } else {
    await next();
  }
};
