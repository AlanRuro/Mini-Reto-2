const Cartoon = require("../database/cartoon");

const getAllCartoons = async () => {
    try {
        const allCartoons = await Cartoon.getAllCartoons();
        return allCartoons;
    } catch (error) {
        throw error;
    }
};

const getOneCartoon = async (cartoonId) => {
    try {
        const cartoon = await Cartoon.getOneCartoon(cartoonId);
        return cartoon;
    } catch (error) {
        throw error;
    }
};

const createNewCartoon = async (newCartoon) => {
    try {
        const newCartoonData = [];
        const keys = Object.keys(newCartoon);
        keys.forEach((key) => {
            newCartoonData.push(newCartoon[key]);
        });
        await Cartoon.createNewCartoon(newCartoonData);
        return;
    } catch (error) {
        throw error;
    }
};

const updateOneCartoon = async (cartoonId, changes) => {
    try {
        let values = [];
        let columns = "";
        for (const key in changes) {
            columns += `${key} = ?, `;
            values.push(changes[key]);
        }
        values.push(cartoonId);
        columns = columns.slice(0, -2);
        await Cartoon.updateOneCartoon(columns, values);
        return;
    } catch (error) {
        throw error;
    }
};

const deleteOneCartoon = async (cartoonId) => {
    try {
        const wasDeleted = await Cartoon.deleteOneCartoon(cartoonId);
        return wasDeleted;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllCartoons,
    getOneCartoon,
    createNewCartoon,
    updateOneCartoon,
    deleteOneCartoon,
};