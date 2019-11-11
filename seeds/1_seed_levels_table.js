const jsonData = require("./levels.json");

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("levels")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("levels").insert(
        jsonData.map((data) => {
          return {
            id: data.id,
            level: data.level,
            description: data.description,
          };
        })
      );
    });
};