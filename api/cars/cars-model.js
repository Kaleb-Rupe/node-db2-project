const knex = require("knex");

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/db-config.js",
  },
  useNullAsDefault: true,
});

const getAll = () => {
  return db("getAll");
};

const getById = () => {
  return db("getById");
};

const create = () => {
  return db("create");
};

module.exports = {
  getAll,
  getById,
  create,
};
