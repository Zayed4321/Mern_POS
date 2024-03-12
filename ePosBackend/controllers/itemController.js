const itemModel = require("../models/itemModel");

const getItemController = async (req, res) => {
    try {
        const item = await itemModel.find();
        res.status(200).send({
            success: true,
            item
        });
    } catch (error) {
        console.log(error);
    }
};

const addItemController = async (req, res) => {
    try {
        const { name, category, price, quantity } = req.body;

        const newItem = await new itemModel({ name, category, price, quantity }).save();

        res.status(201).send({
            success: true,
            message: "Item Created Successfully",
            newItem
        });
    } catch (error) {
        console.log(error)
        res.send(error);
    }
};

const singleItemController = async (req, res) => {
    try {
        const singleItem = await itemModel.findById(req.params.id); // Access id parameter correctly
        if (!singleItem) {
            return res.status(404).send({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).send({
            success: true,
            message: "Single product shown",
            singleItem
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = { getItemController, addItemController, singleItemController };
