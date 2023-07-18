'use strict';

/**
 * A set of functions called "actions" for `enduser`
 */

module.exports = () => ({
  updateEndUserRole: async (ctx, next) => {
    try {
      let { userId, roleId } = ctx.request.body
      ctx.body = await strapi.service('api::enduser.enduser').updateUserRoleById(userId, roleId);

    } catch (err) {
      ctx.body = err;
    }
  },
  updateEndUserMenu: async (ctx, next) => {
    try {
      let { userId, menu } = ctx.request.body
      ctx.body = await strapi.service('api::enduser.enduser').updateUserMenu(userId, menu);

    } catch (err) {
      ctx.body = err;
    }
  }
})
