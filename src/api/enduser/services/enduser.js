"use strict";

/**
 * enduser service
 */

module.exports = () => ({
  async updateUserRoleById(userId, roleId) {
    return await strapi.entityService
      .update("plugin::users-permissions.user", userId, { data: { role: roleId } });
  },
  async updateUserMenu(userId, menu) {
    return await strapi.entityService
      .update("plugin::users-permissions.user", userId, { data: { menu: menu } });
  },
})
