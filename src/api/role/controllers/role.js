'use strict';

/**
 * A set of functions called "actions" for `enduser`
 */

module.exports = () => ({
  getRolesCount: async (ctx, next) => {
    try {
      let params = ctx.query
      ctx.body = await strapi.service('api::role.role').getRoles(params);
    } catch (err) {
      ctx.body = err;
    }
  }
})
