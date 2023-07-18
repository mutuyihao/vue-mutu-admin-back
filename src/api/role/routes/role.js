module.exports = {
  routes: [
    {
      method: "GET",
      path: "/users-permissions/roles",
      handler: "role.getRolesCount",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
