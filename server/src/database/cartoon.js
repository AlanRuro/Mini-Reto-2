const db = require('./db');


const getAllCartoons = () => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "SELECT * FROM cartoons \
        LEFT JOIN characters USING(cartoon_id);";
        db.query(sqlQuery, (error, rows) => {
            if (error) reject({ status: 500, message: error });
            const cartoons = [];
            rows.forEach((row) => {
                let cartoon = cartoons.find((cartoon) => cartoon.cartoon_id === row.cartoon_id);
                if (!cartoon) {
                    cartoon = {
                        cartoon_id: row.cartoon_id,
                        cartoon_name: row.cartoon_name,
                        cartoon_channel: row.cartoon_channel,
                        cartoon_image: row.cartoon_image,
                        characters: [],
                    };
                    cartoons.push(cartoon);
                }
                cartoon.characters.push({
                    character_id: row.character_id,
                    character_name: row.character_name,
                    character_species: row.character_species,
                    character_image: row.character_image
                });
            });
            resolve({ status: 200, data: cartoons });
        });
    });
};

const getOneCartoon = (cartoonId) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "SELECT * FROM cartoons WHERE cartoon_id = ?;";
        db.query(sqlQuery, cartoonId, (error, row) => {
            if (error) reject({ status: 500, message: error });
            if (row.length == 0) reject({ status: 404, message: "Cartoon Not Found"});
            resolve(row[0]);
        });
    });
};

const createNewCartoon = (newCartoon) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "INSERT INTO cartoons(cartoon_name, cartoon_channel) VALUES (?, ?);";
        db.query(sqlQuery, newCartoon, (error, row) => {
            if (error) reject({ status: 500, message: error });
            resolve();
        });
    });
};

const updateOneCartoon = (columns, values) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "UPDATE cartoons SET " + columns + " WHERE cartoon_id = ?;";
        db.query(sqlQuery, values, (error, row) => {
            if (error) reject({ status: 500, message: error });
            if (!row["affectedRows"]) reject({ status: 404, message: "Cartoon Not Found"});
            resolve();
        });
    });
};

const deleteOneCartoon = (cartoonId) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "DELETE FROM cartoons WHERE cartoon_id = ?;";
        db.query(sqlQuery, cartoonId, (error, row) => {
            if (error) reject({ status: 500, message: error });
            if (!row["affectedRows"]) reject({ status: 404, message: "Cartoon Not Found"});
            resolve();
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