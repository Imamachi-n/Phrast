exports.up = function (knex) {
  return knex.schema.createTable("levels", (table) => {
    table.integer("id").primary();

    table.string("level");

    table.text("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("levels");
};