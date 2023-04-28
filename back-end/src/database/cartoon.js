const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'db_user',
    password: 'admin123',
    database: 'minireto2',
    port: 3306,
    multipleStatements: true
});

db.connect((error) => {
    if (error) {
        console.log("Error Connecting to DB");
    } else {
        console.log("Successfully Connected to DB");
    }
});

const getAllCartoons = () => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "SELECT * FROM cartoons;";
        db.query(sqlQuery, (error, rows) => {
            if (error) reject({ status: 500, message: error });
            resolve(rows);
        });
    });
};

const getOneCartoon = (cartoonId) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "SELECT * FROM cartoons WHERE cartoon_id = ?;";
        db.query(sqlQuery, cartoonId, (error, row) => {
            if (error) reject({ status: 500, message: error });
            resolve(row[0]);
        });
    });
};

const createNewCartoon = (newCartoon) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "INSERT INTO cartoons(cartoon_name, cartoon_channel) VALUES (?, ?);\
        SELECT * FROM Cartoons WHEN cartoon_id = LAST_INSERT_ID();";
        db.query(sqlQuery, newCartoon, (error, row) => {
            if (error) reject({ status: 500, message: error });
            resolve(row);
        });
    });
};

const updateOneCartoon = (cartoonId, changes) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "UPDATE cartoons SET ";
        let values = [];
        for (const key in changes) {
            sqlQuery += `${key} = ?, `;
            values.push(changes[key]);
        }
        sqlQuery = sqlQuery.slice(0, -2);
        sqlQuery += " WHERE cartoon_id = ?;";
        values.push(cartoonId);
        db.query(sqlQuery, values, (error, result) => {
            if (error) reject({ status: 500, message: error });
            resolve();
        });
    });
};

const deleteOneCartoon = (cartoonId) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "DELETE FROM cartoons WHERE cartoon_id = ?;";
        db.query(sqlQuery, cartoonId, (error, row) => {
            if (error) reject({ status: 500, message: error });
            resolve(row);
        });
    });
};

module.exports = {
    getAllCartoons,
    getOneCartoon,
    createNewCartoon,
    updateOneCartoon,
    deleteOneCartoon
};