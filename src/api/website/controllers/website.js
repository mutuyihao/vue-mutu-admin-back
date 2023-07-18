'use strict';

/**
 * A set of functions called "actions" for `website`
 */

module.exports = {
  getWeather: async (ctx, next) => {
    try {
      let { cityName } = ctx.params
      ctx.body = await strapi.service('api::website.website').getWeather(cityName);
    } catch (err) {
      ctx.body = err;
    }
  },
  getViews: async (ctx, next) => {
    try {
      let { days } = ctx.params
      ctx.body = await strapi.service('api::website.website').getViews(days);
    } catch (err) {
      ctx.body = err;
    }
  },
  updateViews: async (ctx, next) => {
    try {
      ctx.body = await strapi.service('api::website.website').updateViews();
    } catch (err) {
      ctx.body = err;
    }
  },
};
