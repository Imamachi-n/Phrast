exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.integer("id").primary();

    table
      .datetime("at_datetime", {
        precision: 6,
      })
      .defaultTo(knex.fn.now(6));

    table.integer("level_id");
    table
      .foreign("level_id")
      .references("id")
      .inTable("levels");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};