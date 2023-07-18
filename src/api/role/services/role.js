"use strict";

/**
 * enduser service
 */

module.exports = ({ strapi }) => ({
  async getRoles(params) {
    const [count, result] = await Promise.all([
      strapi.db.query("plugin::users-permissions.role").count(),
      strapi.entityService.findMany("plugin::users-permissions.role", params),
    ])
    return { roles: result, count: count }
  },
});
