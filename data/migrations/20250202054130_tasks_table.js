exports.up = function(knex) {
  return knex.schema.createTable("tasks", (table) => {
      table.increments("id").primary();
      table.string("description").notNullable();
      table.string("status").notNullable();
      table.date("creation_date").notNullable();
      table.string("category").notNullable();
      table.string("assigned_user").notNullable();
  });

};

exports.down = function(knex) {
    return knex.schema.dropTable("tasks");
};
