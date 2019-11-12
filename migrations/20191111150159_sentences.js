exports.up = function(knex) {
  return knex.schema.createTable("sentences", (table) => {
    table.increments().index();

    table.integer("review_id");
    table
      .foreign("review_id")
      .references("id")
      .inTable("reviews");

    table.integer("order");

    table.string("word");

    table.text("sentence");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("sentences");
};
