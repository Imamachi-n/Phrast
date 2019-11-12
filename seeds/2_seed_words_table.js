const jsonData = require("./The_Longman_Defining_Vocabulary.json");

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("words")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("words").insert(
        jsonData.map((data) => {
          return {
            id: data.id,
            word: data.word,
            level_id: data.level_id,
          };
        })
      );
    });
};
