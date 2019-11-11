exports.up = function(knex) {
  return knex.schema.createTable("sentences", (table) => {
    table.increments().index();

    table.string("review_id");

    table.integer("order");

    table.text("sentence");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("sentences");
};
