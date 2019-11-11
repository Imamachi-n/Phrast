exports.up = function(knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.integer("id").primary();

    table
      .datetime("at_datetime", {
        precision: 6,
      })
      .defaultTo(knex.fn.now(6));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("reviews");
};
