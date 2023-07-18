module.exports = {
  routes: [
    // {
    //  method: 'GET',
    //  path: '/website',
    //  handler: 'website.exampleAction',
    //  config: {
    //    policies: [],
    //    middlewares: [],
    //  },
    // },
    {
      method: 'GET',
      path: '/website/weather/:cityName',
      handler: 'website.getWeather',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/website/views/:days',
      handler: 'website.getViews',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/website/views',
      handler: 'website.updateViews',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
