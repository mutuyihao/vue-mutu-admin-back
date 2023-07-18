module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/enduser/role",
      handler: "enduser.updateEndUserRole",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/enduser/menu",
      handler: "enduser.updateEndUserMenu",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],

};
