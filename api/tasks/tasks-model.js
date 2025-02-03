const db = require("../../config/db");


const getAll = async () => {
    return db.query("SELECT * FROM tasks");
};



module.exports = {
    getAll,
}