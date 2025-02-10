const db = require("../../config/db");

const getAll = async () => {
  return db.query("SELECT * FROM users");
};

const getById = async (id) => {
  return db.query("SELECT * FROM users WHERE id = $1", [id]);
};

module.exports = {
  getAll,
  getById,
};
