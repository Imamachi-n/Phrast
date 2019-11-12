exports.up = function(knex) {
  return knex.schema.createTable("grammer_checks", (table) => {
    table.increments().index();

    table.integer("sentence_id");
    table
      .foreign("sentence_id")
      .references("id")
      .inTable("sentences");

    table.text("message");

    table.text("short_message");

    table.text("target");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("grammer_checks");
};
