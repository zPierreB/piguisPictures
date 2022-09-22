import Picture from "../models/picModel.js";

export const getAllPictures = async (req, res) => {
    try {
        const pictures = await Picture.findAll();
        res.json(pictures);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getPictureById = async (req, res) => {
    try {
        const pictures = await Picture.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(pictures[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createPicture = async (req, res) => {
    try {
        await Picture.create(req.body);
        res.json({"message": "Picture created"});
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updatePicture = async (req, res) => {
    try {
        await Picture.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({"message": "Picture updated"});
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deletePicture = async (req, res) => {
    try {
        await Picture.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({"message": "Picture deleted"});
    } catch (error) {
        res.json({ message: error.message });
    }
}