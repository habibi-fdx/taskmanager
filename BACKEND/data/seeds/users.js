exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          username: "admin",
          email: "admin@email.com",
          password: "password",
        },
        {
          username: "dadmin",
          email: "dadmin@email.com",
          password: "password",
        },
      ]);
    });
};
