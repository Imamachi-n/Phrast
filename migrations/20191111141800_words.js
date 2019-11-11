exports.up = function (knex) {
  return knex.schema.createTable("words", (table) => {
    table.integer("id").primary();

    table.string("word");

    table.integer("level_id");
    table
      .foreign("level_id")
      .references("id")
      .inTable("levels");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("words");
};