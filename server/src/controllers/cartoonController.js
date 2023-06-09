const cartoonService = require("../services/cartoonService");

const getAllCartoons = async (req, res) => {
  try {
    const allCartoons = await cartoonService.getAllCartoons();
    res.status(200).send(allCartoons);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.messsage || error } });
  }
};

const getOneCartoon = async (req, res) => {
  const cartoonId = req.params.cartoonId;
  try {
    const cartoon = await cartoonService.getOneCartoon(cartoonId);
    res.status(200).send(cartoon);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.messsage || error } });
  }
};

const createNewCartoon = async (req, res) => {
  const newCartoon = req.body;
  try {
    await cartoonService.createNewCartoon(newCartoon);
    res.sendStatus(201);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.messsage || error } });
  }
};

const updateOneCartoon = async (req, res) => {
  const {
    body,
    params: { cartoonId },
  } = req;
  try {
    await cartoonService.updateOneCartoon(cartoonId, body);
    res.sendStatus(204);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.messsage || error } });
  }
};

const deleteOneCartoon = async (req, res) => {
  const cartoonId = req.params.cartoonId;
  try {
    await cartoonService.deleteOneCartoon(cartoonId);
    res.sendStatus(204);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.messsage || error } });
  }
};

module.exports = {
  getAllCartoons,
  getOneCartoon,
  createNewCartoon,
  updateOneCartoon,
  deleteOneCartoon,
};

// if (!cartoonId) {
//     res.status(400)
//         .send({
//             status: "FAILED",
//             data: { error: "Paramter ':cartoonId' cannot be empty" },
//         });
// }
